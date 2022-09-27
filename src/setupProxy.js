const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://artist-dev.keycutstock.com/api',
            changeOrigin: true,
        })
    );
};