"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReservacionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var ReservacionComponent = /** @class */ (function () {
    function ReservacionComponent(ser) {
        var _this = this;
        this.ser = ser;
        this.mesas = [];
        this.mesasDisponible = [];
        this.mesaReservada = [];
        // tslint:disable-next-line:typedef
        this.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.contacForm = this.createFormGroup();
        this.ser.retornarMesas().subscribe(function (res) {
            _this.mesas = res;
            for (var _i = 0, _a = _this.mesas; _i < _a.length; _i++) {
                var mesa = _a[_i];
                if (mesa.estado === 'disponible') {
                    _this.mesasDisponible.push(mesa);
                }
            }
            if (_this.mesasDisponible.length === 0) {
                sweetalert2_1["default"].fire({
                    icon: 'error',
                    title: 'Reservaciones Agotadas',
                    text: 'No hay mesas disponibles, intentelo mas tarde',
                    confirmButtonText: 'OK'
                    // tslint:disable-next-line:typedef
                    // tslint:disable-next-line:only-arrow-functions
                }).then(function () {
                    window.location.href = '/reservacion-restaurante-pdm/';
                });
            }
        });
    }
    // tslint:disable-next-line:typedef
    ReservacionComponent.prototype.createFormGroup = function () {
        return new forms_1.FormGroup({
            firstname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            surname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.pattern(this.emailPattern)]),
            number: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10)]),
            fecha: new forms_1.FormControl('', [forms_1.Validators.required]),
            hora: new forms_1.FormControl('', [forms_1.Validators.required]),
            personas: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(1)]),
            detalles: new forms_1.FormControl('', [forms_1.Validators.maxLength(100)]),
            estado: new forms_1.FormControl('pendiente'),
            mesa: new forms_1.FormControl()
        });
    };
    // tslint:disable-next-line:typedef
    ReservacionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ReservacionComponent.prototype, "firstname", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('firstname'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "surname", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('surname'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "email", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "number", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('number'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "fecha", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('fecha'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "hora", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('hora'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "personas", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('personas'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "detalles", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('detalles'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "estado", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('estado'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReservacionComponent.prototype, "mesa", {
        // tslint:disable-next-line:typedef
        get: function () { return this.contacForm.get('mesa'); },
        enumerable: false,
        configurable: true
    });
    // tslint:disable-next-line:typedef
    ReservacionComponent.prototype.onResetForm = function () {
        this.contacForm.reset();
    };
    // tslint:disable-next-line:typedef
    ReservacionComponent.prototype.agregar = function () {
        if (this.contacForm.value.mesa == null) {
            this.contacForm.value.mesa = this.mesasDisponible[0].id;
        }
        if (this.contacForm.valid) {
            this.ser.addItem(this.contacForm.value);
            this.mesaReservada = { id: this.contacForm.value.mesa, numeroMesa: this.contacForm.value.mesa, estado: 'Reservado' };
            this.ser.editarmesa(this.mesaReservada);
            console.log(this.mesaReservada);
            this.onResetForm();
            sweetalert2_1["default"].fire({
                icon: 'success',
                title: 'Reservacion Exitosa',
                text: 'Para cancelaciones o aclaraciones se puede comunicar al 764-764-3040',
                confirmButtonText: 'OK'
            }).then(function () {
                window.location.href = '/reservacion-restaurante-pdm/';
            });
        }
        else {
            sweetalert2_1["default"].fire({
                icon: 'error',
                title: 'Error',
                text: 'Verifica tus datos'
            });
        }
    };
    // tslint:disable-next-line:typedef
    ReservacionComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    ReservacionComponent = __decorate([
        core_1.Component({
            selector: 'app-reservacion',
            templateUrl: './reservacion.component.html',
            styleUrls: ['./reservacion.component.css']
        })
    ], ReservacionComponent);
    return ReservacionComponent;
}());
exports.ReservacionComponent = ReservacionComponent;
