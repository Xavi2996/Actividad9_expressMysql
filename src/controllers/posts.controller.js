const postsModel = require('../models/posts.model');

const getAllPosts = async(req, res) => {
    try {
        const result = await postsModel.selectAllPosts();
        const [resultado] = result;
        console.log(resultado);
        res.json(resultado);
    } catch (error) {
        res.json({fatal: error.message})
    }

}

const creatPosts = async(req, res) => {
    try {
        const [result] = await postsModel.createPosts(req.body);
        console.log(result);
        const [post] = await postsModel.selectPostById(result.insertId);
        console.log(post);
        
        res.json(post);
    } catch (error) {
        res.json({fatal: error.message})
    }
}
const updatPosts = (req, res) => {
    res.send('Put Posts');
}
const DeletPosts = (req, res) => {
    res.send('Delete Posts');
}

const recuperarPosByAutor = async(req, res) => {
    try {
        const { autorId } = req.params;
        const result = await postsModel.recuperarPosts(autorId);
        //console.log(result);
        const [resultado] = result;
        //console.log(resultado);
        res.json(resultado);
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports ={getAllPosts, creatPosts,updatPosts, DeletPosts, recuperarPosByAutor}