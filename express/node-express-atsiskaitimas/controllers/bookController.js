const Book = require('../models/Model');

exports.getAll = function(req, res) {
    Book.getAll((err, todos) => {
        if (err) throw err;
        res.json(todos);
    });
};

exports.getById = function(req, res) {
    Book.getTodoById(req.params.id, (err, todo) => {
        if (err) throw err;
        res.json(todo);
    });
};

exports.createBook = function(req, res) {
    const newBook = {
        title: req.body.title,
        summary: req.body.summary,
        isbn: req.body.isbn,
        authorId: req.body.authorId
    };

    Book.createBook(newBook, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Book created successfully'});
    });
};

exports.updateBook = function(req, res) {
    const updatedBook = {
        title: req.body.title,
        summary: req.body.summary,
        isbn: req.body.isbn,
        authorId: req.body.authorId
    };

    Book.updateBook(req.params.id, updatedBook, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Book updated successfully' });
    });
};

exports.deleteBook = function(req, res) {
    Book.deleteBook(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Book deleted successfully' });
    });
};