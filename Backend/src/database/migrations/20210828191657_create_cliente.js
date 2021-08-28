
exports.up = function(knex) {
  return knex.schema.createTable('Cliente', function(table){
      table.increments("id_Cliente").primary();
      table.string("Estado",2).notNullable();
      table.string("CEP",20).notNullable();    
      table.string("Cidade", 58).notNullable(); 
      table.string("Endereco",150).notNullable();   
      table.decimal("Saldo").notNullable();   
      table.text("ImagemPerfil").notNullable();   
      table.string("Senha").notNullable();  
      table.string("Nome").notNullable();   

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Cliente');
};
