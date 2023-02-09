| Method | Path       | Additional Info | Result                                         | Response                                  |
| ------ | ---------- | --------------- | ---------------------------------------------- | ----------------------------------------- |
| GET    | /books     |                 | all books                                      | { success: Boolean, payload: Book Array } |
| GET    | /books     | ?search=potter  | all books with “potter” in the title           | { success: Boolean, payload: Book Array } |
| GET    | /books     | ?author=austen  | all books who have “austen” in the author name | { success: Boolean, payload: Book Array } |
| GET    | /books/:id |                 | books with a particular id if it exists        | { success: Boolean, payload: Book }       |
| POST   | /books     | { body }        | create a new book                              | { success: Boolean, payload: Book }       |
| PATCH  | /books/:id | { body }        | updated book                                   | { success: Boolean, payload: Book }       |
| DELETE | /books/:id |                 | book deleted                                   | { success: Boolean, payload: Book }       |
