import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-bar',
  templateUrl: './quote-bar.component.html',
  styleUrls: ['./quote-bar.component.css']
})
export class QuoteBarComponent implements OnInit {
  @Input() quote:Quote;

  numberOflikes=0;
  numberOfdislikes=0;
  
  likebuttonclick(){
    this.quote.numberOflikes ++;
  }

  dislikebuttonclick(){
    this.quote.numberOfdislikes ++;
  }

  @Output()isComplete=new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

