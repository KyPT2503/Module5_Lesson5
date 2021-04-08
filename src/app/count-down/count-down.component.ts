import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() time: any;
  id: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  count(): void {
    this.id = setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        clearInterval(this.id);
      }
    }, 1000);
  }

  stop(): void {
    clearInterval(this.id);
  }

  reset(): void {
    this.time = 10;
  }
}
