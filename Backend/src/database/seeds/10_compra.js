
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Compra').del()
    .then(function () {
      // Inserts seed entries
      return knex('Compra').insert([
        {Data:parseInt(new Date(2021,07,06).getTime()/1000),id_Cliente:1,ValorFinal:541.99}, //Celular Bem Ruim
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Cliente:1,ValorFinal:100}, //Roupa de Grife masculina
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:1,ValorFinal:75}, //Skin de LoL e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,28).getTime()/1000),id_Cliente:1,ValorFinal:98}, //Bota de Combate Inca

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:2,ValorFinal:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:2,ValorFinal:279.99}, //Sapatenis Brega
        {Data:parseInt(new Date(2021,07,18).getTime()/1000),id_Cliente:2,ValorFinal:98}, //Bota de Combate Inca
        {Data:parseInt(new Date(2021,07,25).getTime()/1000),id_Cliente:2,ValorFinal:541.99}, //Celular Bem Ruim

        {Data:parseInt(new Date(2021,05,27).getTime()/1000),id_Cliente:3,ValorFinal:249}, //Skin de LoL e Smart watch
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:3,ValorFinal:100}, //Roupa de Grife masculina
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:3,ValorFinal:60}, //Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:3,ValorFinal:279.99}, //Sapatenis Brega

        {Data:parseInt(new Date(2021,07,10).getTime()/1000),id_Cliente:4,ValorFinal:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:4,ValorFinal:234}, //Smart Watch
        {Data:parseInt(new Date(2021,07,27).getTime()/1000),id_Cliente:4,ValorFinal:303}, //Bermuda de praia Homem G e Bermuda de praia Mulher GG
        {Data:parseInt(new Date(2021,05,20).getTime()/1000),id_Cliente:4,ValorFinal:393}, //Camisa Roxa Feminina e Calça Jeans Feminina

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:5,ValorFinal:15}, //Skin de LoL
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:5,ValorFinal:160}, //Roupa de Grife masculina e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,07,26).getTime()/1000),id_Cliente:5,ValorFinal:666}, //Calça masculina
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:5,ValorFinal:279.99}, //Sapatenis Brega

        {Data:parseInt(new Date(2021,04,29).getTime()/1000),id_Cliente:6,ValorFinal:541.99}, //Celular bem ruim
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Cliente:6,ValorFinal:210}, //Bermuda de praia Mulher GG e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Cliente:6,ValorFinal:234}, //Smart watch
        {Data:parseInt(new Date(2021,07,19).getTime()/1000),id_Cliente:6,ValorFinal:333}, //Calça Jeans Feminina
      ]);
    });
};
