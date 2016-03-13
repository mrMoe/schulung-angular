System.register(['angular2/core', './talks.service'], function(exports_1, context_1) {
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
    var core_1, talks_service_1;
    var TalksListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (talks_service_1_1) {
                talks_service_1 = talks_service_1_1;
            }],
        execute: function() {
            TalksListComponent = (function () {
                function TalksListComponent(_talksService) {
                    this._talksService = _talksService;
                }
                TalksListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._talksService.getTalks().subscribe(function (success) { return _this.talks = success; }, function (error) { return _this.error = error; });
                };
                TalksListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th><input class=\"form-control\" placeholder=\"#\"></th>\n                    <th><input class=\"form-control\" placeholder=\"Title\"></th>\n                    <th><input class=\"form-control\" placeholder=\"Redner\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#talk of talks\">\n                    <th scope=\"row\"><a href=\"\">{{talk.id}}</a></th>\n                    <td><a href=\"\">{{talk.id}}</a></td>\n                    <td><a href=\"\">{{talk.speaker.name}}</a></td>\n                </tr>\n            </tbody>\n        </table>\n",
                    }), 
                    __metadata('design:paramtypes', [talks_service_1.TalksService])
                ], TalksListComponent);
                return TalksListComponent;
            }());
            exports_1("TalksListComponent", TalksListComponent);
        }
    }
});
//# sourceMappingURL=talks-list.component.js.map