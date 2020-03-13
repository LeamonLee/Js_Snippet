import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-test', 
  // selector: '[app-test]',
  selector: 'app-test',
  template: `
    <div>
      <!-- interpolation -->
      <!-- Data Flow: Class -> Template -->
      <!-- onterpolation only works for "string" value. If we're going to bind boolean type variable, we need to use Property binding method, which is the one below. -->
      <h2>Welcome {{name}}</h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name}}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{url}}</h2>
      
      <!-- Assignment dowsn't work -->
      <!-- <h2>{{a = 2 + 2}}}</h2> -->

      <!-- The below global variable dowsn't work -->
      <!-- <h2>{{window.location.href}}</h2> -->

      <!-- property binding -->
      <!-- Data Flow: Class -> Template -->
      <!-- Angular's property binding is binding DOM properties instead of HTML Attribute -->
      <!-- HTML Attribute is the initial value which we wrtie in HTML code. And it initializes DOM properties and they are done.(won't change anymore) -->
      <!-- DOM Property, on the other hand, can change over time. -->
      
      <input [id]="myId" bind-disabled="isDisabled"  type="text" value="Vishwas">

      <!-- isDisabled is a variable -->
      <input id="{{myId}}" [disabled]="isDisabled"  type="text" value="Vishwas">
      <input id="{{myId}}" [disabled]="false"  type="text" value="Vishwas">

      <!-- The following two won't work -->
      <!-- <input id="{{myId}}" disabled="false"  type="text" value="Vishwas"> -->
      <!-- <input id="{{myId}}" disabled="{{false}}"  type="text" value="Vishwas"> -->

      <!-- class binding -->
      <!-- Data Flow: Class -> Template -->

      <!-- The regular way -->
      <h2 class="text-success">Codevolution</h2>

      <!-- specialClass is a variable -->
      <h2 class="{{specialClass}}">Codevolution</h2>

      <!-- successClass is a variable -->
      <h2 [class]="successClass">Codevolution</h2>
      
      <!-- class-binding property will override the regular one when both are present at the same time -->
      <h2 class="text-special" [class]="successClass">Codevolution</h2>
      
      <!-- Based on hasError variable to decide if we're going to apply text-danger class.  -->
      <h2 [class.text-danger]="hasError">Codevolution</h2>

      <h2 [ngClass]="messageClasses">Message</h2>       <!-- bind multiple classes -->
      
      <!-- style binding -->
      <!-- Data Flow: Class -> Template -->
      <!-- style binding is used to apply in-line style to html element -->

      <!-- highlightColor is a variable -->
      <h2 [style.color]="highlightColor">Style Binding 3</h2>
      
      <!-- Note the single quotes here -->
      <h2 [style.color]="'orange'">Style Binding</h2>
      
      <!-- Use conditional operator to assign value to css color property -->
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>

      <!-- bind multiple styles -->
      <h2 [ngStyle]="titleStyles">Style Binding 4</h2>

      <!-- Event binding -->
      <!-- Data Flow: Template -> Class -->

      <!-- onClick is the function defined in class -->
      <!-- $event is the special variable for Angular which gives you all the information about the raised DOM event -->
      <button (click)="onClick($event)">Greet</button>
      
      <button (click)="greeting = 'Welcome Vishwas'">Greet Vishwas</button> 
      <h2>{{greeting}}</h2>

      <!-- Template reference variable -->
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>

      <!-- Two way binding -->
      <!-- name is a variable -->
      <input type="text" [(ngModel)]="name">
      {{name}}
    </div>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public url = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public successClass = "text-success";
  public specialClass = "text-special";
  
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";
  
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event)
    this.greeting = event.type;   // 'click' for button click event
  }
  
  logMessage(value){
    console.log(value)
  }

}
