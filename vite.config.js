import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/v1": {
          target: env.VITE_API_URL || "http://23.239.111.164:5001",
          changeOrigin: true,
        },
      },
    },
  });
};
