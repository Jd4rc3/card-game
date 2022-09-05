import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'new-game-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  @Input()
  options: { value: any; label: string }[] = [
    { value: 0, label: 'Looks like here must be some data 😅' },
  ];

  @Input('min')
  minSelectedOptions = 2;

  constructor() {
    this.form = this.buildForm();
  }

  ngOnInit(): void {}

  buildForm(): FormGroup {
    return new FormGroup({
      players: new FormControl('', [
        Validators.required,
        this.minPlayers.bind(this),
      ]),
    });
  }

  submit() {
    console.log(this.form.value);
  }

  private minPlayers(control: AbstractControl): ValidationErrors | null {
    return control.value.length < this.minSelectedOptions
      ? {
          minOptions: `You must select at least ${this.minSelectedOptions} options`,
        }
      : null;
  }
}
