/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {
      name: 'Homer',
      lastname: 'Simpson',
      email: 'homer.simpson@example.com',
      phone: '123-456-7890',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Marge',
      lastname: 'Simpson',
      email: 'marge.simpson@example.com',
      phone: '123-456-7891',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Bart',
      lastname: 'Simpson',
      email: 'bart.simpson@example.com',
      phone: '123-456-7892',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Lisa',
      lastname: 'Simpson',
      email: 'lisa.simpson@example.com',
      phone: '123-456-7893',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Maggie',
      lastname: 'Simpson',
      email: 'maggie.simpson@example.com',
      phone: '123-456-7894',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Ned',
      lastname: 'Flanders',
      email: 'ned.flanders@example.com',
      phone: '123-456-7895',
      addressStreet: '744 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Maude',
      lastname: 'Flanders',
      email: 'maude.flanders@example.com',
      phone: '123-456-7896',
      addressStreet: '744 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Rod',
      lastname: 'Flanders',
      email: 'rod.flanders@example.com',
      phone: '123-456-7897',
      addressStreet: '744 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Todd',
      lastname: 'Flanders',
      email: 'todd.flanders@example.com',
      phone: '123-456-7898',
      addressStreet: '744 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Montgomery',
      lastname: 'Burns',
      email: 'montgomery.burns@example.com',
      phone: '123-456-7899',
      addressStreet: 'Montgomery Burns Manor',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Waylon',
      lastname: 'Smithers',
      email: 'waylon.smithers@example.com',
      phone: '123-456-7810',
      addressStreet: '123 Smithers Lane',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Moe',
      lastname: 'Szyslak',
      email: 'moe.szyslak@example.com',
      phone: '123-456-7811',
      addressStreet: "123 Moe's Tavern",
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Apu',
      lastname: 'Nahasapeemapetilon',
      email: 'apu.nahasapeemapetilon@example.com',
      phone: '123-456-7812',
      addressStreet: '456 Kwik-E-Mart',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Barney',
      lastname: 'Gumble',
      email: 'barney.gumble@example.com',
      phone: '123-456-7813',
      addressStreet: "123 Moe's Tavern",
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Seymour',
      lastname: 'Skinner',
      email: 'seymour.skinner@example.com',
      phone: '123-456-7814',
      addressStreet: '123 Springfield Elementary',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Edna',
      lastname: 'Krabappel',
      email: 'edna.krabappel@example.com',
      phone: '123-456-7815',
      addressStreet: '123 Springfield Elementary',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Groundskeeper',
      lastname: 'Willie',
      email: 'groundskeeper.willie@example.com',
      phone: '123-456-7816',
      addressStreet: '123 Springfield Elementary',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Patty',
      lastname: 'Bouvier',
      email: 'patty.bouvier@example.com',
      phone: '123-456-7817',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Selma',
      lastname: 'Bouvier',
      email: 'selma.bouvier@example.com',
      phone: '123-456-7818',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Cletus',
      lastname: 'Spuckler',
      email: 'cletus.spuckler@example.com',
      phone: '123-456-7819',
      addressStreet: '742 Evergreen Terrace',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Lenny',
      lastname: 'Leonard',
      email: 'lenny.leonard@example.com',
      phone: '123-456-7820',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Carl',
      lastname: 'Carlson',
      email: 'carl.carlson@example.com',
      phone: '123-456-7821',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Chief',
      lastname: 'Wiggum',
      email: 'chief.wiggum@example.com',
      phone: '123-456-7822',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Ralph',
      lastname: 'Wiggum',
      email: 'ralph.wiggum@example.com',
      phone: '123-456-7823',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Krusty',
      lastname: 'the Clown',
      email: 'krusty.clown@example.com',
      phone: '123-456-7824',
      addressStreet: '123 Krusty Studios',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Sideshow',
      lastname: 'Bob',
      email: 'sideshow.bob@example.com',
      phone: '123-456-7825',
      addressStreet: '123 Springfield Penitentiary',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Patty',
      lastname: 'Selma',
      email: 'patty.selma@example.com',
      phone: '123-456-7826',
      addressStreet: '123 Main Street',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Rainier',
      lastname: 'Wolfcastle',
      email: 'rainier.wolfcastle@example.com',
      phone: '123-456-7827',
      addressStreet: '123 Wolfcastle Mansion',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    },
    {
      name: 'Lionel',
      lastname: 'Hutz',
      email: 'lionel.hutz@example.com',
      phone: '123-456-7828',
      addressStreet: '123 Wolfcastle',
      postalCode: '12345',
      colony: 'Springfield',
      city: 'Springfield',
      active: true
    }
  ])
}
