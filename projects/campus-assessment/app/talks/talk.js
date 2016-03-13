System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Speaker, Talk;
    return {
        setters:[],
        execute: function() {
            Speaker = (function () {
                function Speaker(name, email, company) {
                    this.name = name;
                    this.email = email;
                    this.company = company;
                }
                return Speaker;
            }());
            exports_1("Speaker", Speaker);
            Talk = (function () {
                function Talk(id, title, caption, speakers) {
                    this.id = id;
                    this.title = title;
                    this.caption = caption;
                    this.speakers = speakers;
                }
                return Talk;
            }());
            exports_1("Talk", Talk);
        }
    }
});
//# sourceMappingURL=talk.js.map