import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AgSubjectsComponent } from './ag-subjects/ag-subjects.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'property',
    component: PropertyBindingComponent,
    children: [],
  },
  {
    path: 'subjects',
    component: AgSubjectsComponent,
    children: [],
  },
  {
    path: 'templateform',
    component: TempFormComponent,
    children: [],
  },
  {
    path: 'rxjs-operators',
    component: MergeMapComponent,
    children: [],
  },
  {
    path: 'changedetection',
    component: ChangeDetectionComponent,
    children: [],
  },
  {
    path: 'lifecyclehooks',
    component: LifeCycleHooksComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
