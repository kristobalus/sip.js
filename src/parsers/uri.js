
const re = /^(sips?):(?:([^\s>:@]+)(?::([^\s@>]+))?@)?([\w\-\.]+)(?::(\d+))?((?:;[^\s=\?>;]+(?:=[^\s?\;]+)?)*)(?:\?(([^\s&=>]+=[^\s&=>]+)(&[^\s&=>]+=[^\s&=>]+)*))?$/

function parseUri(s) {
    if(typeof s === 'object')
        return s;

    const r = re.exec(s);

    const [ schema, user, password, host, port, params, headers ] = r

    if(r) {
        return {
            schema,
            user,
            password,
            host,
            port: +port,
            params: ((params ?? '').match(/([^;=]+)(=([^;=]+))?/g) || [])
                .map(s => s.split('='))
                .reduce(function(params, x) { params[x[0]]=x[1] || null; return params;}, {}),
            headers: ((headers ?? '').match(/[^&=]+=[^&=]+/g) || [])
                .map(s => s.split('='))
                .reduce(function(params, x) { params[x[0]]=x[1]; return params; }, {})
        }
    }
}

module.exports = { parseUri }
