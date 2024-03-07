import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import libCss from "vite-plugin-libcss";
import fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cdo-codemirror-editor-poc",
  plugins: [
    libCss(),
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: (map) => {
        for (const [path, content] of Array.from(map.entries())) {
          const wrapped = `declare module "cdo-ide-poc" {\r\n${content}}\r\n`;
          fs.writeFile(path, wrapped, (e) => {
            if (e) {
              console.error(e);
            }
          });
        }
      },
    }),
  ],
  resolve: {
    alias: {
      "@cdoide": path.resolve(__dirname, "./src/CDOIDE"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      name: "cdo-ide-poc",
      entry: {
        "cdo-ide-poc": path.resolve(__dirname, "src/exports/index.ts"),
      },
      formats: ["es"],
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@codemirror/lang-css",
        "@codemirror/lang-html",
        "@codemirror/lang-javascript",
        "@codemirror/lang-json",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        preserveModules: false,
      },
    },
  },
});
