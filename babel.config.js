module.exports = function (api) {
  const BABEL_ENV = api.env();
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-export-default-from",
  ];
  if (BABEL_ENV === "development") {
    plugins.push("react-refresh/babel");
  }
  return {
    presets,
    plugins,
  };
};
