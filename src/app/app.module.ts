import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AgSubjectsComponent } from './ag-subjects/ag-subjects.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LifecycleChildComponent } from './life-cycle-hooks/lifecycle-child/lifecycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PropertyBindingComponent,
    AgSubjectsComponent,
    TempFormComponent,
    MergeMapComponent,
    ChangeDetectionComponent,
    LifeCycleHooksComponent,
    LifecycleChildComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
