import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-temp-cal',
  host:{ngSkipHydration:'true'},
  standalone: true,
  imports: [MatButtonModule , FormsModule , CommonModule],
  templateUrl: './temp-cal.component.html',
  styleUrl: './temp-cal.component.css',
  
})
export class TempCalComponent {
  inputTemp: string = '';

  tempClick(value: string) {
    if (value === 'Del') {
      if (this.inputTemp !== '') {
        this.inputTemp = this.inputTemp.slice(0, -1);
      }
    } else if (value === "RESET") {
      this.inputTemp = '';

    } 
    else if (value === 'C->F') {
      let celsius: number = parseFloat(this.inputTemp);
      if (!isNaN(celsius)) {
        this.inputTemp = ((9 / 5 * celsius) + 32).toFixed(2);
      } 
      else {
        this.inputTemp = 'Error';
      }

    } 
    else if (value === 'F->C') {
      let fahrenheit: number = parseFloat(this.inputTemp);
      if (!isNaN(fahrenheit)) {
        this.inputTemp = ((5 / 9 * (fahrenheit - 32))).toFixed(2);
        
      } 
      else {
        this.inputTemp = 'Error';
      }
    } 
    else {
      this.inputTemp += value;
    }
  }
}
