import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject, from } from 'rxjs';

@Component({
  selector: 'app-ag-subjects',
  templateUrl: './ag-subjects.component.html',
  styleUrl: './ag-subjects.component.css'
})
export class AgSubjectsComponent implements OnInit {
  
  newSub = new Subject();

  obj1 = new Observable((observer) =>{

    observer.next(11);
    observer.next(22);
    observer.error(new Error('something went wrong!'));
    observer.complete();

  })
    //Obervable - from operator will return observale which will emit 2 values 10,20
    //unicast
    obj2 = from([10,20]); 


    //Subject is multicast
    //none of the subscriber will receive value unless we call next
    //once we emit data with next() all the subscribers will receive value
    sub1 = new Subject();


    //As Subject dont emit any initial value
    //Behavior subject will emit inital value even before calling next() on it

    bsub1 = new BehaviorSubject(20);

    asub1 = new AsyncSubject();

    

  ngOnInit(): void {
  

    this.newSub.subscribe((val)=>{
      console.log("New Sub: " + val);
    });
    
    this.obj1.subscribe({
      next(value) {
        
      },
      error(err) {
        
      },
      complete() {
        
      }
    });

    this.obj2.subscribe((val)=>{
      console.log("Observer1: " + val);
      
    })

    this.obj2.subscribe((val)=>{
      console.log("Observer2: " + val);
      
    })
    

    
    this.sub1.subscribe((val)=>{
      console.log("Sub1: " + val);
      
    })

    this.sub1.subscribe((val)=>{
      console.log("Sub2: " + val);
      
    })

    this.sub1.next(10);
    
    this.bsub1.next(200);

    //adding subscriber after behaviorsubject has emitted value
    this.bsub1.subscribe((val) =>{
      console.log("Sub3: " + val);
      
    })
    //this subscriber will receive previously emitted value as its initial value i.e. 200

    this.bsub1.next(400); // now all the subscribers of behaviour subject will receive value 400


    this.asub1.next(10);
    this.asub1.next(20);
    this.asub1.next(30); // last emitted value . i.e. latest emitted value


    this.asub1.subscribe((val)=>{

    })

    this.asub1.complete(); // only when complete is called..
    //it cannot emit any further value. i.e. we can call complete() only once
  }



}
