"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
require("firebase/firestore");
var ConService = /** @class */ (function () {
    function ConService(afs) {
        this.afs = afs;
        this.itemsCollection = afs.collection('items');
        this.items = this.itemsCollection.valueChanges();
        this.MesasCollection = afs.collection('mesas');
        this.mesas = this.MesasCollection.snapshotChanges().pipe(operators_1.map(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        // this.mesas = this.MesasCollection.valueChanges();
    }
    // tslint:disable-next-line:typedef
    ConService.prototype.retornarItems = function () {
        return this.items;
    };
    // tslint:disable-next-line:typedef
    ConService.prototype.retornarMesas = function () {
        return this.mesas;
        // return this.afs.collection('mesas').snapshotChanges;
        // return this.afs.collection('mesas').doc('5nBEvdb8t7pU2MCY5Ntb').snapshotChanges;
    };
    // tslint:disable-next-line: typedef
    ConService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    // tslint:disable-next-line:typedef
    ConService.prototype.editarmesa = function (item) {
        this.itemDoc = this.afs.doc('mesas/' + item.id);
        this.itemDoc.update(item);
    };
    ConService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConService);
    return ConService;
}());
exports.ConService = ConService;
