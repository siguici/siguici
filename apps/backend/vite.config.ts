import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [fresh({
      staticDir: ["../frontend/out/client"],
  }), tailwindcss()],
});
