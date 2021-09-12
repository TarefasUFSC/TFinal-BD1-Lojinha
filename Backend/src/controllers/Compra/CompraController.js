
const connection = require("../../database/connection");

module.exports = {
    async newCompra(req, res) {
        const { id_Cliente, total, comissao, carrinho } = req.body;
        const { reqid, reqtype } = req.headers;

        // Verifica os parametros
        if (!carrinho.length) {
            return res.status(400).json({ "Erro": "Carrinho Vazio" })
        }
        if (parseInt(reqid) != parseInt(id_Cliente) && reqtype != "0") {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }

        // Verifica o saldo
        const userSaldo = await connection("Cliente").select("Saldo").where("id_Cliente", id_Cliente);
        if (!userSaldo.length) {
            return res.status(404).json({ "Erro": "Usuario não encontrado" })
        }
        if (parseInt(userSaldo[0]["Saldo"]) < parseInt(total)) {
            return res.status(400).json({ "Erro": "Saldo Insuficiente" })
        }

        // Realiza a compra
        const compra = await connection("Compra").insert({
            "Data": parseInt(Date.now() / 1000),
            "id_Cliente": id_Cliente,
            "ValorFinal": total
        })
        if (!compra.length) {
            return res.status(400).json({ "Erro": "Erro ao completar a compra" })
        }

        // Processa os produtos
        let atualizaVendedor = []
        let atualizaProduto = []
        for (i in carrinho) {

            const prd = await connection("Produto").select("Valor", "id_Fornecedor", "Quantidade").where("id_Produto", carrinho[i]["id_Produto"])
            if (!prd.length) {
                return res.status(400).json({ "Erro": "Erro ao processar um dos produto" })
            }
            if (parseInt(prd[0]["Quantidade"]) < parseInt(carrinho[i]["quantidade"])) {
                return res.status(400).json({ "Erro": "Erro ao processar um dos produto - Estoque insuficiente" })
            }
            const prComp = await connection("ProdutoCompra")
                .insert({
                    "id_Produto": carrinho[i]["id_Produto"],
                    "id_Compra": compra[0],
                    "Quantidade": carrinho[i]["quantidade"]
                })
            atualizaProduto.push([parseInt(prd[0]["Quantidade"]) - parseInt(carrinho[i]["quantidade"]), carrinho[i]["id_Produto"]])


            atualizaVendedor.push([parseFloat(prd[0]["Valor"]) * parseInt(carrinho[i]["quantidade"]), prd[0]["id_Fornecedor"]])

        }
        //atualiza o saldo do cliente
        const newSaldo = await connection("Cliente")
            .update("Saldo", String(
                parseFloat(userSaldo[0]["Saldo"]) - parseFloat(total)
            ))
            .where("id_Cliente", id_Cliente)
        if (!newSaldo) {
            return res.status(400).json({ "Erro": "Erro ao atualizar o saldo" })
        }
        const ext = await connection("ExtratoCliente").insert({
            "Data": parseInt(Date.now() / 1000),
            "id_Cliente": id_Cliente,
            "Movimentacao": (total * (-1))
        })
        if (!ext.length) {
            return res.status(400).json({ "Erro": "Erro ao atualizar o extrato" })
        }

        // atualiza o saldo dos vendedores
        for (i in atualizaVendedor) {
            const moviment = atualizaVendedor[i][0]
            const id_forn = atualizaVendedor[i][1]

            const forn = await connection("Fornecedor").select("Saldo").where("id_Fornecedor", id_forn);
            const nforn = await connection("Fornecedor").update("Saldo", parseFloat(forn[0]["Saldo"]) + moviment).where("id_Fornecedor", id_forn);
            const extforn = await connection("ExtratoFornecedor").insert({
                "Data": parseInt(Date.now() / 1000),
                "id_Fornecedor": id_forn,
                "Movimentacao": moviment
            })
        }

        // atualiza as quantidades dos produtos
        for (i in atualizaProduto) {
            const quant = atualizaProduto[i][0]
            const id_prod = atualizaProduto[i][1]

            const nPrd = await connection("Produto")
                .update("Quantidade", quant)
                .where("id_Produto", id_prod)
        }

        return res.json({ "Response": "Compra Realizada com Sucesso!" })
    }
}