import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    IconComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private authService = inject(AuthService);

  readonly currentUser = this.authService.currentUser;
  readonly isSidebarOpen = signal<boolean>(true);

  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Modelos', route: '/modelos', icon: 'models' },
    { label: 'Execuções', route: '/execucoes', icon: 'executions' },
    { label: 'Relatórios', route: '/relatorios', icon: 'reports' },
  ];

  toggleSidebar(): void {
    this.isSidebarOpen.update((open) => !open);
  }

  logout(): void {
    this.authService.logout();
  }
}

