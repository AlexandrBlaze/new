import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public questions:({ title: string; answer: string })[] = [
    {
      title: 'Как вас зовут?',
      answer: ''
    },
    {
      title: 'Сколько вам лет?',
      answer: ''
    },
    {
      title: 'Ваш телефон',
      answer: ''
    },
    {
      title: 'Ваш E-mail',
      answer: ''
    }
  ];

  public result: any;


  public getAnswers(event: {title: string, answer: string}) {
    this.result = event;
  }

}
