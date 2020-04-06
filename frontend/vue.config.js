const ansiRegex = require('ansi-regex');
module.exports = {
    pages: {
        index: {
            entry: './src/pages/index/main.js',
            template: './public/index.html',
            filename: 'index.out.html',
        },
    },
    lintOnSave: false,
    filenameHashing: false,
    transpileDependencies: [ansiRegex],
}