import {
    beforeEachProviders,
    MockApplicationRef
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    let sut: AppComponent;

    beforeEachProviders(() =>{
        provide(RouteConfig, {useValue: {}})
    });
    beforeEach(() =>{
         sut = new AppComponent();
    });

    it('should be exist', () => expect(sut).toBeDefined());
});