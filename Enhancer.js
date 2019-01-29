const itemTypes = ['weapon', 'armor'];
const enhancementLvls = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  'PRI',
  'DUO',
  'TRI',
  'TET',
  'PEN'
];
const armorSafeLvl = enhancementLvls[5];
const weaponSafeLvl = enhancementLvls[7];

const success = item => {
  // Precondition1 - If the item's current enhancement is 15 or higher, item durability must be >= 10.
  if (item.durability < 10) {
    throw new Error('Item durability too low');
  }
  // Precondition2 - If the item's current enhancement is 14 or lower, item durability must be >= 25.
  if (
    item.durability < 25 &&
    enhancementLvls.indexOf(item.enhancement) <
      enhancementLvls.indexOf(enhancementLvls[15])
  ) {
    throw new Error('Item durability too low');
  }

  if (item.enhancement !== enhancementLvls[enhancementLvls.length - 1]) {
    item.enhancement =
      enhancementLvls[enhancementLvls.indexOf(item.enhancement) + 1];
  }

  // After +15 the display for the enhancing level must result in the string names listed in the enhancementLvls[]
  if (enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf(15)) {
    // less than +15
    item.name = `[+${item.enhancement}] ${item.origName}`;
  } else if (
    // less than 'PEN'
    enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf('PEN')
  ) {
    item.name = `[${item.enhancement}] ${item.origName}`;
  }

  console.log(item);
  return item;
};

const fail = item => {
  // Precondition1 - If the item's current enhancement is 15 or higher, item durability must be >= 10.
  if (item.durability < 10) {
    throw new Error('Item durability too low');
  }
  // Precondition2 - If the item's current enhancement is 14 or lower, item durability must be >= 25.
  if (
    item.durability < 25 &&
    enhancementLvls.indexOf(item.enhancement) <
      enhancementLvls.indexOf(enhancementLvls[15])
  ) {
    throw new Error('Item durability too low');
  }

  // Precondition3 - If the weapon is less than +7... success should have been done.
  if (
    item.type === itemTypes[0] &&
    enhancementLvls.indexOf(item.enhancement) <
      enhancementLvls.indexOf(enhancementLvls[7])
  ) {
    return success(item);
  }

  // Precondition4 - If the armor is less than +5... success should have been done.
  if (
    item.type === itemTypes[0] &&
    enhancementLvls.indexOf(item.enhancement) <
      enhancementLvls.indexOf(enhancementLvls[5])
  ) {
    return success(item);
  }

  // weapon
  if (item.type === itemTypes[0]) {
    if (
      enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf('DUO')
    ) {
      item.durability = Math.abs(item.durability - 5);
    } else if (
      enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf('PEN')
    ) {
      item.enhancement =
        enhancementLvls[enhancementLvls.indexOf(item.durability) - 1];
      item.durability = Math.abs(item.durability - 10);
    }
  }

  // armor
  if (item.type === itemTypes[1]) {
    if (item.enhancement === armorSafeLvl) {
      item.durability = Math.abs(item.durability - 5);
    } else if (
      enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf('DUO')
    ) {
      item.durability = Math.abs(item.durability - 5);
    } else if (
      enhancementLvls.indexOf(item.enhancement) < enhancementLvls.indexOf('PEN')
    ) {
      item.enhancement =
        enhancementLvls[enhancementLvls.indexOf(item.durability) - 1];
      item.durability = Math.abs(item.durability - 10);
    }
  }

  return item;
};

module.exports = {
  success,
  fail
};
