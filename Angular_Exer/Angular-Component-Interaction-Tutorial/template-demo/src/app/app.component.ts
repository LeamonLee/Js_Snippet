import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  // If you wnat to write component initialization code that uses the reference injected by this ViewChild decorator,
  // we need to do it in afterviewinit lifecycle hook. It is inside that lifecycle hook, the reference to DOM element become available.
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    if (value === 'Vishwas') {
      alert('Hello Vishwas!');
    }
    this._customerName = value;
  }

  incrementCounter() {
    this.count += 1;
  }

  greetVishwas(updatedValue) {
    if (updatedValue === 'Vishwas') {
      alert('Welcome back Vishwas');
    }
    this.userName = updatedValue;
  }
}
