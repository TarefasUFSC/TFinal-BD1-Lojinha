
const connection = require("../../database/connection");
async function loginCliente(email){
    var [resp] = await connection("Cliente")
    .select('id_Cliente','Senha')
    .where('email',email)
    if(resp == undefined)
        resp = "Email não encontrado"
    
    return resp

}
async function loginFornecedor(email){
    var [resp] = await connection("Fornecedor")
    .select('id_Fornecedor','Senha')
    .where('email',email)
    console.log(resp);
    if(resp == undefined)
        resp = "Email não encontrado"
    
    return resp

}
module.exports = {
    async login(req,res){
        const {email,Senha} = req.body;
        
        resp = await loginCliente(email);
        if(resp !="Email não encontrado"){
            if (String(Senha) === String(resp['Senha'])){
                retorno = {"id":resp.id_Cliente,"tipo":"Cliente"}
            }
            else{
                retorno = "Senha Incorreta"
            }
        }else{
            resp = await loginFornecedor(email)
            if(resp !="Email não encontrado"){
                
                if (String(Senha) === String(resp['Senha'])){
                    retorno = {"id":resp.id_Fornecedor,"tipo":"Fornecedor"}
                }
                else{
                    retorno = "Senha Incorreta"
                }
            }else{
                retorno = resp;
            }
        }
    
        
        
        return res.json({"response":retorno})
    }
    
};