import { Component, input } from '@angular/core';

@Component({
  selector: 'emi-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  name = input.required<string>();
  size = input<number>(20);
  color = input<string>('currentColor');
}

