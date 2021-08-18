import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// this is the entry point of the application ; 
// starts compiling with the appModule  ;
// it can be changed to other Module ;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
