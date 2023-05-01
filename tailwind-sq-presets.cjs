const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: "#000016",
        orange: "#DF6200",
        "orange-50": "#FDF1DF",
        "orange-100": "#FBE9D0",
        "orange-200": "#F7C47C",
        "orange-300": "#F4AD49",
        "orange-400": "#F29B23",
        "orange-500": "#EF8B00",
        "orange-600": "#EC8000",
        "orange-700": "#E67000",
        "orange-800": "#DF6200",
        "orange-900": "#C35600",
        "Sq-Bleu": "#1D2141",
        "Sq-Bleu-Tadoussac": "#009CDE",
        "Sq-Rouge-Rougemont": "#9E2B2F",
        "Sq-Vert-Tremblant": "#007A33",
        "Sq-GrisMoyen": "#F2F2F2",
        "Sq-GrisRouyn": "#C9CFD1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-ripple")(),
  ],
};
