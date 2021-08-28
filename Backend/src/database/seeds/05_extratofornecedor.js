
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoFornecedor').del()
    .then(function () {
      // Inserts seed entries
      return knex('ExtratoFornecedor').insert([
      ]);
    });
};
