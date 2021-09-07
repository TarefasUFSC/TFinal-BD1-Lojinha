
const connection = require("../../database/connection");

module.exports = {
    async getAllProdutos(req, res) {
        var { busca, categorias, quantidade } = req.headers;
        if (busca == undefined) {
            busca = '%%'
        } else {
            busca = '%' + busca + '%'
        }
        if (quantidade == undefined || quantidade == '') {
            quantidade = 10
        } else {
            quantidade = parseInt(quantidade);
        }
        if (categorias == undefined || categorias == '') {

            categorias = []
            const cats = await connection("Categoria").select("*");
            for (i in cats) {
                categorias.push(cats[i].id_Categoria)
            }
        } else {
            categorias = categorias.split('+');
        }
        const prods = await connection("Produto")
            .distinct('Nome').join('ProdutoCategoria', function () {
                this.on('ProdutoCategoria.id_Produto', '=', 'Produto.id_Produto')
            })
            .where('Nome', 'like', busca)
            .whereIn("id_Categoria", categorias)
            .limit(quantidade);

        return res.json({ "response": { "Produtos": prods } })
    },
    async getAllCategorias(req, res) {

        const cats = await connection("Categoria").select("*");
        return res.json({ "response": { "Categorias": cats } })
    },
    async details(req, res) {
        const { id } = req.params;
        const dets = await connection("Produto")
            .select("Produto.*")
            .select("Fornecedor.Nome as Nome_Fornecedor")
            .avg("Comentario.Nota as media")
            .leftJoin("Comentario", "Comentario.id_Produto", "Produto.id_Produto")
            .join("Fornecedor", function () {
                this.on("Fornecedor.id_Fornecedor", "Produto.id_Fornecedor")
            })
            .where("Produto.id_produto", id)
            .groupBy("Produto.id_Produto");

        if (dets.length) {
            const cats = await connection("ProdutoCategoria")
                .select("Categoria.*")
                .leftJoin("Categoria", "ProdutoCategoria.id_Categoria", "Categoria.id_Categoria")
                .where("ProdutoCategoria.id_Produto", id)
            return res.json({ "Detalhes": dets, "Categorias": cats });
        }
        else {
            return res.json({ "Details": "Erro, Produto não encontrado" }); //?
        }
    },
    async newProduto(req, res) {
        return res.json({ "id": "oi" })
    }
};