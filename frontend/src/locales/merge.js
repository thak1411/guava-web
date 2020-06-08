const fs = require('fs');
const path = require('path');

const lang = [ 'en', 'ja' ]; // Without MainLang //
const mainLang = 'ko';
const mainJSON = require(path.join(__dirname, mainLang));

for (let i = 0; i < lang.length; ++i) {
    let langJSON = require(path.join(__dirname, lang[i]));
    const copyMainJSON = Object.assign({}, mainJSON);
    const newLang = Object.assign(copyMainJSON, langJSON);
    fs.writeFileSync('mergedLang_' + lang[i] + '.json', JSON.stringify(newLang));
}