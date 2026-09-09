import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, IconComponent],
  template: `
    <div class="emi-page">
      <header class="emi-page-header">
        <div>
          <h1 class="emi-page-title">Relatórios Estratégicos</h1>
          <p class="emi-page-desc">Consolidação e exportação dos insights gerados pela IA</p>
        </div>
      </header>

      <emi-card title="Relatório de Desempenho de Campanha">
        <div class="report-content">
          <p class="report-lead">
            Análise consolidada gerada a partir dos comentários públicos do YouTube para a campanha
            <strong>"campanha smartphone"</strong>.
          </p>

          <div class="report-stats">
            <div class="stat-box">
              <span class="num">1.248</span>
              <span class="lbl">Comentários Avaliados</span>
            </div>
            <div class="stat-box">
              <span class="num text-green">62%</span>
              <span class="lbl">Aprovação / Positivo</span>
            </div>
            <div class="stat-box">
              <span class="num text-red">21%</span>
              <span class="lbl">Rejeição / Negativo</span>
            </div>
          </div>

          <div class="report-actions">
            <emi-button variant="primary">
              <emi-icon name="reports" [size]="16"></emi-icon>
              <span>Exportar PDF</span>
            </emi-button>
          </div>
        </div>
      </emi-card>
    </div>
  `,
  styles: [`
    .emi-page {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      max-width: 1320px;
      margin: 0 auto;
    }
    .emi-page-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--emi-text-primary);
    }
    .emi-page-desc {
      font-size: 0.875rem;
      color: var(--emi-text-secondary);
    }
    .report-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .report-lead {
      font-size: 0.9375rem;
      color: var(--emi-text-secondary);
    }
    .report-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 1.25rem;
      background: #f8fafc;
      border-radius: var(--emi-radius-md);
      border: 1px solid var(--emi-border);
    }
    .stat-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }
    .num {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--emi-text-primary);
    }
    .text-green { color: var(--emi-positive); }
    .text-red { color: var(--emi-negative); }
    .lbl {
      font-size: 0.75rem;
      color: var(--emi-text-secondary);
    }
    .report-actions {
      display: flex;
      justify-content: flex-end;
    }
  `],
})
export class ReportsComponent {}

