
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ListaDeDesejos').del()
    .then(function () {
      // Inserts seed entries
      return knex('ListaDeDesejos').insert([
      ]);
    });
};
