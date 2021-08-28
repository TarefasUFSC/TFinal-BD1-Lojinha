
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Extrato').del()
    .then(function () {
      // Inserts seed entries
      //Janeiro é mes 0 no Date()
      return knex('Extrato').insert([
        {Data:parseInt(new Date(2021,07,05).getTime()/1000),id_Cliente:1,Movimentacao:200},
      ]);
    });
};
