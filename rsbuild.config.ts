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
        "./Button2": "@components/Button2/Button2",
        "./Test": "@components/Test/Test",
      },
      filename: "remoteEntry.js",
      shared: {
        "@emotion/css@11.13.0": { singleton: true, eager: true },
        "@emotion/react@11.13.0": { singleton: true, eager: true },
        "@emotion/styled@11.13.0": { singleton: true, eager: true },
        "react@18.3.1": { singleton: true, eager: true },
        "react-dom@18.3.1": { singleton: true, eager: true },
        "styled-system@5.1.5": { singleton: true, eager: true },
      },
    },
  },
});
