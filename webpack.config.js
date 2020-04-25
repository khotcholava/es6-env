var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }],
    },
    devServer: {
        port: 3200,
        inline: true,
    },
};
