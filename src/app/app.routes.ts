import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { ModelsListComponent } from './features/models/models-list.component';
import { ExecutionsListComponent } from './features/executions/executions-list.component';
import { ReportsComponent } from './features/reports/reports.component';
import { AnalysisDetailComponent } from './features/analysis/analysis-detail.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login • EMI YouTube Analytics',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: HomeComponent,
        title: 'Dashboard de Análise • EMI YouTube Analytics',
      },
      {
        path: 'analise/:id',
        component: AnalysisDetailComponent,
        title: 'Análise Detalhada com IA • EMI YouTube Analytics',
      },
      {
        path: 'modelos',
        component: ModelsListComponent,
        title: 'Modelos • EMI YouTube Analytics',
      },
      {
        path: 'execucoes',
        component: ExecutionsListComponent,
        title: 'Execuções • EMI YouTube Analytics',
      },
      {
        path: 'relatorios',
        component: ReportsComponent,
        title: 'Relatórios • EMI YouTube Analytics',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
