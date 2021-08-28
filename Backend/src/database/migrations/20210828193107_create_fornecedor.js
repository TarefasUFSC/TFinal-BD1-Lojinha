
exports.up = function(knex) {
    return knex.schema.createTable('Fornecedor', function(table){
        table.increments("id_Fornecedor").primary();
        table.string("Nome",60).notNullable();
        table.string("Email").notNullable();
        table.string("Senha").notNullable();
        table.string("ImagemPerfil").notNullable(); 
        table.string("CEP");
        table.string("Estado",2);
        table.string("Endereco");
        table.string("Cidade",58);
        table.string("Descricao");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Fornecedor');
  };
  