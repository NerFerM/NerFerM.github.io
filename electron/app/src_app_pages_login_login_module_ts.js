"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui-service.service */ 5623);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);







let LoginPage = class LoginPage {
    constructor(usuarioService, navCtrl, uiService) {
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.loginUser = {
            email: 'prueba1@test.com',
            password: '123456'
        };
        this.registerUser = {
            email: 'test',
            password: '123456',
            nombre: 'Test',
            avatar: 'default1.png'
        };
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
    }
    login(formLogin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (formLogin.invalid) {
                return;
            }
            const valido = yield this.usuarioService.login(this.loginUser.email, this.loginUser.password);
            if (valido) {
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                this.uiService.presentAlert('Correo o contraseña no son correctos.');
            }
        });
    }
    register(formRegister) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (formRegister.invalid) {
                return;
            }
            const valido = yield this.usuarioService.registro(this.registerUser);
            if (valido) {
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                this.uiService.presentAlert('Este correo electrónico ya existe.');
            }
        });
    }
    mostrarLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    mostrarRegistro() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__.UiServiceService }
];
LoginPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['mainSlide', { static: true },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5TbGlkZSwgLm1haW5TbGlkZSBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-slides class=\"mainSlide\" #mainSlide>\n    <ion-slide>\n      <form (ngSubmit)=\"login(formLogin)\" #formLogin=\"ngForm\">\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/avatars/default1.png\" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-label>Email</ion-label>\n                  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"loginUser.email\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Contraseña</ion-label>\n                  <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"loginUser.password\" required></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                Entrar\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid fixed>\n        <app-avatar-selector (avatarSelect)=\"registerUser.avatar=$event\"></app-avatar-selector>\n\n        <form (ngSubmit)=\"register(formRegister)\" #formRegister=\"ngForm\">\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-label>Email</ion-label>\n                  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"registerUser.email\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Nombre</ion-label>\n                  <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"registerUser.nombre\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Contraseña</ion-label>\n                  <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"registerUser.password\" required></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                Crear nuevo usuario\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarLogin()\">\n          Entrar\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarRegistro()\">\n          Registrarme\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map