import { Component, Input } from '@angular/core';

@Component({
  selector: 'big-card',
  standalone: true,
  imports: [],
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

}
