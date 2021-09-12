# TFinal-BD1-Lojinha

## Backend

Para este projeto foi-se utilizada uma aplicação em Node.js, que se conecta com o banco de dados através de uma biblioteca chamada knex.js e que aceita requisições HTTP na porta 3333 utilizando express.js.

### Como rodar

> Requisitos:
>
> - Node.JS
> - NPM

Siga os passos para executar em sua máquina local:

- `$ git clone https://github.com/CodeWracker/TFinal-BD1-Lojinha.git`
- `$ cd Backend`
- `$ npm i`
- `$ npm run seed`
- `$ npm start`

### Requisições

| Base Path  | rota                 | Descrção                                      |
| ---------- | -------------------- | --------------------------------------------- |
| Fornecedor | GET-/                | Lista dos Fornecedores                        |
| Compra     | PUT-/                | nova compra                                   |
| User       | POST-/fornecedor{id} | atualiza os dados de alguem                   |
| User       | POST-/cliente/{id}   | atualiza os dados de alguem                   |
| User       | DELETE-/contato/:id  | deleta um contato de um fornecedor            |
| User       | PUT-/contato/new     | adiciona um contato ao fornecedor             |
| User       | DELETE-/lista/:id    | Remove ou a lista ou algo dela                |
| User       | PUT-/lista/:id       | retorna os dados do produto e suas categorias |
| User       | PUT-/lista           | Cria uma nova lista                           |
| User       | GET-/vendas/:id      | mostra as vendas de alguem                    |
| User       | GET-/produtos/:id    | retorna as listas de desejos de alguem        |
| User       | GET-/extrato/:id     | extrato de alguem                             |
| User       | POST-/addsaldo/:id   | faz um deposito                               |
| User       | GET-/compras/:id     | lista de compras de alguem                    |
| User       | GET-/:id             | dados de um cliente ou fornecedor             |
| User       | GET-/lista/:id       | lista de desejos                              |
| Login      | POST-/               | login normal                                  |
| Registro   | PUT-/cliente         | cadastro de cliente                           |
| Registro   | PUT-/fornecedor      | cadastro de fornecedor                        |
| Produto    | POST-/:id            | atualiza os dados de um produto               |
| Produto    | PUT-/new             | cria novo produto                             |
| Produto    | DELETE-/:id          | exclui um produto                             |
| Produto    | PUT-/comentario/:id  | adiciona um comentario                        |
| Produto    | GET-/:id             | Detalhes de um produto                        |
| Produto    | GET-/comentario/:id  | comentarios de um produto                     |
| Produto    | GET-/                | Listar todos os produtos                      |
| Produto    | GET-/categorias      | Lista de categorias                           |

## Frontend

Para utilizar a APi foram feitos três formas de comunicação, as quais estão disponíveis no [GitHub](https://github.com/CodeWracker/TFinal-BD1-Lojinha):

- Um site bem simples
- Uma collection no Insomnia
- Um programa em python

### Site
![image](https://user-images.githubusercontent.com/42501669/132998391-615e9c3b-c66f-474f-a12a-9064cf1a3446.png)

#### Como Rodar

> Requisitos:
>
> - Node.JS
> - NPM

Siga os passos para executar em sua máquina local:

- `$ git clone https://github.com/CodeWracker/TFinal-BD1-Lojinha.git`
- `$ cd Frontend`
- `$ npm i`
- `$ npm start`

### Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Loja%20Gourmet%20-%20Trabalho%20Final%20%7C%20Banco%20de%20Dados&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCodeWracker%2FTFinal-BD1-Lojinha%2Fbackend%2FBackend%2Finsomina-reqs.json)

### Notebook Python

É necssário executar a API no Gitpod.io para obter uma url acessível a partir do Google Colab
