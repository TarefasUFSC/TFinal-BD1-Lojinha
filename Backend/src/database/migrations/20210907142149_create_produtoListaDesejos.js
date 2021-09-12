exports.up = function (knex) {
  return knex.schema.createTable(
    "ProdutoListaDeDesejo",
    function (table) {
      table
        .increments("id_ProdutoListaDeDesejo")
        .primary();
      table
        .integer("id_ListaDeDesejo")
        .references("id_ListaDeDesejo")
        .inTable("ListaDeDesejo")
        .notNullable();
      table
        .integer("id_Produto")
        .references("id_Produto")
        .inTable("Produto")
        .notNullable();
    }
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(
    "ProdutoListaDeDesejo"
  );
};
