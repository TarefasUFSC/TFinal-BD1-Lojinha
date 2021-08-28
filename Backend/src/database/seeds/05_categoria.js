
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('Categoria').insert([
        {nome:"Camisa Masculina"},
        {nome:"Camisa Feminina"},

        {nome:"Calça Masculina"},
        {nome:"Calça Feminina"},

        {nome:"Short Masculino"},
        {nome:"Short Feminino"},

        {nome:"Tênis Masculino"},
        {nome:"Tênis Feminino"},

        
        {nome:"Acessório"},
        {nome:"Eletrônicos"},
      ]);
    });
};
