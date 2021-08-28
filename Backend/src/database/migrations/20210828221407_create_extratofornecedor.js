
exports.up = function(knex) {
    return knex.schema.createTable('ExtratoFornecedor', function(table){
        table.increments("id_ExtratoFornecedor").primary();
        table.timestamp('Data').defaultTo(knex.fn.now())
        table.integer('id_Fornecedor')
            .references('id_Fornecedor')
            .inTable('Cliente')   
            .notNullable()
        table.decimal("Movimentacao").notNullable(); 
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ExtratoFornecedor');
  };
  