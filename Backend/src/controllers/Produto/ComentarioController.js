const connection = require("../../database/connection");

module.exports = {
    async getAllComentariosById(req, res) {

        const { id } = req.params;

        const coms = await connection("Comentario")
            .select("Comentario.*", "Cliente.Nome", "Cliente.ImagemPerfil")
            .join('Cliente', function () {
                this.on('Cliente.id_Cliente', '=', 'Comentario.id_Cliente')
            })
            .where("Comentario.id_Produto", id);
        return res.json({ "Comments": coms })
    },
    async newComentario(req, res) {

        const { id } = req.params;
        const { id_cliente, comentario, nota } = req.body;
        console.log(nota !== "");
        console.log(comentario !== "");
        if (nota != "" || comentario != "") {
            if (nota != "") {
                if (nota > 10 || nota < 0) {
                    return res.status(400).json({ "Erro": "Nota Invalida" })
                }
            }
            const prd = await connection("Produto")
                .select("id_Produto").where("id_Produto", id);
            if (prd.length) {
                const op = await connection("Comentario").insert({
                    id_Produto: id,
                    Data: parseInt(Date.now() / 1000),
                    id_Cliente: id_cliente,
                    Descricao: comentario,
                    Nota: nota
                });
                return res.json({ "Comentario": op })
            } else {
                return res.status(404).json({ "Erro": "Produto inexistente" })
            }
        }

        return res.status(400).json({ "Erro": "Dados insuficientes" })
    }
};
