
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Extrato').del()
    .then(function () {
      // Inserts seed entries
      return knex('Extrato').insert([
      ]);
    });
};
