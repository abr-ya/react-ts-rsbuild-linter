import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginBabel } from "@rsbuild/plugin-babel";

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
  plugins: [
    pluginReact(),
    pluginBabel({
      babelLoaderOptions: (config) => {
        // Add a Babel plugin
        config.plugins ||= [];
        config.plugins.push("macros");
      },
    }),
  ],
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
        "./Button": "@components/Button/Button",
        "./Test": "@components/Test/Test",
      },
      filename: "remoteEntry.js",
    },
  },
});
