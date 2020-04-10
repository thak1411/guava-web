module.exports = {
    pages: {
        index: {
            entry: './src/pages/index/main.js',
            template: './public/index.html',
            filename: 'index.html',
        },
    },
    outputDir: '../backend/dist',
    lintOnSave: false,
    filenameHashing: false,
}