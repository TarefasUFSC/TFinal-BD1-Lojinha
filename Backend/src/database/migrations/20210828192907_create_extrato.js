
exports.up = function(knex) {
    return knex.schema.createTable('Extrato', function(table){
        table.increments("id_Extrato").primary();
        table.timestamp("Data").notNullable();
        table.foreign('id_Cliente')
            .references('id_Cliente')
            .inTable('Cliente')   
        table.decimal("Movimentação", 58).notNullable(); 
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Extrato');
  };
  