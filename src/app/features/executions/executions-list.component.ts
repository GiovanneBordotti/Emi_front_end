import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-executions-list',
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent],
  template: `
    <div class="emi-page">
      <header class="emi-page-header">
        <div>
          <h1 class="emi-page-title">Histórico de Execuções</h1>
          <p class="emi-page-desc">Acompanhe as coletas via YouTube Data API e o processamento da Gemini API</p>
        </div>
      </header>

      <emi-card title="Pipeline de Execuções">
        <div class="table-responsive">
          <table class="emi-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Data / Hora</th>
                <th>Vídeos</th>
                <th>Comentários</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              @for (item of executions; track item.id) {
                <tr>
                  <td><code>{{ item.id }}</code></td>
                  <td><strong>{{ item.model }}</strong></td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.videos }}</td>
                  <td>{{ item.comments }}</td>
                  <td>
                    <emi-badge [variant]="item.status === 'Concluído' ? 'success' : 'info'">
                      {{ item.status }}
                    </emi-badge>
                  </td>
                </tr>
              }
            </tbody>
          </table>
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
    .table-responsive {
      overflow-x: auto;
    }
    .emi-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
      text-align: left;
    }
    .emi-table th {
      padding: 0.75rem 1rem;
      background-color: #f8fafc;
      color: var(--emi-text-secondary);
      font-weight: 600;
      border-bottom: 1px solid var(--emi-border);
    }
    .emi-table td {
      padding: 1rem;
      border-bottom: 1px solid var(--emi-border-subtle);
      color: var(--emi-text-primary);
    }
  `],
})
export class ExecutionsListComponent {
  executions = [
    { id: 'EXE-108', model: 'campanha smartphone', date: 'Hoje às 14:32', videos: 15, comments: 642, status: 'Concluído' },
    { id: 'EXE-107', model: 'vale-refeição', date: 'Hoje às 10:15', videos: 8, comments: 384, status: 'Concluído' },
    { id: 'EXE-106', model: 'campanha smartphone', date: 'Ontem às 18:00', videos: 5, comments: 222, status: 'Concluído' },
  ];
}

