import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Talk} from './talk';

@Injectable()
export class TalksService {
    private _url = 'app/talks/talks.json';

    constructor(
        private _http: Http
    ){}

    getTalks(): Observable<Talk[]> {
    
        return this._http.get(this._url)
                         .map(r => <Talk[]> r.json().data)
                         .catch(this._handleError);
    }
    
    addTalk(talk: Talk): Observable<Talk> {
    
        let data = JSON.stringify(talk);
        let opts = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

        return this._http.post(this._url, data, opts)
                         .map(r => <Talk> r.json().data)
                         .catch(this._handleError);
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().data || 'Server error');
    }
} 
