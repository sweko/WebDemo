var Author = (function () {
    function Author(id, name, books) {
        if (books === void 0) { books = []; }
        this.id = id;
        this.name = name;
        this.books = books;
    }
    return Author;
})();
var Book = (function () {
    function Book(id, title, author, nominations) {
        if (author === void 0) { author = null; }
        if (nominations === void 0) { nominations = []; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.nominations = nominations;
    }
    return Book;
})();
var Award = (function () {
    function Award(id, awardName) {
        this.id = id;
        this.awardName = awardName;
    }
    return Award;
})();
var Nomination = (function () {
    function Nomination(id, book, award, yearNominated, iswinner) {
        this.id = id;
        this.book = book;
        this.award = award;
        this.yearNominated = yearNominated;
        this.iswinner = iswinner;
    }
    return Nomination;
})();
var localData = {
    authors: [],
    books: [],
    awards: []
};
//# sourceMappingURL=entities.js.map