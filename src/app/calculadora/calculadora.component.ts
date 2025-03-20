import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  a = 0;
  b = 0;
  soma=0;
  divisao=0;
  subtracao=0;
  multiplicacao=0;

  somar(){
    this.soma=this.a + this.b
    return this.soma
  }
  dividir(){
    this.divisao=this.a/this.b
    return this.divisao
  }
subtrair(){
  this.subtracao=this.a-this.b
  return this.subtracao
}
multiplicar(){
  this.multiplicacao=this.a*this.b
  return this.multiplicacao
}
}
