module.exports = async ({ config }) => {
  config.resolve.modules = [...(config.resolve.modules || []), "./src"];

  return config;
};
