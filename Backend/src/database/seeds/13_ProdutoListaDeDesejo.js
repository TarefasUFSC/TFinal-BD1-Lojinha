exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ProdutoListaDeDesejo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ProdutoListaDeDesejo").insert([
        { id_ListaDeDesejo: 1, id_Produto: 1 },
        { id_ListaDeDesejo: 1, id_Produto: 2 },
        { id_ListaDeDesejo: 1, id_Produto: 3 },
        { id_ListaDeDesejo: 2, id_Produto: 3 },
        { id_ListaDeDesejo: 2, id_Produto: 1 },
        { id_ListaDeDesejo: 3, id_Produto: 3 },
        { id_ListaDeDesejo: 3, id_Produto: 4 },
        { id_ListaDeDesejo: 3, id_Produto: 5 },
      ]);
    });
};
