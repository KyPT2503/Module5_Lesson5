import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamedCardComponent } from './named-card/named-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountDownComponent } from './count-down/count-down.component';
import { RatingComponent } from './rating/rating.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NamedCardComponent,
    ProgressBarComponent,
    CountDownComponent,
    RatingComponent,
    ArticlesComponent,
    AddArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
