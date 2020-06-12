import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'row';
constructor() {}
voteUp(): boolean{
  this.article.voteUp();
  return false;
}
voteDown(): boolean{
  this.article.voteDown();
  return false;
}
  ngOnInit(): void {
   }

}
