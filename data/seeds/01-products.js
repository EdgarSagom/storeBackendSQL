/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      name: 'Buzz Cola',
      description: 'The classic cola with an extra kick.',
      price: 1.5,
      sku: 'BZC1',
      active: true
    },
    {
      name: 'Squishee',
      description: 'A slushy beverage in various flavors.',
      price: 2.0,
      sku: 'SQE2',
      active: true
    },
    {
      name: "Krusty-O's",
      description: 'The cereal with a clown twist.',
      price: 3.99,
      sku: 'KRO3',
      active: true
    },
    {
      name: 'Lard Lad Donuts',
      description: 'Delicious and iconic pink-frosted donuts.',
      price: 1.25,
      sku: 'LLD4',
      active: true
    },
    {
      name: 'Flaming Moe',
      description: 'A fiery, citrus-flavored cocktail.',
      price: 8.5,
      sku: 'FLM5',
      active: true
    },
    {
      name: 'Nuclear Waste Gum',
      description: 'Chewy gum with a radioactive twist.',
      price: 0.99,
      sku: 'NWG6',
      active: true
    },
    {
      name: 'Krusty Burger',
      description: 'The classic fast-food burger with a side of fries.',
      price: 4.5,
      sku: 'KRB7',
      active: true
    },
    {
      name: "Lil' Lisa's Patented Vegetarian Organic Energy Bar",
      description: 'A healthy snack for those seeking a green diet.',
      price: 3.49,
      sku: 'LVE8',
      active: true
    },
    {
      name: 'Bort License Plate',
      description: 'A collectible license plate with the name Bort.',
      price: 15.0,
      sku: 'BRT9',
      active: true
    },
    {
      name: 'Radioactive Man Comic Book',
      description: 'The classic comic book featuring the adventures of Radioactive Man.',
      price: 5.99,
      sku: 'RMC10',
      active: true
    },
    {
      name: 'Duff Beer',
      description: 'The iconic beer of Springfield.',
      price: 2.99,
      sku: 'DFB11',
      active: true
    },
    {
      name: 'Kamp Krusty T-shirt',
      description: "A T-shirt from Bart's infamous stay at Kamp Krusty.",
      price: 12.5,
      sku: 'KKT12',
      active: true
    },
    {
      name: 'Simpsons Pez Dispenser',
      description: 'Collectible Pez dispenser featuring various Simpsons characters.',
      price: 3.0,
      sku: 'SPD13',
      active: true
    },
    {
      name: 'Blinky the Three-Eyed Fish Plush Toy',
      description: 'A cuddly plush toy of Blinky, the iconic three-eyed fish.',
      price: 9.99,
      sku: 'BTF14',
      active: true
    },
    {
      name: 'Sideshow Bob Action Figure',
      description: 'An action figure of the diabolical Sideshow Bob.',
      price: 8.0,
      sku: 'SBA15',
      active: true
    },
    {
      name: 'Krusty Brand Imitation Gruel',
      description: 'An affordable imitation of gruel with a Krusty twist.',
      price: 0.5,
      sku: 'KIG16',
      active: true
    },
    {
      name: 'Bort Keychain',
      description: 'A keychain featuring the name Bort.',
      price: 6.0,
      sku: 'BKC17',
      active: true
    },
    {
      name: 'Mr. Sparkle Detergent',
      description: 'The popular Japanese detergent with a mysterious mascot.',
      price: 4.5,
      sku: 'MSD18',
      active: true
    },
    {
      name: 'Kwik-E-Mart Mug',
      description: 'A collectible mug featuring the iconic Kwik-E-Mart logo.',
      price: 7.99,
      sku: 'KEM19',
      active: true
    },
    {
      name: 'Bort Magnet',
      description: 'A refrigerator magnet featuring the name Bort.',
      price: 3.0,
      sku: 'BMT20',
      active: true
    },
    {
      name: 'Duff Energy Drink',
      description: 'An energy drink version of the famous Duff Beer.',
      price: 2.5,
      sku: 'DED21',
      active: true
    },
    {
      name: 'Krusty Brand Kruel',
      description: "A prank version of Krusty's gruel.",
      price: 1.0,
      sku: 'KBK22',
      active: true
    },
    {
      name: 'Blinky the Three-Eyed Fish Hat',
      description: 'A quirky hat featuring Blinky, the three-eyed fish.',
      price: 14.5,
      sku: 'BTH23',
      active: true
    },
    {
      name: 'Simpsons Popsicle',
      description: 'A frozen treat featuring the faces of the Simpsons.',
      price: 1.49,
      sku: 'SPO24',
      active: true
    },
    {
      name: 'Itchy & Scratchy CD',
      description: 'A collection of music from the Itchy & Scratchy Show.',
      price: 11.99,
      sku: 'ISC25',
      active: true
    },
    {
      name: "Krusty-O's Cereal Bowl",
      description: "A bowl featuring the Krusty-O's cereal logo.",
      price: 5.0,
      sku: 'KOB26',
      active: true
    },
    {
      name: 'Bort Postcard',
      description: 'A postcard featuring the name Bort.',
      price: 1.0,
      sku: 'BPC27',
      active: true
    },
    {
      name: 'Krusty Brand Seal of Approval',
      description: "A seal of approval with Krusty's likeness.",
      price: 3.5,
      sku: 'KBS28',
      active: true
    },
    {
      name: 'Duff Beer Mug',
      description: 'A collectible mug featuring the Duff Beer logo.',
      price: 8.99,
      sku: 'DBM29',
      active: true
    },
    {
      name: 'Simpsons Monopoly Board Game',
      description: 'The classic Monopoly game with a Simpsons twist.',
      price: 29.99,
      sku: 'SMB30',
      active: true
    },
    {
      name: 'Krusty Brand Butter Flavored Syrup',
      description: "A unique syrup flavor from Krusty's brand.",
      price: 4.0,
      sku: 'KBS31',
      active: true
    },
    {
      name: "Bart's Skateboard",
      description: "A replica of Bart's iconic skateboard.",
      price: 19.99,
      sku: 'BSB32',
      active: true
    },
    {
      name: 'Krusty Brand Medicated Balm',
      description: "A topical balm with Krusty's endorsement.",
      price: 3.5,
      sku: 'KBM33',
      active: true
    },
    {
      name: 'Bort Sticker',
      description: 'A sticker featuring the name Bort.',
      price: 0.5,
      sku: 'BST34',
      active: true
    },
    {
      name: 'Duff Beer Hat',
      description: 'A stylish hat featuring the Duff Beer logo.',
      price: 12.99,
      sku: 'DBH35',
      active: true
    },
    {
      name: 'Simpsons DVD Collection',
      description: 'A collection of classic Simpsons episodes on DVD.',
      price: 39.99,
      sku: 'SDC36',
      active: true
    },
    {
      name: 'Krusty Brand Imitation Gruel Can',
      description: "A canned version of Krusty's imitation gruel.",
      price: 1.99,
      sku: 'KIGC37',
      active: true
    },
    {
      name: 'Bart Simpson Mask',
      description: "A mask featuring Bart's mischievous face.",
      price: 6.5,
      sku: 'BSM38',
      active: true
    },
    {
      name: 'Krusty Brand Chew Goo Gum-Like Substance',
      description: "A sticky and fun treat from Krusty's brand.",
      price: 1.0,
      sku: 'KCG39',
      active: true
    },
    {
      name: "Homer's Donut Mug",
      description: "A mug featuring Homer's favorite pink-frosted donut.",
      price: 9.5,
      sku: 'HDM40',
      active: true
    },
    {
      name: 'Radioactive Man Action Figure',
      description: 'An action figure of the heroic Radioactive Man.',
      price: 7.0,
      sku: 'RMAF41',
      active: true
    },
    {
      name: 'Duff Beer Coaster Set',
      description: 'A set of coasters featuring the Duff Beer logo.',
      price: 14.99,
      sku: 'DBC42',
      active: true
    },
    {
      name: 'Krusty Brand Non-Narkotik Kough Syrup',
      description: 'A cough syrup alternative with a Krusty twist.',
      price: 6.0,
      sku: 'KBNK43',
      active: true
    },
    {
      name: 'Squishee Machine',
      description: 'A machine for making your own Squishee at home.',
      price: 49.99,
      sku: 'SQM44',
      active: true
    },
    {
      name: 'Krusty Brand Brownie Mix',
      description: 'A baking mix for delicious Krusty-style brownies.',
      price: 3.5,
      sku: 'KBBM45',
      active: true
    }
  ])
}
