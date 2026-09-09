import { Component, input, output, forwardRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'emi-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  label = input<string>();
  type = input<string>('text');
  placeholder = input<string>('');
  prefixIcon = input<string>();
  disabled = input<boolean>(false);
  errorMessage = input<string>();
  required = input<boolean>(false);

  value = signal<string>('');
  isPasswordVisible = signal<boolean>(false);

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(val: string): void {
    this.value.set(val || '');
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // handled via binding
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.onChange(target.value);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible.update((v) => !v);
  }

  get effectiveType(): string {
    if (this.type() === 'password') {
      return this.isPasswordVisible() ? 'text' : 'password';
    }
    return this.type();
  }
}

