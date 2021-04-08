import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();

  constructor() {
  }

  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
  }

  rate(index: number): void {
    console.log(index);
    this.rated.emit(index);
  }
}
