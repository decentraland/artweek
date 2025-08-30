import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ command, mode }) => {
  const envVariables = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    ...(command === "build" ? { base: envVariables.VITE_BASE_URL } : undefined),
    assetsInclude: ["**/*.mp4"],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Keep video files in their original structure
            if (assetInfo.name?.endsWith(".mp4")) {
              return "video/[name][extname]"
            }
            return "assets/[name]-[hash][extname]"
          },
        },
      },
    },
  }
})
