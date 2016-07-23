import { bootstrap }    from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';

import {AppComponent} from './app.component';
import { appRoutes } from './app.routes';


bootstrap(AppComponent, [
    appRoutes
]);
