import {Component, OnInit} from '@angular/core';
import {Article} from './add-articles/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lesson5';
  card = {
    imageUrl: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/101809677_970658276709272_5860094302765985518_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ou9XaKT3xTkAX-alM1K&_nc_ht=scontent.fhan3-3.fna&oh=657cd8a83957624bf7f08a81a7f14452&oe=609313AF',
    name: 'Angular',
    email: 'thekypccc@gmail.com',
    phone: '0911100804'
  };
  progress = 0;
  time = 10;
  articles: Article[] = [new Article('Name1', 'http://facebook.com'),
    new Article('Name2', 'http://facebook.com'),
    new Article('Name3', 'http://facebook.com'),
    new Article('Name4', 'http://facebook.com'),
  ];

  runProgress(): void {
    const id = setInterval(() => {
      this.progress += 1;
      if (this.progress === 100) {
        clearInterval(id);
      }
    }, 10);
  }

  ngOnInit(): void {
    this.runProgress();
  }

  changeTime($event: number): void {
    console.log('ChangeTime function run.');
    console.log($event);
    this.time = $event;
  }

  createArticle($event: Article): void {
    console.log($event);
    console.log('run');
    this.articles = this.articles.concat($event);
  }
}
