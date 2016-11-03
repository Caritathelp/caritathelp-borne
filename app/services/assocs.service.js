"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var AssocsService = (function () {
    function AssocsService(http) {
        this.http = http;
        this.API_URL_ASSOCIATIONS = 'http://api.caritathelp.me/associations'; // URL to web API
        this.API_URL_ASSOCIATIONS_RESEARCH = 'http://api.caritathelp.me/associations/search'; // URL to web API
        this.API_URL_SHELTER_PICTURES = 'http://api.caritathelp.me/associations/'; // URL to pictures
    }
    AssocsService.prototype.getAssocs = function () {
        return this.http.get(this.API_URL_ASSOCIATIONS)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssocsService.prototype.getAssocImage = function (assoc) {
        return this.http.get(this.API_URL_SHELTER_PICTURES + assoc.id.toString() + "/pictures")
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssocsService.prototype.getSearchAssocs = function (query) {
        return this.http.get(this.API_URL_ASSOCIATIONS)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssocsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body.response);
        return body.response || {};
    };
    AssocsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AssocsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AssocsService);
    return AssocsService;
}());
exports.AssocsService = AssocsService;
//# sourceMappingURL=assocs.service.js.map