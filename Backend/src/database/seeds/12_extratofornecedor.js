
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoFornecedor').del()
    .then(function () {
      // Inserts seed entries
      return knex('ExtratoFornecedor').insert([
        {Data:parseInt(new Date(2021,07,06).getTime()/1000),id_Fornecedor:1,Movimentacao:541.99}, //Celular Bem Ruim
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Fornecedor:2,Movimentacao:100}, //Roupa de Grife masculina
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Fornecedor:2,Movimentacao:75}, //Skin de LoL e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,28).getTime()/1000),id_Fornecedor:2,Movimentacao:98}, //Bota de Combate Inca

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Fornecedor:2,Movimentacao:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Fornecedor:1,Movimentacao:279.99}, //Sapatenis Brega
        {Data:parseInt(new Date(2021,07,18).getTime()/1000),id_Fornecedor:2,Movimentacao:98}, //Bota de Combate Inca
        {Data:parseInt(new Date(2021,07,25).getTime()/1000),id_Fornecedor:1,Movimentacao:541.99}, //Celular Bem Ruim

        {Data:parseInt(new Date(2021,05,27).getTime()/1000),id_Fornecedor:2,Movimentacao:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,05,27).getTime()/1000),id_Fornecedor:1,Movimentacao:234}, //Smart watch
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Fornecedor:2,Movimentacao:100}, //Roupa de Grife masculina
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Fornecedor:2,Movimentacao:60}, //Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Fornecedor:1,Movimentacao:279.99}, //Sapatenis Brega

        {Data:parseInt(new Date(2021,07,10).getTime()/1000),id_Fornecedor:2,Movimentacao:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Fornecedor:1,Movimentacao:234}, //Smart Watch
        {Data:parseInt(new Date(2021,07,27).getTime()/1000),id_Fornecedor:1,Movimentacao:303}, //Bermuda de praia Homem G e Bermuda de praia Mulher GG
        {Data:parseInt(new Date(2021,05,20).getTime()/1000),id_Fornecedor:2,Movimentacao:393}, //Camisa Roxa Feminina e Calça Jeans Feminina

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Fornecedor:2,Movimentacao:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Fornecedor:2,Movimentacao:160}, //Roupa de Grife masculina e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,07,26).getTime()/1000),id_Fornecedor:1,Movimentacao:666}, //Calça masculina
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Fornecedor:1,Movimentacao:279.99}, //Sapatenis Brega

        {Data:parseInt(new Date(2021,04,29).getTime()/1000),id_Fornecedor:1,Movimentacao:541.99}, //Celular bem ruim
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Fornecedor:1,Movimentacao:150}, //Bermuda de praia Mulher GG
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Fornecedor:2,Movimentacao:60}, //Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Fornecedor:1,Movimentacao:234}, //Smart watch
        {Data:parseInt(new Date(2021,07,19).getTime()/1000),id_Fornecedor:2,Movimentacao:333}, //Calça Jeans Feminina
      ]);
    });
};
