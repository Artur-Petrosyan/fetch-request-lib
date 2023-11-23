const path = require('path')
module.exports = function (env, argv) {
    const isProduction = argv.mode === "production"
    return {
        entry: './index.js',
        devServer: {
            port: 8080,
            hot: true
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? 'eazyrequest.min.js' : "eazyrequest.development.js",
            library: {
                name : "EazyRequest",
                type: "umd"
            },
            umdNamedDefine: true,
            clean: true,
        },

    }
}