const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/track',
    createProxyMiddleware({
      target: 'https://itunes.apple.com/',
      changeOrigin: true,
    })
  );
};