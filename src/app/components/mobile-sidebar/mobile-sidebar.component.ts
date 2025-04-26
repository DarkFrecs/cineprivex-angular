import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss'
})
export class MobileSidebarComponent {
  isClicked: boolean = false;

  openSidebar(): void {
    console.log("Menu clicked")

    const sidebarElement = document.getElementById('mobile-sidebar-container') as HTMLElement;

    if (this.isClicked) {
        sidebarElement.classList.add("hidden-menu");
        sidebarElement.classList.remove("show-menu");
        this.isClicked = false;
    } else {
        sidebarElement.classList.remove("hidden-menu");
        sidebarElement.classList.add("show-menu");
        this.isClicked = true;
    };
  }
}
