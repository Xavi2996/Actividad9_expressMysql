const router = require('express').Router();
const postsCOntroller = require('../../controllers/posts.controller');

router.get('/', postsCOntroller.getAllPosts);
router.post('/', postsCOntroller.creatPosts);
router.put('/:postsId', postsCOntroller.updatPosts);
router.delete('/:postsId', postsCOntroller.DeletPosts);

module.exports = router;