// litral constructor
const book={
    title:"Myanmar",
    year:"2021",
    getTitle: function(){
        return `Title is ${this.title}`;
    }
}

// book.title="ASAA";
// console.log(book);

// var book1=Object.create(book);
// book1.title="Book1";
// book1.year="2003";

// console.log(book);
// console.log(book1);

// var book1=Object.create(book,{
//     title: {value: "Math"},
//     year: {value:"5000"},
// });

// console.log(book1);

class Book{
    // obj ဆောက်ပြီးမှခေါ်သုံးရ
    constructor(title,author,year){
        this.title=title;
        this.year=year;
        this.author=author;
    }
    setTitle(){
        this.title="English";
    }
    static show(){
        console.log("Morning");
    }
    greeting(){
        console.log("Good night.");
    }

}

// const book1=new Book("Myanmar","Mg Aung",2000);
// console.log(book1);

// console.log(book1.setTitle());
// console.log(book1);

// console.log(book1.greeting());
// console.log(Book.show());

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);  //extends
        this.month=month;
    }
}

var maga=new Magazine("OOP","Aung Aung","2010","September");
console.log(maga);
console.log(maga.greeting());
console.log(maga.setTitle());
console.log(maga);