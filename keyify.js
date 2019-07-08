function replacer (key, value) {
    if (Array.isArray(value)) {
        if (value.length != 0 && (value[0] === 'object' || value[0] === 'array')) {
            return [ 'array' ].concat(value)
        }
        return value
    }
    if (typeof value == 'object') {
        const array = [ 'object' ]
        const keys = Object.keys(value).sort()
        for (let i = 0, I = keys.length; i < I; i++) {
            array.push(keys[i], value[keys[i]])
        }
        return array
    }
    return value
}

function reviver (key, value) {
    if (Array.isArray(value)) {
        if (value[0] === 'array') {
            value.shift()
            return value
        }
        if (value[0] === 'object') {
            const object = {}
            value.shift()
            for (let i = 0, I = value.length; i < I; i += 2) {
                object[value[i]] = value[i + 1]
            }
            return object
        }
    }
    return value
}

exports.stringify = function (object) {
    return JSON.stringify(object, replacer, 0)
}

exports.parse = function (string) {
    return JSON.parse(string, reviver)
}
