// connect to database
var knex = require('../../db/db.js');

var file = './db/library.db';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

function queries() {
  function selectBooksAuthors(cb) {
    var sql = "SELECT * from authors JOIN books ON authors.id = books.author_id";
    db.all(sql, cb)
  }

  function insertBook(data, cb) {
    var sql = "INSERT into books(title, author_id) VALUES(?, ?)";
    db.run(sql, data.title, data.authorId);
  }

  // function selectBooks(cb) {
  //   cb(undefined, {});
  // }

  function selectBook(data, cb) {
    cb(undefined, {});
  }

  function editBook(data, cb) {
    cb(undefined, '');
  }

  function deleteBook(data, cb) {
    cb(undefined, '');
  }

  function insertAuthor(data) {
   var sql = "INSERT into authors(firstname, lastname) VALUES(?, ?)";
   db.run(sql, data.firstname, data.lastname);
  }

  function selectAuthors(cb) {
    var sql = "SELECT * from authors";
    db.all(sql, cb);
  }

  function selectAuthor(data, cb) {
    var sql = "SELECT * from authors WHERE id = ?";
    db.get(sql, data.authorId, cb);
  }

  function editAuthor(data) {
    var sql = "UPDATE authors SET firstname=?, lastname=? WHERE id=?";
    db.run(sql, data.firstname, data.lastname, data.authorId);
  }

  function deleteAuthor(data) {
    var sql = "DELETE from authors WHERE id =?";
    db.run(sql, data.authorId);
  }


  return {
    selectBooksAuthors: selectBooksAuthors,
    insertAuthor: insertAuthor,
    selectAuthors: selectAuthors,
    selectAuthor: selectAuthor,
    editAuthor: editAuthor,
    deleteAuthor: deleteAuthor,
    insertBook: insertBook,
    selectBooks: selectBooks,
    selectBook: selectBook,
    editBook: editBook,
    deleteBook: deleteBook
  };
}

module.exports = queries();
