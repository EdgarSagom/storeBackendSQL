/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('shops').del()
  await knex('shops').insert([
    {
      name: "Krusty's Quick-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Springfield',
      postalCode: '12345',
      managerName: 'Apu Nahasapeemapetilon',
      active: true
    },
    {
      name: "Apu's Kwik-E-Mart",
      addressStreet: '456 Fictional Avenue',
      city: 'Shelbyville',
      postalCode: '67890',
      managerName: 'Apu Nahasapeemapetilon',
      active: true
    },
    {
      name: "Ned's Kwik-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Capital City',
      postalCode: '13579',
      managerName: 'Ned Flanders',
      active: false
    },
    {
      name: "Mo's Quick-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Ogdenville',
      postalCode: '24680',
      managerName: 'Moe Szyslak',
      active: true
    },
    {
      name: "Burns' Kwik-E-Mart",
      addressStreet: '123 Fake Street',
      city: 'Springfield',
      postalCode: '97531',
      managerName: 'Mr. Burns',
      active: true
    },
    {
      name: "Milhouse's Quick-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Cypress Creek',
      postalCode: '53179',
      managerName: 'Milhouse Van Houten',
      active: false
    },
    {
      name: "Comic Book Guy's Kwik-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Springfield',
      postalCode: '12345',
      managerName: 'Jeff Albertson',
      active: true
    },
    {
      name: "Homer's Quick-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Springfield',
      postalCode: '67890',
      managerName: 'Homer Simpson',
      active: true
    },
    {
      name: "Bart's Kwik-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Springfield',
      postalCode: '13579',
      managerName: 'Bart Simpson',
      active: false
    },
    {
      name: "Lisa's Kwik-E-Mart",
      addressStreet: '742 Evergreen Terrace',
      city: 'Springfield',
      postalCode: '24680',
      managerName: 'Lisa Simpson',
      active: true
    }
  ])
}
