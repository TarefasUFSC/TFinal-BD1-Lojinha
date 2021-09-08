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
    }
}