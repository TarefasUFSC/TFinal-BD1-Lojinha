
exports.up = function(knex) {
    return knex.schema.createTable('Compra', function(table){
        table.increments("id_Compra").primary();
        table.timestamp('Data').defaultTo(knex.fn.now())
        table.integer('id_Cliente')
            .references('id_Cliente')
            .inTable('Cliente')   
            .notNullable()
        table.decimal("ValorFinal").notNullable(); 
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Compra');
  };
  