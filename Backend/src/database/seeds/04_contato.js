
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Contato').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contato').insert([
        {id_Fornecedor: 1, Contato: '@sadDetona',nm_rede_social:"Twitter"},
        {id_Fornecedor: 1, Contato: '@forneSUS',nm_rede_social:"Instagram"},
        {id_Fornecedor: 2, Contato: 'loja.dobras@gmail.com',nm_rede_social:"Gmail"},
        {id_Fornecedor: 3, Contato: 'facebook.com/FornecedorDeCocaina',nm_rede_social:"Facebook"},
        {id_Fornecedor: 3, Contato: '@dogramais',nm_rede_social:"Twitter"},
        {id_Fornecedor: 3, Contato: '@DograMais',nm_rede_social:"Instagram"},
      ]);
    });
};
