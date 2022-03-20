class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state * 1.5;
    }

    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, releaseDate, pagesCount) {
        super(author, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        let bookState = book.state;
        if (bookState > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find((elem) => elem[type] === value);
        if (foundBook === undefined) {
            return null;
        } else {
            return foundBook;
        }
    }

    giveBookByName(bookName) {
        let bookToGive = this.findBookBy("name", bookName);
        if (bookToGive === undefined) {
            return null;
        } else {
            this.books = this.books.filter((elem) => elem.name !== bookName);
            return bookToGive;
        }
    }
}

