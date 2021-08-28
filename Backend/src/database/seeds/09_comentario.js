
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Comentario').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comentario').insert([
      ]);
    });
};
