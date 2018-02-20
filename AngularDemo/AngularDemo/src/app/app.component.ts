import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} {{ pageTitle }}</h1>`,
})
export class AppComponent  {
    pageTitle: string = 'Acme Product Management.';

    name = 'Angular....';
}
