
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ListaDeDesejos').del()
    .then(function () {
      // Inserts seed entries
      return knex('ListaDeDesejos').insert([
        {id_Cliente:1,id_Produto:1},
        {id_Cliente:1,id_Produto:2},
        {id_Cliente:1,id_Produto:3},
        {id_Cliente:2,id_Produto:1},
        {id_Cliente:2,id_Produto:3},
      ]);
    });
};
