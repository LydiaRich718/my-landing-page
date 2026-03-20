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

  const html = `<!doctype html>
<html><body>
<script>
(function() {
  var token = "${token}";
  var msg = "authorization:github:success:" + token;

  // Try popup postMessage first (multiple attempts for timing)
  function tryPostMessage(attempts) {
    var opener = window.opener;
    if (opener) {
      opener.postMessage(msg, "*");
      if (attempts > 0) {
        setTimeout(function() { tryPostMessage(attempts - 1); }, 200);
      } else {
        setTimeout(function() { window.close(); }, 300);
      }
    } else {
      // No opener — redirect flow. Store token so CMS can find it.
      localStorage.setItem("decap-cms-user", JSON.stringify({ token: token, name: "", backendName: "github" }));
      localStorage.setItem("netlify-cms-user", JSON.stringify({ token: token, name: "", backendName: "github" }));
      document.body.innerHTML = "<p>Authenticated! Redirecting...</p>";
      window.location.replace("/admin/");
    }
  }

  // Small delay to let opener reference settle
  setTimeout(function() { tryPostMessage(3); }, 100);
})();
</script>
</body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
