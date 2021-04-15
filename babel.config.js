module.exports = function(api) {
  // api.cache(false);
  api.cache(true);
  return {  
    presets: [
      '@babel/env'
    ],
    plugins: [
      [
        '@babel/module-resolver',
        {
          root: ['src','node_modules'],
          alias: {
            helpers: "./src/helpers",
            // '~': "./src",
            "^~(.+)": "./src\\1"
          },
          loglevel: 'verbose'
        },
      ]
    ],
  };
};
