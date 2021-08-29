
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
        {id_Produto:4,id_Categoria:2},
        {id_Produto:5,id_Categoria:7},
        {id_Produto:6,id_Categoria:8},
        {id_Produto:7,id_Categoria:5},
        {id_Produto:8,id_Categoria:6},
        {id_Produto:9,id_Categoria:3},
        {id_Produto:10,id_Categoria:4},
        {id_Produto:11,id_Categoria:9},
      ]);
    });
};
