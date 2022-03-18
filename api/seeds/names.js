/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('names').del()
  await knex('names').insert([
    {id: 1, names: 'Salem and Justin'}
  ]);
};
