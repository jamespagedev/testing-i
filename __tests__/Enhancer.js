const createItem = require('../CreateItem').createItem;
const enhancer = require('../Enhancer');

// enhancer test suite
describe('enhancer test suite', () => {
  describe('success(item) test(s)', () => {
    test('Item going +0 to +1 changes enhancement and adds detail to name', () => {
      // Setup
      const weapon1 = createItem('weapon', 'sword');
      const expected = Object.assign({}, weapon1);
      expected.enhancement = 1;
      expected.name = `[+1] ${weapon1.origName}`;

      // act - execute SUT (System Under Test)
      const result = enhancer.success(weapon1);

      // assert
      expect(result).toEqual(expected);
    });
  });

  describe('fail(item) test(s)', () => {
    test('enhancing "[+8] item" fail decrease durability by 5, ', () => {
      // Setup
      const weapon2 = createItem('weapon', 'sword');
      weapon2.enhancement = 8;
      weapon2.name = '[+8] Sword';
      const expected = Object.assign({}, weapon2);
      expected.durability = 95;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(weapon2);

      // assert
      expect(result).toEqual(expected);
    });
  });
});
