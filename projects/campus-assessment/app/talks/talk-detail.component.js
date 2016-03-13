System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var TalkDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TalkDetailComponent = (function () {
                function TalkDetailComponent(_router) {
                    this._router = _router;
                }
                TalkDetailComponent.prototype.send = function () {
                };
                TalkDetailComponent.prototype.gotoOverview = function () {
                    this._router.navigate(['Talks']);
                };
                TalkDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n\n<!--\n        <div><label>Titel:</label> {{talk.title}}</div>\n        <div><label>Beschreibung:</label> {{talk.description}}</div>\n        <div><label>Redner:</label> {{talk.speaker.name}}</div>\n-->\n\n        <form #form=\"ngForm\">\n<!--\n            <h2>Vortragsbewertung</h2>\n            <div class=\"form-group\">\n                <label for=\"reviewer\">Campusbesucher (optional):</label>\n                <input id=\"reviewer\" type=\"text\" [(ngModel)]=\"model.reviewer\" minlength=\"3\">\n            </div>\n            \n            <div class=\"form-group\">\n                <label>Vortragsbewertung:</label>\n                <input id=\"presentation1\" type=\"radio\" [(ngModel)]=\"model.presentationRating\" value=\"1\" required><label for=\"presentation1\">sehr gut</label>\n                <input id=\"presentation2\" type=\"radio\" [(ngModel)]=\"model.presentationRating\" value=\"2\" required><label for=\"presentation2\">sehr</label>\n                <input id=\"presentation3\" type=\"radio\" [(ngModel)]=\"model.presentationRating\" value=\"3\" required><label for=\"presentation3\">befriedigend</label>\n                <input id=\"presentation4\" type=\"radio\" [(ngModel)]=\"model.presentationRating\" value=\"4\" required><label for=\"presentation4\">ausreichend</label>\n                <input id=\"presentation5\" type=\"radio\" [(ngModel)]=\"model.presentationRating\" value=\"5\" required><label for=\"presentation5\">mangelhaft</label>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Thema:</label>\n                <input id=\"topic1\" type=\"radio\" [(ngModel)]=\"model.topic\" value=\"1\" required><label for=\"topic1\">interessant</label>\n                <input id=\"topic2\" type=\"radio\" [(ngModel)]=\"model.topic\" value=\"2\" required><label for=\"topic2\">geht so</label>\n                <input id=\"topic3\" type=\"radio\" [(ngModel)]=\"model.topic\" value=\"3\" required><label for=\"topic3\">uninteresant</label>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Kompetenz des Referenten:</label>\n                <input id=\"experiences1\" type=\"radio\" [(ngModel)]=\"model.experiences\" value=\"1\" required><label for=\"experiences1\">sehr gut</label>\n                <input id=\"experiences2\" type=\"radio\" [(ngModel)]=\"model.experiences\" value=\"2\" required><label for=\"experiences2\">gut</label>\n                <input id=\"experiences3\" type=\"radio\" [(ngModel)]=\"model.experiences\" value=\"3\" required><label for=\"experiences3\">befriedigend</label>\n                <input id=\"experiences4\" type=\"radio\" [(ngModel)]=\"model.experiences\" value=\"4\" required><label for=\"experiences4\">ausreichend</label>\n                <input id=\"experiences5\" type=\"radio\" [(ngModel)]=\"model.experiences\" value=\"5\" required><label for=\"experiences5\">mangelhaft</label>\n            </div>\n            \n            <div class=\"form-group\">\n                <label for=\"positives\">Was war gut?</label>\n                <textarea [(ngModel)]=\"model.positives\"></textarea>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"missing\">Was hat gefehlt?</label>\n                <textarea [(ngModel)]=\"model.missing\"></textarea>\n            </div>\n\n-->\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"send()\" [disabled]=\"!form.valid\">Absenden</button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"gotoOverview()\">Zur\u00FCck zur \u00DCbersicht</button>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TalkDetailComponent);
                return TalkDetailComponent;
            }());
            exports_1("TalkDetailComponent", TalkDetailComponent);
        }
    }
});
//# sourceMappingURL=talk-detail.component.js.map