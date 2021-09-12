
exports.up = function(knex) {
    return knex.schema.createTable('Categoria', function(table){
        table.increments("id_Categoria").primary();
        table.string("nome_categoria").notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Categoria');
  };
  