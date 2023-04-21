// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-uno";

export default defineConfig<Theme>({
  theme: {
    colors: {
      primary: "#00ff00",
    },
  },
  presets: [
    // https://unocss.dev/presets/uno
    presetUno(),

    // https://unocss.dev/presets/attributify
    presetAttributify(),

    // https://unocss.dev/presets/typography
    presetTypography(),

    // https://unocss.dev/presets/web-fonts
    presetWebFonts({
      provider: "bunny",
    }),

    presetTheme<Theme>({
      theme: {
        modern: {},
        twentyoughts: {
          colors: {
            "base-100": "#33b1e5",
            "base-content": "#2d52a4",
            primary: "#33b1e5",
            secondary: "#33b1e5",
            accent: "#33b1e5",
          },
        },
        nineteennineties: {
          colors: {
            "base-100": "#ffffff",
            "base-content": "#000000",
            primary: "#8f7ee6",
            secondary: "#f0d133",
            accent: "#edb4da",
          },
        },
        nineteeneighties: {},
        nineteenseventies: {},
        nineteessixties: {},
      },
    }),
  ],
});
