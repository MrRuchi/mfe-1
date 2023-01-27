module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

//test: /\.m?js$/,  Whenever import a file with extension of .mjs or .js will be processed by babel
//exclude: /node_modules/, Do not try to run this babel thing on any file out of our node modules directory
