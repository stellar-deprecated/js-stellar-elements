module.exports = {
  sections: [
    {
      name: "Desktop",
      components: "src/components/*.js",
    },
    {
      name: "Native",
      components: "native/components/*.js",
    },
  ],
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
