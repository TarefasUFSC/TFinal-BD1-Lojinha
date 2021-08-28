
exports.up = function(knex) {
  return knex.schema.createTable('Cliente', function(table){
      table.increments("id_Cliente").primary();
      table.string("Estado",2);
      table.string("CEP",20);  
      table.string("Cidade", 58); 
      table.string("Endereco",150);   
      table.decimal("Saldo").notNullable();   
      table.text("ImagemPerfil"); 
      table.string("Senha").notNullable();  
      table.string("Nome").notNullable();   

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Cliente');
};
