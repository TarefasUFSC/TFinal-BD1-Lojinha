const connection = require("../../database/connection");

module.exports = {
    async getVendasById(req, res) {
        const { id } = req.params;
        let { reqid, reqtype, quantidade } = req.headers;
        if (!quantidade) {
            quantidade = 10;
        }
        if (parseInt(reqid) != parseInt(id) || reqtype != "1") {

            return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
        }
        const pvendas = await connection("ProdutoCompra")
            .select("ProdutoCompra.*")
            .select("Produto.Nome")
            .leftJoin("Produto", "Produto.id_Produto", "ProdutoCompra.id_Produto")
            .where("Produto.id_Fornecedor", id)
        if (!pvendas.length) {
            return res.status(404).json({ "Erro": "Nenhuma venda encontrada para este fornecedor" });
        }
        let vendas = [];
        for (i in pvendas) {
            let achou = false;
            if (vendas.length > 0) {
                for (j in vendas) {
                    if (vendas[j]["id_Compra"] == pvendas[i]["idCompra"]) {
                        vendas[j]["Produtos"].push(pvendas[i]);
                        achou = true;
                        break;
                    }
                }
            }
            if (!achou) {
                vendas.push({
                    "id_Compra": pvendas[i]["id_Compra"],
                    "Produtos": [pvendas[i]]
                })
            }
        }
        return res.json({ "Vendas": vendas.slice(0, quantidade) })
    }
}