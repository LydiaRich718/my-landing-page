import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return new NextResponse("Missing code parameter", { status: 400 });
  }

  let data;
  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_OAUTH_CLIENT_ID || "Ov23livQO9IZp2Sz0YG6",
        client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
        code,
      }),
    });
    data = await tokenRes.json();
  } catch (err) {
    return new NextResponse(
      `<html><body><h2>Token Exchange Failed</h2><p>${String(err)}</p></body></html>`,
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }

  if (data.error) {
    return new NextResponse(
      `<html><body><h2>OAuth Error</h2><p>${data.error}: ${data.error_description}</p></body></html>`,
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const token = data.access_token;
  const provider = "github";

  const html = `<!doctype html>
<html><head><title>Authenticating...</title></head><body>
<p id="status">Completing authentication...</p>
<script>
(function() {
  var token = ${JSON.stringify(token)};
  var provider = ${JSON.stringify(provider)};

  function sendMessage(opener) {
    opener.postMessage(
      "authorization:" + provider + ":success:" + token,
      opener.location.origin
    );
  }

  var opener = window.opener;
  if (opener) {
    sendMessage(opener);
    // Retry a few times in case CMS listener isn't ready
    setTimeout(function() { sendMessage(opener); }, 300);
    setTimeout(function() { sendMessage(opener); }, 800);
    setTimeout(function() { sendMessage(opener); }, 1500);
    document.getElementById("status").textContent = "Authenticated! This window will close.";
    setTimeout(function() { window.close(); }, 2000);
  } else {
    document.getElementById("status").textContent = "Authenticated! Redirecting...";
    localStorage.setItem("netlify-cms-user", JSON.stringify({
      token: token,
      name: "",
      backendName: "github"
    }));
    setTimeout(function() { window.location.replace("/admin/"); }, 500);
  }
})();
</script>
</body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
