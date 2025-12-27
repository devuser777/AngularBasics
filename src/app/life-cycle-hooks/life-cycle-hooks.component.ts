import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {

  counterVal = 0;
  //called when component is initialized
  //this hook is called once, after the first ngOnChanges -->
  // After the first ngOnChanges, the component is fully initialized and ready for use.
  // This means that all input properties have been set and the component's view is ready.
  // It's a good place to perform any additional initialization logic that depends on input properties.

  ngOnInit() {
    console.log('Parent: ngOnInit called');
  }

  ngDoCheck() {
    console.log('Parent: ngDoCheck called');
  }

  ngOnDestroy() {
    console.log('Parent: ngOnDestroy called');
  }

}
