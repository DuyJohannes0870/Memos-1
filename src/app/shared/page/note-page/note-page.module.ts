import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotePageRoutingModule } from './note-page-routing.module';
import { NotePageComponent } from './note-page.component';


@NgModule({
  declarations: [NotePageComponent],
  imports: [
    CommonModule,
    NotePageRoutingModule
  ]
})
export class NotePageModule { }
