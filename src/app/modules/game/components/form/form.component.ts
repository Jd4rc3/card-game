import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Player } from '../../../shared/player.model';

@Component({
  selector: 'new-game-form',
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

  constructor() {
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
    console.log(this.form.value);
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
