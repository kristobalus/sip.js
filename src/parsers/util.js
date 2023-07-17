

function applyRegex(regex, data) {
    regex.lastIndex = data.i;
    var r = regex.exec(data.s);

    if(r && (r.index === data.i)) {
        data.i = regex.lastIndex;
        return r;
    }
}

module.exports = { applyRegex }
