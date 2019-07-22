import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdesignModule } from './antdesign.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AntdesignModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AntdesignModule
  ]
})
export class SharedModule { }
