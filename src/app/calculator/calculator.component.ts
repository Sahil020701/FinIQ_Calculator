import { Component } from '@angular/core';
import { BodyCalcComponent } from './body-calc/body-calc.component';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [BodyCalcComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
