
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ExtratoFornecedor').del()
    .then(function () {
      // Inserts seed entries
      return knex('ExtratoFornecedor').insert([
        { Data: parseInt(new Date(2021, 07, 06).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 541.99 }, //Celular Bem Ruim
        { Data: parseInt(new Date(2021, 07, 04).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 300 }, //Roupa de Grife masculina x3
        { Data: parseInt(new Date(2021, 07, 15).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 75 }, //Skin de LoL e Camisa Roxa Feminina
        { Data: parseInt(new Date(2021, 06, 28).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 196 }, //Bota de Combate Inca x2

        { Data: parseInt(new Date(2021, 06, 26).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 60 }, //Skin de LoL x4
        { Data: parseInt(new Date(2021, 06, 31).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 279.99 }, //Sapatenis Brega
        { Data: parseInt(new Date(2021, 07, 18).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 98 }, //Bota de Combate Inca
        { Data: parseInt(new Date(2021, 07, 25).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 541.99 }, //Celular Bem Ruim

        { Data: parseInt(new Date(2021, 05, 27).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 15 }, //Skin de LoL
        { Data: parseInt(new Date(2021, 05, 27).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 234 }, //Smart watch
        { Data: parseInt(new Date(2021, 05, 30).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 500 }, //Roupa de Grife masculina x5
        { Data: parseInt(new Date(2021, 06, 30).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 120 }, //Camisa Roxa Feminina x2
        { Data: parseInt(new Date(2021, 06, 31).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 279.99 }, //Sapatenis Brega

        { Data: parseInt(new Date(2021, 07, 10).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 90 }, //Skin de LoL x6
        { Data: parseInt(new Date(2021, 07, 15).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 234 }, //Smart Watch
        { Data: parseInt(new Date(2021, 07, 27).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 450 }, //Bermuda de praia Mulher GG x3
        { Data: parseInt(new Date(2021, 07, 27).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 153 }, //Bermuda de praia Homem G
        { Data: parseInt(new Date(2021, 05, 20).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 120 }, //Camisa Roxa Feminina x2
        { Data: parseInt(new Date(2021, 05, 20).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 333 }, //Calça Jeans Feminina

        { Data: parseInt(new Date(2021, 06, 26).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 30 }, //Skin de LoL x2
        { Data: parseInt(new Date(2021, 07, 20).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 160 }, //Roupa de Grife masculina e Camisa Roxa Feminina
        { Data: parseInt(new Date(2021, 07, 26).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 666 }, //Calça masculina
        { Data: parseInt(new Date(2021, 05, 30).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 559.98 }, //Sapatenis Brega x2

        { Data: parseInt(new Date(2021, 04, 29).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 541.99 }, //Celular bem ruim
        { Data: parseInt(new Date(2021, 05, 15).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 150 }, //Bermuda de praia Mulher GG
        { Data: parseInt(new Date(2021, 05, 15).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 120 }, //Camisa Roxa Feminina x2
        { Data: parseInt(new Date(2021, 06, 23).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 234 }, //Smart watch
        { Data: parseInt(new Date(2021, 07, 19).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 666 }, //Calça Jeans Feminina x2

        { Data: parseInt(new Date(2021, 09, 01).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 432.99 }, //Sapatenis Brega e Bermuda de praia Homem
        { Data: parseInt(new Date(2021, 09, 03).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 666 }, //Calça Jeans Feminina x2
        { Data: parseInt(new Date(2021, 09, 05).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 468 }, //Smart watch x2
        { Data: parseInt(new Date(2021, 09, 07).getTime() / 1000), id_Fornecedor: 1, Movimentacao: 1332 }, //Calça masculina x2
        { Data: parseInt(new Date(2021, 09, 09).getTime() / 1000), id_Fornecedor: 3, Movimentacao: 333 }, //Calça Jeans Feminina
        { Data: parseInt(new Date(2021, 09, 09).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 200 }, //Roupa de Grife masculina x2
        { Data: parseInt(new Date(2021, 09, 11).getTime() / 1000), id_Fornecedor: 2, Movimentacao: 158 }, //Skin de LoL x4 e Bota de combate Inca
      ]);
    });
};
