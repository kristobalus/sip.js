

function parseParams(data, hdr) {
    hdr.params = hdr.params || {};

    var re = /\s*;\s*([\w\-.!%*_+`'~]+)(?:\s*=\s*([\w\-.!%*_+`'~]+|"[^"\\]*(\\.[^"\\]*)*"))?/g;

    for(var r = applyRegex(re, data); r; r = applyRegex(re, data)) {
        hdr.params[r[1].toLowerCase()] = r[2] || null;
    }

    return hdr;
}


module.exports = { parseParams }
