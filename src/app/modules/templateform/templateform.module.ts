import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateformRoutingModule } from './templateform-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TemplatelistComponent } from './pages/templatelist/templatelist.component';

@NgModule({
  declarations: [
    TemplatelistComponent
  ],
  imports: [
    CommonModule,
    TemplateformRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class TemplateformModule { }
