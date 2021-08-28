
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProdutoCategoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProdutoCategoria').insert([
        {id_Produto:1,id_Categoria:10},
        {id_Produto:2,id_Categoria:1},
        {id_Produto:3,id_Categoria:9},
        {id_Produto:3,id_Categoria:10},
      ]);
    });
};
