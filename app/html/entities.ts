class Author {
    constructor (public id: number, public name: string, public books: Book[] = []){
        
    }
}

class Book {
    constructor (public id:number, public title:string, public author: Author = null, public nominations: Nomination[] = []){
        
    }
}

class Award {
    constructor (public id: number, public awardName: string){
        
    }
}

class Nomination {
    constructor (public id: number, public book: Book, public award: Award, public yearNominated:number, public iswinner: boolean){
        
    }
}

var localData = {
    authors: <Author[]>[],
    books: <Book[]>[],
    awards :  <Award[]>[]
};

