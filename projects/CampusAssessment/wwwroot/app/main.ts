import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';

import 'rxjs/Rx';

import {AppComponent} from './app.component';

class HttpOptions extends BaseRequestOptions {
  //body: string = JSON.stringify(body);
  //, provide(RequestOptions, {useClass: HttpOptions})
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);

