import pool from '../database/db.js';

export const getPessoas = async (req, res) => {
    const resultado = await pool.query('SELECT * FROM pessoas');
    res.status(200).json(resultado.rows)
};

export const getPessoa = async (req, res) => {
    const resultado = await pool.query(`SELECT * FROM pessoas WHERE NOME = '${req.params.pessoa}'`);
    
    if(resultado.rows.length !== 0){ //verifica se a pessoa foi encontrada, se não, retorna 404
        res.status(200).json(resultado.rows)
    }
    else {
        res.status(404).json('pessoa não encontrada')
    }
};

export const criarPessoa = async (req, res) => {
    await pool.query(`INSERT INTO pessoas VALUES(DEFAULT, '${req.body.nome}', ${req.body.idade}, ${req.body.altura});`);
    res.status(200).json('pessoa criada!');
};

export const deletarPessoa = async (req, res) => {
    const resultado = await pool.query(`SELECT * FROM pessoas WHERE NOME = '${req.params.pessoa}'`);
    
    if(resultado.rows.length !== 0){ //verifica se a pessoa foi encontrada, se não, retorna 404
        await pool.query(`DELETE FROM pessoas WHERE nome = '${req.params.pessoa}' `);
        res.status(200).json('pessoa apagada!');
    }
    else {
        res.status(404).json('pessoa não encontrada');
    }
}