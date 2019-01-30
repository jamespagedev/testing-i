const itemTypes = ['weapon', 'armor'];
const weapons = require('./Weapons');
const armors = require('./Armors');

const createItem = (itemType, itemName) => {
  switch (itemType) {
    case itemTypes[0]:
      return Object.assign({}, weapons.list[itemName]);
    case itemTypes[1]:
      return Object.assign({}, armors.list[itemName]);
    default:
      throw new Error(`Item Type ${itemType} not found`);
  }
};

module.exports = {
  createItem
};
