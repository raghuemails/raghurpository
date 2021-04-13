import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  title = 'Browser All Courses';
  constructor (private httpService: HttpClient) { }
  cards: string [];

  ngOnInit () {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.cards = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}