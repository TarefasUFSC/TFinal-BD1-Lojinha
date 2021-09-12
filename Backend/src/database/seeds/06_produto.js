const { celular, camisa, skinLol, camisa2, sapatenis, bota, bermuda1, bermuda2, calca1, calca2, rel } = require('../imagens')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Produto').del()
    .then(function () {
      // Inserts seed entries
      return knex('Produto').insert([
        { id_Fornecedor: 1, valor: 541.99, Nome: "Celular Bem Ruim", "Descricao": "Um celular fajuto", Imagem: celular, Quantidade: 10 },
        { id_Fornecedor: 2, valor: 100, Nome: "Roupa de Grife masculina", "Descricao": "Camisa Rasgada do Jacaré GG", Imagem: camisa, Quantidade: 10 },
        { id_Fornecedor: 2, valor: 15, Nome: "Skin de LoL pirata", "Descricao": "Skin Cassiopeia", Imagem: skinLol, Quantidade: 43 },
        { id_Fornecedor: 2, valor: 60, Nome: "Camisa Roxa Feminina", "Descricao": "Camisa da GAP tamanho P", Imagem: camisa2, Quantidade: 63 },
        { id_Fornecedor: 3, valor: 279.99, Nome: "Sapatenis Brega", "Descricao": "Sapato de quem ja desistiu da vida, tamanho 44", Imagem: sapatenis, Quantidade: 1000 },
        { id_Fornecedor: 2, valor: 98, Nome: "Bota de Combate Inca", "Descricao": "Sapato feminino ótimo para caminhar no parque", Imagem: bota, Quantidade: 23 },
        { id_Fornecedor: 3, valor: 153, Nome: "Bermuda de praia Homem G", Imagem: bermuda1, Quantidade: 19 },
        { id_Fornecedor: 1, valor: 150, Nome: "Bermuda de praia Mulher GG", Imagem: bermuda2, Quantidade: 19 },
        { id_Fornecedor: 1, valor: 666, Nome: "Calça Masculina", "Descricao": "Tamanho GG e Preta", Imagem: calca1, Quantidade: 42 },
        { id_Fornecedor: 3, valor: 333, Nome: "Calça Jeans Feminina", "Descricao": "Isso aqui ta rasgado não compre.... Tamanho M e azul", Imagem: calca2, Quantidade: 42 },
        { id_Fornecedor: 1, valor: 234, Nome: "Smart Watch", "Descricao": "Relogio inteligente a prova d'agua. Mede Batimento cardiaco.", Imagem: rel, Quantidade: 100 },
      ]);
    });
};
