import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule , MatToolbarModule , RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
