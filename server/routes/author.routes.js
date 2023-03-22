const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.getAllAuthors)
    app.get('/api/:id', AuthorController.getOneAuthor)
    app.post('/new', AuthorController.newAuthor)
    app.put('/edit/:id', AuthorController.updateAuthor)
    app.delete('/remove/:id', AuthorController.deleteAuthor)
}