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
  player!: Player;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/game' },
    ];
  }

  logout() {
    this.authService.signOut();
  }
}
