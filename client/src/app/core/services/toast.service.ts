import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  show(type: Toast['type'], message: string, duration = 4000): void {
    const id = ++this.counter;
    const toast: Toast = { id, type, message };
    this.toastsSubject.next([...this.toastsSubject.value, toast]);
    setTimeout(() => this.dismiss(id), duration);
  }

  success(message: string) { this.show('success', message); }
  error(message: string)   { this.show('error', message); }
  info(message: string)    { this.show('info', message); }
  warning(message: string) { this.show('warning', message); }

  dismiss(id: number): void {
    this.toastsSubject.next(this.toastsSubject.value.filter(t => t.id !== id));
  }
}
