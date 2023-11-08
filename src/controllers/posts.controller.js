const postsModel = require('../models/posts.model');

const getAllPosts = async(req, res) => {
    res.send('POST Posts');

}

const creatPosts = (req, res) => {
    res.send('POST Posts');
}
const updatPosts = (req, res) => {
    res.send('Put Posts');
}
const DeletPosts = (req, res) => {
    res.send('Delete Posts');
}

module.exports ={getAllPosts, creatPosts,updatPosts, DeletPosts}