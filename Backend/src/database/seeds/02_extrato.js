
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoCliente').del()
    .then(function () {
      // Inserts seed entries
      //Janeiro é mes 0 no Date()
      return knex('ExtratoCliente').insert([
        {Data:parseInt(new Date(2021,03,15).getTime()/1000),id_Cliente:1,Movimentacao:250},
        {Data:parseInt(new Date(2021,04,15).getTime()/1000),id_Cliente:1,Movimentacao:250},
        {Data:parseInt(new Date(2021,06,28).getTime()/1000),id_Cliente:1,Movimentacao:-196}, //Bota de Combate Inca x2
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Cliente:1,Movimentacao:200},
        {Data:parseInt(new Date(2021,07,01).getTime()/1000),id_Cliente:1,Movimentacao:150},
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Cliente:1,Movimentacao:-300}, //Roupa de Grife masculina x3
        {Data:parseInt(new Date(2021,07,05).getTime()/1000),id_Cliente:1,Movimentacao:270},
        {Data:parseInt(new Date(2021,07,06).getTime()/1000),id_Cliente:1,Movimentacao:-541.99}, //Celular Bem Ruim
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:1,Movimentacao:-75}, //Skin de LoL e Camisa Roxa Feminina saldofinal = 7

        {Data:parseInt(new Date(2021,06,25).getTime()/1000),id_Cliente:2,Movimentacao:500},
        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:2,Movimentacao:-60}, //Skin de LoL x4
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:2,Movimentacao:-279.99}, //Sapatenis Brega
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:2,Movimentacao:250},
        {Data:parseInt(new Date(2021,07,18).getTime()/1000),id_Cliente:2,Movimentacao:-98}, //Bota de Combate Inca
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:2,Movimentacao:250},
        {Data:parseInt(new Date(2021,07,25).getTime()/1000),id_Cliente:2,Movimentacao:-541.99}, //Celular Bem Ruim saldofinal = 20

        {Data:parseInt(new Date(2021,05,26).getTime()/1000),id_Cliente:3,Movimentacao:300},
        {Data:parseInt(new Date(2021,05,27).getTime()/1000),id_Cliente:3,Movimentacao:-249}, //Skin de LoL e Smart watch
        {Data:parseInt(new Date(2021,05,28).getTime()/1000),id_Cliente:3,Movimentacao:150},
        {Data:parseInt(new Date(2021,05,29).getTime()/1000),id_Cliente:3,Movimentacao:300},
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:3,Movimentacao:-500}, //Roupa de Grife masculina x5
        {Data:parseInt(new Date(2021,06,16).getTime()/1000),id_Cliente:3,Movimentacao:200},
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Cliente:3,Movimentacao:90},
        {Data:parseInt(new Date(2021,06,29).getTime()/1000),id_Cliente:3,Movimentacao:110},
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Cliente:3,Movimentacao:-120}, //Camisa Roxa Feminina x2
        {Data:parseInt(new Date(2021,06,31).getTime()/1000),id_Cliente:3,Movimentacao:-279.99}, //Sapatenis Brega saldofinal = 1

        {Data:parseInt(new Date(2021,05,18).getTime()/1000),id_Cliente:4,Movimentacao:460},
        {Data:parseInt(new Date(2021,05,20).getTime()/1000),id_Cliente:4,Movimentacao:-453}, //Camisa Roxa Feminina x2 e Calça Jeans Feminina
        {Data:parseInt(new Date(2021,07,09).getTime()/1000),id_Cliente:4,Movimentacao:320},
        {Data:parseInt(new Date(2021,07,10).getTime()/1000),id_Cliente:4,Movimentacao:-90}, //Skin de LoL x6
        {Data:parseInt(new Date(2021,07,15).getTime()/1000),id_Cliente:4,Movimentacao:-234}, //Smart Watch
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:4,Movimentacao:600},
        {Data:parseInt(new Date(2021,07,27).getTime()/1000),id_Cliente:4,Movimentacao:-603}, //Bermuda de praia Homem G e Bermuda de praia Mulher GG x3 saldofinal = 0

        {Data:parseInt(new Date(2021,05,26).getTime()/1000),id_Cliente:5,Movimentacao:600},
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:5,Movimentacao:-559.98}, //Sapatenis Brega x2
        {Data:parseInt(new Date(2021,06,10).getTime()/1000),id_Cliente:5,Movimentacao:500},
        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:5,Movimentacao:-30}, //Skin de LoL x2
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:5,Movimentacao:-160}, //Roupa de Grife masculina e Camisa Roxa Feminina
        {Data:parseInt(new Date(2021,07,23).getTime()/1000),id_Cliente:5,Movimentacao:350},
        {Data:parseInt(new Date(2021,07,26).getTime()/1000),id_Cliente:5,Movimentacao:-666}, //Calça masculina saldofinal = 34

        {Data:parseInt(new Date(2021,04,28).getTime()/1000),id_Cliente:6,Movimentacao:550},
        {Data:parseInt(new Date(2021,04,29).getTime()/1000),id_Cliente:6,Movimentacao:-541.99}, //Celular bem ruim
        {Data:parseInt(new Date(2021,05,14).getTime()/1000),id_Cliente:6,Movimentacao:270},
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Cliente:6,Movimentacao:-270}, //Bermuda de praia Mulher GG e Camisa Roxa Feminina x2
        {Data:parseInt(new Date(2021,06,22).getTime()/1000),id_Cliente:6,Movimentacao:250},
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Cliente:6,Movimentacao:-234}, //Smart watch
        {Data:parseInt(new Date(2021,07,18).getTime()/1000),id_Cliente:6,Movimentacao:650},
        {Data:parseInt(new Date(2021,07,19).getTime()/1000),id_Cliente:6,Movimentacao:-666}, //Calça Jeans Feminina x2 saldofinal = 8
      ]);
    });
};
