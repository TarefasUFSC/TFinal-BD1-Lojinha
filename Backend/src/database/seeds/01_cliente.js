
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cliente').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cliente').insert([
        {Estado: 'SP',CEP:"08744-060",Cidade:"Mogi",Endereco:"R Paulo l de siq, 926",Complemento:"Casa",Saldo: 0,Senha:"rod2301",Nome:"Rodrigo Ferraz",email:"a@gmail.com"},
        {Estado: 'PR',CEP:"84600-295",Cidade:"União da Vitória",Endereco:"R Dom Pedro II, 876",Complemento:"Casa",Saldo: 0,Senha:"manu0708",Nome:"Manoella",email:"b@gmail.com"},
        {Estado: 'SC',CEP:"89208-400",Cidade:"Joinville",Endereco:"R Angelina, 340",Complemento:"Casa",Saldo: 0,Senha:"pern1207",Nome:"Lucas",email:"c@gmail.com"},
        {Estado: 'PR',CEP:"87970-000",Cidade:"Londrina",Endereco:"R 25 de Dezembro, 123",Complemento:"Casa",Saldo: 0,Senha:"rafa",Nome:"Rafaelli",email:"d@gmail.com"},
        {Estado: 'SC',CEP:"88906-006",Cidade:"Araranguá",Endereco:"R das Begonias, 180",Complemento:"Ap 105",Saldo: 0,Senha:"guarita",Nome:"Gustavo",email:"e@gmail.com"},
        {Estado: 'SP',CEP:"13428-403",Cidade:"Piracicaba",Endereco:"R 10 de Agosto, 357",Complemento:"Casa",Saldo: 0,Senha:"fuinha",Nome:"Rodrigo Neves",email:"f@gmail.com"},
      ]);
    });
};
