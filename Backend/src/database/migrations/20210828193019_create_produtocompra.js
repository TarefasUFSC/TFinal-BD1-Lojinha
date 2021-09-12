
exports.up = function(knex) {
    return knex.schema.createTable('ProdutoCompra', function(table){
        table.increments("id_ProdutoCompra").primary();
        table.integer('id_Produto')
            .references('id_Produto')
            .inTable('Produto')   
            .notNullable()
        table.integer('id_Compra')
            .references('id_Compra')
            .inTable('Compra')   
            .notNullable()
        table.integer("Quantidade").notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ProdutoCompra');
  };
  