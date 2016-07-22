import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { APP_CONFIG, Config } from '../config';
import { Talk } from './talk';

@Injectable()
export class TalkService {
    constructor(
        @Inject(APP_CONFIG) private config: Config,
        private http: Http
    ) { }

    private url = `${this.config.api.endpoint}/talks`;

    getTalks(): Observable<Talk[]> {
        return this.http.get(this.url)
            .map(r => r.json().data)
            .catch(this.handleError);
        // .catch(this._handleError); // unspecific error -.-
    }

    getTalk(id: String): Observable<Talk> {
        return this.http.get(this.url)
            .flatMap(x => x.json().data)
            .filter((x: Talk) => x.id.toLowerCase() === id.toLowerCase())
            .catch(this.handleError);
    }

    addReview(talk: Talk, review) {
        let body = JSON.stringify(review);

        return this.http.post(`${this.url}/${talk.id}`, body, this.config.api.options)
            .map(r => r.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
} 
