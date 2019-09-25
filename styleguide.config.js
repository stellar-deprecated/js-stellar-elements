module.exports = {
  sections: [
    {
      name: "Web",
      components: "src/components/*.js",
      content: "src/README.md",
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
          href:
            "https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    },
  },
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
