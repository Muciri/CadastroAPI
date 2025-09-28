import express, { json, Router } from 'express';
import pool from '../database/db.js';
import apiKeyCheck from '../middlewares/apiKeyCheck.js';

const pessoasRouter = express.Router(); //inicializa a rota
pessoasRouter.use(apiKeyCheck); //faz a rota usar o middleware para checar chave de API

//rota para retornar todas as pessoas
pessoasRouter.get('/', async (req, res) => {
    const resultado = await pool.query('SELECT * FROM pessoas');
    res.status(200).json(resultado.rows)
});

//rota para retornar uma pessoa específica
pessoasRouter.get('/pessoas/:pessoa', async (req, res) => {
    const resultado = await pool.query(`SELECT * FROM pessoas WHERE NOME = '${req.params.pessoa}'`);
    
    if(resultado.rows.length !== 0){ //verifica se a pessoa foi encontrada, se não, retorna 404
        res.status(200).json(resultado.rows)
    }
    else {
        res.status(404).json('pessoa não encontrada')
    }
});

//rota para criar uma pessoa
pessoasRouter.post('/pessoas/criarpessoa', async (req, res) => {
    await pool.query(`INSERT INTO pessoas VALUES(DEFAULT, '${req.body.nome}', ${req.body.idade}, ${req.body.altura});`);
    res.status(200).json('pessoa criada!');
});

//rota para apagar uma pessoa
pessoasRouter.delete('/pessoas/:pessoa', async (req, res) => {
    const resultado = await pool.query(`SELECT * FROM pessoas WHERE NOME = '${req.params.pessoa}'`);
    
    if(resultado.rows.length !== 0){ //verifica se a pessoa foi encontrada, se não, retorna 404
        await pool.query(`DELETE FROM pessoas WHERE nome = '${req.body.nome}' `);
        res.status(200).json('pessoa apagada!');
    }
    else {
        res.status(404).json('pessoa não encontrada');
    }
});

export default pessoasRouter;