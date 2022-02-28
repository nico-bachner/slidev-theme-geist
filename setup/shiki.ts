import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve('./shiki/dark.json')),
      light: await loadTheme(require.resolve('./shiki/light.json')),
    },
  }
})
