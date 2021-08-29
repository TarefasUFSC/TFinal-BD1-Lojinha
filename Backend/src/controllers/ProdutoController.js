
const connection = require("../database/connection");

module.exports = {
    async getAllProdutos(req,res){
        const ext = await connection("Produto").select("id_Fornecedor","valor","Nome","Descricao","Quantidade");
        return res.json({"response":ext})
    }
};