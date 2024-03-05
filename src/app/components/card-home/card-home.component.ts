import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent {
  @Input() image = ''
  @Input() title = ''
  @Input() subTitle = ''
  @Input() route? = ''
}
