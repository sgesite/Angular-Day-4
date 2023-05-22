import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ExponentialPipe } from './pipes/exponential.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ExponentialPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ExponentialPipe]
})
export class SharedModule { }
