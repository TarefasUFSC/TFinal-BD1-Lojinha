
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Extrato').del()
    .then(function () {
      // Inserts seed entries
      return knex('Extrato').insert([
        {Data:new Date(2021,08,05).getTime(),id_Cliente:1,Movimentacao:200},
      ]);
    });
};
