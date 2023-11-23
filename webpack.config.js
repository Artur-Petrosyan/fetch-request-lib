const path = require('path')
module.exports = {
    mode : 'production',
    entry: './index.js',
    devServer: {
        port : 8080,
        hot : true
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "index.js",
        clean: true,
    },

}