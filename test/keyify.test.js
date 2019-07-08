describe('keyify', () => {
    const Keyify = require('..')
    const assert = require('assert')
    it('can stringify and parse', () => {
        assert.equal(Keyify.stringify('x'), '"x"', 'stringify scalar')
    assert.equal(Keyify.stringify({b:2,a:1}), '["object","a",1,"b",2]', 'stringify object')
    assert(Keyify.stringify({b:2,a:1}) === Keyify.stringify({a:1,b:2}), 'stringify different key orders equal')
    assert.equal(Keyify.stringify(['array']), '["array","array"]', 'stringify array with keyword')
    assert.equal(Keyify.stringify({a:{a:1}}), '["object","a",["object","a",1]]', 'stringify nested object')

    assert.equal(Keyify.parse(Keyify.stringify('x')), 'x', 'round-trip scalar')
    assert.deepStrictEqual(Keyify.parse(Keyify.stringify(['x'])), ['x'], 'round-trip array')
    assert.deepStrictEqual(Keyify.parse(Keyify.stringify({b:2,a:1})), {b:2,a:1}, 'round-trip object')
    assert.deepStrictEqual(Keyify.parse(Keyify.stringify(['array'])), ['array'], 'round-trip array with keyword')
    assert.deepStrictEqual(Keyify.parse(Keyify.stringify({a:{a:1}})), {a:{a:1}}, 'round-trip nested object')
    })
})
