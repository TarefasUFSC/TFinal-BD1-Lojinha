
const connection = require("../../database/connection");

module.exports = {
    async getAllExtByID(req, res) {
        const { id } = req.params;
        const { reqid, reqtype } = req.headers;
        const { inicio, fim } = req.body;
        if (parseInt(reqid) != parseInt(id)) {

            return res.status(400).json({ "Erro": "Você não tem autorização para ver isso" })
        }
        if (reqtype != "0" && reqtype != "1") {

            return res.status(400).json({ "Erro": "Header incorreto" })
        }
        if (!inicio || !fim) {

            return res.status(400).json({ "Erro": "Periodo incorreto" })
        }
        let ext;
        if (reqtype == "0") {

            ext = await connection("ExtratoCliente").select("*").where("id_Cliente", id).whereBetween("Data", [inicio, fim]);
        } else {

            ext = await connection("ExtratoFornecedor").select("*").where("id_Fornecedor", id).whereBetween("Data", [inicio, fim]);
        }
        if (!ext.length) {
            return res.status(404).json({ "Erro": "Nenhum extrato encontrado" })
        }
        return res.json({ "Extrato": ext })
    }
};