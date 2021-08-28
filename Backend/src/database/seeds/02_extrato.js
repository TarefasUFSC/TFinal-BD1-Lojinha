
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoCliente').del()
    .then(function () {
      // Inserts seed entries
      //Janeiro é mes 0 no Date()
      return knex('ExtratoCliente').insert([
        {Data:parseInt(new Date(2021,07,05).getTime()/1000),id_Cliente:1,Movimentacao:200},
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Cliente:1,Movimentacao:-300},
      ]);
    });
};
