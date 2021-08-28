
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProdutoCompra').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProdutoCompra').insert([
      ]);
    });
};
