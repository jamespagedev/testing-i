const enhancementLvls = [
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

const success = item => {
  item.enhancement = item.enhancement + 1;
  item.name = `[+${item.enhancement}] ${item.origName}`;
  return item;
};

module.exports = {
  success
};
