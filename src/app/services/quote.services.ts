import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService {
  getPopularQuote() {
    throw new Error("Method not implemented.");
  }
    constructor(public http: HttpClient){

    }

    public getRandomQuote(){
        return this.http.get("http://quotes.stormconsultancy.co.uk/quotes/1.json");
    }
}