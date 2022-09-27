"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://artist-dev.keycutstock.com/api',
    changeOrigin: true
  }));
};