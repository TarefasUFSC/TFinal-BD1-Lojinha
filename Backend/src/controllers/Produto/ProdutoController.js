
const connection = require("../../database/connection");

module.exports = {
    async getAllProdutos(req,res){
        var {busca,categorias,quantidade} = req.headers;
        if(busca == undefined){
            busca = '%%'
        }else{
            busca = '%'+busca+'%'
        }
        if(quantidade == undefined || quantidade == ''){
            quantidade = 10
        }else{
            quantidade = parseInt(quantidade);
        }
        if(categorias == undefined || categorias == ''){
            
            categorias = []
            const cats = await connection("Categoria").select("*");
            for(i in cats){
                categorias.push(cats[i].id_Categoria)
            }
        }else{
            categorias = categorias.split('+');
        }
        const prods = await connection("Produto")
                .distinct('Nome').join('ProdutoCategoria', function() {
                this.on('ProdutoCategoria.id_Produto', '=', 'Produto.id_Produto')
                })
                .where('Nome', 'like', busca)
                .whereIn("id_Categoria",categorias)
                .limit(quantidade);
                
            return res.json({"response":{"Produtos":prods}})
    },
    async getAllCategorias(req,res){
        
        const cats = await connection("Categoria").select("*");
        return res.json({"response":{"Categorias":cats}})
    }
};