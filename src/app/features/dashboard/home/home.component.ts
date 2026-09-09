import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AnalysisService } from '../../../core/services/analysis.service';
import { VideoMetadata } from '../../../core/models/analysis.model';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SentimentBarComponent } from '../../../shared/components/sentiment-bar/sentiment-bar.component';
import { AlertBannerComponent } from '../../../shared/components/alert-banner/alert-banner.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    StatCardComponent,
    CardComponent,
    SentimentBarComponent,
    AlertBannerComponent,
    BadgeComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private fb = inject(FormBuilder);
  private analysisService = inject(AnalysisService);
  private router = inject(Router);

  readonly metrics = this.analysisService.metrics;
  readonly models = this.analysisService.models;

  isCreating = signal<boolean>(false);
  isLoadingVideo = signal<boolean>(false);
  previewVideo = signal<VideoMetadata | null>(null);
  successToast = signal<string | null>(null);

  // Formulário do Card "Criar modelo de análise" focado na URL do vídeo do YouTube
  modelForm = this.fb.group({
    videoUrl: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      [Validators.required],
    ],
    name: ['Campanha Smartphone 2026', [Validators.required]],
    videoType: ['Propaganda / Campanha', [Validators.required]],
    maxVideos: [10, [Validators.required, Validators.min(1), Validators.max(500)]],
    excludedWords: [''],
    excludedChannels: [''],
  });

  onFetchVideoPreview(): void {
    const url = this.modelForm.get('videoUrl')?.value;
    if (!url) return;

    this.isLoadingVideo.set(true);

    setTimeout(() => {
      const data = this.analysisService.fetchYouTubeVideoData(url);
      this.previewVideo.set(data);
      if (!this.modelForm.get('name')?.value) {
        this.modelForm.patchValue({ name: data.title });
      }
      this.isLoadingVideo.set(false);
      this.showToast('Dados do vídeo carregados via YouTube Data API!');
    }, 450);
  }

  onSaveModel(): void {
    if (this.modelForm.invalid) {
      this.modelForm.markAllAsTouched();
      return;
    }

    this.isCreating.set(true);
    const formVal = this.modelForm.value;

    setTimeout(() => {
      const newModel = this.analysisService.addModel({
        name: formVal.name || 'Nova Análise de Campanha',
        searchTerm: formVal.videoUrl || '',
        videoUrl: formVal.videoUrl || '',
        videoType: formVal.videoType || 'Propaganda / Campanha',
        minViews: 10000,
        maxVideos: Number(formVal.maxVideos) || 10,
        excludedWords: formVal.excludedWords || '',
        excludedChannels: formVal.excludedChannels || '',
      });

      this.isCreating.set(false);
      this.showToast('Modelo salvo e análise de IA gerada com sucesso!');

      // Redireciona para a tela de análise detalhada daquele vídeo
      this.router.navigate(['/analise', newModel.id]);
    }, 500);
  }

  deleteModel(event: Event, id: string): void {
    event.stopPropagation();
    this.analysisService.deleteModel(id);
    this.showToast('Modelo removido.');
  }

  focusNewModel(): void {
    const input = document.getElementById('videoUrlInput');
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private showToast(msg: string): void {
    this.successToast.set(msg);
    setTimeout(() => {
      this.successToast.set(null);
    }, 3500);
  }
}
