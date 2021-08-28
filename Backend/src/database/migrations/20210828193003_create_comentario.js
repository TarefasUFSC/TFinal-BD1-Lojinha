
exports.up = function(knex) {
    return knex.schema.createTable('Comentario', function(table){
        table.increments("id_Comentario").primary();
        table.integer('id_Produto')
            .references('id_Produto')
            .inTable('Produto')   
            .notNullable()
        table.integer('id_Cliente')
            .references('id_Cliente')
            .inTable('Cliente')   
            .notNullable()
        table.string("Descricao",140).notNullable();
        table.timestamp("Data").notNullable();
        table.integer("Nota"); //de 0 a 10
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Comentario');
  };
  