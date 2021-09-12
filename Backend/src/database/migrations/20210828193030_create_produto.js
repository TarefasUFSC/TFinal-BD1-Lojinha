
exports.up = function(knex) {
    return knex.schema.createTable('Produto', function(table){
        table.increments("id_Produto").primary();
        table.integer('id_Fornecedor')
            .references('id_Fornecedor')
            .inTable('Fornecedor')   
            .notNullable()
        table.text("Imagem").notNullable(); //b64
        table.decimal("Valor").notNullable();
        table.integer("Quantidade").notNullable();
        table.text("Descricao");
        table.string("Nome",60).notNullable();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Produto');
  };
  