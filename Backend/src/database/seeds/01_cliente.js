
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cliente').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cliente').insert([
        {Estado: 'SP',CEP:"08744-060",Cidade:"Mogi",Endereco:"R Paulo l de siq, 926",Saldo: 0,Senha:"rod2301",Nome:"Rodrigo"},
      ]);
    });
};
