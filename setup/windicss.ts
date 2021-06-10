import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "**/*.{vue,ts}")],
  },
  theme: {
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
}));
