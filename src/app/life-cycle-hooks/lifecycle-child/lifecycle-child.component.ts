import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css'
})
export class LifecycleChildComponent {
  @Input() someInput?: any;

  ngOnChanges(changes: SimpleChanges) {

    console.log('Child: ngOnChanges called');
    console.log('SimpleChanges', changes);
  }


  ngOnInit() {
    
    console.log('Child: ngOnInit called');
  }


  // it runs whenever change detection of the given component is invoked
  
  ngDoCheck() {
    console.log('Child: ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('Child: ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('Child: ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('Child: ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('Child: ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('Child: ngOnDestroy called');
  }
}
