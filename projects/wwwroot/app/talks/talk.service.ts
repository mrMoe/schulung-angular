import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Talk} from './talk';

@Injectable()
export class TalkService {

    constructor(private _http: Http) {}

    public getTalks(): Observable<Talk[]> {

        return this._http.get('app/talks/talks.json')
            .map(x => x.json().data);
    }

    public getTalk(id: String): Talk {
       
        return this._http.get('app/talks/talks.json')
            .flatMap(x => x.json().data)
            .single(x => x.id.toLowerCase() === id.toLowerCase());
    }
}