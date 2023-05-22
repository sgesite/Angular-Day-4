import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplatelistComponent } from './pages/templatelist/templatelist.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatelistComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TemplateformRoutingModule { }
