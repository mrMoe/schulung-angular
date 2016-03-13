import {Injectable, Inject} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Config, CONFIG, APP_CONFIG} from '../config';
import {Talk} from './talk';

@Injectable()
export class TalkService {
    constructor(
        private _http: Http,
        @Inject(APP_CONFIG) private _config: Config
    ){}

    private _url = `${this._config.api.endpoint}/talks/talks.json`;

    getTalks(): Observable<Talk> {
        return this._http.get(this._url)
            .retry(3)
            //.delay(500)
            .flatMap(r => r.json().data)
            .catch(this._handleError);
    }

    getTalk(id: string): Observable<Talk> {
        return this.getTalks().single(x => x.id.toLowerCase() === id);
    }
    
    addTalk(talk: Talk): Observable<Talk> {
    
        let data = JSON.stringify(talk);

        return this._http.post(this._url, data, this._config.api.headers)
            .map(r => <Talk> r.json().data)
            .catch(this._handleError);
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.text() || 'Server error');
    }
} 
