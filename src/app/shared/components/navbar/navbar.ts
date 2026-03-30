import { Component, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [Drawer, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected isDrawerVisisble = signal<boolean>(false);
}
