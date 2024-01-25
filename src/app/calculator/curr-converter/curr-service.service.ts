import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrServiceService {
  apiUrl = 'https://v6.exchangerate-api.com/v6/9dc9077c8ae8edbe5aabcddf/latest/INR';
  constructor(private httpservice: HttpClient) { }


  getCurrencies(){
    return this.httpservice.get(this.apiUrl);
    
  };

  getcurr(basecurr : string){
    return this.httpservice.get(this.apiUrl);
  };
}
