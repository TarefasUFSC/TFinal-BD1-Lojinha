
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('Categoria').insert([
        {nome_categoria:"Camisa Masculina"},
        {nome_categoria:"Camisa Feminina"},

        {nome_categoria:"Calça Masculina"},
        {nome_categoria:"Calça Feminina"},

        {nome_categoria:"Short Masculino"},
        {nome_categoria:"Short Feminino"},

        {nome_categoria:"Tênis Masculino"},
        {nome_categoria:"Tênis Feminino"},

        
        {nome_categoria:"Acessório"},
        {nome_categoria:"Eletrônicos"},
      ]);
    });
};
