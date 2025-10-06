import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//importando rotas
import pessoasRouter from './routes/pessoas.js';

//carrega as variáveis de ambiente do arquivo .env
dotenv.config();

//parametros
const PORT = process.env.PORT;

//configurando app
const app = express();
app.use(cors()); //avisa ao servidor para utilizar o CORS e permitir requisições de qualquer fonte
app.use(express.json()); //avisa ao servidor para utilizar JSON
app.use(pessoasRouter) //avisa ao servidor para utilizar a rota pessoasRouter

//rodando o servidor
app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});
