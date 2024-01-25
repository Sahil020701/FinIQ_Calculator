import { Routes, RouterModule } from '@angular/router';
import { BodyCalcComponent } from './calculator/body-calc/body-calc.component';
import { TempCalComponent } from './temp-cal/temp-cal.component';
import { CurrConverterComponent } from './calculator/curr-converter/curr-converter.component';

export const routes: Routes = [
    { path: '', component: BodyCalcComponent},
    { path: 'Temp', component: TempCalComponent},
    { path: 'Currency' , component: CurrConverterComponent}
];

