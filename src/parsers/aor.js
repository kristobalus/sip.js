
const {  applyRegex } = require('./util')
const {  parseParams } = require('./params')

const aorRegex = /((?:[\w\-.!%*_+`'~]+)(?:\s+[\w\-.!%*_+`'~]+)*|"[^"\\]*(?:\\.[^"\\]*)*")?\s*\<\s*([^>]*)\s*\>|((?:[^\s@"<]@)?[^\s;]+)/g

function parseAOR(data) {
    const r = applyRegex(aorRegex, data);

    return parseParams(data, {name: r[1], uri: r[2] || r[3] || ''});
}

exports.parseAOR = parseAOR;
