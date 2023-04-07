const fs = require('fs')
const path = require('path')

const bpe_file = fs.readFileSync(path.join(__dirname, './vocab.bpe'), 'utf-8');
fs.writeFileSync('./vocab_bpe.json', JSON.stringify(bpe_file))