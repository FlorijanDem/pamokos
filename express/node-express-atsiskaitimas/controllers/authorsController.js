const Author = require('../models/Model');

exports.getAllAuthors = function(req, res) {
    Author.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    });
};

exports.getAuthorById = function(req, res) {
    Author.getAuthorById(req.params.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};

exports.createAuthor = function(req, res) {
    const newBook = {
        name: req.body.name,
        birthDate: req.body.name,
        biography: req.body.biography
    };

    Author.createAuthor(newBook, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Author created successfully'});
    });
};

exports.updateAuthor = function(req, res) {
    const updatedAuthor = {
        name: req.body.name,
        birthDate: req.body.name,
        biography: req.body.biography
    };

    Author.updateAuthor(req.params.id, updatedBook, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Author updated successfully' });
    });
};

exports.deleteAuthor = function(req, res) {
    Author.deleteAuthor(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Author deleted successfully' });
    });
};