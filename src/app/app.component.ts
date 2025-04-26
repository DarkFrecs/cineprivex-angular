import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileSidebarComponent } from "./components/mobile-sidebar/mobile-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobileSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cineprivex-angular';
}
