import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyLib",
      formats: ["es", "umd"],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
  plugins: [react()],
});
