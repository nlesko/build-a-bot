[module.exports = {
  // configureWebpack: {}, // Add new rules
 // configureWebpack: (config) => {}, // mutate config object to append modules config.modules.rules.push(), // 
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082/',
        changeOrigin: true,
      },
    },
  },
};
]