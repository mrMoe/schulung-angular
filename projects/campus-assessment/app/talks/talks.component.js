System.register(['angular2/core', 'angular2/router', './talks.service', './talks-list.component', './talk-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, talks_service_1, talks_list_component_1, talk_detail_component_1;
    var TalksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (talks_service_1_1) {
                talks_service_1 = talks_service_1_1;
            },
            function (talks_list_component_1_1) {
                talks_list_component_1 = talks_list_component_1_1;
            },
            function (talk_detail_component_1_1) {
                talk_detail_component_1 = talk_detail_component_1_1;
            }],
        execute: function() {
            TalksComponent = (function () {
                function TalksComponent() {
                }
                TalksComponent = __decorate([
                    core_1.Component({
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.RouterOutlet],
                        providers: [talks_service_1.TalksService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'TalksList', component: talks_list_component_1.TalksListComponent, useAsDefault: true },
                        { path: '/:id', name: 'TalkDetail', component: talk_detail_component_1.TalkDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TalksComponent);
                return TalksComponent;
            }());
            exports_1("TalksComponent", TalksComponent);
        }
    }
});
//# sourceMappingURL=talks.component.js.map