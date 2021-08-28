
exports.up = function(knex) {
    return knex.schema.createTable('NotaFiscal', function(table){
        table.increments("id_NotaFiscal").primary();
        table.integer('id_Produto')
            .references('id_Produto')
            .inTable('Produto')   
            .notNullable()
        table.string("Documento").notNullable(); //depois ver se tem como mudar pra salvar como um arquivo .txt pro cara fazer o download
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('NotaFiscal');
  };
  