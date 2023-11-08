const selectAllAutores = () => {
    return db.query('select * from autores');
}

module.exports = {selectAllAutores}