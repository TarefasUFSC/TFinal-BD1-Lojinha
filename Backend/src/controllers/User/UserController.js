const connection = require("../../database/connection");

module.exports = {
    async getListaDeDesejo(req, res) {
        const { id } = req.params;
        const { idlista, reqid, reqtype } = req.headers;

        if (reqtype != "0") {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }

        const usr = await connection("Cliente").select("id_Cliente").where("id_Cliente", id)
        if (usr.length) {
            if (idlista) {

                const lista = await connection("ListaDeDesejo").select("*").where("id_ListaDeDesejo", idlista).where("id_Cliente", id)
                if (!lista.length) {
                    return res.status(404).json({ "Erro": "Lista não encontrada" })
                }
                const prds = await connection("ProdutoListaDeDesejo").select("Produto.*")
                    .leftJoin("Produto", "Produto.id_Produto", "ProdutoListaDeDesejo.id_Produto")
                    .where("ProdutoListaDeDesejo.id_ListaDeDesejo", idlista);

                return res.json({ "Lista": lista, "Produtos": prds })
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
    async getComprasByIdCliente(req, res) {
        const { id } = req.params;
        let { reqid, reqtype, quantidade } = req.headers;
        if (!quantidade) {
            quantidade = 10;
        }
        if (parseInt(reqid) != parseInt(id) || reqtype != "0") {

            return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
        }
        const comps = await connection("Compra").select("*").where("id_Cliente", id)
            .limit(parseInt(quantidade));

        if (!comps.length) {

            return res.status(404).json({ "Erro": "Nenhuma compra encontrada para este id" })
        }
        let compras = [];
        for (i in comps) {
            const prds = await connection("ProdutoCompra")
                .select("Produto.*")
                .leftJoin("Produto", "Produto.id_Produto", "ProdutoCompra.id_Produto")
                .where("ProdutoCompra.id_Compra", comps[i]["id_Compra"])
            let produtos = [];
            for (j in prds) {
                const cats = await connection("ProdutoCategoria")
                    .select("Categoria.*")
                    .leftJoin("Categoria", "ProdutoCategoria.id_Categoria", "Categoria.id_Categoria")
                    .where("ProdutoCategoria.id_Produto", prds[j]["id_Produto"])
                const produto = {
                    "Detalhes": prds[j],
                    "Categorias": cats
                }
                produtos.push(produto)
            }
            let compra = {
                "Detalhes": comps[i],
                "Produtos": produtos
            }
            compras.push(compra)
        }

        return res.json({ "Compras": compras })
    },
    async addSaldo(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;
        const { quantidade } = req.body;
        if (!quantidade) {
            return res.status(400).json({ "Erro": "Uma quantidade é necessária" })
        }
        if (parseFloat(quantidade) <= 0) {
            return res.status(400).json({ "Erro": "Uma quantidade positiva e superior à 0 é necessária" })

        }
        if (parseInt(reqid) != parseInt(id) || reqtype != "0") {

            return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
        }
        const cli = await connection("Cliente")
            .select("Saldo")
            .where("id_Cliente", id)
        if (!cli.length) {
            return res.status(404).json({ "Erro": "Cliente não encontrado" })
        }
        const ncli = await connection("Cliente")
            .update("Saldo", String(
                parseFloat(cli[0]["Saldo"]) + parseFloat(quantidade)
            ))
            .where("id_Cliente", id)
        if (!ncli) {
            return res.status(500).json({ "Erro": "Erro ao atualizar saldo" })
        }
        const ext = await connection("ExtratoCliente").insert({
            "Data": parseInt(Date.now() / 1000),
            "id_Cliente": id,
            "Movimentacao": quantidade
        })
        if (!ext) {
            return res.status(500).json({ "Erro": "Erro ao atualizar Extrato" })
        }
        return res.json({ "Saldo": parseFloat(cli[0]["Saldo"]) + parseFloat(quantidade) })
    },

    async listProdutosByIdFornecedor(req, res) {
        const { id } = req.params;

        let { quantidade } = req.headers;
        if (!quantidade) {
            quantidade = 20;
        }
        const prds = await connection("Produto").select("*").where("id_Fornecedor", id).limit(parseInt(quantidade));
        if (!prds.length) {
            return res.status(404).json({ "Erro": "Nenhum produto encontrado com este id de fornecedor" });

        }
        let produtos = [];
        for (j in prds) {
            const cats = await connection("ProdutoCategoria")
                .select("Categoria.*")
                .leftJoin("Categoria", "ProdutoCategoria.id_Categoria", "Categoria.id_Categoria")
                .where("ProdutoCategoria.id_Produto", prds[j]["id_Produto"]);
            const produto = {
                "Detalhes": prds[j],
                "Categorias": cats
            }
            produtos.push(produto)
        }
        return res.json({ "Produtos": produtos })
    },
    async newLista(req, res) {
        const { nome_lista } = req.body;
        const { reqid, reqtype } = req.headers;

        if (reqtype != "0") {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }

        const nlista = await connection("ListaDeDesejo").insert({
            "id_Cliente": reqid,
            "nome": nome_lista
        })
        if (!nlista.length) {
            return res.status(500).json({ "Erro": "Erro ao adicionar a lista" })
        }
        return res.json({ "id": nlista[0] })
    },
    async newListaItem(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;
        const { id_Lista, id_Produto } = req.body;

        if (reqtype != "0" || parseInt(id) != parseInt(reqid)) {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }
        const lista = await connection("ListaDeDesejo").select("*").where("id_ListaDeDesejo", id_Lista).where("id_Cliente", reqid)
        if (!lista.length) {
            return res.status(404).json({ "Erro": "Lista não encontrada" })
        }
        const plista = await connection("ProdutoListaDeDesejo").select("*").where("id_Produto", id_Produto).where("id_ListaDeDesejo", id_Lista)
        console.log(plista);
        if (plista.length) {
            return res.status(400).json({ "Erro": "Lista ja contem este item" })
        }
        const nlista = await connection("ProdutoListaDeDesejo").insert({
            "id_ListaDeDesejo": id_Lista,
            "id_Produto": id_Produto
        })
        if (!nlista.length) {
            return res.status(500).json({ "Erro": "Erro ao adicionar na lista" })
        }
        return res.json({ "response": "Produto Adicionado com sucesso!" })
    },
    async removeListaItem(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;
        const { id_Lista, id_Produto } = req.body;

        if (reqtype != "0" || parseInt(id) != parseInt(reqid)) {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }
        const lista = await connection("ListaDeDesejo").select("*").where("id_ListaDeDesejo", id_Lista).where("id_Cliente", reqid)
        if (!lista.length) {
            return res.status(404).json({ "Erro": "Lista não encontrada" })
        }
        if (id_Produto) {
            const plista = await connection("ProdutoListaDeDesejo").select("*").where("id_Produto", id_Produto).where("id_ListaDeDesejo", id_Lista)
            console.log(plista);
            if (!plista.length) {
                return res.status(400).json({ "Erro": "Lista não contem este item" })
            }
            const nlista = await connection("ProdutoListaDeDesejo").where("id_Produto", id_Produto).where("id_ListaDeDesejo", id_Lista).del();
            console.log(nlista);
            if (nlista != 1) {
                return res.status(500).json({ "Erro": "Erro ao remover da lista" })
            }
            return res.json({ "response": "Produto removido com sucesso!" })
        }
        else {
            const nlista = await connection("ProdutoListaDeDesejo").where("id_ListaDeDesejo", id_Lista).del();
            console.log(nlista);
            if (!nlista) {
                return res.status(500).json({ "Erro": "Erro ao remover da lista" })
            }

            const dlista = await connection("ListaDeDesejo").select("*").where("id_ListaDeDesejo", id_Lista).where("id_Cliente", reqid).del();
            return res.json({ "response": "Lista removida com sucesso!" })
        }

    },
    async addContato(req, res) {

        const { reqid, reqtype } = req.headers;
        const { id_Fornecedor, contato, nm_rede_social } = req.body;

        if (reqtype != "1" || parseInt(reqid) != parseInt(id_Fornecedor)) {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }
        const frn = await connection("Fornecedor").select("id_Fornecedor").where("id_Fornecedor", id_Fornecedor);
        if (!frn.length) {
            return res.status(404).json({ "Erro": "Fornecedor não encontrado" });
        }
        const ctt = await connection("Contato").insert({
            "id_Fornecedor": id_Fornecedor,
            "Contato": contato,
            "nm_rede_social": nm_rede_social
        })
        return res.json({ "id_Contato": ctt[0] })
    },
    async removeContato(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;

        const ctt = await connection("Contato").select("id_Fornecedor").where("id_Contato", id);
        if (!ctt.length) {
            return res.status(404).json({ "Erro": "Contato não encontrado" });
        }
        const frn = await connection("Fornecedor").select("id_Fornecedor").where("id_Fornecedor", ctt[0]["id_Fornecedor"]);
        if (!frn.length) {
            return res.status(404).json({ "Erro": "Fornecedor não encontrado" });
        }
        if (reqtype != "1" || parseInt(reqid) != parseInt(ctt[0]["id_Fornecedor"])) {
            return res.status(400).json({ "Erro": "Você não tem permissão para fazer isso" })
        }
        const dctt = await connection("Contato").where("id_Contato", id).del();

        return res.json({ "response": "Contato deletado com sucesso." })
    }
}