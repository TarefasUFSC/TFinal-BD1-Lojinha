
exports.up = function(knex) {
    return knex.schema.createTable('ProdutoCategoria', function(table){
        table.increments("id_ProdutoCategoria").primary();
        table.integer('id_Produto')
            .references('id_Produto')
            .inTable('Produto')   
            .notNullable()
        table.integer('id_Categoria')
            .references('id_Categoria')
            .inTable('Categoria')   
            .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ProdutoCategoria');
  };
  