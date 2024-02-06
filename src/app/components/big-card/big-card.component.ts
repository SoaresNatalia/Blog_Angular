import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  fotoBig :string = '';
  @Input()
  tituloBig :string = '';
  @Input()
  textoBig :string = '';

  @Input()
  id :string= '0'

}
