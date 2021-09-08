
const connection = require("../../database/connection");
async function loginCliente(email) {
    var [resp] = await connection("Cliente")
        .select('id_Cliente', 'Senha')
        .where('email', email)
    if (resp == undefined)
        resp = "Email não encontrado"

    return resp

}
async function loginFornecedor(email) {
    var [resp] = await connection("Fornecedor")
        .select('id_Fornecedor', 'Senha')
        .where('email', email)
    console.log(resp);
    if (resp == undefined)
        resp = "Email não encontrado"

    return resp

}
module.exports = {
    async login(req, res) {
        const { email, Senha } = req.body;

        resp = await loginCliente(email);
        if (resp != "Email não encontrado") {
            if (String(Senha) === String(resp['Senha'])) {
                retorno = { "id": resp.id_Cliente, "tipo": "Cliente" };

                return res.json({ "response": retorno })
            }
            else {
                retorno = "Senha Incorreta"

                return res.status(400).json({ "response": retorno });
            }
        } else {
            resp = await loginFornecedor(email)
            if (resp != "Email não encontrado") {

                if (String(Senha) === String(resp['Senha'])) {
                    retorno = { "id": resp.id_Fornecedor, "tipo": "Fornecedor" };

                    return res.json({ "response": retorno });
                }
                else {
                    retorno = "Senha Incorreta"
                    return res.status(400).json({ "response": retorno });
                }
            } else {
                retorno = resp;

                return res.status(400).json({ "response": retorno });
            }
        }



    }

};