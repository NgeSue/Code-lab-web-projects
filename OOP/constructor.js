var ob=new String("hello");

// litral constructor

const book={
    title:"Myanmar",
    year:"2021",
    getTitle: function(){
        return `Title is ${this.title}`;
    }
}

console.log(book);
console.log(book.getTitle());
console.log(Object.keys(book));
console.log(Object.values(book));

// constructor

function Magazine(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getTitle=function(){
        return `Title is ${this.title}`;
    };
}
var maga=new Magazine("Nihon go","Sensei","2022");
console.log(maga);
console.log(maga.getTitle());
console.log(maga.author);