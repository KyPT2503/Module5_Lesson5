import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-named-card',
  templateUrl: './named-card.component.html',
  styleUrls: ['./named-card.component.css']
})
export class NamedCardComponent implements OnInit {
  @Input() card: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
