
exports.up = function(knex) {
    return knex.schema.createTable('Fornecedor', function(table){
        table.increments("id_Fornecedor").primary();
        table.string("Nome",60).notNullable();
        table.string("Email").notNullable();
        table.string("Senha").notNullable();
        table.text("ImagemPerfil"); 
        table.string("CEP",20);
        table.string("Estado",2);
        table.string("Endereco");
        table.string("Cidade",58);
        table.text("Descricao");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Fornecedor');
  };
  