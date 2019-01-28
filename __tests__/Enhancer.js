const createItem = require('../CreateItem').createItem;
const enhancer = require('../Enhancer');

// enhancer test suite
describe('enhancer test suite', () => {
  describe('success(item) test(s)', () => {
    // Setup
    const weapon = createItem('weapon', 'sword');
    const expected = Object.assign({}, weapon);
    expected.enhancement = expected.enhancement + 1;

    // act - execute SUT (System Under Test)
    const result = enhancer.success(weapon);

    // assert
    expect(result).toEqual(expected);
  });
});
