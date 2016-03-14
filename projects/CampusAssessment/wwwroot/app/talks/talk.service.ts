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

    private _url = `${this._config.api.endpoint}/talks`;

    getTalks(): Observable<Talk> {
        return this._http.get(this._url)
            .flatMap(r => r.json())
            .catch(this._handleError);
    }

    getTalk(id: string): Observable<Talk> {
        return this._http.get(`${this._url}/${id}`)
            .map(r => r.json())
            .catch(this._handleError);
    }

    addReview(talk: Talk, review) {
        let data = JSON.stringify(review);

        return this._http.post(`${this._url}/${talk.id}`, data, this._config.api.headers)
            .map(r => r.json())
            .catch(this._handleError);
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.text() || 'Server error');
    }
} 
