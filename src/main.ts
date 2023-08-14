/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import { registerLicense } from '@syncfusion/ej2-base';
// registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cVWhAYVJ1WmFZfV1gdVdMZVVbRX9PMyBoS35RdUVrWHtecXVXRmRZWUBy');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
