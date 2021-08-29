const {celular,camisa,skinLol,camisa2,sapatenis,bota} = require('../imagens')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Produto').del()
    .then(function () {
      // Inserts seed entries
      return knex('Produto').insert([
        {id_Fornecedor:1,valor:541.99,Nome:"Celular Bem Ruim","Descricao":"Um celular fajuto",Imagem:celular,Quantidade:10},
        {id_Fornecedor:2,valor:100,Nome:"Roupa de Grife masculina","Descricao":"Camisa Rasgada do Jacaré GG",Imagem:camisa,Quantidade:10},
        {id_Fornecedor:2,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
        {id_Fornecedor:2,valor:60,Nome:"Camisa Roxa Feminina","Descricao":"Camisa da GAP tamanho P",Imagem:camisa2,Quantidade:63},
        {id_Fornecedor:1,valor:279.99,Nome:"Sapatenis Brega","Descricao":"Sapato de quem ja desistiu da vida, tamanho 44",Imagem:sapatenis,Quantidade:1000},   
        {id_Fornecedor:2,valor:98,Nome:"Bota de Combate Inca","Descricao":"Sapato feminino ótimo para caminhar no parque",Imagem:bota,Quantidade:23},
        
        {id_Fornecedor:1,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
        {id_Fornecedor:2,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
        {id_Fornecedor:1,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
        {id_Fornecedor:2,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
        {id_Fornecedor:1,valor:15,Nome:"Skin de LoL","Descricao":"Skin Cassiopeia",Imagem:skinLol,Quantidade:1},
      ]);
    });
};
