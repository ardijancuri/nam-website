import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger runs the app as a persistent Node.js process. Vinext only emits
  // the self-contained dist/standalone server when this output mode is set.
  output: "standalone",
};

export default nextConfig;
