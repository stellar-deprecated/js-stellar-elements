const { styles, theme } = require("./styleguide.styles");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  sections: [
    {
      name: "Web",
      content: "src/README.md",
      sections: [
        {
          name: "Typography & Colors",
          components: () => [
            "src/components/GlobalStyle.js",
            "src/components/PageHeader.js",
            "src/components/SectionHeader.js",
            "src/components/SubsectionHeader.js",
            "src/components/Text.js",
          ],
          usageMode: "expand",
        },
        {
          name: "Components",
          components: () => [
            "src/components/BulletedList.js",
            "src/components/Button.js",
            "src/components/Card.js",
          ],
          usageMode: "expand",
        },
      ],
    },
    {
      name: "React Native",
      components: "native/components/*.js",
      content: "native/README.md",
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: [
            "https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap",
            "https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap",
          ],
        },
      ],
    },
  },
  styles,
  theme,
  pagePerSection: true,
  webpackConfig: {
    resolve: {
      // auto resolves any react-native import as react-native-web
      alias: { "react-native": "react-native-web" },
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: [/node_modules/],
          options: {
            plugins: ["react-native-web"],
            presets: [
              "@babel/preset-env",
              "module:metro-react-native-babel-preset",
            ],
            babelrc: false,
          },
        },
      ],
    },
  },
};
