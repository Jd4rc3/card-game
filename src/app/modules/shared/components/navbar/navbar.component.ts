import { Component, OnInit } from '@angular/core';
import { Player } from '../../player.model';
import { AuthService } from '../../../login/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  visible: boolean = true;

  constructor(private authService: AuthService) {
    this.authService.onAuthStateChanged((user) =>
      user ? (this.visible = false) : (this.visible = true)
    );
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/game' },
    ];
  }

  logout() {
    this.authService.signOut();
  }
}
