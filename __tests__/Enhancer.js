const createItem = require('../CreateItem').createItem;
const enhancer = require('../Enhancer');

// enhancer test suite
describe('enhancer test suite', () => {
  describe('success(item) test(s)', () => {
    test('enhancing success increases enhancing level', () => {
      // Setup
      const weapon = createItem('weapon', 'sword');
      const expected = Object.assign({}, weapon);
      expected.enhancement = weapon.enhancement + 1;
      expected.name = `[+${weapon.enhancement + 1}] ${weapon.origName}`;

      // act - execute SUT (System Under Test)
      const result = enhancer.success(weapon);

      // assert
      expect(result).toEqual(expected);
    });
  });
});
