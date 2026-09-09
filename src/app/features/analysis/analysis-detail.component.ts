import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis.service';
import { AnalysisModel, SentimentType, CommentItem } from '../../core/models/analysis.model';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SentimentBarComponent } from '../../shared/components/sentiment-bar/sentiment-bar.component';
import { AlertBannerComponent } from '../../shared/components/alert-banner/alert-banner.component';

@Component({
  selector: 'app-analysis-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CardComponent,
    BadgeComponent,
    IconComponent,
  ],
  templateUrl: './analysis-detail.component.html',
  styleUrls: ['./analysis-detail.component.scss'],
})
export class AnalysisDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private analysisService = inject(AnalysisService);

  model = signal<AnalysisModel | undefined>(undefined);
  activeSentimentFilter = signal<SentimentType | 'Todos'>('Todos');

  readonly filteredComments = computed<CommentItem[]>(() => {
    const m = this.model();
    if (!m || !m.detailedAnalysis) return [];
    const filter = this.activeSentimentFilter();
    if (filter === 'Todos') {
      return m.detailedAnalysis.comments;
    }
    return m.detailedAnalysis.comments.filter((c) => c.sentiment === filter);
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const found = this.analysisService.getModelById(id);
        if (found) {
          this.model.set(found);
          return;
        }
      }
      // fallback para o primeiro modelo cadastrado
      const first = this.analysisService.models()[0];
      this.model.set(first);
    });
  }

  setFilter(filter: SentimentType | 'Todos'): void {
    this.activeSentimentFilter.set(filter);
  }
}
