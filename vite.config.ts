import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $types: path.resolve("src/types"),
      $constants: path.resolve("src/constants"),
    },
  },
});
