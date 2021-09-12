
exports.up = function(knex) {
    return knex.schema.createTable('Contato', function(table){
        table.increments("id_Contato").primary();
        table.integer('id_Fornecedor')
            .references('id_Fornecedor')
            .inTable('Fornecedor')   
            .notNullable()
        table.string("Contato").notNullable(); //depois ver se tem como mudar pra salvar como um arquivo .txt pro cara fazer o download
        table.string("nm_rede_social");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Contato');
  };
  