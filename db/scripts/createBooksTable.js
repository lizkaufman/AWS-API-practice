const { query } = require("../index");

async function createBooksTable() {
  // async b/c when we run queries, we're talking to the DB, and we don't know how long it'll take for the DB to listen/respond
  const res = await query(
    `CREATE TABLE IF NOT EXISTS books (id SERIAL PRIMARY KEY, title TEXT, author TEXT)`
  );
  console.log(`Created books table`); //for feedback for humans to know if success
}

createBooksTable(); //Run the fn at bottom of file - when we run this file, the query executes
