import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService, Toast } from '../../../core/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private sub!: Subscription;

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    this.sub = this.toastService.toasts$.subscribe(t => this.toasts = t);
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
