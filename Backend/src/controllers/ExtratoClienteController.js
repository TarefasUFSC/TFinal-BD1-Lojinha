
const connection = require("../database/connection");

module.exports = {
    async getAllExtByID(req,res){
        const {id_cliente} = req.body;
        const ext = await connection("ExtratoCliente").select("*").where("id_Cliente",id_cliente);
        return res.json({"response":ext})
    }
};