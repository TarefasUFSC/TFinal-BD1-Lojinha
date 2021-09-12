
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Comentario').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comentario').insert([
        { id_Produto: 1, id_cliente: 1, Descricao: "Esse modelo recebe 5g?", Data: parseInt(new Date(2021, 07, 05).getTime() / 1000) },
        { id_Produto: 1, id_cliente: 2, Descricao: "É touch?", Data: parseInt(new Date(2021, 07, 06).getTime() / 1000) },
        { id_Produto: 1, id_cliente: 3, Descricao: "Gostei! Ele é muito ruim", Data: parseInt(new Date(2021, 07, 15).getTime() / 1000), Nota: 8 },

        { id_Produto: 2, id_cliente: 4, Descricao: "Tem outro anuncio com outro tamanho?", Data: parseInt(new Date(2021, 06, 07).getTime() / 1000) },
        { id_Produto: 2, id_cliente: 5, Descricao: "É origina?", Data: parseInt(new Date(2021, 06, 09).getTime() / 1000) },
        { id_Produto: 2, id_cliente: 6, Descricao: "Comprei e não serviu... E o vendedo não me responde. NÃO COMPREM!!", Data: parseInt(new Date(2021, 06, 12).getTime() / 1000), Nota: 1 },
      ]);
    });
};
