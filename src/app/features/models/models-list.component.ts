import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService } from '../../core/services/analysis.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent, ButtonComponent, IconComponent, RouterLink],
  template: `
    <div class="emi-page">
      <header class="emi-page-header">
        <div>
          <h1 class="emi-page-title">Modelos de Análise</h1>
          <p class="emi-page-desc">Gerencie e configure os termos de monitoramento do YouTube</p>
        </div>
        <emi-button variant="primary" routerLink="/dashboard">
          <emi-icon name="plus" [size]="16"></emi-icon>
          <span>Criar Novo Modelo</span>
        </emi-button>
      </header>

      <div class="emi-models-grid">
        @for (model of models(); track model.id) {
          <emi-card [title]="model.name" [subtitle]="'Criado em ' + (model.createdAt | date: 'dd/MM/yyyy')">
            <div class="model-details">
              <div class="detail-row">
                <span class="label">Termo de Pesquisa:</span>
                <span class="val font-semibold">"{{ model.searchTerm }}"</span>
              </div>
              <div class="detail-row">
                <span class="label">Tipo de Vídeo:</span>
                <span class="val">{{ model.videoType }}</span>
              </div>
              <div class="detail-row">
                <span class="label">Mín. Visualizações:</span>
                <span class="val">{{ model.minViews | number }}</span>
              </div>
              <div class="detail-row">
                <span class="label">Vídeos Coletados:</span>
                <span class="val">{{ model.videoCount }}</span>
              </div>
              <div class="detail-footer">
                <emi-badge [variant]="model.status === 'Ativo' ? 'success' : 'warning'">
                  {{ model.status }}
                </emi-badge>
              </div>
            </div>
          </emi-card>
        }
      </div>
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
    .emi-page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    .emi-models-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.25rem;
    }
    .model-details {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      font-size: 0.875rem;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed var(--emi-border-subtle);
      padding-bottom: 0.375rem;
    }
    .label {
      color: var(--emi-text-secondary);
    }
    .val {
      color: var(--emi-text-primary);
    }
    .detail-footer {
      margin-top: 0.75rem;
      display: flex;
      justify-content: flex-end;
    }
  `],
})
export class ModelsListComponent {
  private analysisService = inject(AnalysisService);
  models = this.analysisService.models;
}

