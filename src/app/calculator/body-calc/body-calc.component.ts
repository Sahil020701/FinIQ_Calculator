import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-body-calc',
  host:{ngSkipHydration:'true'},
  standalone: true,
  imports: [MatButtonModule , FormsModule , CommonModule],
  templateUrl: './body-calc.component.html',
  styleUrl: './body-calc.component.css'
})



export class BodyCalcComponent {
  inputText: string = '';
  prevResult:string = '';
  calculationHistory: string = '';

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let key = event.key;

    
    if (/[\d\.\+\-\*\/\(\)=]|Backspace|Enter|Delete|Escape/.test(key)) {
      event.preventDefault();

      
      if (key === 'Enter') {
        key = '='; 
      }
      if (key === "Backspace"){
        key = 'Del'
      }
      if (key === "+"){
        key = '+'
      }
      if (key === "-"){
        key = '-'
      }
      if (key === "("){
        key = '('
      }
      if (key === ")"){
        key = ')'
      }
      if (key === "/"){
        key = '/'
      }
      if (key === "."){
        key = '.'
      }

      this.onButtonClick(key);
    }
  }

  updateCalculationHistory(prevResult: string , inputText:string) {

    let historyEntry =  prevResult + " = " + inputText;
    this.calculationHistory += historyEntry + "\n";
    this.inputText = '';
  }
  

//   onButtonClick(value: string) {
//     if (value === 'C') {
//         this.inputText = '';
//         this.calculationHistory = '';
//     } else if (value === 'Del') {
//         if (this.inputText !== '') {
//             this.inputText = this.inputText.slice(0, -1);
//         }
//     } else if (value === '=') {
//         try {
//             let prevResult = this.inputText;
//             // Use a regular expression to replace multiple decimal points with a single one
//             this.inputText = eval(this.inputText.replace(/(\..*)\./g, '$1')).toString();

//             this.updateCalculationHistory(prevResult, this.inputText);
//         } catch (error) {
//             this.inputText = 'Error';
//         }
//     } else if (value === '.') {
//         // Check if the last character is a decimal point
//         if (!this.inputText.includes('.')) {
//             this.inputText += value;
//         }
//     } else {
//         this.inputText += value;
//     }
// }



  onButtonClick(value: string) {
    
    if(value === 'C'){
      this.inputText = '';
      this.calculationHistory = '';
    }
    else if(value === 'Del'){
      if(this.inputText !== ''){
        this.inputText = this.inputText.slice(0, -1);
      } 
    }
    else if(value === '='){
      try{
        let prevResult = this.inputText;
        if(this.inputText === 'Error'){
          this.inputText = '';
        }
        this.inputText = eval(this.inputText.replace(/(\..*)\./g, '$1')).toString();
        this.updateCalculationHistory(prevResult , this.inputText);
      }
      catch (error){
        this.inputText = 'Error';
      }
    }
    else if(value === "."){
      if (!this.inputText.includes('.')) {
        this.inputText += value;
    }
  }
    else if(value === "/"){
      if(this.inputText.length === 0 ||  this.inputText[this.inputText.length - 1] === "/"){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }
    else if(value === "*"){
      if(this.inputText.length === 0 || this.inputText[this.inputText.length - 1] === "*"){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }

    else if(value === "-"){
      if(this.inputText[this.inputText.length - 1] === "-"){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }
    else if(value === "+"){
      if(this.inputText.length === 0 || this.inputText[this.inputText.length - 1] === "+"){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }

    else if(value === "("){
      if(this.inputText[this.inputText.length - 1] === "("){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }
    else if(value === ")"){
      if(this.inputText.length === 0 || this.inputText[this.inputText.length - 1] === ")"){
        this.inputText = this.inputText;
      }
      else{
        this.inputText += value;
      }
    }

  
    else {
  
      this.inputText += value;
    }
  }
}


  // isFloat(value) {
  //   const floatRegex = /^-?\d+(\.\d+)?$/;
  //   return floatRegex.test(value);
  // }