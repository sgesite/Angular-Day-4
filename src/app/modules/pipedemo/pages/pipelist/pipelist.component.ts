import { Component } from '@angular/core';

@Component({
  selector: 'app-pipelist',
  templateUrl: './pipelist.component.html',
  styleUrls: ['./pipelist.component.scss']
})
export class PipelistComponent {
  date1 = new Date();
  myString = "Jason Lee";
  amount = 123.45678;
  percent = 0.4567;
  toRaise = 5;
}
