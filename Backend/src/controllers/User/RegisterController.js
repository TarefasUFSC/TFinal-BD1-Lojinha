
const connection = require("../../database/connection");

module.exports = {
    async registroCliente(req, res) {
        const { email, Senha, Nome } = req.body;

        var [resp] = await connection("Cliente")
            .select('id_Cliente')
            .where('email', email);
        //console.log(resp);
        if (resp == undefined) {
            //console.log("nao tem cliente");
            var [resp] = await connection("Fornecedor")
                .select('id_Fornecedor')
                .where('email', email);
            if (resp == undefined) {

                //console.log("nao tem forn");
                const [id] = await connection("Cliente").insert({
                    email,
                    Senha,
                    Nome,
                    Saldo: 0,
                })

                return res.json({ "response": { "id": id } })
            }
            else {
                return res.status(400).json({ "response": "Email ja cadastrado como Fornecedor" })
            }

        }
        else {
            console.log("Tchau");
            return res.status(400).json({ "response": "Email ja cadastrado como Cliente" })
        }

    },




    async registroFornecedor(req, res) {
        const { email, Senha, Nome } = req.body;
        var [resp] = await connection("Cliente")
            .select('id_Cliente')
            .where('email', email);
        if (resp == undefined) {
            var [resp] = await connection("Fornecedor")
                .select('id_Fornecedor')
                .where('email', email);
            if (resp == undefined) {
                const [id] = await connection("Fornecedor").insert({
                    email,
                    Senha,
                    Nome,
                    Saldo: 0,
                })

                return res.json({ "response": { "id": id } })
            } else {
                return res.status(400).json({ "response": "Email ja cadastrado como Fornecedor" })
            }

        } else {
            return res.status(400).json({ "response": "Email ja cadastrado como Fornecedor" })
        }




    }
};