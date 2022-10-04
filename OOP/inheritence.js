// constructor
function Magazine(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    // this.getTitle=function(){
    //     return `Title is ${this.title}`;
    // };
}
Magazine.prototype.getTitle=function(){
    return `Book title is ${this.title} and author is ${this.author} , published in ${this.year}`
};

Magazine.prototype.getYear=function(){
    const year=new Date().getFullYear() -this.year;

    return `${this.title} is written ${year} years ago.`;
}

//constructor
function News(title,author,year,month){
    Magazine.call(this,title,author,year); // inheritence
    this.month=month;
    this.getTitle=function(){
        return `Book title is ${this.title} and author is ${this.author} , published in ${this.year}`


    }

}

News.prototype= Object.create(Magazine.prototype); // inheritence

var page= new News("Myanmar Book","Sir Maung","2018","8");
console.log(page);
console.log(page.getTitle());

console.log(page.getYear());