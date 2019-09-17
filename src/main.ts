import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {DEBUG_INFO_ENABLED} from './app/app.constants';

if (!DEBUG_INFO_ENABLED) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule, {preserveWhitespaces: true})
  .then((success) => console.log(`Application started`))
  .catch(err => console.error(err));
