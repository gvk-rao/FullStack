import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex8';
  msg : any;
  receiveData(data : string){
    this.msg = data;
    console.log('Receiving Data',data);
  }
  college = "Bapatla Engineering College";
}

/*
Data Binding

title = 'Ex8';
  name = "Hii Hello";
  link = "http://www.google.com";
  count = 0;
  btn = "button count";
  style = "style";
  col = 2;
  border = "2px solid black";
  color = "red";
  text = "";
  clickMe(){
    this.count++;
  }


  <!-- Class Binding -->
<h1 [class]="style">{{ name }}</h1>
<h2 [class.style]="true">{{ name }}</h2>
<h3 [ngClass]="style">{{ name }}</h3>
<h4 [ngClass]="{'style':true}">{{ name }}</h4>

<!-- Property Binding -->
<a [href]="link">Google</a>

<!-- Style Binding , Attribute Binding -->
<br/><br/>
<table [style.border]="border">
  <tr [style]="border">
    <td [attr.colspan]="col">One</td>
  </tr>
  <tr>
    <td [style.color]="color">Two</td>
    <td>Three</td>
  </tr>
</table>

<!-- Event Binding -->
<br/>
<input type="button" [attr.value]="btn" (click)="clickMe()">
<p>Click Count : {{ count }}</p>

<!-- Two Way Binding -->
<input name="text" [(ngModel)]="text">
<h1>Entered Text is : {{ text }}</h1>

------------
Directives

text = "";
  days : string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  today = new Date().getDay();
  style : string = "style";
  randomNum :number = Math.random();

<p *ngFor="let day of days" [ngClass]="style">{{ day }}</p>
<h3>Today is : {{ today }}</h3>
<div [ngSwitch]="today" [ngStyle]="{'color':'red'}">
  <p *ngSwitchCase="'0'">{{ days[0] }}</p>
  <p *ngSwitchCase="'1'">{{ days[1] }}</p>
  <p *ngSwitchCase="'2'">{{ days[2] }}</p>
  <p *ngSwitchCase="'3'">{{ days[3] }}</p>
  <p *ngSwitchCase="'4'">{{ days[4] }}</p>
  <p *ngSwitchCase="'5'">{{ days[5] }}</p>
  <p *ngSwitchDefault>{{ days[6] }}</p>
</div>

<h2>Random Number is : {{ randomNum }}</h2>
<h3 *ngIf="randomNum > 0.5 ; else elseStmt">You Win</h3>
<ng-template #elseStmt><h3>You Loose</h3></ng-template>

<input type="text" [(ngModel)]="text">
<h1>Entered Text is : {{ text.toUpperCase() }}</h1>
  */