import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return new NextResponse("Missing code parameter", { status: 400 });
  }

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

  const data = await tokenRes.json();

  if (data.error) {
    return new NextResponse(
      `<html><body><h2>OAuth Error</h2><p>${data.error}: ${data.error_description}</p></body></html>`,
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const token = data.access_token;

  // This script tries both popup (window.opener) and same-window approaches
  const html = `<!doctype html>
<html><body>
<p>Authorizing...</p>
<script>
(function() {
  var token = "${token}";
  var msg = "authorization:github:success:" + token;
  var target = window.opener || window.parent;

  if (target && target !== window) {
    target.postMessage(msg, "*");
    setTimeout(function() { window.close(); }, 500);
  } else {
    // Same-window redirect fallback — store token and go back to admin
    document.body.innerHTML = "<p>Authentication successful. Redirecting...</p>";
    localStorage.setItem("netlify-cms-user", JSON.stringify({
      token: token,
      name: "",
      backendName: "github"
    }));
    window.location.href = "/admin/";
  }
})();
</script>
</body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
