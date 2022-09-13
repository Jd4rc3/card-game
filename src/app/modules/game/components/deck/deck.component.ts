import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../shared/card.model';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  @Input() cards: Card[] = [];

  @Input() disabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}