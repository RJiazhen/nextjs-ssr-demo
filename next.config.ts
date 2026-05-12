import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// initOpenNextCloudflareForDev starts workerd/Miniflare; it must not run during
// `next build` (e.g. Cloudflare Pages) or the Workers runtime fails with SQLITE_BUSY.
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}

export default nextConfig;
