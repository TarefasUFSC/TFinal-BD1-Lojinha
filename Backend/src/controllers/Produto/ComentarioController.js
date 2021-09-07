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
    }
};
