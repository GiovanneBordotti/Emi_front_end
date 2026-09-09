import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'emi-alert-banner',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="emi-alert-banner" [ngClass]="'emi-alert-banner--' + type()">
      <div class="emi-alert-banner__icon">
        <emi-icon name="alert" [size]="18"></emi-icon>
      </div>
      <div class="emi-alert-banner__text">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./alert-banner.component.scss'],
})
export class AlertBannerComponent {
  type = input<'warning' | 'danger' | 'info' | 'success'>('warning');
}

