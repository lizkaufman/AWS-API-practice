const { query } = require("../db/index.js");

async function getBooks() {
  // Query the database and return all books
  const data = await query(`SELECT * FROM books;`);
  console.log(`get all books`);
  console.dir(data, { depth: null });
  return data.rows;
}

async function searchBooksByTitle(searchTerm) {
  // Query the database and return all books that have a matching title matching the searchTerm
  const data = await query(
    `SELECT * FROM books WHERE title ILIKE '%' || $1 || '%';`,
    [title]
  );
  console.log(`get book by title ${title}`);
  return data.rows;
}

async function searchBooksByAuthor(searchTerm) {
  // Query the database and return all books that have an author name matching the searchTerm
  const data = await query(
    `SELECT * FROM books WHERE author ILIKE '%' || $1 || '%';`,
    [author]
  );
  console.log(`get book by author ${author}`);
  return data.rows;
}

async function getBookById(id) {
  const data = await query(`SELECT * FROM books WHERE id = $1;`, [id]);
  console.log(`get book by id ${id}`);
  return data.rows;
}

async function createBook(book) {
  // Query the database to create a book and return the newly created book
  const { title, author } = book;
  const data = await query(
    `INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *;`,
    [title, author]
  );
  return data.rows;
}

async function updateBookById(id, updates) {
  // Query the database to update a book and return the newly updated book
  const data = await query(
    `UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *;`,
    [title, author, id]
  );
  return data.rows;
}

async function deleteBookById(id) {
  // Query the database to delete a book and return the deleted book
  const data = await query(`DELETE FROM books WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows;
}

module.exports = {
  getBooks,
  searchBooksByTitle,
  searchBooksByAuthor,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
