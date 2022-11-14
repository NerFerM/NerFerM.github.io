"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab1_tab1_module_ts"],{

/***/ 8203:
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 6789:
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);
/* harmony import */ var src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8203);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 5642);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 4029:
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 7374);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 3398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ 752);





let Tab1Page = class Tab1Page {
    constructor(postsService) {
        this.postsService = postsService;
        this.posts = [];
        this.habilitar = true;
    }
    ngOnInit() {
        this.loadData();
        this.postsService.nuevoPost.subscribe(post => {
            this.posts.unshift(post);
        });
    }
    doRefresh(event) {
        this.loadData(event, true);
        this.habilitar = true;
        this.posts = [];
    }
    loadData(event, pull = false) {
        this.postsService.getPosts(pull).subscribe(resp => {
            console.log(resp);
            this.posts.push(...resp.posts);
            if (event) {
                event.target.complete();
                if (resp.posts.length === 0) {
                    this.habilitar = false;
                }
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__.PostsService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 3398:
/*!******************************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7374:
/*!******************************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" name=\"videocam-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      ClipDiving\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-posts [posts]=\"posts\"></app-posts>\n\n  <ion-infinite-scroll [disabled]=\"!habilitar\" threshold=\"150px\" position=\"bottom\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más vídeos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab1_tab1_module_ts.js.map