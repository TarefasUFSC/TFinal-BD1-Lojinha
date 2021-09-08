const connection = require("../../database/connection");

module.exports = {
    async getListaDeDesejo(req, res) {
        const { id } = req.params;
        const { idlista } = req.headers;

        const usr = await connection("Cliente").select("id_Cliente").where("id_Cliente", id)
        if (usr.length) {
            if (idlista) {

                const lista = await connection("ListaDeDesejo").select("id_ListaDeDesejo", "nome").where("id_ListaDeDesejo", idlista);
                const prds = await connection("ProdutoListaDeDesejo").select("Produto.*")
                    .leftJoin("Produto", "Produto.id_Produto", "ProdutoListaDeDesejo.id_Produto")
                    .where("ProdutoListaDeDesejo.id_ListaDeDesejo", idlista);
                if (lista.length && prds.length) {
                    return res.json({ "Lista": lista, "Produtos": prds })
                }
                return res.status(404).json({ "Erro": "O cliente não possui lista com este id" });
            }
            const listas = await connection("ListaDeDesejo").select("id_ListaDeDesejo", "nome").where("id_Cliente", id);
            return res.json({ "Listas": listas })
        }


        return res.status(404).json({ "Erro": "Cliente inexistente" });
    },
    async detailsById(req, res) {
        const { id } = req.params;
        const { cliente, fornecedor, reqid, reqtype } = req.headers;
        console.log(["cliente", cliente]);
        console.log(["fornecedor", fornecedor]);

        if (cliente == "1" && fornecedor == "1") {

            return res.status(400).json({ "Erro": "Parametros conflitantes no cabeçalho" })
        }

        if (cliente == "1") {
            const cli = await connection("Cliente")
                .select("id_Cliente", "Estado", "CEP", "Cidade", "Endereco", "Complemento", "Saldo", "ImagemPerfil", "Nome", "email")
                .where("id_Cliente", id)
            if (reqtype == "0" && id == reqid) {
                return res.json({ "Cliente": cli })
            } else {

                return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
            }

        }
        if (fornecedor == "1") {
            const cli = await connection("Fornecedor")
                .select("id_Fornecedor", "Estado", "CEP", "Cidade", "Endereco", "Saldo", "ImagemPerfil", "Nome", "Email", "Descricao")
                .where("id_Fornecedor", id);
            const cont = await connection("Contato").select("*").where("id_Fornecedor", id);

            return res.json({ "Fornecedor": cli, "Contatos": cont })





        }

        return res.status(400).json({ "Erro": "Tipo de usuario invalido no cabeçalho" })
    },
    async getComprasByidCliente(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;
        if (parseInt(reqid) != parseInt(id || reqtype != "0")) {

            return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
        }
        const comps = await connection("Compra").select("*").where("id_Cliente", id);

        if (!comps.length) {

            return res.status(404).json({ "Erro": "Nenhuma compra encontrada para este id" })
        }
        let compras = []
        for (i in comps) {
            console.log(comps[i]);
            const prds = await connection("ProdutoCompra")
                .select("Produto.*")
                .leftJoin("Produto", "Produto.id_Produto", "ProdutoCompra.id_Produto")
                .where("ProdutoCompra.id_Compra", comps[i]["id_Compra"])
            let compra = {
                "Detalhes": comps[i],
                "Produtos": prds
            }
            compras.push(compra)
        }

        return res.json({ "Compras": compras, })
    }
}