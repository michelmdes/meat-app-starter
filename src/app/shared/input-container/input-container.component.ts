import {Component, ContentChild, Input, OnInit, AfterContentInit} from '@angular/core'
import {NgModel} from '@angular/forms';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  input: any;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit(): void {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
