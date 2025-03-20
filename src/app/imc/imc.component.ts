import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class IMCComponent {
  peso=0;
  altura=0;
  resultado=0;

  calcular (){
    this.resultado= (this.peso/(this.altura*this.altura))
  }
Classificacao(){
  if (this.resultado<18.5)
    return "abaixo do peso"
  if (this.resultado >=18.5 && this.resultado<= 24.9)
    return "peso normal"
  if (this.resultado >=25 && this.resultado<=29.9)
    return "sobrepeso"
  if (this.resultado >=30 && this.resultado <=34.9)
    return "obesidade grau I"
  if (this.resultado >=35 && this.resultado <=39.9)
    return "obesidade grau II"
  else {
    return "obesidade grau III"
  }
}
}
  

