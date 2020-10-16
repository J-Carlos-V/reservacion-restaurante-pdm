"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReservacionesComponent = void 0;
var core_1 = require("@angular/core");
var ReservacionesComponent = /** @class */ (function () {
    function ReservacionesComponent(con) {
        var _this = this;
        this.con = con;
        this.con.retornarItems().subscribe(function (items) {
            _this.items = items;
            console.log(_this.items);
        });
    }
    ReservacionesComponent.prototype.ngOnInit = function () {
    };
    ReservacionesComponent = __decorate([
        core_1.Component({
            selector: 'app-reservaciones',
            templateUrl: './reservaciones.component.html',
            styleUrls: ['./reservaciones.component.css']
        })
    ], ReservacionesComponent);
    return ReservacionesComponent;
}());
exports.ReservacionesComponent = ReservacionesComponent;
