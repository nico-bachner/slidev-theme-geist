import { resolve } from "path";
import { mergeWindicssConfig, defineConfig } from "vite-plugin-windicss";
import BaseConfig from "@slidev/client/windi.config";

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [resolve(__dirname, "**/*.{vue,ts}")],
    },
    theme: {
      fontFamily: {
        sans: "'Inter', sans-serif",
        mono: "'Fira Code', monospace",
      },
    },
  })
);
