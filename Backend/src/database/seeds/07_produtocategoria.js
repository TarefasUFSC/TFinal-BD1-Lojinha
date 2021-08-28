
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProdutoCategoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProdutoCategoria').insert([
      ]);
    });
};
