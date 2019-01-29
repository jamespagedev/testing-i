const createItem = require('../CreateItem').createItem;
const enhancer = require('../Enhancer');

// enhancer test suite
describe('enhancer basic test suite', () => {
  describe('success(item) test(s)', () => {
    test('Item going +0 to +1 changes enhancement and adds detail to name', () => {
      // Setup
      const successWeapon1 = createItem('weapon', 'sword');
      const expected = Object.assign({}, successWeapon1);
      expected.enhancement = 1;
      expected.name = `[+1] ${successWeapon1.origName}`;

      // act - execute SUT (System Under Test)
      const result = enhancer.success(successWeapon1);

      // assert
      expect(result).toEqual(expected);
    });
  });

  describe('fail(item) test(s)', () => {
    test('enhancing "[+3] item" will instead succeed, ', () => {
      /* Note:
        I would just like to point out this fail method
        Should never be invoked if the weapon is below +7.
        Since it is unclear how to handle this situation in the project specs,
        I see two options:
        1) Have the method invoke the success method.
        2) Throw an error saying this method should have never been reached.
        ... I chose option 1.
      */
      // Setup
      const failWeapon1 = createItem('weapon', 'sword');
      failWeapon1.enhancement = 3;
      failWeapon1.name = '[+3] Sword';
      const expected = Object.assign({}, failWeapon1);
      expected.enhancement = 4;
      expected.name = '[+4] Sword';

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon1);

      // assert
      expect(result).toEqual(expected);
    });

    test('enhancing "[+7] item" fail decrease durability by 5, ', () => {
      // Setup
      const failWeapon2 = createItem('weapon', 'sword');
      failWeapon2.enhancement = 7;
      failWeapon2.name = '[+7] Sword';
      const expected = Object.assign({}, failWeapon2);
      expected.durability = 95;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon2);

      // assert
      expect(result).toEqual(expected);
    });
  });

  describe('repair(item) test(s)', () => {
    test('repairs item durability', () => {
      // Setup
      const repairWeapon1 = createItem('weapon', 'sword');
      repairWeapon1.durability = 40;
      const expected = Object.assign({}, repairWeapon1);
      expected.durability = 100;

      // act - execute SUT (System Under Test)
      const result = enhancer.repair(repairWeapon1);

      // assert
      expect(result).toEqual(expected);
    });

    test('item durability is already max: throws error', () => {
      // Setup
      const repairWeapon1 = createItem('weapon', 'sword');
      const expected = Object.assign({}, repairWeapon1);
      expected.durability = 100;

      // act - execute SUT (System Under Test)
      /* Note: jest dosn't handle stored errors
        you MUST NOT store the error in a variable
        and then pass it in the expect() arg.
        const result = enhancer.repair(repairWeapon1);
      */

      // assert
      expect(() => enhancer.repair(repairWeapon1)).toThrow();
    });
  });
});
