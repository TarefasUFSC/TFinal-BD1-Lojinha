
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Compra').del()
    .then(function () {
      // Inserts seed entries
      return knex('Compra').insert([
        {Data:parseInt(new Date(2021,07,06).getTime()/1000),id_Cliente:1,ValorFinal:541.99}, //Celular Bem Ruim
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Cliente:1,ValorFinal:300}, //Roupa de Grife masculina x3
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:1,ValorFinal:75}, //Skin de LoL e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,06,28).getTime()/1000),id_Cliente:1,ValorFinal:196}, //Bota de Combate Inca x2

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:2,ValorFinal:60}, //Skin de LoL x4
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:2,ValorFinal:279.99}, //Sapatenis Brega
        {Data:parseInt(new Date(2021,07,18).getTime()/1000),id_Cliente:2,ValorFinal:98}, //Bota de Combate Inca
        {Data:parseInt(new Date(2021,07,25).getTime()/1000),id_Cliente:2,ValorFinal:541.99}, //Celular Bem Ruim

        {Data:parseInt(new Date(2021,05,27).getTime()/1000),id_Cliente:3,ValorFinal:249}, //Skin de LoL e Smart watch
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:3,ValorFinal:500}, //Roupa de Grife masculina x5
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Cliente:3,ValorFinal:120}, //Camisa Roxa Feminina x2
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:3,ValorFinal:279.99}, //Sapatenis Brega

        {Data:parseInt(new Date(2021,07,10).getTime()/1000),id_Cliente:4,ValorFinal:90}, //Skin de LoL x6
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:4,ValorFinal:234}, //Smart Watch
        {Data:parseInt(new Date(2021,07,27).getTime()/1000),id_Cliente:4,ValorFinal:603}, //Bermuda de praia Homem G e Bermuda de praia Mulher GG x3
        {Data:parseInt(new Date(2021,05,20).getTime()/1000),id_Cliente:4,ValorFinal:453}, //Camisa Roxa Feminina x2 e Calça Jeans Feminina

        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:5,ValorFinal:30}, //Skin de LoL x2
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:5,ValorFinal:160}, //Roupa de Grife masculina e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,07,26).getTime()/1000),id_Cliente:5,ValorFinal:666}, //Calça masculina
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:5,ValorFinal:559.98}, //Sapatenis Brega x2

        {Data:parseInt(new Date(2021,04,29).getTime()/1000),id_Cliente:6,ValorFinal:541.99}, //Celular bem ruim
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Cliente:6,ValorFinal:270}, //Bermuda de praia Mulher GG e Camisa Roxa Feminina x2
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Cliente:6,ValorFinal:234}, //Smart watch
        {Data:parseInt(new Date(2021,07,19).getTime()/1000),id_Cliente:6,ValorFinal:666}, //Calça Jeans Feminina x2

        {Data:parseInt(new Date(2021,09,01).getTime()/1000),id_Cliente:1,ValorFinal:432.99}, //Sapatenis Brega e Bermuda de praia Homem
        {Data:parseInt(new Date(2021,09,03).getTime()/1000),id_Cliente:2,ValorFinal:666}, //Calça Jeans Feminina x2
        {Data:parseInt(new Date(2021,09,05).getTime()/1000),id_Cliente:3,ValorFinal:468}, //Smart watch x2
        {Data:parseInt(new Date(2021,09,07).getTime()/1000),id_Cliente:4,ValorFinal:1332}, //Calça masculina x2
        {Data:parseInt(new Date(2021,09,09).getTime()/1000),id_Cliente:5,ValorFinal:533}, //Calça Jeans Feminina e Roupa de Grife masculina x2
        {Data:parseInt(new Date(2021,09,11).getTime()/1000),id_Cliente:6,ValorFinal:158}, //Skin de LoL x4 e Bota de combate Inca
      ]);
    });
};
