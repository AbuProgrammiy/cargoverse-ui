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
    MenubarModule,
    MenubarModule
  ],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {
  protected items = signal([
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette'
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette'
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope'
    }
  ]);
}
