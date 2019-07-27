import { Component } from '@angular/core';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  items=[];
  constructor() {
    console.log('Hello PopoverComponent Component');
    this.items.push("1");
    this.items.push("12");
    this.items.push("1");
    this.items.push("1");
    this.items.push("1");

  }

}
