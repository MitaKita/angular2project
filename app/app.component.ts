import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div>
  	<label>Event name: </label>
  	<input id='eventName'>
  </div>
  `
})
export class AppComponent {
	title = 'Event List Creator';
}
