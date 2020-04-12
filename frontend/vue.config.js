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
    },
    outputDir: '../backend/dist',
    lintOnSave: false,
    filenameHashing: false,
}