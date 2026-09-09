import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'emi-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type()"
      [disabled]="disabled() || loading()"
      [class]="buttonClasses"
      (click)="onClick($event)"
    >
      @if (loading()) {
        <span class="spinner"></span>
      }
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');

  clicked = output<MouseEvent>();

  get buttonClasses(): string {
    return [
      'emi-btn',
      `emi-btn--${this.variant()}`,
      `emi-btn--${this.size()}`,
      this.fullWidth() ? 'emi-btn--full' : '',
      this.loading() ? 'emi-btn--loading' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }
}

