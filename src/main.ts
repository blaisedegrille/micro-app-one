import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

createApplication()
  .then((app) => {
    const MyComponent = createCustomElement(AppComponent, {
      injector: app.injector,
    });
    customElements.define('app-one', MyComponent);
  })
  .catch((err) => console.error(err));
