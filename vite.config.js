import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const legacyPluginOptions = {
  modernTargets: "since 2023-01-01, not dead",
  modernPolyfills: true,
  renderLegacyChunks: false,
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legacy(legacyPluginOptions), nodePolyfills()],
  build: {
    target: ["chrome109", "edge109", "firefox109", "ios16.3", "safari16.3"],
  },
});
