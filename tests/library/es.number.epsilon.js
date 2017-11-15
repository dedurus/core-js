QUnit.test('Number.EPSILON', assert => {
  const { EPSILON } = core.Number;
  assert.ok('EPSILON' in core.Number, 'EPSILON in Number');
  assert.strictEqual(EPSILON, 2 ** -52, 'Is 2^-52');
  assert.ok(1 !== 1 + EPSILON, '1 isnt 1 + EPSILON');
  assert.strictEqual(1, 1 + EPSILON / 2, '1 is 1 + EPSILON / 2');
});
