@Component({
  selector: 'radio-payment',
  templateUrl: './radio-payment.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioPaymentComponent),
      multi: true
    }
  ]
})
export class RadioPaymentComponent implements OnInit, ControlValueAccessor {

  @Input() payments: any[];
  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() { }

  setValue(pay: any) {
    this.value = pay;
    this.onChange(this.value);
  }


  /**
   * Write a new value to the element.
   */
  writeValue(obj: any): void {
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {}
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {}

}
import {Component, forwardRef, Input, OnInit} from '@angular/core'

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
