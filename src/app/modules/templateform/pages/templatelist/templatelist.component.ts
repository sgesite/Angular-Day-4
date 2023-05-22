import { Component } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatelist',
  templateUrl: './templatelist.component.html',
  styleUrls: ['./templatelist.component.scss']
})
export class TemplatelistComponent {
  powers = ['Fly', 'Zap', 'Stick', 'Lazer Eyes', 'Frozen Breath']
  model = new Hero(20, 'Batman', this.powers[1], 'Tony Stark',);

  onSubmit = (form: NgForm) => {
    console.log(this.model);
    console.log(form.value);
    console.log(form.valid);
  }
}
