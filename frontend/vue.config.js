module.exports = {
    pages: {
        index: {
            entry: './src/pages/index/main.js',
            template: './public/index.html',
            filename: 'index.html',
        },
        login: {
            entry: './src/pages/login/main.js',
            template: './public/index.html',
            filename: 'login.html',
        },
        join: {
            entry: './src/pages/join/main.js',
            template: './public/index.html',
            filename: 'join.html',
        },
    },
    outputDir: '../backend/dist',
    lintOnSave: false,
    filenameHashing: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
            '/logout': {
                target: 'http://localhost:3000',
            },
        },
    },
}