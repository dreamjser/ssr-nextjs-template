// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "autoprefixer": {},
    "@dreamjser/postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 6,
      propList: ["*"],
      minPixelValue: 2,
      mediaQuery: true,
      replace: true,
      landscape: false
    }
  }
}
