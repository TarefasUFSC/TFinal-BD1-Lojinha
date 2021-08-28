
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Compra').del()
    .then(function () {
      // Inserts seed entries
      return knex('Compra').insert([
      ]);
    });
};
