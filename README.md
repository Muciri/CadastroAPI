# CadastroAPI

api **beeem** simples feita em Express para aprender noções básicas de APIs e Backend em node.JS

## como rodar

1. crie o banco de dados no postgres com o arquivo de exportação
   
2. clone o repositório
```bash
    git clone link_do_repositorio
```
   
3. rode o servidor
```javascript
    npm run start
```

## variáveis de ambiente
```dotenv
#variáveis de ambiente do servidor
PORT='porta_do_servidor'
API_KEY='chave_da_api'

#variáveis de ambiente do banco de dados
DATABASE_USER='usuario_postgres'
DATABASE_HOST='porta'
DATABASE_NAME='nome_do_banco_de_dados'
DATABASE_PASSWORD='senha_do_usuario'
DATABASE_PORT='porta_do_servidor_postgres'
```