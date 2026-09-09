import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral' | 'info';

@Component({
  selector: 'emi-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="emi-badge" [ngClass]="'emi-badge--' + variant()">
      <span class="emi-badge__dot"></span>
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  variant = input<BadgeVariant>('neutral');
}

