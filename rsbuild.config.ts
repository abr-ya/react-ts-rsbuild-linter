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
  tools: {
    htmlPlugin: {
      title: "RSBuild React App",
      favicon: "./src/assets/icon.png",
    },
  },
  moduleFederation: {
    options: {
      name: "remote2",
      exposes: {
        "./Test": "@components/Test/Test",
      },
      filename: "remoteEntry.js",
    },
  },
});
