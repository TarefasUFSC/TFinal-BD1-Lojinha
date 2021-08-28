
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ExtratoCliente').del()
    .then(function () {
      // Inserts seed entries
      //Janeiro é mes 0 no Date()
      return knex('ExtratoCliente').insert([
        {Data:parseInt(new Date(2021,07,05).getTime()/1000),id_Cliente:1,Movimentacao:200},
        {Data:parseInt(new Date(2021,07,04).getTime()/1000),id_Cliente:1,Movimentacao:-300},
        {Data:parseInt(new Date(2021,07,01).getTime()/1000),id_Cliente:1,Movimentacao:100},
        {Data:parseInt(new Date(2021,06,25).getTime()/1000),id_Cliente:2,Movimentacao:150},
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Cliente:2,Movimentacao:300},
        {Data:parseInt(new Date(2021,07,12).getTime()/1000),id_Cliente:2,Movimentacao:25},
        {Data:parseInt(new Date(2021,05,25).getTime()/1000),id_Cliente:3,Movimentacao:100},
        {Data:parseInt(new Date(2021,05,30).getTime()/1000),id_Cliente:3,Movimentacao:-100},
        {Data:parseInt(new Date(2021,06,30).getTime()/1000),id_Cliente:3,Movimentacao:30},
        {Data:parseInt(new Date(2021,07,10).getTime()/1000),id_Cliente:4,Movimentacao:-10},
        {Data:parseInt(new Date(2021,07,11).getTime()/1000),id_Cliente:4,Movimentacao:25},
        {Data:parseInt(new Date(2021,07,12).getTime()/1000),id_Cliente:4,Movimentacao:-5},
        {Data:parseInt(new Date(2021,06,26).getTime()/1000),id_Cliente:5,Movimentacao:-15},
        {Data:parseInt(new Date(2021,07,20).getTime()/1000),id_Cliente:5,Movimentacao:60},
        {Data:parseInt(new Date(2021,07,26).getTime()/1000),id_Cliente:5,Movimentacao:-45},
        {Data:parseInt(new Date(2021,04,29).getTime()/1000),id_Cliente:6,Movimentacao:100},
        {Data:parseInt(new Date(2021,05,15).getTime()/1000),id_Cliente:6,Movimentacao:-50},
        {Data:parseInt(new Date(2021,06,23).getTime()/1000),id_Cliente:6,Movimentacao:-50},
    });
};
