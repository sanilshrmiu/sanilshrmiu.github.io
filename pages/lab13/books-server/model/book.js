let db = [];
let counter = 0;

class Book {
  id;
  title;
  description;
  price;
  constructor(id, title, description, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = ++counter;
    db.push(this);
    return this;
  }

  edit() {
    const index = db.findIndex((book) => book.id == this.id);
    db.splice(index, 1, this);
    return this;
  }

  static getAll() {
    return db;
  }

  static deleteById(bookId) {
    const index = db.findIndex((book) => book.id == bookId);
    const deletedBook = db[index];
    db.splice(index, 1);
    return deletedBook;
  }
}

module.exports = Book;
