"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab2_tab2_module_ts"],{

/***/ 1795:
/*!***************************************************!*\
  !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4705);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 8574:
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4705);
/* harmony import */ var src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 1795);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
            src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4705:
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 4626);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 8394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ 752);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let Tab2Page = class Tab2Page {
    constructor(postsService, route, camera, toast) {
        this.postsService = postsService;
        this.route = route;
        this.camera = camera;
        this.tempVideos = [];
        this.post = {
            mensaje: '',
        };
    }
    crearPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.post);
            const creado = yield this.postsService.crearPost(this.post);
            this.post = {
                mensaje: '',
            };
            this.route.navigateByUrl('/main/tabs/tab1');
        });
    }
    camara() {
        const options = {
            quality: 40,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            mediaType: this.camera.MediaType.VIDEO,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
    }
    library() {
        const options = {
            quality: 40,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            mediaType: this.camera.MediaType.VIDEO,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarVideo(options);
    }
    procesarVideo(options) {
        this.camera.getPicture(options).then((videoData) => {
            const vid = window.Ionic.WebView.convertFileSrc(videoData);
            console.log(vid);
            this.tempVideos.push(vid);
        }, (err) => {
            //error
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _video_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-sanitizer.pipe */ 2864);



let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_video_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__.VideoSanitizerPipe],
        exports: [_video_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__.VideoSanitizerPipe]
    })
], PipesModule);



/***/ }),

/***/ 8394:
/*!******************************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4626:
/*!******************************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Nuevo vídeo\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"crearPost()\" [disabled]=\"post.mensaje.length < 1\" color=\"primary\">\r\n        Subir\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Mensaje</ion-label>\r\n      <ion-textarea [(ngModel)]=\"post.mensaje\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"full\" shape=\"round\" (click)=\"library()\">\r\n        <ion-icon slot=\"start\" name=\"folder-outline\"></ion-icon>\r\n        Galería\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let video of TempVideos\">\r\n      <img [src]=\"video | videoSanitizer\" />\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab2_tab2_module_ts.js.map