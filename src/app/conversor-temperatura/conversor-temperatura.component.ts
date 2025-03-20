import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {
  Celsius= 0;
  Fahrenheit = 0;
  Kelvin= 0;


  converter() {
    this.Fahrenheit= (this.Celsius*9/5) + 32
    this.Fahrenheit
    this.Kelvin = (this.Celsius + 273.15)
    this.Kelvin
  }

}
