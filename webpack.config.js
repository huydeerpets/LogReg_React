module.exports = {
    entry: './client/src/main.js',
    module: {
        loaders: [
            {test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client'
    }
}
