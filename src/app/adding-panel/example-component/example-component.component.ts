import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit {

  exampleForm: FormGroup;
  result: number;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.exampleForm = this.formBuilder.group({
      firstNumber: [],
      secondNumber: [],
      result: []
    });
  }

  addNumbers() {
    const firstNumber = parseInt(this.exampleForm.getRawValue().firstNumber);
    const secondNumber = parseInt(this.exampleForm.getRawValue().secondNumber);
    this.result = firstNumber + secondNumber;
  }
}
