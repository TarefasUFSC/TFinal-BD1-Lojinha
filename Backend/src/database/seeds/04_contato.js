
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Contato').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contato').insert([
        {id_Fornecedor: 1, colName: 'rowValue1'},
      ]);
    });
};
