import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  },
};

export default nextConfig;
