const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://localhost:8082/',
            changeOrigin: true,
            secure: true,
            pathRewrite: { '^/': '' }
        })
    );
};