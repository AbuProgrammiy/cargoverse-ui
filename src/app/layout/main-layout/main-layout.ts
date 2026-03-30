import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "../../shared/top-bar/top-bar";
import { Navbar } from "../../shared/components/navbar/navbar";

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    TopBar,
    Navbar
],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
