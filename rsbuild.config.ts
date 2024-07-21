import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

// https://rsbuild.dev/guide/basic/configure-rsbuild#configure-rsbuild
export default defineConfig({
  server: {
    port: 4000,
  },
  source: {
    alias: {
      "@components": "./src/components",
    },
  },
  plugins: [pluginReact()],
});
