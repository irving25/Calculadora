import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion de calculadora!';
  operandoa:number;
  operandob:number;
  resultado:number;

  onSumar():void{
    this.resultado = this.operandoa + this.operandob;
  }

}
