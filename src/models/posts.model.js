const selectAllPosts = () => {
    return db.query('select * from posts');
}

const createPosts = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    return db.query(
        'INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autores_id) VALUES (?,?,?,?,?)', [titulo, descripcion, fecha_creacion, categoria, autores_id]
    );
}

const selectPostById = (postId) => {
    return db.query(
        'SELECT * FROM posts WHERE id = ?', [postId]
    );
}

const recuperarPosts = (autorId) => {
    return db.query(
        'SELECT * FROM posts WHERE posts.autores_id = ?', [autorId]
    );
}
module.exports = {selectAllPosts,createPosts,selectPostById,recuperarPosts}