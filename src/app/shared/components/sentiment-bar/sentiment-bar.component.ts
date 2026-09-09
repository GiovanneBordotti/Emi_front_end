import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SentimentType = 'positive' | 'neutral' | 'negative';

@Component({
  selector: 'emi-sentiment-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="emi-sentiment-row">
      <div class="emi-sentiment-row__info">
        <span class="emi-sentiment-row__label">{{ label() }}</span>
        <span class="emi-sentiment-row__value">{{ percentage() }}%</span>
      </div>
      <div class="emi-sentiment-row__track">
        <div
          class="emi-sentiment-row__fill"
          [ngClass]="'emi-sentiment-row__fill--' + type()"
          [style.width.%]="percentage()"
        ></div>
      </div>
    </div>
  `,
  styleUrls: ['./sentiment-bar.component.scss'],
})
export class SentimentBarComponent {
  label = input.required<string>();
  percentage = input.required<number>();
  type = input<SentimentType>('positive');
}

