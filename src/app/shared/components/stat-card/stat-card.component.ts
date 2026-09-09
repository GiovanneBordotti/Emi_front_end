import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'emi-stat-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="emi-stat-card">
      <div class="emi-stat-card__body">
        <span class="emi-stat-card__title">{{ title() }}</span>
        <div class="emi-stat-card__value-row">
          <span class="emi-stat-card__value">{{ value() }}</span>
        </div>
      </div>
      <div class="emi-stat-card__icon-box" [ngClass]="'emi-stat-card__icon-box--' + iconTheme()">
        <emi-icon [name]="iconName()" [size]="22"></emi-icon>
      </div>
    </div>
  `,
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  title = input.required<string>();
  value = input.required<string | number>();
  iconName = input.required<string>();
  iconTheme = input<'default' | 'positive' | 'negative' | 'info'>('default');
}

