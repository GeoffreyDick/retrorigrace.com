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
import type { WebFontsOptions } from "unocss/preset-web-fonts";

const fonts: WebFontsOptions["fonts"] = {
  "1990s": [{
    name: "Lilita One",
    weights: ["400"],
  }],
  "1980s": [{
    name: "Teko",
    weights: ["700"],
  }],
};

/**
 * This is a custom fetch function that will request only the necessary characters.
 * Good, but can be improved.
 * @param url {String} - The url to fetch
 * @returns {Promise<string>} The response text
 */
async function customFetch(url: string): Promise<string> {
  if (fonts !== undefined) {
    const keys: string[] = Object.keys(fonts);
    const allChars = keys.join("");
    const uniqueChars = [...new Set(allChars)].join("");
    return fetch(url + `&text=${uniqueChars}`).then((res) => res.text());
  } else {
    return fetch(url).then((res) => res.text());
  }
}

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
      provider: "google",
      customFetch: (url: string) => customFetch(url),
      fonts,
    }),

    presetTheme<Theme>({
      theme: {
        modern: {},
        twentyoughts: {
          colors: {
            base: "#33b1e5",
            content: "#2d52a4",
            primary: "#33b1e5",
            secondary: "#33b1e5",
            accent: "#33b1e5",
          },
        },
        nineteennineties: {
          colors: {
            base: "#ffffff",
            content: "#000000",
            primary: "#8f7ee6",
            secondary: "#f0d133",
            accent: "#edb4da",
          },
        },
        nineteeneighties: {
          fontFamily: {
            sans: "1980s",
          },
          colors: {
            base: "#140627",
            content: "#ffffff",
            primary: "#f0d133",
            secondary: "#8f7ee6",
            accent: "#edb4da",
          },
        },
        nineteenseventies: {},
        nineteessixties: {},
      },
    }),
  ],
});
