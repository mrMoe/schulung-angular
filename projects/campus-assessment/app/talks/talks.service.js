System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var TalksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TalksService = (function () {
                function TalksService(_http) {
                    this._http = _http;
                    this._url = 'app/talks/talks.json';
                }
                TalksService.prototype.getTalks = function () {
                    return this._http.get(this._url)
                        .map(function (r) { return r.json().data; })
                        .catch(this._handleError);
                };
                TalksService.prototype.addTalk = function (talk) {
                    var data = JSON.stringify(talk);
                    var opts = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
                    return this._http.post(this._url, data, opts)
                        .map(function (r) { return r.json().data; })
                        .catch(this._handleError);
                };
                TalksService.prototype._handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().data || 'Server error');
                };
                TalksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TalksService);
                return TalksService;
            }());
            exports_1("TalksService", TalksService);
        }
    }
});
//# sourceMappingURL=talks.service.js.map