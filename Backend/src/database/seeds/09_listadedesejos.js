exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ListaDeDesejo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ListaDeDesejo").insert([
        { id_Cliente: 1, nome: "Favoritos" },
        { id_Cliente: 1, nome: "Natal" },
        { id_Cliente: 2, nome: "A comprar" },
      ]);
    });
};
