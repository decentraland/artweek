import { lighten, transparentize } from "polished"

const themeConfig = {
  accent: "#f37877",
}

const basicPalette = {
  black: "#000000",
  white: "#fcfcfc",
  background: "#040D2D",
  accent: themeConfig.accent,
  blueGray: "#B8BEE5",
  blueLink: "#0000EE",
  gray: "#CCCCCC",
  darkGray: "#161518",
  purple: "#a524b3",
  orange: "#ffa25a",
  grayPearl: "#ecebed",
  charcoalGray: "#424040",
  customBlack: "#0F1317",
}

const expandedPalette = {
  ...basicPalette,
  accentLight: () => lighten(0.025, basicPalette.accent),
  accentExtraLight: () => lighten(0.2, basicPalette.accent),
  grey600: () => lighten(0.15, basicPalette.black),
  grey500: () => lighten(0.22, basicPalette.black),
  grey400: () => lighten(0.35, basicPalette.black),
  grey300: () => lighten(0.5, basicPalette.black),
  grey100: () => lighten(0.1, basicPalette.black),
  darkGray600: () => lighten(0.15, basicPalette.darkGray),
  customBlack600: () => lighten(0.1, basicPalette.customBlack),
}

const theme = {
  ...basicPalette,
  ...expandedPalette,
}

const breakpoints = {
  xs: "416px",
  s: "576px",
  md: "768px",
  l: "992px",
  xl: "1200px",
  xxl: "1400px",
}

const boxShadow = {
  md: `0 0 10px ${transparentize(0.4, basicPalette.black)}`,
  l: `0 0 30px ${transparentize(0.6, basicPalette.black)}`,
}

export { theme, breakpoints, boxShadow }
