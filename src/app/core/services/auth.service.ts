import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _currentUser = signal<User | null>({
    id: 'usr-1',
    name: 'Giovanne Bordotti',
    email: 'usuario@email.com',
    role: 'Analista de Marketing',
  });

  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  constructor(private router: Router) {}

  login(email: string, _password: string): boolean {
    // Simula login bem-sucedido com qualquer credencial preenchida
    this._currentUser.set({
      id: 'usr-1',
      name: email.split('@')[0] || 'Usuário',
      email: email || 'usuario@email.com',
      role: 'Analista de Marketing',
    });
    this.router.navigate(['/dashboard']);
    return true;
  }

  logout(): void {
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }
}

