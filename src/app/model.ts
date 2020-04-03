export class Quote {
    public quote: string;
    public author: string;
    public id: string;
    public permalink: string;


    constructor(quote: string,author:string,id:string,permalink:string){
        this.quote = quote;
        this.author = author;
        this.id = id;
        this.permalink = permalink;

    }
}
