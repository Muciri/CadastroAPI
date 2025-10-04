import express, { json, Router } from 'express';
import apiKeyCheck from '../middlewares/apiKeyCheck.js';
import * as pessoasController from '../controllers/pessoasController.js'

const pessoasRouter = express.Router(); //inicializa a rota
pessoasRouter.use(apiKeyCheck); //faz a rota usar o middleware para checar chave de API

//rota para retornar todas as pessoas
pessoasRouter.get('/', pessoasController.getPessoas);

//rota para retornar uma pessoa específica
pessoasRouter.get('/pessoas/:pessoa', pessoasController.getPessoa);

//rota para criar uma pessoa
pessoasRouter.post('/pessoas/criarpessoa', pessoasController.criarPessoa);

//rota para apagar uma pessoa
pessoasRouter.delete('/pessoas/:pessoa', pessoasController.deletarPessoa);

export default pessoasRouter;