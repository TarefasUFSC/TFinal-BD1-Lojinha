
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ProdutoCompra').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProdutoCompra').insert([        
        {id_Compra:1,id_Produto:1,Quantidade:1},

        {id_Compra:2,id_Produto:2,Quantidade:1},

        {id_Compra:3,id_Produto:3,Quantidade:1},
        {id_Compra:3,id_Produto:4,Quantidade:1},

        {id_Compra:4,id_Produto:6,Quantidade:1},
        
        {id_Compra:5,id_Produto:3,Quantidade:1},
        
        {id_Compra:6,id_Produto:5,Quantidade:1},
        
        {id_Compra:7,id_Produto:6,Quantidade:1},
          
        {id_Compra:8,id_Produto:1,Quantidade:1},
        
        {id_Compra:9,id_Produto:3,Quantidade:1},
      
        {id_Compra:10,id_Produto:2,Quantidade:1},
        
        {id_Compra:11,id_Produto:4,Quantidade:1},
        
        {id_Compra:12,id_Produto:5,Quantidade:1},
        
        {id_Compra:13,id_Produto:3,Quantidade:1},
        
        {id_Compra:14,id_Produto:11,Quantidade:1},
        
        {id_Compra:15,id_Produto:7,Quantidade:1},
        {id_Compra:15,id_Produto:8,Quantidade:1},
        
        {id_Compra:16,id_Produto:4,Quantidade:1},
        {id_Compra:16,id_Produto:10,Quantidade:1},
        
        {id_Compra:17,id_Produto:3,Quantidade:1},
        
        {id_Compra:18,id_Produto:2,Quantidade:1},
        {id_Compra:18,id_Produto:4,Quantidade:1},
        
        {id_Compra:19,id_Produto:9,Quantidade:1},
        
        {id_Compra:20,id_Produto:5,Quantidade:1},
        
        {id_Compra:21,id_Produto:1,Quantidade:1},
        
        {id_Compra:22,id_Produto:8,Quantidade:1},
        {id_Compra:22,id_Produto:4,Quantidade:1},
        
        {id_Compra:23,id_Produto:11,Quantidade:1},
        
        {id_Compra:24,id_Produto:10,Quantidade:1},
      ]);
    });
};
