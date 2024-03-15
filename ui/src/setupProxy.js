const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/app1',
        createProxyMiddleware({
            target: 'https://localhost:8082',
            changeOrigin: true,
            pathRewrite: { '^/app1': '' },
        })
    );
    app.use(
        '/app2',
        createProxyMiddleware({
            target: 'https://localhost:8083',
            changeOrigin: true,
            pathRewrite: { '^/app2': '' },
        })
    );
};
