import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../add-articles/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() articles: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.articles);
  }

}
