import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",

  // Disable runtime SSR while retaining build-time prerendering.
  ssr: false,

  // Generate these routes during production builds.
  prerender: [
    "/",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/contact",
  ],
} satisfies Config;