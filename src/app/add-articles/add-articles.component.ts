import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  @Output() newArticleEmitter = new EventEmitter<Article>();

  article: Article = new Article('name', 'url');

  constructor() {
  }

  ngOnInit(): void {
  }

  create(): void {
    this.newArticleEmitter.emit(new Article(this.article.name, this.article.url));
  }
}
