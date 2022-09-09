import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Player } from '../../../shared/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'multi-select-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  @Input()
  options: Player[] = [];

  @Input('min')
  minSelectedOptions = 1;

  @Input('max')
  maxSelectedOptions = 1;

  constructor(private router: Router) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {}

  buildForm(): FormGroup {
    return new FormGroup({
      players: new FormControl('', [
        Validators.required,
        this.minSelected.bind(this),
        this.maxSelected.bind(this),
      ]),
    });
  }

  submit() {
    this.router.navigate(['game/games']);
  }

  private minSelected(control: AbstractControl): ValidationErrors | null {
    return control.value.length < this.minSelectedOptions
      ? {
          minOptions: `You must select at least ${this.minSelectedOptions} options`,
        }
      : null;
  }

  private maxSelected(control: AbstractControl): ValidationErrors | null {
    return control.value.length > this.maxSelectedOptions
      ? {
          maxOptions: `You must select at most ${this.maxSelectedOptions} options`,
        }
      : null;
  }
}
