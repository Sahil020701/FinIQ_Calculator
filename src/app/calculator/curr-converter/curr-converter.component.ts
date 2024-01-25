import { Component , OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { CurrServiceService } from './curr-service.service';
@Component({
  selector: 'app-curr-converter',
  host:{ngSkipHydration:'true'},
  standalone: true,
  imports: [MatButtonModule , FormsModule , MatFormFieldModule , MatSelectModule , CommonModule, MatInputModule , HttpClientModule],
  templateUrl: './curr-converter.component.html',
  styleUrl: './curr-converter.component.css'
})


export class CurrConverterComponent {

constructor(private httpservice: CurrServiceService){};

  inputAmount: number = 0;
  primaryInput: string = '';
  targetInput: string = '';
  result: number | null = null;
  currencies: any[] = []; 


    arr = [];
  ngOnInit(){
    this.httpservice.getCurrencies().subscribe((currNations: any) =>{
      currNations => currNations.json;
      this.arr = Object.keys(currNations.conversion_rates);
      // console.log(arr);
    })
  }

  convert(){
    this.httpservice.getcurr(this.primaryInput).subscribe((currNations: any) =>{
      currNations => currNations.json;
      // this.result = Object.values(currNations.conversion_rates);
      const conversionRates = currNations.conversion_rates;
      const exrate = conversionRates[this.targetInput]/conversionRates[this.primaryInput];
      this.result = exrate*this.inputAmount;
      console.log(this.result)
    })
  }
}
