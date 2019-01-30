const createItem = require('../CreateItem').createItem;
const enhancer = require('../Enhancer');

// enhancer test suite
describe('enhancer basic test suite', () => {
  describe('success(item) test(s)', () => {
    // Weapon Tests
    test('Item going +0 to +1 changes enhancement and adds detail to name', () => {
      // Setup
      const successWeapon1 = createItem('weapon', 'sword');
      const successExpected1 = Object.assign({}, successWeapon1);
      successExpected1.enhancement = 1;
      successExpected1.name = `[+1] ${successWeapon1.origName}`;

      // act - execute SUT (System Under Test)
      const result = enhancer.success(successWeapon1);

      // assert
      expect(result).toEqual(successExpected1);
    });

    test('Item going +15 to PRI changes enhancement and adds detail to name', () => {
      // Setup
      const successWeapon2 = createItem('weapon', 'sword');
      successWeapon2.enhancement = 15;
      successWeapon2.name = `[+15] ${successWeapon2.origName}`;
      const successExpected2 = Object.assign({}, successWeapon2);
      successExpected2.enhancement = 'PRI';
      successExpected2.name = `[PRI] ${successWeapon2.origName}`;

      // act - execute SUT (System Under Test)
      const result = enhancer.success(successWeapon2);

      // assert
      expect(result).toEqual(successExpected2);
    });
  });

  describe('fail(item) test(s)', () => {
    // Weapon Tests
    test('enhancing "[+6] weapon" will instead succeed, ', () => {
      /* Note:
        I would just like to point out this fail method
        Should never be invoked if the weapon is below +7.
        Since it is unclear how to handle this situation in the project specs,
        I see two options:
        1) Have the method invoke the success method.
        2) Throw an error saying this method should have never been reached.
        ... I chose option 1 (and durability is not decreased).
      */
      // Setup
      const failWeapon1 = createItem('weapon', 'sword');
      failWeapon1.enhancement = 6;
      failWeapon1.name = '[+6] Sword';
      const failExpected1 = Object.assign({}, failWeapon1);
      failExpected1.enhancement = 7;
      failExpected1.name = '[+7] Sword';

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon1);

      // assert
      expect(result).toEqual(failExpected1);
    });

    test('enhancing "[+7] item" fail decrease durability by 5, ', () => {
      // Setup
      const failWeapon2 = createItem('weapon', 'sword');
      failWeapon2.enhancement = 7;
      failWeapon2.name = '[+7] Sword';
      const failExpected2 = Object.assign({}, failWeapon2);
      failExpected2.durability = 95;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon2);

      // assert
      expect(result).toEqual(failExpected2);
    });

    test('enhancing "[+14] item" fail decrease durability by 5, ', () => {
      // Setup
      const failWeapon3 = createItem('weapon', 'sword');
      failWeapon3.enhancement = 14;
      failWeapon3.name = '[+14] Sword';
      const failExpected3 = Object.assign({}, failWeapon3);
      failExpected3.durability = 95;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon3);

      // assert
      expect(result).toEqual(failExpected3);
    });

    test('enhancing "[+15] item" fail decrease durability by 10, ', () => {
      // Setup
      const failWeapon4 = createItem('weapon', 'sword');
      failWeapon4.enhancement = 15;
      failWeapon4.name = '[+15] Sword';
      const failExpected4 = Object.assign({}, failWeapon4);
      failExpected4.durability = 90;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon4);

      // assert
      expect(result).toEqual(failExpected4);
    });

    test('enhancing "[PRI] item" fail decrease durability by 10, ', () => {
      // Setup
      const failWeapon5 = createItem('weapon', 'sword');
      failWeapon5.enhancement = 'PRI';
      failWeapon5.name = '[PRI] Sword';
      const failExpected5 = Object.assign({}, failWeapon5);
      failExpected5.durability = 90;

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon5);

      // assert
      expect(result).toEqual(failExpected5);
    });

    test('enhancing "[DUO] item" fail decrease durability by 10, and enchant lvl by 1 ', () => {
      // Setup
      const failWeapon6 = createItem('weapon', 'sword');
      failWeapon6.enhancement = 'DUO';
      failWeapon6.name = '[DUO] Sword';
      const failExpected6 = Object.assign({}, failWeapon6);
      failExpected6.durability = 90;
      failExpected6.enhancement = 'PRI';
      failExpected6.name = '[PRI] Sword';

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon6);

      // assert
      expect(result).toEqual(failExpected6);
    });

    test('enhancing "[PEN] item" fail do nothing?? ', () => {
      // Setup
      const failWeapon7 = createItem('weapon', 'sword');
      failWeapon7.enhancement = 'PEN';
      failWeapon7.name = '[PEN] Sword';
      const failExpected7 = Object.assign({}, failWeapon7);
      failExpected7.enhancement = 'PEN';
      failExpected7.name = '[PEN] Sword';

      // act - execute SUT (System Under Test)
      const result = enhancer.fail(failWeapon7);

      // assert
      expect(result).toEqual(failExpected7);
    });
  });

  describe('repair(item) test(s)', () => {
    test('repairs item durability', () => {
      // Setup
      const repairWeapon1 = createItem('weapon', 'sword');
      repairWeapon1.durability = 40;
      const repairExpected1 = Object.assign({}, repairWeapon1);
      repairExpected1.durability = 100;

      // act - execute SUT (System Under Test)
      const result = enhancer.repair(repairWeapon1);

      // assert
      expect(result).toEqual(repairExpected1);
    });

    test('item durability is already max: throws error', () => {
      // Setup
      const repairWeapon2 = createItem('weapon', 'sword');

      // act - execute SUT (System Under Test)
      /* Note: jest dosn't handle stored errors
        you MUST NOT store the error in a variable
        and then pass it in the expect() arg.
        const result = enhancer.repair(repairWeapon2);
      */

      // assert
      expect(() => enhancer.repair(repairWeapon2)).toThrow();
    });
  });
});
