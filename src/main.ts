import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule) //Hangi module ile başlayim olaya demek , app.module de tanımlanmış zaten
  .catch(err => console.error(err));
