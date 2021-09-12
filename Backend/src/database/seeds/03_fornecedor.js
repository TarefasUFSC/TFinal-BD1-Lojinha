
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Fornecedor').del()
    .then(function () {
      // Inserts seed entries
      return knex('Fornecedor').insert([
        { Estado: 'SC', CEP: "09356-333", Cidade: "Ararangua", Endereco: "Av. Get. Vargas, 123", Senha: "for1", Nome: "João", email: "a@email.com", Saldo: 4286.94 },
        { Estado: 'MG', CEP: "65843-530", Cidade: "Ouro Preto", Endereco: "Rua miranahs,929", Senha: "for2", Nome: "José", email: "b@email.com", Saldo: 1537 },
        { Estado: 'ES', CEP: "08460-090", Cidade: "Vitória", Endereco: "Rua das derrotas, 666", Senha: "for3", Nome: "Pedro", email: "c@email.com", Saldo: 0 },
      ]);
    });
};
