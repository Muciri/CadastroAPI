const apiKeyCheck = (req, res, next) => {
    //verifica a chave da API no cabeçalho ou requisição
    const apiKey = req.header('x-api-key') || req.query.api_key; 

    //valida se a chave não existe ou não é igual a chave
    if(!apiKey || apiKey !== process.env.API_KEY){
        res.status(401).json("falha ao validar chave de API");
    }

    //permite a requisição, caso contrário
    next();
}

export default apiKeyCheck;
