const selectAllAutores = () => {
    return db.query('select * from autores');
}

const createAutor = ({ nombre, email, imagen }) => {
    return db.query(
        'INSERT INTO autores (nombre, email, imagen) VALUES (?,?,?)', [nombre, email, imagen]
    );
}

const selectAutorById = (autorId) => {
    return db.query(
        'SELECT * FROM autores WHERE id = ?', [autorId]
    );
}



module.exports = {selectAllAutores,createAutor,selectAutorById}