import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  /**
   * ngOnInit - получаем данные свойства data - title,
   * а затем устанавливаем данный заголовок при  переходе на страницу About
   */
  ngOnInit() {
    this.route.data.subscribe((item) => {
      this.title.setTitle(item.title);
    });
  }

}
