//const autorModel = require('../models/autores.model');

const getAllAutores = async(req, res) => {
    
    try {
        const result = await autorModel.selectAllAutores();
        const [resultado] = result;
        console.log(resultado);
        res.json(resultado);
    } catch (error) {
        res.json({fatal: error.message})
    }

}

const createAutor = (req, res) => {
    res.send('POST Autores');
}
const updateAutor = (req, res) => {
    res.send('Put Autores');
}
const DeleteAutor = (req, res) => {
    res.send('Delete Autores');
}

module.exports ={getAllAutores, createAutor,updateAutor, DeleteAutor}