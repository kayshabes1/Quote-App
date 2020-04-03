import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
import  Swal from 'sweetalert2'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[new Quote("Type of Quote","Example: With the new day comes new strength and new thoughts","Write author's name here",new Date(2018,7,20),0,0)];
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
     if(isComplete){
       let toDelete=Swal.fire({
        title: `${this.quotes[index].name}`,
        icon: 'success',
        html:`The quote has been deleted successfully.`
          ,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
     
     if(toDelete){
       this.quotes.splice(index,1)
     }
      }
  }
  addNewQuote(quote){
    let quotelength=this.quotes.length;
    quote.id=quotelength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
