
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoFornecedor').del()
    .then(function () {
      // Inserts seed entries
      return knex('ExtratoFornecedor').insert([
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Fornecedor:1,Movimentacao:-300},
      ]);
    });
};
