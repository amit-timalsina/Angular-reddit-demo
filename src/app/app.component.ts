import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles= [
      new Article('Angular', 'http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angular Homepage','http://angular.io',1)
    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
  sorted(): Article[]{
    return  this.articles.sort((a:Article, b:Article)=> b.votes-a.votes)
  }
}

