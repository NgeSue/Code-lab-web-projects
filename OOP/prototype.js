// constructor
function Magazine(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    // this.getTitle=function(){
    //     return `Title is ${this.title}`;
    // };
}
// prototype
Magazine.prototype.getTitle=function(){
    return `Book title is ${this.title} and author is ${this.author} , published in ${this.year}`
};

Magazine.prototype.getYear=function(){
    const year=new Date().getFullYear() -this.year;

    return `${this.title} is written ${year} years ago.`;
}

var maga=new Magazine("OOP","Saturn","2011");
console.log(maga.getTitle());
console.log(maga.getYear());