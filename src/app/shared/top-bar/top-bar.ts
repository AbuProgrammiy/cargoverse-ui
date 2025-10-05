import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-top-bar',
  imports: [
    TabsModule,
    RouterLink,
    MenubarModule
  ],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {
  protected items = signal([
    { route: '', label: 'Home', icon: 'pi pi-home' },
    { route: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: 'products', label: 'Products', icon: 'pi pi-list' },
    { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
  ]);
}
