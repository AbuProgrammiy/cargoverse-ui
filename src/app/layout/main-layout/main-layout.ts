import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "../../shared/top-bar/top-bar";

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    TopBar
],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
