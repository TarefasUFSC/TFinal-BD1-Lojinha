
exports.up = function(knex) {
  knex.schema.createTable('Cliente', function(table){
      table.integer("id_Cliente").primary();
      table.string("Estado").notNullable();
      table.string("CEP",20).notNullable();    
      table.string("Cidade", 50).notNullable(); 
      table.string("Endereco",150).notNullable();   
      table.float("Saldo").notNullable();   
      table.string("ImagemPerfil").notNullable();   
      table.string("Senha").notNullable();  
      table.string("Nome").notNullable();   

  })
};

exports.down = function(knex) {
  
};
