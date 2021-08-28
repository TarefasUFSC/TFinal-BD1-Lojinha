const {celular,camisa} = require('../imagens')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Produto').del()
    .then(function () {
      // Inserts seed entries
      return knex('Produto').insert([
        {id_Fornecedor:1,valor:541.99,Nome:"Celular Bem Ruim","Descricao":"Um celular fajuto",Imagem:celular,Quantidade:10},
        {id_Fornecedor:2,valor:100,Nome:"Roupa de Grife masculina","Descricao":"Camisa Rasgada do Jacaré",Imagem:camisa,Quantidade:10}
      ]);
    });
};
