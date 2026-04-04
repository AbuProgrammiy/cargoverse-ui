import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Toast } from "primeng/toast";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Toast],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private readonly route = inject(Router);
  protected hasAccess = signal<boolean>(false);
  ngOnInit(): void {
    this.checkUserAccess();
  }

  private checkUserAccess() {
    const hasAccess = localStorage.getItem('hasAccess');

    if (!hasAccess) {
      this.hasAccess.set(false);
      this.route.navigate(['admin/login']);
      return;
    }

    this.hasAccess.set(true);
  }
}
