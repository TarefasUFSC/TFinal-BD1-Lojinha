exports.up = function (knex) {
  return knex.schema.createTable(
    "ListaDeDesejo",
    function (table) {
      table
        .increments("id_ListaDeDesejo")
        .primary();
      table
        .integer("id_Cliente")
        .references("id_Cliente")
        .inTable("Cliente")
        .notNullable();
      table.string("nome").notNullable();
    }
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(
    "ListaDeDesejo"
  );
};
