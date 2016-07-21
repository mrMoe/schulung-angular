import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Config, CONFIG, APP_CONFIG} from '../config';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(
        private _http: Http,
        @Inject(APP_CONFIG) private _config: Config
    ){}

    private _url = `${_config.api.endpoint}/users`;

    login(username: string, password: string): Observable<User> {
    
        let data = JSON.stringify({username: username, password: password});

        return this._http.post(this._url, data, _config.api.headers)
                         .map(r => <User> r.json().data)
                         .catch(this._handleError);
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().data || 'Server error');
    }
} 
