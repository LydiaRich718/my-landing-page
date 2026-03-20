import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  return NextResponse.json({
    clientId_defined: !!clientId,
    clientId_length: clientId?.length ?? 0,
    clientId_preview: clientId ? clientId.slice(0, 4) + "..." + clientId.slice(-4) : "undefined",
    clientSecret_defined: !!clientSecret,
    clientSecret_length: clientSecret?.length ?? 0,
    clientSecret_preview: clientSecret ? clientSecret.slice(0, 4) + "..." + clientSecret.slice(-4) : "undefined",
  });
}
