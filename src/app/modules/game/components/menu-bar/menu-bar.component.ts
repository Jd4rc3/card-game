import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() time: number | undefined = 0;

  @Input() round: number | undefined = 1;

  @Input() players: number | undefined = 0;

  @Input() disabled = true;

  constructor() {}

  ngOnInit(): void {}
}
