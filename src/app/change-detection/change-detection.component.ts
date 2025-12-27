import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  
  //we can disbale the default change detection of angular in main.ts
  //platformBrowserDynamic()
    //.bootstrapModule(AppModule, { ngZone: 'noop' }) zone.js
  
  counter = 0;

  //also add example to demonstrate markforchange using ChangeDetectorRef
  constructor(private cd: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;

      //this.cd.markForCheck();
    }, 1000);
  }

  detach() {
    // Detach change detection
    this.cd.detach();
  }

  reattach() {
    // Reattach change detection
    this.cd.reattach();
  }

  detectChanges() {
    // Manually trigger change detection
    this.cd.detectChanges();
  }

  markForCheck() {
    // Mark this component for check on the next CD cycle
    this.cd.markForCheck();
  }
}
