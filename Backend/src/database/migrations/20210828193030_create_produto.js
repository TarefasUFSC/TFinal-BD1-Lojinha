
exports.up = function(knex) {
    return knex.schema.createTable('Produto', function(table){
        table.increments("id_Produto").primary();
        table.integer('id_Fornecedor')
            .references('id_Fornecedor')
            .inTable('Fornecedor')   
            .notNullable()
        table.string("Imagem").notNullable(); 
        table.decimal("Valor").notNullable();
        table.string("Descricao");
        table.string("Nome",60).notNullable();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Produto');
  };
  