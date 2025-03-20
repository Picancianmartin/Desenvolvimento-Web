import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  Nome: string = '';
  Sexo = '';
  Idade = 0;
  Valor = 0;
  resultado = 0;

  calcular() {
    if (this.Sexo == 'M'&& this.Idade <= 25)
      return this.resultado = this.Valor * 0.15
     if(this.Sexo == 'M' && this.Idade > 25)
      return this.resultado = this.Valor * 0.10
    else
      return this.resultado = this.Valor * 0.08}
  }

