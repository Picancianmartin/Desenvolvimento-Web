import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-calcular-media',
  imports: [FormsModule],
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  AC1 = 0;
  AC2 = 0;
  AG = 0;
  AF = 0;

 resultado: string = "";

  media = 0;
  
 
  calcularmedia() {
    this.media = (this.AC1*0.15 + this.AC2*0.30  + this.AG*0.10 + this.AF*0.45);

    if (this.media >= 5) {
      return this.resultado = "Aprovado";
    } else {
      return this.resultado = "Reprovado";
    }
  }
}
