import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';


import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-navegation-heade',
  templateUrl: './navegation-heade.component.html',
  styleUrls: ['./navegation-heade.component.css']
})
export class NavegationHeadeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    

  constructor(private authService: AuthService) {

  }


  logOut() {
    this.authService.logOut();
  }
}




