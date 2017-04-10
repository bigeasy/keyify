require('proof')(10, prove)

function prove (assert) {
    var Keyify = require('..')

    assert(Keyify.stringify('x'), '"x"', 'stringify scalar')
    assert(Keyify.stringify({b:2,a:1}), '["object","a",1,"b",2]', 'stringify object')
    assert(Keyify.stringify({b:2,a:1}) === Keyify.stringify({a:1,b:2}), 'stringify different key orders equal')
    assert(Keyify.stringify(['array']), '["array","array"]', 'stringify array with keyword')
    assert(Keyify.stringify({a:{a:1}}), '["object","a",["object","a",1]]', 'stringify nested object')

    assert(Keyify.parse(Keyify.stringify('x')), 'x', 'round-trip scalar')
    assert(Keyify.parse(Keyify.stringify(['x'])), ['x'], 'round-trip array')
    assert(Keyify.parse(Keyify.stringify({b:2,a:1})), {b:2,a:1}, 'round-trip object')
    assert(Keyify.parse(Keyify.stringify(['array'])), ['array'], 'round-trip array with keyword')
    assert(Keyify.parse(Keyify.stringify({a:{a:1}})), {a:{a:1}}, 'round-trip nested object')
}
