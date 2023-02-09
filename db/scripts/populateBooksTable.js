const { query } = require("../index");
const books = require("../../books-data");

async function populateBooksTable() {
  for (let i = 0; i < books.length; i++) {
    //can also use for each with async callback!
    const { title, author } = books[i]; //destructure info to go into table - not id bc serial

    const res = await query(
      `INSERT INTO books (title, author) VALUES ($1, $2)`,
      [title, author]
    ); // parameterized queries - explain why we don't use regular dollar squigs
    //SQL injection
    console.log(`Populated table with ${title} ${author}`); // log for feedback for humans
  }
}

populateBooksTable();
