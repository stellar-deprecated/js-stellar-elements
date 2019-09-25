const { styles, theme } = require("./styleguide.styles");

module.exports = {
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
          ],
        },
        {
          name: "Components",
          components: () => [
            "src/components/BulletedList.js",
            "src/components/Button.js",
          ],
        },
        {
          name: "Form",
          components: () => [
            "src/components/Checkbox.js",
            "src/components/Input.js",
            "src/components/Select.js",
            "src/components/Textarea.js",
          ],
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
