import { OpaqueToken }              from '@angular/core';
import { Headers, RequestOptions }  from '@angular/http';

interface Api {
    endpoint: string,
    options: RequestOptions,
}

const CONFIG: Config = {
    api: {
        endpoint: 'app',
        options: new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
    },
    title: 'Speaker assessment',
};

export let APP_CONFIG = 'app.config';

export interface Config {
    api: Api,
    title: string
};

export const ConfigProviders = [
    { provide: APP_CONFIG, useValue: CONFIG }
];
