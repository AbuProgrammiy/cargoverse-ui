import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-admin-login',
  imports: [InputText, FormsModule, Button],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss',
})
export class AdminLogin {
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  protected password = signal<string | null>(null);
  private readonly PASSWORD = 'root';

  protected submit() {
    if (this.password() == this.PASSWORD) {
      this.messageService.add({
        summary: 'Success',
        detail: 'Successfully loged in !',
        severity: 'success',
      });

      localStorage.setItem('hasAccess', 'true');
      this.router.navigate(['admin-panel']);
    } else {
      this.messageService.add({
        summary: 'Error',
        detail: 'Password incorrect !',
        severity: 'error',
      });
    }
  }
}
