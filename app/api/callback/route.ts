import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const savedState = req.cookies.get("oauth_state")?.value;

  if (!code || !state || state !== savedState) {
    return new NextResponse("Invalid OAuth state", { status: 403 });
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
    return new NextResponse(`OAuth error: ${data.error_description}`, { status: 400 });
  }

  const html = `
<!doctype html>
<html><body><script>
(function() {
  function sendMsg(msg) {
    var p = window.opener || window.parent;
    p.postMessage(msg, window.location.origin);
  }
  sendMsg("authorization:github:success:" + ${JSON.stringify(JSON.stringify({ token: data.access_token, provider: "github" }))});
})();
</script></body></html>`;

  const response = new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
  response.cookies.delete("oauth_state");
  return response;
}
