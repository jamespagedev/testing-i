const wpnType = [
  // order matters, do not change order
  'One-Handed Sword',
  'Two-Handed Sword',
  'Axes',
  'Bows',
  'Rods',
  'Knuckles'
];
const itmTypes = require('./CreateItem').getItemTypes();
console.log(itmTypes);

// list = {
//   // One-Handed Swords
//   blade: {
//     origName: 'Blade',
//     name: 'Blade',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   falchion: {
//     origName: 'Falchion',
//     name: 'Falchion',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   sword: {
//     origName: 'Sword',
//     name: 'Sword',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   rapier: {
//     origName: 'Rapier',
//     name: 'Rapier',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   scimiter: {
//     origName: 'Scimiter',
//     name: 'Scimiter',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   flamberg: {
//     origName: 'Flamberg',
//     name: 'Flamberg',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   haedonggum: {
//     origName: 'Haedonggum',
//     name: 'Haedonggum',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   saber: {
//     origName: 'Saber',
//     name: 'Saber',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   tsurugi: {
//     origName: 'Tsurugi',
//     name: 'Tsurugi',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   cutlus: {
//     origName: 'Cutlus',
//     name: 'Cutlus',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   excalibur: {
//     origName: 'Excalibur',
//     name: 'Excalibur',
//     type: itmTypes[0],
//     wpnType: wpnType[0],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },

//   // Two-Handed Swords
//   katana: {
//     origName: 'Katana',
//     name: 'Katana',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'heavy sword': {
//     origName: 'Heavy Sword',
//     name: 'Heavy Sword',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'bastard sword': {
//     origName: 'Bastard Sword',
//     name: 'Bastard Sword',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   slayer: {
//     origName: 'Slayer',
//     name: 'Slayer',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'broad sword': {
//     origName: 'Broad Sword',
//     name: 'Broad Sword',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   claymore: {
//     origName: 'Claymore',
//     name: 'Claymore',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'two-handed sword': {
//     origName: 'Two-Handed Sword',
//     name: 'Two-Handed Sword',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   muramasa: {
//     origName: 'Muramasa',
//     name: 'Muramasa',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   masamune: {
//     origName: 'Masamune',
//     name: 'Masamune',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'dragon slayer': {
//     origName: 'Dragon Slayer',
//     name: 'Dragon Slayer',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   schweizersabel: {
//     origName: 'Schweizersabel',
//     name: 'Schweizersabel',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   zweihander: {
//     origName: 'Zweihander',
//     name: 'Zweihander',
//     type: itmTypes[0],
//     wpnType: wpnType[1],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },

//   // Axes
//   axe: {
//     origName: 'Axe',
//     name: 'Axe',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   cleaver: {
//     origName: 'Cleaver',
//     name: 'Cleaver',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   hammer: {
//     origName: 'Hammer',
//     name: 'Hammer',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   buster: {
//     origName: 'Buster',
//     name: 'Buster',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'battle axe': {
//     origName: 'Battle Axe',
//     name: 'Battle Axe',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'two-handed axe': {
//     origName: 'Two-Handed Axe',
//     name: 'Two-Handed Axe',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   guillotine: {
//     origName: 'Guillotine',
//     name: 'Guillotine',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   slaughter: {
//     origName: 'Slaughter',
//     name: 'Slaughter',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   tomahawk: {
//     origName: 'Tomahawk',
//     name: 'Tomahawk',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'doom slayer': {
//     origName: 'Doom Slayer',
//     name: 'Doom Slayer',
//     type: itmTypes[0],
//     wpnType: wpnType[2],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },

//   // Bows
//   'novice bow': {
//     origName: 'Novice Bow',
//     name: 'Novice Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   bow: {
//     origName: 'Bow',
//     name: 'Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'composite bow': {
//     origName: 'Composite Bow',
//     name: 'Composite Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'cross bow': {
//     origName: 'Cross Bow',
//     name: 'Cross Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'great bow': {
//     origName: 'Great Bow',
//     name: 'Great Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   Arbalest: {
//     origName: 'Arbalest',
//     name: 'Arbalest',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'crimson bow': {
//     origName: 'Crimson Bow',
//     name: 'Crimson Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'elven bow': {
//     origName: 'Elven Bow',
//     name: 'Elven Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'gakkung bow': {
//     origName: 'Gakkung Bow',
//     name: 'Gakkung Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'hunter bow': {
//     origName: 'Hunter Bow',
//     name: 'Hunter Bow',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   ballista: {
//     origName: 'Ballista',
//     name: 'Ballista',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'ixion wings': {
//     origName: 'Ixion Wings',
//     name: 'Ixion Wings',
//     type: itmTypes[0],
//     wpnType: wpnType[3],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },

//   // Rods
//   'novice rod': {
//     origName: 'Novice Rod',
//     name: 'Novice Rod',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   rod: {
//     origName: 'Rod',
//     name: 'Rod',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   staff: {
//     origName: 'Staff',
//     name: 'Staff',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   wand: {
//     origName: 'Wand',
//     name: 'Wand',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'arc wand': {
//     origName: 'Arc Wand',
//     name: 'Arc Wand',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'evil bone wand': {
//     origName: 'Evil Bone Wand',
//     name: 'Evil Bone Wand',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'healing staff': {
//     origName: 'Healing Staff',
//     name: 'Healing Staff',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'mighty staff': {
//     origName: 'Mighty Staff',
//     name: 'Mighty Staff',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'wand of occult': {
//     origName: 'Wand of Occult',
//     name: 'Wand of Occult',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   "warlock's magic wand": {
//     origName: "Warlock's Magic Wand",
//     name: "Warlock's Magic Wand",
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'thorn staff of darkness': {
//     origName: 'Thorn Staff of Darkness',
//     name: 'Thorn Staff of Darkness',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'holy staff': {
//     origName: 'Holy Staff',
//     name: 'Holy Staff',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   eraser: {
//     origName: 'Eraser',
//     name: 'Eraser',
//     type: itmTypes[0],
//     wpnType: wpnType[4],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },

//   // Knuckles
//   finger: {
//     origName: 'Finger',
//     name: 'Finger',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   fist: {
//     origName: 'Fist',
//     name: 'Fist',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   claw: {
//     origName: 'Claw',
//     name: 'Claw',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'knuckle dusters': {
//     origName: 'Knuckle Dusters',
//     name: 'Knuckle Dusters',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'studded knuckles': {
//     origName: 'Studded Knuckles',
//     name: 'Studded Knuckles',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'glorious claw': {
//     origName: 'Glorious Claw',
//     name: 'Glorious Claw',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   "sura's rampage": {
//     origName: "Sura's Rampage",
//     name: "Sura's Rampage",
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   spartacus: {
//     origName: 'Spartacus',
//     name: 'Spartacus',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   },
//   'hatii claw': {
//     origName: 'Hatii Claw',
//     name: 'Hatii Claw',
//     type: itmTypes[0],
//     wpnType: wpnType[5],
//     maxDurability: 100,
//     durability: 100,
//     enhancement: 0
//   }
// };

module.exports = {
  // list,
  wpnType
};
