import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cdo-codemirror-editor-poc",
  plugins: [
    libCss(),
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
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
