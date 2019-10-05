require('proof')(10, (okay) => {
    const Keyify = require('..')
    okay(Keyify.stringify('x'), '"x"', 'stringify scalar')
    okay(Keyify.stringify({b:2,a:1}), '["object","a",1,"b",2]', 'stringify object')
    okay(Keyify.stringify({b:2,a:1}) === Keyify.stringify({a:1,b:2}), 'stringify different key orders equal')
    okay(Keyify.stringify(['array']), '["array","array"]', 'stringify array with keyword')
    okay(Keyify.stringify({a:{a:1}}), '["object","a",["object","a",1]]', 'stringify nested object')

    okay(Keyify.parse(Keyify.stringify('x')), 'x', 'round-trip scalar')
    okay(Keyify.parse(Keyify.stringify(['x'])), ['x'], 'round-trip array')
    okay(Keyify.parse(Keyify.stringify({b:2,a:1})), {b:2,a:1}, 'round-trip object')
    okay(Keyify.parse(Keyify.stringify(['array'])), ['array'], 'round-trip array with keyword')
    okay(Keyify.parse(Keyify.stringify({a:{a:1}})), {a:{a:1}}, 'round-trip nested object')
})
