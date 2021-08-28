
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('Categoria').insert([
      ]);
    });
};
