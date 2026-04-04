import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer, Toast],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
