import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'emi-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="emi-card" [class.emi-card--no-padding]="noPadding()">
      @if (title() || hasHeader()) {
        <div class="emi-card__header">
          <div class="emi-card__titles">
            @if (title()) {
              <h3 class="emi-card__title">{{ title() }}</h3>
            }
            @if (subtitle()) {
              <p class="emi-card__subtitle">{{ subtitle() }}</p>
            }
          </div>
          <div class="emi-card__actions">
            <ng-content select="[card-actions]"></ng-content>
          </div>
        </div>
      }
      <div class="emi-card__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  title = input<string>();
  subtitle = input<string>();
  noPadding = input<boolean>(false);
  hasHeader = input<boolean>(false);
}

