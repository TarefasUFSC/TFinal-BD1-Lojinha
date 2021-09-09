
const connection = require("../../database/connection");

module.exports = {
    async newCompra(req, res) {
        const { id_Cliente, total, comissao, carrinho } = req.body;
        const { reqid, reqtype } = req.headers;
        if (!carrinho.length) {
            return res.status(400).json({ "Erro": "Carrinho Vazio" })
        }
        if (parseInt(reqid) != parseInt(id_Cliente) && reqtype != "0") {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }
        const userSaldo = await connection("Cliente").select("Saldo").where("id_Cliente", id_Cliente);
        if (!userSaldo.length) {
            return res.status(404).json({ "Erro": "Usuario não encontrado" })
        }
        if (parseInt(userSaldo[0]["Saldo"]) < parseInt(total)) {
            return res.status(400).json({ "Erro": "Saldo Insuficiente" })
        }

        const compra = await connection("Compra").insert({
            "Data": parseInt(Date.now() / 1000),
            "id_Cliente": id_Cliente,
            "ValorFinal": total
        })
        if (!compra.length) {
            return res.status(400).json({ "Erro": "Erro ao completar a compra" })
        }
        for (i in carrinho) {
            const prComp = await connection("ProdutoCompra")
                .insert({
                    "id_Produto": carrinho[i]["id_Produto"],
                    "id_Compra": compra[0],
                    "Quantidade": carrinho[i]["quantidade"]
                })
            if (!prComp.length) {
                return res.status(400).json({ "Erro": "Erro ao processar um dos produto" })
            }
        }
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
        return res.json({ "Response": "Compra Realizada com Sucesso!" })
    }
}