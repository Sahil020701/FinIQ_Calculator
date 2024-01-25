import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { BodyCalcComponent } from './calculator/body-calc/body-calc.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CurrConverterComponent } from './calculator/curr-converter/curr-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , CalculatorComponent , BodyCalcComponent , FormsModule , HeaderComponent , CurrConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Calc';
}
