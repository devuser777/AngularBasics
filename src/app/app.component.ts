import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewRef,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'AgInterviewPrep';

  constructor(private cd: ChangeDetectorRef) {
    // Initialization logic can go here
    //this.cd.detach();
    console.log('AppComponent initialized', this.cd);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'AgInterviewPrep - Updated';

      //this.cd.reattach();
      //this.cd.markForCheck();

      console.log('Change detection marked for check');
    }, 2000);
  }
}
