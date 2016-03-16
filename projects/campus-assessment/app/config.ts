import {OpaqueToken} from 'angular2/core';
import {Headers, RequestOptions} from 'angular2/http';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Api {
    endpoint: string,
    headers: RequestOptions,
}

export interface Config {
    api: Api,
    title: string
}

export const CONFIG: Config = {
    api: {
        endpoint: 'app',
        headers: new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })
    },
    title: 'Spring Campus 2016 assessment',
};
