
exports.up = function(knex) {
    return knex.schema.createTable('ListaDeDesejos', function(table){
        table.increments("id_ListaDeDesejos").primary();
        table.integer('id_Cliente')
            .references('id_Cliente')
            .inTable('Cliente')   
            .notNullable()
        table.integer('id_Produto')
            .references('id_Produto')
            .inTable('Produto')   
            .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ListaDeDesejos');
  };
  