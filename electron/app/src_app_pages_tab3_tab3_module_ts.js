"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab3_tab3_module_ts"],{

/***/ 3546:
/*!***************************************************!*\
  !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 9648);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 2090:
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 9648);
/* harmony import */ var src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 3546);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 9648:
/*!*****************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 490);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 8465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui-service.service */ 5623);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);






let Tab3Page = class Tab3Page {
    constructor(usuarioService, uiService) {
        this.usuarioService = usuarioService;
        this.uiService = uiService;
        this.usuario = {};
    }
    ngOnInit() {
        this.usuario = this.usuarioService.getUsuario();
    }
    actualizar(formActualizar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (formActualizar.invalid) {
                return;
            }
            const actualizado = yield this.usuarioService.updateUser(this.usuario);
            if (actualizado) {
                this.uiService.presentToast('Tu perfil se ha actualizado');
            }
            else {
                this.uiService.presentToast('Error: perfil no actualizado');
            }
        });
    }
    logout() {
    }
};
Tab3Page.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_2__.UiServiceService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 8465:
/*!******************************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".img-avatar {\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.top-20 {\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udG9wLTIwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 490:
/*!******************************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\" color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"top-20\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <img src=\"assets/avatars/{{usuario.avatar}}\" class=\"img-avatar\" />\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"top-20\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-label>\n        <h1>Actualizar perfil</h1>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <app-avatar-selector (avatarSelect)=\"usuario.avatar = $event\" [avatarActual]=\"usuario.avatar\"></app-avatar-selector>\n\n  <form (ngSubmit)=\"actualizar(formActualizar)\" #formActualizar>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label>Email:</ion-label>\n            <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"usuario.email\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Nombre:</ion-label>\n            <ion-input name=\"nombre\" type=\"text\" [(ngModel)]=\"usuario.nombre\" required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">Actualizar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab3_tab3_module_ts.js.map