const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.getAllAuthors)
    app.get('/api/:id', AuthorController.getOneAuthor)
    app.post('/api/new', AuthorController.newAuthor)
    app.put('/api/edit/:id', AuthorController.updateAuthor)
    app.delete('/api/remove/:id', AuthorController.deleteAuthor)
}