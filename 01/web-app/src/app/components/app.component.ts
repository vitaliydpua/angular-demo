import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  value: number = 100;
  link = 'https://google.com';
  openMode = '_blank';
  classList = ['class1', 'class2', 'class3'];
  isHidden = false;

  getStr(): string {
    return 'Hello world';
  }

  sayHello(ev) {
    alert('Hello');
    console.log(ev);
  }
  onInputChange(ev) {
    console.log(ev);
  }
}
