const itemTypes = ['weapon', 'armor']; // add accessory, usable, pet, ect..., and/or change the name... but keep the order!
const weapons = require('./Weapons');
const armors = require('./Armors');

function getItemTypes() {
  return itemTypes;
}

function createItem(itemType, itemName) {
  switch (itemType) {
    case itemTypes[0]:
      return weapons.list[itemName];
    case itemTypes[1]:
      return armors.list[itemName];
    default:
      throw new Error(`Item Type ${itemType} not found`);
  }
}

module.exports = {
  getItemTypes,
  createItem
};
