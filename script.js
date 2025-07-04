// 1. FACTORY FUNCTION
function createBook(title, author) {
  return {
    title: title,
    author: author,
    isRead: false,

    toggleReadStatus() {
      this.isRead = !this.isRead;
    },

    describe() {
      return `"${this.title}" By ${this.author} [${
        this.isRead ? "Read" : "Unread"
      }]`;
    },
  };
}

let factoryBook = createBook("home alone", "motaz");
console.log(factoryBook.describe());
factoryBook.toggleReadStatus();
console.log(factoryBook.describe());

// 2. CONSTRUCTOR FUNCTION
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

Book.prototype.describe = function () {
  return `"${this.title}" By ${this.author} [${
    this.isRead ? "Read" : "Unread"
  }]`;
};

let constructorBook = new Book("home alone", "motaz");
console.log(constructorBook.describe());
constructorBook.toggleReadStatus();
console.log(constructorBook.describe());

// 3. CLASS
class classBook {
  constructor (title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
  }

  toggleReadStatus () {
    this.isRead = !this.isRead;
  }

  describe () {
    return `"${ this.title }" By ${ this.author } [${ this.isRead ? "Read" : "Unread"
      }]`;
  }
}

let classBookObject = new classBook("home alone", "motaz");
console.log(classBookObject.describe());
classBookObject.toggleReadStatus();
console.log(classBookObject.describe());