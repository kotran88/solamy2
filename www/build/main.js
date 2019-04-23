webpackJsonp([2],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonProvider = /** @class */ (function () {
    function CommonProvider() {
    }
    CommonProvider.prototype.number_format = function (num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    };
    CommonProvider.prototype.isExistImage = function (url) {
        if (url != '' && url != null) {
            return true;
        }
        else {
            return false;
        }
    };
    CommonProvider.prototype.subString = function (str, len) {
        if (str.length > len)
            return str.substr(0, len) + "...";
        else
            return str;
    };
    CommonProvider.prototype.showDistance = function (distance) {
        if (distance == 0)
            return 0;
        else
            return Math.floor(distance / 1000);
    };
    CommonProvider.prototype.getServerImg = function (type, imgName) {
        return __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* CONFIG */].http_server + "/getServerImg?" + "type=" + type + "&img=" + imgName;
    };
    CommonProvider.prototype.getStrDate = function (str_date) {
        var now_date = null;
        if (!str_date) {
            now_date = new Date();
        }
        else {
            now_date = new Date(str_date);
        }
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var hour = now_date.getHours();
        var minute = now_date.getMinutes();
        var second = now_date.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        // return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    };
    ;
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 



var TermPage = /** @class */ (function () {
    function TermPage(navCtrl, navParams, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.type = '';
        this.content = '';
        var typeTmp = navParams.get('type');
        if (typeTmp == 'term') {
            this.type = '이용약관';
        }
        else {
            this.type = '개인정보 처리 방침';
        }
    }
    TermPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_2_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        return decodedString;
    };
    TermPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var sendData = [];
        sendData['type'] = this.type == '이용약관' ? 0 : 1;
        this.http.postHttpData("/getTerm", sendData, function (result) {
            console.log(result);
            if (result) {
                _this.content = _this.uintToString(result.term.data);
            }
        });
    };
    TermPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    TermPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-term',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/term/term.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">{{type}}</span>\n      <img style="width:32px;" src="assets/imgs/logout.png"  class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="wrap mt30">{{content}}</div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/term/term.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], TermPage);
    return TermPage;
}());

//# sourceMappingURL=term.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareQuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var CompareQuotationPage = /** @class */ (function () {
    function CompareQuotationPage(navCtrl, navParams, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.user_id = 0;
        this.login_flag = false;
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        if (userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
    }
    CompareQuotationPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CompareQuotationPage.prototype.analyseClient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
    };
    CompareQuotationPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    CompareQuotationPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    CompareQuotationPage.prototype.isLogin = function () {
        if (this.login_flag == true)
            return true;
        else
            return false;
    };
    CompareQuotationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compare-quotation',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/compare-quotation/compare-quotation.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비교견적</span>\n      <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="top-wrap">\n    <p class="intro">\n      인증된 태양광 설치 제품을 반영하여, 최고의 전문가로 <br/>구성된 지역 태양광 업체들로부터 받은 견적을 분석하여 <br/>가장 좋은 조건의 업체를 추천해드립니다.\n    </p>\n\n    <div class="ranking">\n      <div><img src="assets/imgs/comp_quotation/ranking2.png"></div>\n      <h3 >추천 1순위~3순위<span>(최저가, 보증, 평가)</span></h3>\n    </div>\n  </div>\n\n  <ion-grid class="p0 ion-grid grid_1 mt20">\n    <ion-row class="btn-cont">\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/comp_quotation/expect_price.png"></div>\n          <div class="text-cont"><h6>예상가격</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/comp_quotation/compability.png"></div>\n          <div class="text-cont"><h6>예상설치용량</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 32px;" src="assets/imgs/comp_quotation/module.png"></div>\n          <div class="text-cont"><h6>모듈제품</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_2">\n    <ion-row class="btn-cont">\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 22px;" src="assets/imgs/comp_quotation/inverter.png"></div>\n          <div class="text-cont"><h6>인버터제품</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 30px;" src="assets/imgs/comp_quotation/consure.png"></div>\n          <div class="text-cont"><h6>보증여부</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 30px;" src="assets/imgs/comp_quotation/as.png"></div>\n          <div class="text-cont"><h6>A/S조건</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="btn-wrap" *ngIf="!isLogin()">\n    <div class="btn-cont mt20">\n      <button ion-button color="light" (click)="login()" class="boxBtn analyseClient"><img src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n    \n    <div class="login-cont">\n      <button ion-button color="light" class="login" (click)="login()"><img style="width: 20px;\n        height: 20px; margin-right: 5px" class="mark" src="assets/imgs/lock-open.png">&nbsp;로그인</button>\n      <button ion-button color="light" class="register" (click)="registerPage()"><img style="width: 20px;\n        height: 20px; margin-right: 5px" class="mark" src="assets/imgs/following.png">회원가입</button>\n    </div>\n  </div>\n\n  <div class="btn-wrap" *ngIf="isLogin()">\n    <div class="btn-cont mt40">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/compare-quotation/compare-quotation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */]])
    ], CompareQuotationPage);
    return CompareQuotationPage;
}());

//# sourceMappingURL=compare-quotation.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyse_result_analyse_result__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_status_process_status__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// common 



var MyClientPage = /** @class */ (function () {
    function MyClientPage(navCtrl, navParams, modalCtrl, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.user_id = 0;
        this.clientFlag = false;
        this.hasContractData = 0;
    }
    MyClientPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_6_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    MyClientPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["user_id"] = this.user_id;
        this.http.postHttpData("/getAnalyseByUserId", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log("getAnalyseByUserId");
            console.log(result);
            var tag = "reg_time";
            result.sort(function (a, b) {
                console.log(a[tag]);
                // convert date object into number to resolve issue in typescript
                var dateA = new Date(a[tag]).getTime();
                var dateB = new Date(b[tag]).getTime();
                return dateB > dateA ? 1 : -1;
            });
            for (var i = 0; i < result.length; i++) {
                var newaddress = _this.uintToString(result[i].address.data);
                console.log(newaddress);
                result[i].address = newaddress;
            }
            if (result) {
                _this.clientFlag = true;
                _this.clientData = result;
            }
            else {
                _this.clientFlag = false;
                _this.clientData = null;
            }
        });
    };
    MyClientPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    MyClientPage.prototype.analyseResult = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__analyse_result_analyse_result__["a" /* AnalyseResultPage */], { analyse_id: id }, { animate: false });
    };
    MyClientPage.prototype.processStatus = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_status_process_status__["a" /* ProcessStatusPage */], { analyse_id: id }, { animate: false });
    };
    MyClientPage.prototype.analyseClient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
    };
    MyClientPage.prototype.isClient = function () {
        if (this.clientFlag) {
            return true;
        }
        else {
            return false;
        }
    };
    MyClientPage.prototype.hasContDate = function (id) {
        for (var i = 0; i < this.clientData.length; i++) {
            if (id == i) {
                if (!this.clientData[i].contract_time) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    MyClientPage.prototype.returnData = function (date) {
        if (!date) {
            return '';
        }
        var date1 = this.common.getStrDate(date);
        if (date1) {
            return date1.replace(/-/g, ".").substring(0, 10);
        }
        else {
            return '';
        }
    };
    MyClientPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    MyClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-client',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/my-client/my-client.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">내 의뢰 현황</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n  \n<ion-content padding>\n \n\n  <ion-grid class="p0 ion-grid" *ngFor="let item of clientData ; let idx = index">\n    <ion-row>\n      <ion-col col-12>\n        <div class="wrap">\n          <p style="width: 45%;\n          display: inline-table;" class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n          <p style="width: 45%;\n          margin-left: 25px;\n          display: inline-table;" class="contract mt1" *ngIf="hasContDate( idx )">[계약일] <span>{{ returnData(item.contract_time) }}</span> </p>\n          <div class="address mt10">ㆍ{{item.address}}</div>\n          <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n        </div>\n\n        <div class="btn-cont">\n          <div class="analyseBtn" (click)="analyseResult(item.id)">\n            <img src="assets/imgs/bar-chart.png">분석결과\n          </div>\n          <div class="process" (click)="processStatus(item.id)">\n            <img src="assets/imgs/check.png">진행현황\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="mt30 b-none" *ngIf="!isClient()">\n    <div class="address mt30 text-center">의뢰한 목록이 없습니다.</div>\n    \n    <div class="btn-client mt30">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/my-client/my-client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */]])
    ], MyClientPage);
    return MyClientPage;
}());

//# sourceMappingURL=my-client.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 



var AnalyseResultPage = /** @class */ (function () {
    function AnalyseResultPage(navCtrl, navParams, modalCtrl, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.http = http;
        this.analyse_id = 0;
        this.roof_path = '';
        this.anData = null;
        this.address = '';
        this.analyse_id = navParams.get('analyse_id');
    }
    AnalyseResultPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_2_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        return decodedString;
    };
    AnalyseResultPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        console.log(this.analyse_id);
        this.http.postHttpData("/getAnalyseResult", sendData, function (result) {
            console.log(result);
            modal.dismiss({}, "", { animate: false });
            if (result) {
                _this.anData = result;
                if (_this.uintToString(result.roof_path.data).length > 0) {
                    _this.roof_path = "http://solarmy.co.kr/solarmy_admin/uploads/" + _this.uintToString(result.roof_path.data);
                }
                else {
                    _this.roof_path = 'assets/imgs/analyse/analyze_banner.png';
                }
                console.log("roof path i s:" + _this.roof_path);
                _this.address = _this.uintToString(result.address.data);
                _this.etc = _this.uintToString(result.etc.data);
                // console.log(this.etc);
            }
        });
    };
    AnalyseResultPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    AnalyseResultPage.prototype.numFormat = function (str) {
        // console.log(this.anData);
        if (this.anData) {
            if (str == 'month_fee') {
                return this.common.number_format(this.anData.month_fee);
            }
            else if (str == 'sale_fee') {
                return this.common.number_format(this.anData.sale_fee);
            }
            else if (str == 'elect_fee') {
                return this.common.number_format(this.anData.elect_fee);
            }
            else if (str == 'expect_elect_fee') {
                return this.common.number_format(this.anData.expect_elect_fee);
            }
            else if (str == 'solar_power') {
                return this.common.number_format(this.anData.solar_power);
            }
            else if (str == 'opt_angle') {
                return this.common.number_format(this.anData.opt_angle);
            }
            else if (str == 'month_expect_power') {
                return this.common.number_format(this.anData.month_expect_power);
            }
            else if (str == 'expect_power') {
                return this.common.number_format(this.anData.expect_power);
            }
            else if (str == 'tree_effect') {
                return this.common.number_format(this.anData.tree_effect);
            }
            else if (str == 'co_pexpect') {
                return this.common.number_format(this.anData.co_pexpect);
            }
            else if (str == 'etc') {
                return this.anData.etc;
            }
            else {
                return str;
            }
        }
        else {
            return str;
        }
    };
    AnalyseResultPage.prototype.hasAnResult = function () {
        if (this.anData) {
            return true;
        }
        else
            return false;
    };
    AnalyseResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analyse-result',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/analyse-result/analyse-result.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">분석결과</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n  \n<ion-content padding>\n  <div *ngIf="hasAnResult()">\n    <div class="top-wrap">\n      <img style="width: 100%;\n      height: 140px;"\n      src="{{roof_path}}" >\n    </div>\n    <h3 class="address">\n      <img src="assets/imgs/analyse/area.png"> {{ address }}\n    </h3>\n\n    <ion-grid class="p0 ion-grid" >\n      <ion-row>\n        <ion-col col-12>\n            <div class="btn-cont">\n                <div class="analyseBtn" (click)="analyseResult(item.id)">\n                  <img src="assets/imgs/analyse_result.png">전기료 감면효과\n                </div>\n              </div>\n          <div class="wrap">\n              <div style="    margin-top: 3.5em;" class="content gray">\n                  우리집 월평균 전기요금 <span style="color:#247ccd; float: right;">{{ numFormat(\'month_fee\') }}</span>\n                </div>\n                <div class="content yellow">\n                  전기료 예상 절감액 <span style="color:#247ccd; float: right;">- {{ numFormat(\'sale_fee\') }}</span>\n                </div>\n                <div class="content light-blue">\n                  설치후 전기요금 <span style="color:#247ccd; float: right;">{{ numFormat(\'elect_fee\') }}</span>\n                </div>\n               \n          </div>\n          <div style="background-color: #f6f6f6;     color: #247ccd;\n        " class="wrap2">\n              <div class="description blue">\n                  <p>20년간 누적 예상 전기요금 절감액</p>\n                  <h3> {{ numFormat(\'expect_elect_fee\') }} <span>만원</span> </h3>\n                </div>\n          </div>\n  \n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="p0 ion-grid" >\n        <ion-row>\n          <ion-col col-12>\n              <div class="btn-cont">\n                  <div style="background:#e97e00" class="analyseBtn" (click)="analyseResult(item.id)">\n                    <img src="assets/imgs/analyse_result.png"> 태양광 최적 설치 정보\n                  </div>\n                </div>\n            <div class="wrap">\n                <!-- <div style=" margin-top: 3.5em;" class="content gray">\n                  <div  class="analyseBtn" (click)="analyseResult(item.id)">\n                    우리집 월평균 전기요금 <span style="color:#e97e00;float: right;">{{ numFormat(\'month_fee\') }}</span>\n                  </div>\n                  <div class="content yellow">\n                    전기료 예상 절감액 <span style="color:#e97e00;float: right;">- {{ numFormat(\'sale_fee\') }}</span>\n                  </div>\n                  <div class="content light-blue">\n                    설치후 전기요금 <span style="color:#e97e00;float: right;">{{ numFormat(\'elect_fee\') }}</span>\n                  </div>\n                 </div> -->\n                 <div style=" margin-top: 3.5em;" class="content gray">\n                    태양광 최적 설치 용량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'solar_power\') }}kw</span>\n                  </div>\n                  <div class="content gray">\n                    최적각도 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'opt_angle\') }}도</span>\n                  </div>\n                  <div class="content gray">\n                    월간 예상 평균 발전량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'month_expect_power\') }}kw</span>\n                  </div>\n                  <div class="content gray">\n                    20년간 누적 예상 발전량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'expect_power\') }}kw</span>\n                  </div>\n            </div>\n           \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="p0 ion-grid" >\n          <ion-row>\n            <ion-col col-12>\n                <div class="btn-cont">\n                    <div style="background: #7da808" class="analyseBtn" (click)="analyseResult(item.id)">\n                      <img src="assets/imgs/analyse_result.png">탄소저감효과\n                    </div>\n                  </div>\n                  <div class="wrap2">\n                      <div style="margin-top: 3.5em;" class="description blue">\n                          <p style="    font-size: 16px;" class="gray">30년생 소나무 심는 효과(20년간 누적 기준)</p>\n                          <h3 class="deep-green" style="color:#7da808"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> {{ numFormat(\'tree_effect\') }} <span>그루</span> </h3>\n                        </div>\n                        <div class="description blue">\n                          <p style="    font-size: 16px;" class="gray">CO2 탄소 저감 효과(20년간 누적 기준)</p>\n                          <h3 class="blue" style="color:#7da808"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> {{ numFormat(\'co_pexpect\') }} <span>톤</span> </h3>\n                        </div>\n                  </div>\n                 \n      \n             \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-grid class="p0 ion-grid" >\n        <ion-row>\n          <ion-col col-12>\n              <div class="btn-cont">\n                  <div style="background:#8b8b8b" class="analyseBtn" (click)="analyseResult(item.id)">\n                    <img src="assets/imgs/analyse_result.png">기타사항\n                  </div>\n                </div>\n                <div   class="wrap2">\n                    <div class="description blue">\n                        <p style=" margin-top: 50px;" class="gray"> {{ etc }}</p>\n                      </div>\n                </div>\n               \n                \n    \n           \n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    \n    <!-- <div class="wrap">\n      <div class="title module">\n        <img src="assets/imgs/analyse/module.png" width="20"> 태양광 최적 설치 정보\n      </div>\n     \n    </div>\n\n    <div class="wrap">\n      <div class="title module carborn">\n        <img src="assets/imgs/analyse/carborn-sale.png" width="20"> 탄소저감효과\n      </div>\n      <div class="description blue">\n        <p class="gray">30년생 소나무 심는 효과</p>\n        <h3 class="deep-green"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> {{ numFormat(\'tree_effect\') }} <span>그루</span> </h3>\n      </div>\n      <div class="description blue">\n        <p class="gray">CO2 탄소 저감 효과</p>\n        <h3 class="blue"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> {{ numFormat(\'co_pexpect\') }} <span>톤</span> </h3>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div class="no-data text-center" *ngIf="!hasAnResult()">\n    <h3>분석 진행중입니다.</h3>\n    <p>\n      24시간 내에 (영업시간 기준) 분석 요청하신 <br/>\n      자료를 받아 보실 수 있습니다.\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/analyse-result/analyse-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], AnalyseResultPage);
    return AnalyseResultPage;
}());

//# sourceMappingURL=analyse-result.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarmodalPage = /** @class */ (function () {
    function CalendarmodalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.calendarArr = [];
        this.cur_sel_week_day = "";
        this.one_cur_sel_week_day = "";
        this.week_days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        this.one_week_days = ["일", "월", "화", "수", "목", "금", "토"];
        this.curStrSelDate = "";
        this.curStrSelDate = this.navParams.get("reserve_date");
        if (this.curStrSelDate != "") {
            this.curSelDate = new Date(this.curStrSelDate);
        }
    }
    CalendarmodalPage.prototype.ionViewDidLoad = function () {
        if (this.curStrSelDate == "") {
            this.curSelDate = this.getToday();
            var year = this.curSelDate.getFullYear();
            var month = this.curSelDate.getMonth() + 1;
            var day = this.curSelDate.getDate();
            this.curStrSelDate = this.correctDate(year, month, day);
        }
        var week_day = this.curSelDate.getDay();
        this.cur_sel_week_day = this.week_days[week_day];
        this.one_cur_sel_week_day = this.one_week_days[week_day];
        for (var i = 0; i < 7; i++) {
            var curDate = new Date();
            curDate.setMonth(curDate.getMonth() + i);
            this.calendarArr.push(this.getDaysInThisMonth(curDate));
        }
    };
    CalendarmodalPage.prototype.getToday = function () {
        var now_date = new Date();
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var today = new Date(this.correctDate(year, month, day));
        return today;
    };
    CalendarmodalPage.prototype.isToday = function (year, month, day) {
        var date = new Date(this.correctDate(year, month, day));
        if (date.getTime() == this.curSelDate.getTime())
            return true;
        else
            return false;
    };
    CalendarmodalPage.prototype.isEnableSel = function (year, month, day) {
        var date = new Date(this.correctDate(year, month, day));
        if (date.getTime() < this.getToday().getTime())
            return "day1";
        else
            return "day2";
    };
    CalendarmodalPage.prototype.selDay = function (year, month, day) {
        var date = new Date(this.correctDate(year, month, day));
        if (date.getTime() >= this.getToday().getTime()) {
            this.curSelDate = new Date(this.correctDate(year, month, day));
            this.curStrSelDate = this.correctDate(year, month, day);
            var week_day = this.curSelDate.getDay();
            this.cur_sel_week_day = this.week_days[week_day];
            this.one_cur_sel_week_day = this.one_week_days[week_day];
        }
    };
    CalendarmodalPage.prototype.correctDate = function (year, month, day) {
        var t_month = parseInt(month) < 10 ? '0' + month : month;
        var t_day = parseInt(day) < 10 ? '0' + day : day;
        return year + '-' + t_month + '-' + t_day;
    };
    CalendarmodalPage.prototype.getDaysInThisMonth = function (date) {
        var daysInThisMonth = new Array();
        var days7InThisMonth = new Array();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var first_week_day = new Date(this.correctDate(year, month, 1)).getDay();
        for (var i = 0; i < first_week_day; i++) {
            daysInThisMonth.push('');
        }
        var thisNumOfDays = new Date(year, month, 0).getDate();
        var last_day = 0;
        for (var i = 0; i < thisNumOfDays; i++) {
            daysInThisMonth.push('' + (i + 1));
            last_day = i + 1;
        }
        var last_week_day = new Date(this.correctDate(year, month, last_day)).getDay();
        for (var i = 0; i < (6 - last_week_day); i++) {
            daysInThisMonth.push('');
        }
        var days7Cnt = -1;
        for (var i = 0; i < daysInThisMonth.length; i++) {
            if (i % 7 == 0) {
                days7Cnt++;
                days7InThisMonth[days7Cnt] = new Array();
            }
            days7InThisMonth[days7Cnt].push(daysInThisMonth[i]);
        }
        var calendarInfo = {
            year: year,
            month: month,
            days: days7InThisMonth
        };
        return calendarInfo;
    };
    CalendarmodalPage.prototype.confirm = function () {
        this.viewCtrl.dismiss({ date: this.curStrSelDate, week_day: this.one_cur_sel_week_day }, "", { animate: false });
    };
    CalendarmodalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ date: "", week_day: "" }, "", { animate: false });
    };
    CalendarmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendarmodal',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/calendarmodal/calendarmodal.html"*/'<div class="modal_wrapper">    \n</div>\n<div class="modal_content">        \n    <div class="title_bar"></div>\n    <div class="calendar_container">\n        <div *ngFor="let item of calendarArr ; let idx = index" class="content">\n            <ion-row class="mt5">\n                <ion-col col-1></ion-col>\n                <ion-col col-3>\n                    <div class="border"></div>\n                </ion-col>\n                <ion-col col-4 class="date_txt">{{item.year}}년 {{item.month}}월</ion-col>\n                <ion-col col-3>\n                    <div class="border"></div>\n                </ion-col>\n                <ion-col col-1></ion-col>\n            </ion-row>\n            <div class="calendar_content mt5">\n                <div class="weekday">일</div>\n                <div class="weekday">월</div>\n                <div class="weekday">화</div>\n                <div class="weekday">수</div>\n                <div class="weekday">목</div>\n                <div class="weekday">금</div>\n                <div class="weekday">토</div>\n            </div>        \n            <div *ngFor="let days of item.days ; let idx = index" class="calendar_content">\n                <div (click)="selDay(item.year, item.month, days[0])" class="{{ isEnableSel(item.year, item.month, days[0]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[0])" class="today">{{ days[0] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[0])" class="other">{{ days[0] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[1])" class="{{ isEnableSel(item.year, item.month, days[1]) }}">\n                        <div *ngIf="isToday(item.year, item.month, days[1])" class="today">{{ days[1] }}</div>\n                        <div *ngIf="!isToday(item.year, item.month, days[1])" class="other">{{ days[1] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[2])" class="{{ isEnableSel(item.year, item.month, days[2]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[2])" class="today">{{ days[2] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[2])" class="other">{{ days[2] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[3])" class="{{ isEnableSel(item.year, item.month, days[3]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[3])" class="today">{{ days[3] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[3])" class="other">{{ days[3] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[4])" class="{{ isEnableSel(item.year, item.month, days[4]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[4])" class="today">{{ days[4] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[4])" class="other">{{ days[4] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[5])" class="{{ isEnableSel(item.year, item.month, days[5]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[5])" class="today">{{ days[5] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[5])" class="other">{{ days[5] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[6])" class="{{ isEnableSel(item.year, item.month, days[6]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[6])" class="today">{{ days[6] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[6])" class="other">{{ days[6] }}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button ion-button class="mt15" (click)="cancel()">취소</button>\n    <button ion-button class="mt15 other_btn" (click)="confirm()">확인</button>\n</div>'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/calendarmodal/calendarmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalendarmodalPage);
    return CalendarmodalPage;
}());

//# sourceMappingURL=calendarmodal.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myquot_input_myquot_input__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myquot_view_myquot_view__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myquot_process_status_myquot_process_status__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// common 



var MyquotStatusPage = /** @class */ (function () {
    function MyquotStatusPage(navCtrl, navParams, appmgr, common, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.modalCtrl = modalCtrl;
        //파트너스 화면. 
        this.tab = "tab1";
        this.user_id = 0;
        this.email = '';
        // 요청 견적
        this.quotData = [];
        // 제출한 견적
        this.submitCont = [];
        // 계약
        this.agreeCont = [];
        // 설치완료
        this.complCont = [];
        if (navParams.get('tab')) {
            this.tab = navParams.get('tab');
        }
        else {
            this.tab = "tab1";
        }
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.email = userInfo.email;
        console.log(userInfo);
        // initialize
        // 요청 견적
        // let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
        // modal.present({animate:false});
        var sendData = [];
        sendData["comp_id"] = this.user_id;
        this.http.postHttpData("/getAnalyseData", sendData, function (result) {
            // modal.dismiss({}, "", {animate:false});
            console.log(result);
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    _this.quotData.push({ "reg_time": result[i].reg_time, "id": result[i].id, "month_fee": result[i].month_fee, "contract_time": result[i].contract_time, "address": _this.uintToString(result[i].address.data).split(" ")[0] + _this.uintToString(result[i].address.data).split(" ")[1] });
                }
            }
            else {
                _this.quotData = null;
            }
        });
        // 제출한 견적
        var sendData1 = [];
        sendData1["comp_id"] = this.user_id;
        this.http.postHttpData("/getSubmitContract", sendData1, function (result) {
            if (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    //  reg_time,submit_cont_time,address,month_fee
                    _this.submitCont.push({ "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "address": _this.uintToString(result[i].address.data), "month_fee": result[i].month_fee });
                }
                var tag = "reg_time";
                _this.submitCont.sort(function (a, b) {
                    console.log(a[tag]);
                    // convert date object into number to resolve issue in typescript
                    var dateA = new Date(a[tag]).getTime();
                    var dateB = new Date(b[tag]).getTime();
                    return dateB > dateA ? 1 : -1;
                });
                console.log(_this.submitCont);
            }
            else {
                _this.submitCont = null;
            }
        });
        // 계약
        this.http.postHttpData("/getAgreeContract", sendData1, function (result) {
            if (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    //  reg_time,submit_cont_time,address,month_fee
                    console.log(result[i].contract_path.data);
                    _this.agreeCont.push({ "status": result[i].status, "contract_path": _this.uintToString(result[i].contract_path.data), "quote_status": result[i].quote_status, "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "submit_cont_time": result[i].submit_cont_time, "address": _this.uintToString(result[i].address.data), "month_fee": result[i].month_fee });
                }
                console.log(_this.agreeCont);
            }
            else {
                console.log(result);
                _this.agreeCont = null;
            }
        });
        // 설치완료
        this.http.postHttpData("/getCompleteContract", sendData1, function (result) {
            if (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    //  reg_time,submit_cont_time,address,month_fee
                    console.log(result[i]);
                    _this.complCont.push({ "status": result[i].status, "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "address": _this.uintToString(result[i].address.data), "month_fee": result[i].month_fee });
                }
                console.log(_this.complCont);
            }
            else {
                console.log(result);
                _this.complCont = null;
            }
        });
    }
    MyquotStatusPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_5_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        return decodedString;
    };
    MyquotStatusPage.prototype.ionViewWillEnter = function () {
    };
    MyquotStatusPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    // 요청 견적
    MyquotStatusPage.prototype.quotation = function (analyse_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myquot_input_myquot_input__["a" /* MyquotInputPage */], { analyse_id: analyse_id }, { animate: false });
    };
    // 제출한 견적
    MyquotStatusPage.prototype.quotationView = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myquot_view_myquot_view__["a" /* MyquotViewPage */], { cont_id: id }, { animate: false });
    };
    // 설치완료
    MyquotStatusPage.prototype.processStatus = function (id, analyse_id) {
        console.log(id);
        console.log(analyse_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__myquot_process_status_myquot_process_status__["a" /* MyquotProcessStatusPage */], { cont_id: id, analyse_id: analyse_id }, { animate: false });
    };
    // 상태관리
    MyquotStatusPage.prototype.hasQuot = function () {
        if (this.quotData)
            return true;
        else
            return false;
    };
    MyquotStatusPage.prototype.hasSubmitCont = function () {
        if (this.submitCont)
            return true;
        else
            return false;
    };
    MyquotStatusPage.prototype.hasAgreeCont = function () {
        if (this.agreeCont)
            return true;
        else
            return false;
    };
    MyquotStatusPage.prototype.hasComplete = function () {
        if (this.complCont)
            return true;
        else
            return false;
    };
    // common functions
    MyquotStatusPage.prototype.returnData = function (date) {
        var date1 = this.common.getStrDate(date);
        if (date1) {
            return date1.replace(/-/g, ".").substring(0, 10);
        }
        else {
            return '';
        }
    };
    MyquotStatusPage.prototype.partnersAddress = function (addr) {
        // if(addr) {
        //   var tmpAddr = addr.split(' ');
        //   var tmp = '';
        //   for(var i=0; i<tmpAddr.length-1; i++){
        //     tmp = tmp + ' ' + tmpAddr[i];
        //   }
        //   return tmp;
        // }
        return addr;
        // else return 'ttt';
    };
    MyquotStatusPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    MyquotStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myquot-status',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-status/myquot-status.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <strong class="title">내 견적 현황</strong>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-segment [(ngModel)]="tab">\n  <ion-segment-button value="tab1">\n    요청 견적\n  </ion-segment-button>\n  <ion-segment-button value="tab2">\n    제출한 견적\n  </ion-segment-button>\n  <ion-segment-button value="tab3">\n    진행현황\n  </ion-segment-button>\n  \n</ion-segment>\n<!-- 요청 견적 -->\n<ion-content>\n  <div [ngSwitch]="tab">\n    <ion-list *ngSwitchCase="\'tab1\'">\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of quotData ; let idx = index">\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <div class="address mt10">ㆍ{{ item.address }}</div>\n              <div class="fee">월 평균 전기요금: {{numFormat(item.month_fee)}}원 </div>\n            </div>\n\n            <div class="btn-cont">\n              <div class="quotation" (click)="quotation(item.id)">\n                <img src="assets/imgs/calcu.png">견적내기\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <h3 class="tip" *ngIf="!hasQuot()">요청중인 견적이 없습니다.</h3>\n    </ion-list>\n    <!-- 제출한 견적 -->\n    <ion-list *ngSwitchCase="\'tab2\'">\n      \n      <ion-grid class="p0 ion-grid" *ngFor="let item of submitCont ; let idx = index">\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p style="    width: 45%;\n              float: left;" class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <p style="    float: right;\n              width: 45%;\n\n              margin: 0;\n              margin-top: 0px !important;" class="contract mt1">[제출일자] <span>{{returnData(item.submit_cont_time)}}</span> </p>\n            \n              <div style="margin-top:25px !important;" class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n              <div style="margin-top:15px !important;" class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n            </div>\n\n            <div class="btn-cont">\n              <div class="quotation" (click)="quotationView(item.id)">\n                <img src="assets/imgs/quotation_view.png">견적보기\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <h3 class="tip" *ngIf="!hasSubmitCont()">제출한 견적이 없습니다.</h3>\n    </ion-list>\n    <!-- 계약 -->\n    <ion-list class="contract" *ngSwitchCase="\'tab3\'">\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of agreeCont ; let idx = index">\n        <img style="width: 70px; margin-left: 5%;" *ngIf="item.contract_path!=\'\'" src="assets/imgs/계약완료.png"/>\n        <img style="width: 70px; margin-left: 5%;" *ngIf="item.contract_path==\'\'" src="assets/imgs/계약 대기.png"/>\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <p class="contract mt1">[계약일] <span>{{returnData(item.contract_time)}}</span> </p>\n              <div class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n              <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n            </div>\n\n            <div class="btn-cont">\n              <div  *ngIf="item.contract_path!=\'\'"class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                <img src="assets/imgs/calcu.png">진행현황\n              </div>\n              <div style="background : #e18f00"  *ngIf="item.contract_path==\'\'"class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                  <img src="assets/imgs/calcu.png">계약하기\n                </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <h3 class="tip" *ngIf="!hasAgreeCont()">계약된 견적이 없습니다.</h3>\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of complCont ; let idx = index">\n          <img style="width: 70px; margin-left: 5%;"  src="assets/imgs/설치완료.png"/>\n          <ion-row>\n            <ion-col col-12>\n              <div class="wrap">\n                <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n                <p class="contract mt1">[계약일] <span>{{returnData(item.contract_time)}}</span> </p>\n                <div class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n                <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n              </div>\n  \n              <div class="btn-cont">\n                <div style="background:#494949;" class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                  <img src="assets/imgs/calcu.png">진행현황\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <h3 class="tip" *ngIf="!hasComplete()">완료된 견적이 없습니다.</h3>\n\n        \n    </ion-list>\n    <!-- 설치완료 -->\n   \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-status/myquot-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MyquotStatusPage);
    return MyquotStatusPage;
}());

//# sourceMappingURL=myquot-status.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeGuidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChargeGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChargeGuidePage = /** @class */ (function () {
    function ChargeGuidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChargeGuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChargeGuidePage');
    };
    ChargeGuidePage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    ChargeGuidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charge-guide',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/charge-guide/charge-guide.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">이용요금</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n    <h4 style="text-align: left;\n    margin-left: 1.3em;" class="ptitle">이용요금 안내</h4>\n  <div class="wrap">\n    \n    <div class="parters-title">파트너스 이용요금</div>\n    <div class="line"></div>\n    <div class="content">총 계약 금액의 <span style="color:#e15a00">10%</span></div>\n\n    <h6 style="text-align: center;" class="ptitle mt30">예시) 태양광 설치 금액이 110만원일때</h6>\n    <div>파트너스 수령금액은</div>\n    <div class="content">\n      99만원\n      <p>(솔라미 이용요금을 제한 태양광 설치 금액 90만원+VAT10%)</p>\n    </div>\n\n   \n  </div>\n  <div class="description mt30">\n    <h6 style="    margin-left: 1.3em;" class="ptitle">대금지급 관련 안내</h6>\n    <p style="margin-left: 1.5em;">ㆍ 지급 받을 금액에 대한 세금계산서 발행이 필요합니다.</p>\n    <p style="margin-left: 1.5em;">ㆍ 설치 완료후 고객의 에스크로 계좌 승인 후. 24시간내에 지급됩니다.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/charge-guide/charge-guide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChargeGuidePage);
    return ChargeGuidePage;
}());

//# sourceMappingURL=charge-guide.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/service-introduction/service-introduction.module": [
		387,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_auth_register_auth__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__term_term__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// common 



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.agreeTerm = false;
        this.mem_type = 0;
        this.email = '';
        this.password = '';
        this.repassword = '';
        this.validateFlag = false;
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        var saveInfo = this.appmgr.getSaveInfo();
        this.mem_type = saveInfo.mem_type;
        this.agreeTerm = false;
        this.mem_type = 0;
        this.email = '';
        this.password = '';
        this.repassword = '';
        this.validateFlag = false;
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    /////////
    RegisterPage.prototype.checkEmail = function () {
        var _this = this;
        var sendData = [];
        sendData["email"] = this.email;
        sendData["password"] = '';
        this.http.postHttpData("/checkUser", sendData, function (result) {
            if (result) {
                _this.validateFlag = true;
                var str = '이미 사용중인 이메일입니다.';
                _this.confirmAlert(str);
            }
            else {
                _this.validateFlag = false;
            }
        });
    };
    RegisterPage.prototype.createUser = function () {
        // 
        var _this = this;
        if (!this.validate()) {
            return false;
        }
        var sendData = [];
        sendData["email"] = this.email;
        this.http.postHttpData("/sendAuthKey", sendData, function (result) {
            console.log(result);
            if (result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_auth_register_auth__["a" /* RegisterAuthPage */], { email: _this.email, password: _this.password, authKey: result }, { animate: false });
            }
        });
    };
    /////////
    RegisterPage.prototype.personal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__term_term__["a" /* TermPage */], { type: "personal" }, { animate: false });
    };
    RegisterPage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__term_term__["a" /* TermPage */], { type: "term" }, { animate: false });
    };
    RegisterPage.prototype.validate = function () {
        var str = '';
        if (this.email == '') {
            str = '이메일주소를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.email.indexOf('@') == -1) {
            str = '이메일 형식이 올바르지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        // 
        if (this.validateFlag) {
            str = '이미 사용중인 이메일입니다.';
            this.confirmAlert(str);
            return false;
        }
        // password
        if (this.password == '') {
            str = '비밀번호를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.password != this.repassword) {
            str = '비밀번호가 일치하지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.password.length < 8) {
            str = '비밀번호 형식이 올바르지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        // term
        if (this.agreeTerm == false) {
            str = '이용약관 및 개인정보 수집에 <br/ >동의하셔야 합니다.';
            this.confirmAlert(str);
            return false;
        }
        return true;
    };
    RegisterPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/register/register.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="form">\n    <ion-list>\n      <ion-item style="    margin-top: 1em;">\n        <ion-label style="color:black !important; margin-top:10px;  font-size:12px;">이메일</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="email" type="email" (ionBlur)="checkEmail()"></ion-input>\n      </ion-item>\n    \n      <ion-item class="mt10">\n        <ion-label style="color:black !important; margin-top:10px; font-size:12px;" >비밀번호</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <ion-item class="mt10">\n        <ion-label style="color:black !important; margin-top:10px;  font-size:12px;" >비밀번호 재입력</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="repassword" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item tip mt10">\n        비밀번호는 영문, 숫자, 특수문자8자 이상\n    </div>\n    <div class="item btn-cont mt40">\n      \n      <div style="text-align: left !important" class="text-center itemEtc">\n        <ion-checkbox [(ngModel)]="agreeTerm" ></ion-checkbox>\n        <strong (click)="term()" >이용약관</strong> <span class="term">및</span> <strong (click)="personal()" >개인정보취급방침</strong> \n        <ion-label>에 모두 동의합니다.</ion-label>\n      </div>\n      <button ion-button color="light" (click)="createUser()" class="boxBtn createUser">\n          <img style="width: 14px;\n          height: 14px; margin-right:5px;" class="mark" src="assets/imgs/following.png">\n          계정 만들기</button>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 



var RegisterAuthPage = /** @class */ (function () {
    function RegisterAuthPage(navCtrl, navParams, alertCtrl, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.time = '3:00';
        this.authKey = '';
        this.inputAuthKey = '';
        this.email = '';
        this.password = '';
        this.mem_type = 0;
        // 
        this.min = 0;
        this.sec = 0;
        this.email = navParams.get('email');
        this.password = navParams.get('password');
        this.authKey = navParams.get('authKey');
    }
    RegisterAuthPage.prototype.ionViewWillEnter = function () {
        var saveInfo = this.appmgr.getSaveInfo();
        this.mem_type = saveInfo.mem_type;
        this.countDown();
    };
    RegisterAuthPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    RegisterAuthPage.prototype.getAuth = function () {
        var _this = this;
        var str = '';
        if (this.inputAuthKey == '') {
            str = '인증번호를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.authKey != this.inputAuthKey) {
            str = '인증번호가 올바르지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        var sendData = [];
        sendData["email"] = this.email;
        sendData["password"] = this.password;
        sendData["type"] = this.mem_type;
        sendData["login_type"] = 'email';
        this.http.postHttpData("/registerUser", sendData, function (result) {
            if (result) {
                var saveData = {
                    email: '',
                    password: '',
                    mem_type: _this.mem_type
                };
                _this.appmgr.setSaveInfo(saveData);
                var userData = {
                    email: _this.email,
                    user_id: result,
                    mem_type: _this.mem_type,
                    login_flag: 1
                };
                _this.appmgr.setUserInfoIndivial(userData);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
            }
        });
    };
    RegisterAuthPage.prototype.resendAuth = function () {
        var _this = this;
        console.log(this.inputAuthKey);
        this.inputAuthKey = "";
        console.log(this.inputAuthKey);
        this.min = 2;
        this.sec = 59;
        var sendData = [];
        sendData["email"] = this.email;
        this.http.postHttpData("/sendAuthKey", sendData, function (result) {
            if (result) {
                _this.authKey = result;
                _this.countDown();
                var str = '인증번호가 다시 발송 되었습니다.';
                _this.confirmAlert(str);
            }
        });
    };
    RegisterAuthPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    RegisterAuthPage.prototype.countDown = function () {
        var _this = this;
        this.min = 2;
        this.sec = 59;
        var tmpmin, tmpsec;
        var loop = setInterval(function () {
            _this.sec--;
            tmpmin = _this.min < 10 ? '0' + _this.min : _this.min;
            tmpsec = _this.sec < 10 ? '0' + _this.sec : _this.sec;
            _this.time = tmpmin + ':' + tmpsec;
            if (_this.min == 0 && _this.sec == 0) {
                _this.min = 2;
                _this.sec = 59;
                _this.authKey = '';
                clearInterval(loop);
            }
            if (_this.sec == 0) {
                _this.sec = 59;
                _this.min--;
            }
        }, 1000);
    };
    RegisterAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-auth',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/register-auth/register-auth.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <div class="item tip">\n     {{email}}로 발송된 인증 번호를<br />\n       아래에 입력해주세요.\n    </div>\n    <ion-list class="mt10">\n      <ion-item>\n        <ion-input [(ngModel)]="inputAuthKey" type="number" placeholder=""></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item tip mt40 text-center">\n      인증 번호를 받지 못하셨나요? <strong (click)="resendAuth()">다시받기</strong>\n    </div>\n    <div class="item btn-cont mt40">\n      \n      <button ion-button color="light" (click)="getAuth()" class="boxBtn auth">\n          <img style="width: 14px;\n          height: 14px; margin-right:5px;" class="mark" src="assets/imgs/check.png">\n\n        인증하기\n        <code>{{time}}</code>\n      </button>\n    </div>\n  </div>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/register-auth/register-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], RegisterAuthPage);
    return RegisterAuthPage;
}());

//# sourceMappingURL=register-auth.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// common 


var FindPassPage = /** @class */ (function () {
    function FindPassPage(navCtrl, navParams, alertCtrl, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.common = common;
        this.http = http;
        this.email = '';
    }
    FindPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindPassPage');
    };
    FindPassPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    FindPassPage.prototype.sendMail = function () {
        var _this = this;
        var str = '';
        if (this.email == '') {
            str = '이메일주소를 입력하세요.';
            this.confirmAlert(str);
            return;
        }
        else if (this.email.indexOf('@') == -1) {
            str = '이메일 형식이 올바르지 않습니다.';
            this.confirmAlert(str);
            return;
        }
        var sendData = [];
        sendData["email"] = this.email;
        sendData["password"] = '';
        this.http.postHttpData("/sendPassword", sendData, function (result) {
            console.log("result" + result);
            if (!result) {
                str = '등록되지 않은 계정입니다.';
                _this.confirmAlert(str);
            }
            else {
                str = '이메일로 임시비밀번호를 발송했습니다.';
                _this.confirmAlert(str);
            }
        });
    };
    FindPassPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    FindPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-pass',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/find-pass/find-pass.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비밀번호 찾기</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <div class="item tip">\n      <span>\n          가입하신 이메일 주소로 <br>임시비밀번호를 보내 드립니다.\n      </span>\n    \n    </div>\n    <ion-list class="mt20">\n      <ion-item>\n        <ion-input [(ngModel)]="email" type="email" placeholder="이메일주소"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item btn-cont mt40">\n      <button ion-button color="light" (click)="sendMail()" class="boxBtn sendMail"> <img style="margin-right:5px; width: 22px;\n        height: 15px;" class="mark" src="assets/imgs/envelope.png">보내기</button>\n    </div>\n    <div class="item tip mt10 text-center">\n      메일을 받지 못하셨나요? <strong class="resend" (click)="sendMail()" >다시받기</strong>\n    </div>\n    <hr>\n    <div class="item btn-cont mt30">\n      <p>임시비밀번호로 로그인 후 새로운 비밀 번호를 설정해주세요.</p>\n    </div>\n  </div>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/find-pass/find-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], FindPassPage);
    return FindPassPage;
}());

//# sourceMappingURL=find-pass.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compare_quotation_compare_quotation__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__government_government__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__benefitgenerator_benefitgenerator__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CallNumber } from '@ionic-native/call-number';




/**
 * Generated class for the CustomCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomCenterPage = /** @class */ (function () {
    function CustomCenterPage(_kakaoCordovaSDK, callNumber, navCtrl, navParams) {
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomCenterPage');
    };
    CustomCenterPage.prototype.compareQuo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__compare_quotation_compare_quotation__["a" /* CompareQuotationPage */], {}, { animate: false });
    };
    CustomCenterPage.prototype.government = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__government_government__["a" /* GovernmentPage */], {}, { animate: false });
    };
    CustomCenterPage.prototype.generator = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__benefitgenerator_benefitgenerator__["a" /* BenefitgeneratorPage */], {}, { animate: false });
    };
    CustomCenterPage.prototype.connectToKakao = function () {
        console.log("plug friends");
        var plusFriendTemplate = {
            plusFriendId: '_MxeTUj',
        };
        this._kakaoCordovaSDK
            .addPlusFriend(plusFriendTemplate)
            .then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        })
            .catch(function (err) {
        });
    };
    CustomCenterPage.prototype.phonecall = function () {
        this.callNumber.callNumber("15771234", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    CustomCenterPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CustomCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-center',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/custom-center/custom-center.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">고객센터</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="banner">\n    <img class="avartar" src="assets/imgs/logoonly.png">\n  </div>\n  \n  <div class="wrap cont_1">\n    <img style="width:30%; margin-top:1.5em; " src="assets/imgs/solamyonly.png">\n    <p class="mt10">Solamy와 카카오톡 친구가 되세요.</p>\n    <p class="mt1">친구 추가시 업무진행이 편리합니다</p>\n    <div (click)="connectToKakao()" class="kakao">\n      <label style="font-size: 14px;\n      line-height: 2.5em;">카카오톡 아이디 solarmy365</label>\n    </div>\n  </div>\n  \n  <div style="\n  height: 180px;" class="wrap cont_2">\n    <div class="phone">\n      <img src="assets/imgs/customerearphone.png">\n    </div>\n    <h3 class="mt10">고객센터 전화연결</h3>\n    <p class="mt1">전화 업무상담은 오전 10시에서 오후6시까지 운영합니다.</p>\n    <div class="phone-num">070.764.2221</div>\n    <button style="   \n    text-align: center;\n    background: #e15a00;\ncolor: white;\nwidth: 75%;\n \nborder-radius: 10px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    " ion-button color="light"  (click)="phonecall()">전화연결하기</button>\n  </div>\n  <div style="    height: auto !important;" class="wrap cont_2">\n  <ion-grid class="p0 ion-grid bottom">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="service_intro" (click)="compareQuo()">\n        <div style="    margin-top: 1em;" class="text-center">\n          <img style="width:24px; height:24px;" src="assets/imgs/bar-chartblack.png">\n          <h6>비교견적안내</h6>\n        </div>\n      </ion-col>\n      <ion-col style="    margin-top: 0.5em;" col-6 class="service_intro" (click)="government()">\n        <div style="\n        margin-top: 0.5em;" class="text-center">\n            <img style="width:24px; height:24px;" src="assets/imgs/homeblack.png">\n          <strong style="display:block;">가정용 태양광 <br>정부주택지원 사업</strong>\n        </div>\n      </ion-col>\n      <ion-col style="    margin-top: 1em;" col-6 class="cutomer_center" (click)="generator()">\n        <div class="text-center">\n            <img style="width:24px; height:24px;" src="assets/imgs/energyblack.png">\n          <h6>수익형발전소(RPS)</h6>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n  \n<ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미(Solarmy)</h3>\n    <p>통신판매업신고: 제20129-경기포천-19129호</p>\n    <img src="assets/imgs/footer_logo.png">\n  </div>\n</ion-footer>\n</ion-content>\n\n<!-- <ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미</h3>\n    <p>통신판매업신고: 제20129-경기포천-19129호</p>\n    <img src="assets/imgs/footer_logo.png">\n  </div>\n</ion-footer> -->'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/custom-center/custom-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["b" /* KakaoCordovaSDK */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CustomCenterPage);
    return CustomCenterPage;
}());

//# sourceMappingURL=custom-center.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_detail_company_detail__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__process_statmodal_process_statmodal__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calendarmodal_calendarmodal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config_config__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// common 




var ProcessStatusPage = /** @class */ (function () {
    function ProcessStatusPage(inapp, navCtrl, navParams, modalCtrl, photoViewer, appmgr, common, http, appbrowser, alertCtrl, platform, document, file, transfer) {
        var _this = this;
        this.inapp = inapp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.appbrowser = appbrowser;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.tab = "tab1";
        this.evalval = "평가하기";
        this.user_id = 0;
        this.confirmmessage = "구매확정";
        this.selectedIndex = -0;
        this.radio = false;
        this.client = 0; // 의뢰버튼
        // 
        this.termFlag = false; //  // 동의버튼
        this.contractFlag = false; // 계약버튼
        this.pay = 0; // 결제
        this.payDate = ''; // 결제date
        // 
        this.analyse_id = 0; // 분석
        this.contCompId = 0; // 계약(의뢰)된 회사id
        this.contCompTmpId = 0; // 계약된 회사id tmp
        this.comData = []; // 고객의뢰 data
        // 평가주기
        this.imgUrl = [];
        this.rating = 0; // 
        this.comment = '';
        this.hasCom = 1; // 처음으로 평가를 줄때 1
        // 계약 및 결제
        this.installDay = '';
        this.contCompDate = '';
        this.contract_path = ''; // 계약서 경로
        this.escro_url = __WEBPACK_IMPORTED_MODULE_15__config_config__["a" /* CONFIG */].ESCRO_URL; // 에스크로 결제 
        this.target = "_system"; // "_self";//_blank, _system
        this.inAppoptions_Android = {
            location: 'yes',
        };
        this.analyse_id = navParams.get('analyse_id');
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        console.log(userInfo);
        // initialize
        var star = 'assets/imgs/star.png';
        for (var i = 0; i < 5; i++) {
            this.imgUrl[i] = star;
        }
        this.comData = [];
        // get company data
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/getCompanyData", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log("result show");
            console.log(result);
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    console.log(i);
                    if (result[i].company_name != null) {
                        console.log(result[i]);
                        console.log(result[i].company_name.data);
                        //설치예정일 5 -5
                        //설치완료일 5- 10
                        //설치희망일 4-24
                        //고객 계약 동의일 5-9
                        //파트너 계약 동의일 5 - 11
                        _this.comData.push({ "company_name": _this.uintToString(result[i].company_name.data), "comp_id": result[i].comp_id, "final_price": result[i].final_price, "rate": result[i].rate, "analyse_id": result[i].analyse_id });
                    }
                }
                console.log(result[0].comp_id);
                _this.radioClicked(result[0].comp_id, 0);
                console.log("come data");
                console.log(_this.comData);
            }
            else {
                _this.comData = null;
                _this.contCompId = 0;
            }
        });
        // get analyse data
        var sendData1 = [];
        sendData1["analyse_id"] = this.analyse_id;
        console.log("company id is : " + this.contCompId);
        this.http.postHttpData("/getAnalyseById", sendData1, function (result) {
            if (result) {
                _this.contCompId = result.cont_comp_id;
                if (result.contract_time) {
                    _this.contCompDate = _this.getStrDate(result.contract_time);
                    _this.contractFlag = true; // 계약된것으로 절환
                }
                // 계약된 회사정보(계약&평가 정보얻기)
                var sendData2 = [];
                sendData2["comp_id"] = _this.contCompId;
                sendData2["analyse_id"] = _this.analyse_id;
                var sendData1_1 = [];
                sendData1_1["analyse_id"] = _this.analyse_id;
                _this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
                    if (result) {
                        console.log(result);
                        // this.comData={"inv_guarent":this.uintToString(result.inv_guarent.data),"module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),"inv_name":this.uintToString(result.inv_name),"module_name":this.uintToString(result.module_name),"address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
                        if (result.add_price_content != null) {
                            _this.contData = { "contract_time": result.contract_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_exp_time": result.ins_exp_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_comp_time": result.ins_comp_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_hope_time": result.ins_hope_time.split("T")[0].replace("-", ".").replace("-", "."), "final_price": result.final_price, "add_price": result.add_price, "add_price_content": _this.uintToString(result.add_price_content.data), "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.uintToString(result.company_name.data), "cont_price": result.cont_price };
                        }
                        else {
                            _this.contData = { "contract_time": result.contract_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_exp_time": result.ins_exp_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_comp_time": result.ins_comp_time.split("T")[0].replace("-", ".").replace("-", "."), "ins_hope_time": result.ins_hope_time.split("T")[0].replace("-", ".").replace("-", "."), "final_price": result.final_price, "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.uintToString(result.company_name.data), "cont_price": result.cont_price };
                        }
                        console.log(_this.contData);
                        // this.contData = result;
                        _this.pay = result.pay_flag;
                        _this.payDate = _this.getStrDate(result.pay_time);
                        _this.contract_path = result.contract_path;
                        if (result.custom_replay != null) {
                            _this.comment = _this.uintToString(result.custom_replay.data);
                        }
                        _this.rating = result.rate;
                        var star_1 = 'assets/imgs/star.png';
                        var stared = 'assets/imgs/star2.png';
                        for (var i = 0; i < 5; i++) {
                            if (result.rate > 0 && i + 1 <= result.rate) {
                                _this.hasCom = 0;
                                _this.imgUrl[i] = stared;
                            }
                            else
                                _this.imgUrl[i] = star_1;
                        }
                        _this.http.postHttpData("/getCompanyData", sendData1_1, function (result) {
                            if (result) {
                                console.log(result);
                                for (var i = 0; i < result.length; i++) {
                                    console.log(_this.contData);
                                    console.log(_this.contData["comp_id"]);
                                    if (result[i].comp_id == _this.contData["comp_id"]) {
                                        _this.contract_path = _this.uintToString(result[i].contract_path.data);
                                        console.log(_this.contract_path);
                                    }
                                }
                            }
                        });
                    }
                    else {
                        _this.comment = '';
                        _this.contData = [];
                        _this.contCompId = 0;
                        _this.hasCom = 1;
                    }
                });
            }
            else {
                _this.contCompId = 0;
            }
        });
        // get today
        var curSelDate = this.getToday();
        var year = curSelDate.getFullYear();
        var month = curSelDate.getMonth() + 1;
        var day = curSelDate.getDate();
        this.installDay = this.correctDate(year, month, day);
    }
    ProcessStatusPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_7_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    ProcessStatusPage.prototype.ionViewWillEnter = function () {
        // let userInfo = this.appmgr.getUserInfo();
        // this.user_id = userInfo.user_id;
        // console.log(userInfo);
        // // initialize
        // let star = 'assets/imgs/star.png';
        // for(var i=0; i<5; i++) {
        //   this.imgUrl[i] = star;
        // }
        // this.comData=[];
        // // get company data
        // let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
        // modal.present({animate:false});
        // let sendData = [];
        //     sendData["analyse_id"] = this.analyse_id;
        // this.http.postHttpData("/getCompanyData", sendData, (result) => {
        //   modal.dismiss({}, "", {animate:false});
        //   console.log("result show");
        //   console.log(result);
        //   if(result) {
        //     for(var i=0; i<result.length; i++){
        //       this.comData.push({"company_name": this.uintToString(result[i].company_name.data),"comp_id":result[i].comp_id,"final_price":result[i].final_price,"rate":result[i].rate,"analyse_id":result[i].analyse_id});
        //     }
        //     console.log("come data");
        //     console.log(this.comData);
        //   }
        //   else {
        //     this.comData  = null;
        //     this.contCompId = 0;
        //   }
        // });
        // // get analyse data
        // let sendData1 = [];
        //     sendData1["analyse_id"] = this.analyse_id;
        // this.http.postHttpData("/getAnalyseById", sendData1, (result) => {
        //   if(result) {  // 계약된 회사가 있으면
        //     this.contCompId = result.cont_comp_id;
        //     if( result.contract_time ) {
        //       this.contCompDate = this.getStrDate(result.contract_time);
        //       this.contractFlag = true;   // 계약된것으로 절환
        //     }
        //     // 계약된 회사정보(계약&평가 정보얻기)
        //     let sendData2 = [];
        //         sendData2["comp_id"] = this.contCompId;
        //         sendData2["analyse_id"] = this.analyse_id;
        //     this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
        //       if(result) {
        //         console.log(result);
        //         // this.comData={"inv_guarent":this.uintToString(result.inv_guarent.data),"module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),"inv_name":this.uintToString(result.inv_name),"module_name":this.uintToString(result.module_name),"address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
        //         this.contData={"company_name": this.uintToString(result.company_name.data),"cont_price":result.cont_price};
        //         // this.contData = result;
        //         this.pay = result.pay_flag; 
        //         this.payDate = this.getStrDate(result.pay_time); 
        //         this.contract_path = result.contract_path;
        //         // rating
        //         this.comment = result.custom_replay; 
        //         this.rating = result.rate;
        //         let star = 'assets/imgs/star.png';
        //         let stared = 'assets/imgs/stared.png';
        //         for(var i=0; i<5; i++) {
        //           if( result.rate > 0 && i+1 <= result.rate ) {
        //             this.hasCom = 0;
        //             this.imgUrl[i] = stared;
        //           }
        //           else
        //             this.imgUrl[i] = star;
        //         }
        //       }
        //       else {
        //         this.comment = ''; 
        //         this.contData = [];
        //         this.contCompId = 0;
        //         this.hasCom = 1;
        //       }
        //     });
        //   }
        //   else {
        //     this.contCompId = 0;
        //   }
        // });
        // // get today
        // let curSelDate = this.getToday();
        // let year = curSelDate.getFullYear();
        // let month = curSelDate.getMonth() + 1;
        // let day = curSelDate.getDate();
        // this.installDay = this.correctDate(year, month, day);
    };
    ProcessStatusPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    ProcessStatusPage.prototype.viewContract2 = function () {
        console.log("viewContract2 come");
        this.contractFinished = this.getNow();
        this.confirmmessage = "구매확정완료";
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/updateInstallStatus", sendData, function (result) {
            console.log(result);
        });
    };
    // 평가주기
    ProcessStatusPage.prototype.setComment = function () {
        var _this = this;
        console.log(this.rating);
        console.log(this.comment);
        if (this.rating == null || this.comment.length < 6) {
            console.log(this.rating);
            console.log(this.comment);
            var alert_1 = this.alertCtrl.create({
                title: '후기(5자이상)와 평가를 남겨주세요',
                buttons: [
                    {
                        text: '취소',
                        cssClass: 'cancel',
                        handler: function (data) {
                            // console.log("Cancel...", id);
                        }
                    },
                    {
                        text: '확인',
                        cssClass: 'confirm',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert_1.present({ animate: false });
        }
        else {
            var sendData = [];
            sendData["comp_id"] = this.contCompId;
            sendData["user_id"] = this.user_id;
            sendData["analyse_id"] = this.analyse_id;
            sendData["comment"] = this.comment;
            sendData["rate"] = this.rating;
            this.http.postHttpData("/setCustomerRating", sendData, function (result) {
                _this.evalval = "평가 완료";
                if (result) {
                    _this.hasCom = 0;
                }
                else {
                    _this.hasCom = 1;
                }
            });
            var sendData1 = [];
            sendData1["analyse_id"] = this.analyse_id;
            this.http.postHttpData("/updateInstallStatus", sendData, function (result) {
                console.log(result);
            });
        }
    };
    ProcessStatusPage.prototype.viewContract = function () {
        console.log(this.contract_path);
        if (!this.contract_path) {
            var str = '계약서파일이 존재하지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        if (this.contract_path.indexOf('pdf') > 0) {
            //http://solarmy.co.kr/solarmy_admin/uploads/15539567913.pdf
            var url = "http://solarmy.co.kr/solarmy_admin/uploads" + '/' + this.contract_path;
            var options = {
                location: 'yes',
                hidden: 'no',
                clearcache: 'yes',
                clearsessioncache: 'yes',
                zoom: 'yes',
                hardwareback: 'yes',
                mediaPlaybackRequiresUserAction: 'no',
                shouldPauseOnSuspend: 'no',
                closebuttoncaption: 'Close',
                disallowoverscroll: 'no',
                toolbar: 'yes',
                enableViewportScale: 'no',
                allowInlineMediaPlayback: 'no',
                presentationstyle: 'pagesheet',
                fullscreen: 'yes',
            };
            // this.download();
            // const browser = this.inapp.create(this.url,"_system","location=yes,enableViewportScale=yes,hidden=no" );
            var browser = this.inapp.create(url, '_system', options);
            // let modal1 = this.modalCtrl.create(PdfViewerPage, {
            //   url: url
            // });
            // modal1.present();
        }
        else {
            var img_url = __WEBPACK_IMPORTED_MODULE_15__config_config__["a" /* CONFIG */].IMG_URL + this.contract_path;
            this.viewImg(img_url);
        }
    };
    ProcessStatusPage.prototype.detailCompany = function (comp_id, analyse_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__company_detail_company_detail__["a" /* CompanyDetailPage */], { comp_id: comp_id, analyse_id: analyse_id }, { animate: false });
    };
    ProcessStatusPage.prototype.companyClient = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__process_statmodal_process_statmodal__["a" /* ProcessStatmodalPage */]);
        modal.present({ animate: false });
        modal.onDidDismiss(function (res) {
            if (res.client == 1) {
                // 견적요청상태 tbl_analyse 의 quote_status을 1(완료)로
                var modal_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__loading_loading__["a" /* LoadingPage */], { txt: "의뢰중입니다..." });
                modal_1.present({ animate: false });
                var sendData = [];
                sendData["field"] = 'cont_comp_id';
                sendData["value"] = _this.contCompTmpId;
                sendData["analyse_id"] = _this.analyse_id;
                _this.http.postHttpData("/updateAnalyseData", sendData, function (result) {
                    modal_1.dismiss({}, "", { animate: false });
                    if (result) {
                        _this.contCompId = _this.contCompTmpId; // radio에서 선택된 comp_id
                        // 계약된 회사정보(계약&평가 정보얻기)
                        var sendData2 = [];
                        sendData2["comp_id"] = _this.contCompId;
                        sendData2["analyse_id"] = _this.analyse_id;
                        _this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
                            if (result) {
                                console.log(result);
                                _this.contData = { "company_name": _this.uintToString(result.company_name.data), "comp_id": result.comp_id, "final_price": result.final_price, "rate": result.rate, "analyse_id": result.analyse_id };
                                console.log(_this.contData);
                            }
                            else {
                                _this.contCompId = 0;
                            }
                        });
                    }
                    else {
                        _this.contCompId = 0;
                    }
                });
            }
        });
    };
    ProcessStatusPage.prototype.radioClicked = function (comp_id, index) {
        console.log("radioclicked");
        console.log(index);
        this.selectedIndex = index;
        console.log(comp_id);
        console.log(this.contCompId);
        console.log(this.radio);
        if (this.contCompId == 0) {
            this.contCompTmpId = comp_id;
            this.radio = true;
        }
    };
    ProcessStatusPage.prototype.processStatus = function () {
        this.tab = "tab2";
    };
    ProcessStatusPage.prototype.convRate = function (rate) {
        if (rate) {
            if (rate > 4)
                return rate.toFixed(1);
            else {
                return '4.0';
            }
        }
        else {
            return '4.0';
        }
    };
    ProcessStatusPage.prototype.isCliented = function () {
        if (this.contCompId > 0)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.isRadio = function () {
        if (this.radio == true)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.hasCompany = function () {
        if (this.comData)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.isSeledComp = function (comp_id) {
        if (this.contCompId > 0 && this.contCompId == comp_id)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.hasSeledComp = function () {
        if (this.contCompId > 0)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.hasComment = function () {
        if (this.comment && this.rating > 0 && this.hasCom == 0) {
            return true;
        }
        else
            return false;
    };
    ProcessStatusPage.prototype.setRating = function (id) {
        this.rating = id + 1;
        var star = 'assets/imgs/star.png';
        var stared = 'assets/imgs/star2.png';
        for (var i = 0; i < 5; i++) {
            if (i <= id) {
                this.imgUrl[i] = stared;
            }
            else
                this.imgUrl[i] = star;
        }
    };
    ///////////// contract 계약&평가 /////////////
    ProcessStatusPage.prototype.agreeContract = function () {
        if (this.termFlag == true)
            this.termFlag = false;
        else
            this.termFlag = true;
    };
    ProcessStatusPage.prototype.isTerm = function () {
        if (this.termFlag == true)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.setContract = function () {
        var _this = this;
        this.contCompDate = this.getNow();
        // 계약된 회사정보(계약&평가 정보얻기)
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        sendData["comp_id"] = this.contCompId;
        sendData["installDay"] = this.installDay; // 설치날자
        // sendData["contCompDate"] = this.contCompDate;   // 계약날자
        this.http.postHttpData("/updateContData", sendData, function (result) {
            if (result) {
                _this.contractFlag = true; // 계약된것으로 절환
            }
            else {
                _this.contCompId = 0;
            }
        });
    };
    ProcessStatusPage.prototype.isContract = function () {
        if (this.contractFlag == true)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.isPay = function () {
        if (this.pay == 1)
            return true;
        else
            return false;
    };
    ProcessStatusPage.prototype.viewImg = function (img_url) {
        var title = "";
        var options = {
            share: false,
            closeButton: true,
            copyToReference: false // default is false
        };
        this.photoViewer.show(img_url, title, options);
    };
    ProcessStatusPage.prototype.ecros = function () {
        this.appbrowser.create(this.escro_url, this.target, this.inAppoptions_Android);
    };
    // common functions
    ProcessStatusPage.prototype.calendar = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__calendarmodal_calendarmodal__["a" /* CalendarmodalPage */], { reserve_date: '' });
        modal.present({ animate: false });
        modal.onDidDismiss(function (data) {
            if (data.date != "") {
                _this.installDay = data.date;
            }
        });
    };
    ProcessStatusPage.prototype.correctDate = function (year, month, day) {
        var t_month = parseInt(month) < 10 ? '0' + month : month;
        var t_day = parseInt(day) < 10 ? '0' + day : day;
        return year + '.' + t_month + '.' + t_day;
    };
    ProcessStatusPage.prototype.getToday = function () {
        var now_date = new Date();
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var today = new Date(this.correctDate(year, month, day));
        return today;
    };
    ProcessStatusPage.prototype.getStrDate = function (str_date) {
        var now_date = null;
        if (!str_date) {
            now_date = new Date();
        }
        else {
            now_date = new Date(str_date);
        }
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var hour = now_date.getHours();
        var minute = now_date.getMinutes();
        var second = now_date.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    };
    ProcessStatusPage.prototype.formatNow = function (year, month, day, hour, min) {
        var t_month = parseInt(month) < 10 ? '0' + month : month;
        var t_day = parseInt(day) < 10 ? '0' + day : day;
        return year + '-' + t_month + '-' + t_day + ' ' + hour + ':' + min;
    };
    ProcessStatusPage.prototype.getNow = function () {
        var now_date = new Date();
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var minutes = now_date.getMinutes();
        var hour = now_date.getHours();
        var today = this.formatNow(year, month, day, hour, minutes);
        return today;
    };
    ProcessStatusPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    ProcessStatusPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    ProcessStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-process-status',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/process-status/process-status.html"*/'\n<ion-header>\n    <div class="top_bar">\n      <span class="title">진행현황</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  <ion-segment [(ngModel)]="tab">\n    <ion-segment-button value="tab1">\n      업체선청\n    </ion-segment-button>\n    <ion-segment-button value="tab2">\n      계약 및 평가\n    </ion-segment-button>\n  </ion-segment>\n  \n  <ion-content>\n    <div [ngSwitch]="tab">\n      <ion-list class="company" *ngSwitchCase="\'tab1\'">\n        <div *ngIf="hasCompany()">\n          <h3 class="title">참여업체</h3>\n          \n          <ion-list>\n            <ion-item [ngClass]="idx==selectedIndex ? \'selected\':\'noselected\'"  *ngFor="let item of comData ; let idx = index">\n              <img class="lo" *ngIf="idx==0" src="assets/imgs/first.png"/>\n              <img class="lo" *ngIf="idx==1" src="assets/imgs/second.png"/>\n              <img class="lo" *ngIf="idx==2" src="assets/imgs/third.png"/>\n              <ion-thumbnail item-start *ngIf="hasSeledComp()">\n                <input type="radio" name="radio" disabled *ngIf="!isSeledComp(item.comp_id)" class="mr20">\n                <input type="radio" name="radio" disabled *ngIf="isSeledComp(item.comp_id)" checked class="mr20"> {{idx+1}}\n              </ion-thumbnail>\n              <ion-thumbnail item-start *ngIf="!hasSeledComp()">\n                <input type="radio" name="radio" class="mr20" *ngIf="idx==0" checked (click)="radioClicked( item.comp_id,idx )"> <span *ngIf="idx==0">{{idx+1}}</span> \n                <input type="radio" name="radio" class="mr20" *ngIf="idx!=0"  (click)="radioClicked( item.comp_id,idx )"> <span *ngIf="idx!=0">{{idx+1}}</span> \n                <!-- <input type="radio" name="radio" class="mr20" *ngIf="idx!=0"  (click)="radioClicked( item.comp_id,idx )"> {{idx+1}}aaaa -->\n              </ion-thumbnail>\n              <h2>{{item.company_name.substring(0, 2)}}***</h2>\n              <h3 style="font-size:2rem;">{{numFormat(item.final_price)}}원</h3>\n              <p><img src="assets/imgs/star2.png" width="10"> {{ convRate(item.rate) }}</p>\n              <button style="    width: 7rem !important;" ion-button color="light" item-end (click)="detailCompany( item.comp_id, item.analyse_id )">상세정보</button>\n            </ion-item>\n            \n          </ion-list>\n          \n          <div class="btn-cont" *ngIf="!isCliented()">\n            <button ion-button color="light" disabled class="boxBtn analyseClient" *ngIf="!isRadio()" ><img style="width: 12px;\n              height: 12px;" class="mark" src="assets/imgs/folder.png">업체 진행 의뢰하기</button>\n            <button style="color:white; background-color:#e15a00;" ion-button color="light" (click)="companyClient()" class="boxBtn analyseClient" *ngIf="isRadio()" >업체 진행 의뢰하기</button>\n          </div>\n          <div class="btn-cont client" *ngIf="isCliented()">\n            <h3>의뢰가 완료되었습니다.</h3>\n            <button ion-button color="light" (click)="processStatus()" class="boxBtn analyseClient">진행 현황 보기</button>\n          </div>\n        </div>\n        <div *ngIf="!hasCompany()" class="no-company">\n          <div class="text-center">\n            <div class="complain">\n              의뢰해주셔서 감사합니다. <br>\n              선택하신 업체와 진행을 위해서<br> \n              담당자가 빠른 연락을 할 것입니다.\n            </div>\n            <div class="content">\n              <h3 class="">*진행 순서 안내</h3>\n              <p>1. 담당자가 유선상으로 진행 사항에 <br>대해서 설명을 드립니다.</p>\n              <p>2. 선택하신 업체와의 진행과정에 <br>대해서 컨설팅을 해드립니다.</p>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n      \n      <ion-list class="contract" *ngSwitchCase="\'tab2\'">\n        <div *ngIf="isCliented()">\n          <div class="wrap wrap_1">\n            <h3 class="title">계약 정보</h3>\n            \n            <div class="list">\n              <label>업체</label>\n              <div class="content">{{ contData.company_name }}</div>\n            </div>\n            <div class="list cont" *ngIf="!isContract()">\n              <label>계약서</label>\n              <div class="content"><button ion-button class="viewContract" (click)="viewContract()">계약서 보기</button></div>\n            </div>\n            <div class="list" >\n              <label>설치희망일</label>\n              <div class="content">\n                <p (click)="calendar()">{{contData.ins_hope_time}} <img src="assets/imgs/calendar.png" width="15" /> </p>\n              </div>\n            </div>\n            <div class="list">\n              <label>설치예정일</label>\n              <div class="content">{{contData.ins_comp_time}}</div>\n            </div>\n            \n            <div class="list" *ngIf="isContract()">\n              <label>계약동의일</label>\n              <div class="content">{{contData.ins_comp_time}}</div>\n            </div>\n            <div class="list" *ngIf="isContract()">\n              <label>설치완료일</label>\n              <div class="content">{{contData.contract_time}}</div>\n            </div>\n\n  \n            <div class="list">\n              <label>계약금</label>\n              <div class="content">{{ numFormat(contData.cont_price) }}원</div>\n            </div>\n  \n            <div class="contract btn-cont" *ngIf="!isContract()">\n              <div class="text-center">\n                <ion-checkbox id="contract" (click)="agreeContract()"></ion-checkbox>\n                <ion-label for="contract">계약서 내용을 확인하였으며, 계약체결을 진행합니다.</ion-label> \n              </div>\n              <button ion-button color="light" disabled *ngIf="!isTerm()" class="boxBtn contract">계약하기</button>\n              <button ion-button color="light" (click)="setContract()" *ngIf="isTerm()" class="boxBtn contract">계약하기</button>\n            </div>\n            <div class="contract btn-cont" *ngIf="isContract()">\n              <p>{{ contCompDate }}</p>\n              <h6>계약이 완료되었습니다.</h6>\n              <button style="background-color:transparent !important;" ion-button class="viewContract mt20" (click)="viewContract()"><img style="    width: 14px;\n                height: 14px;\n                margin-right: 5px;" src="assets/imgs/pencil.png">계약서 보기</button>\n            </div>\n          </div>\n          \n          <div class="middle"></div>\n\n          <div *ngIf="contData.add_price_content!=undefined" class="wrap wrap_2">\n              <h3 class="title">추가 금액</h3>\n              \n              <div class="list">\n                <label>추가금액 안내</label>\n                <div class="content">{{contData.add_price_content}}</div>\n              </div>\n              <div class="list">\n                  <label>추가금액</label>\n                  <div class="content">{{contData.add_price}} </div>\n                </div>\n             \n           \n            </div>\n\n          <div class="wrap wrap_2">\n            <h3 class="title">결제 정보</h3>\n            \n            <div class="list">\n              <label>총 결제금액</label>\n              <div class="content" *ngIf="contData.add_price==\'0\'">{{ numFormat(contData.final_price ) }}원</div>\n              <div class="content" *ngIf="contData.add_price!=\'0\'">{{ numFormat(contData.final_price +contData.add_price) }}원 (추가금액 {{contData.add_price}})</div>\n            </div>\n            <div class="list">\n                <label>결제계좌정보</label>\n                <div class="content">농협 7991213113131(예금주:솔라미) </div>\n              </div>\n           \n            <div class="contract btn-cont" *ngIf="isPay()">\n              <p>{{ payDate }}</p>\n              <h6>결제가 완료되었습니다.</h6>\n              <button style="background: #e15a00 !important;\n              color: white !important;" ion-button class="viewContract mt20" (click)="viewContract2()">\n              <img style="    width: 14px;\n              height: 14px;\n              margin-right: 5px;" src="assets/imgs/checked.png">\n              {{confirmmessage}}</button>\n\n\n            </div>\n          </div>\n            <div class="bottom" *ngIf="!isPay()">\n              <div class="logo">\n                <img src="assets/imgs/nonghyop.png" (click)="ecros()"/>\n              </div>\n              <div style="\n              margin-top: 2%;" class="right-wrap">\n                <p> 고객님께서 입금하신 공사대금은 <strong>구매확정</strong> 전까지</p>\n                <p> 에스크로 계좌에서 안전하게 보호됩니다.</p>\n              </div>\n            </div>\n         \n          \n          <div class="middle" *ngIf="isPay()"></div>\n          <div class="wrap wrap_2" *ngIf="isPay()">\n            <h3 class="title b-none">평가하기</h3>\n            \n            <div class="contract btn-cont">\n              <ul class="rating mb10" *ngIf="!hasComment()">\n                <li (click)="setRating(0)"><img [src]="imgUrl[0]" ></li>\n                <li (click)="setRating(1)"><img [src]="imgUrl[1]" ></li>\n                <li (click)="setRating(2)"><img [src]="imgUrl[2]" ></li>\n                <li (click)="setRating(3)"><img [src]="imgUrl[3]" ></li>\n                <li (click)="setRating(4)"><img [src]="imgUrl[4]" ></li>\n              </ul>\n              <ul class="rating mb10" *ngIf="hasComment()">\n                <li><img [src]="imgUrl[0]" ></li>\n                <li><img [src]="imgUrl[1]" ></li>\n                <li><img [src]="imgUrl[2]" ></li>\n                <li><img [src]="imgUrl[3]" ></li>\n                <li><img [src]="imgUrl[4]" ></li>\n              </ul>\n              <textarea class="textarea" *ngIf="!hasComment()" placeholder="후기를 남겨주세요(500자 이내)" [(ngModel)]="comment"></textarea>\n              <textarea class="textarea" *ngIf="hasComment()" disabled [(ngModel)]="comment"></textarea>\n              <button sytle="background-color:#e97e00 !important;" ion-button disabled *ngIf="hasComment()" class="mt20 width100">평가 완료</button>\n              <button sytle="background-color:#e97e00 !important;" ion-button *ngIf="!hasComment()" (click)="setComment()" class="mt20 width100">{{evalval}}</button>\n            </div>\n          </div>\n        </div>\n      \n        <div *ngIf="!isCliented()" class="no-company">\n          <div class="text-center">\n            <div class="complain">\n              의뢰해주셔서 감사합니다. <br>\n              선택하신 업체와 진행을 위해서<br> \n              담당자가 빠른 연락을 할 것입니다.\n            </div>\n            <div class="content">\n              <h3 class="">*진행 순서 안내</h3>\n              <p>1. 담당자가 유선상으로 진행 사항에 <br>대해서 설명을 드립니다.</p>\n              <p>2. 선택하신 업체와의 진행과정에 <br>대해서 컨설팅을 해드립니다.</p>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/process-status/process-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_12__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ProcessStatusPage);
    return ProcessStatusPage;
}());

//# sourceMappingURL=process-status.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var CompanyDetailPage = /** @class */ (function () {
    function CompanyDetailPage(navCtrl, navParams, modalCtrl, common, http, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.http = http;
        this.photoViewer = photoViewer;
        this.comp_id = 0;
        this.analyse_id = 0;
        this.elect_licence = ''; // 전기면허증
        this.comp_id = navParams.get('comp_id');
        this.analyse_id = navParams.get('analyse_id');
    }
    CompanyDetailPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_4_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    CompanyDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // 회사상세정보
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["comp_id"] = this.comp_id;
        sendData["analyse_id"] = this.analyse_id;
        console.log(this.comp_id);
        console.log(this.analyse_id);
        this.http.postHttpData("/getCompanyDetail", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log(result);
            if (result) {
                // for(var i=0; i<result.length; i++){
                _this.elect_licence = result.elect_num;
                if (result.area == null) {
                    _this.comData = { "complete_cnt": result.complete_cnt, "as_guide": _this.uintToString(result.as_guide.data),
                        "id": result.id, "elec_licence": result.elec_licence, "inv_flag": result.inv_flag, "inv_gflag": result.inv_gflag, "module_flag": result.module_flag,
                        "module_gflag": result.module_gflag, "quality_flag": result.quality_flag, "inv_guarent": _this.uintToString(result.inv_guarent.data),
                        "module_guarent": _this.uintToString(result.module_guarent.data), "quality": _this.uintToString(result.quality.data),
                        "inv_name": _this.uintToString(result.inv_name.data), "module_name": _this.uintToString(result.module_name.data),
                        "address": _this.uintToString(result.address.data), "company_name": _this.uintToString(result.company_name.data),
                        "comp_id": result.comp_id, "final_price": result.final_price, "rate": result.rate, "analyse_id": result.analyse_id };
                }
                else {
                    _this.comData = { "complete_cnt": result.complete_cnt, "area": _this.uintToString(result.area.data), "as_guide": _this.uintToString(result.as_guide.data),
                        "id": result.id, "elec_licence": result.elec_licence, "inv_flag": result.inv_flag, "inv_gflag": result.inv_gflag, "module_flag": result.module_flag,
                        "module_gflag": result.module_gflag, "quality_flag": result.quality_flag, "inv_guarent": _this.uintToString(result.inv_guarent.data),
                        "module_guarent": _this.uintToString(result.module_guarent.data), "quality": _this.uintToString(result.quality.data),
                        "inv_name": _this.uintToString(result.inv_name.data), "module_name": _this.uintToString(result.module_name.data),
                        "address": _this.uintToString(result.address.data), "company_name": _this.uintToString(result.company_name.data),
                        "comp_id": result.comp_id, "final_price": result.final_price, "rate": result.rate, "analyse_id": result.analyse_id };
                }
                // }
                console.log("comdata");
                console.log(_this.comData);
            }
        });
        // 견적관리정보
        var sendData1 = [];
        this.http.postHttpData("/getContractInfoData", sendData1, function (result) {
            if (result) {
                console.log(result);
                _this.contInfoData = { "id": result.id, "elec_licence": result.elec_licence, "inv_flag": result.inv_flag, "inv_gflag": result.inv_gflag, "module_flag": result.module_flag, "module_gflag": result.module_gflag, "quality_flag": result.quality_flag, "inv_guarent": _this.uintToString(result.inv_guarent.data), "inv_name": _this.uintToString(result.inv_name.data),
                    "module_guarent": _this.uintToString(result.module_guarent.data), "module_name": _this.uintToString(result.module_name.data),
                    "quality": _this.uintToString(result.quality.data) };
                console.log(_this.contInfoData);
            }
        });
    };
    CompanyDetailPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CompanyDetailPage.prototype.electLicence = function () {
        if (this.contInfoData) {
            if (this.elect_licence && this.contInfoData.elec_licence == 1)
                return true;
            else
                return false;
        }
        else
            return false;
    };
    CompanyDetailPage.prototype.hasComData = function () {
        if (this.comData)
            return true;
        else
            return false;
    };
    // common
    CompanyDetailPage.prototype.getContInfo = function (type, value) {
        if (!this.contInfoData)
            return '';
        var arrStr = '';
        if (type == 'module_name') {
            arrStr = this.contInfoData.module_name.split(",");
            return arrStr[value];
        }
        else if (type == 'inv_name') {
            arrStr = this.contInfoData.inv_name.split(",");
            return arrStr[value];
        }
        else if (type == 'quality') {
            arrStr = this.contInfoData.quality.split(",");
            return arrStr[value];
        }
        else if (type == 'module_guarent') {
            arrStr = this.contInfoData.module_guarent.split(",");
            return arrStr[value];
        }
        else if (type == 'inv_guarent') {
            arrStr = this.contInfoData.inv_guarent.split(",");
            return arrStr[value];
        }
    };
    CompanyDetailPage.prototype.hasContInfo = function (type) {
        if (!this.contInfoData)
            return false;
        if (type == 'module_name' && this.contInfoData.module_flag == 1) {
            return true;
        }
        else if (type == 'inv_name' && this.contInfoData.inv_flag == 1) {
            return true;
        }
        else if (type == 'quality' && this.contInfoData.quality_flag == 1) {
            return true;
        }
        else if (type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
            return true;
        }
        else if (type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
            return true;
        }
        return false;
    };
    CompanyDetailPage.prototype.viewImg = function (img_url) {
        var title = "";
        var options = {
            share: false,
            closeButton: true,
            copyToReference: false // default is false
        };
        img_url = __WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* CONFIG */].IMG_URL + img_url;
        this.photoViewer.show(img_url, title, options);
    };
    CompanyDetailPage.prototype.convRate = function (rate) {
        if (rate) {
            if (rate > 4)
                return rate.toFixed(1);
            else {
                return '4.0';
            }
        }
        else {
            return '4.0';
        }
    };
    CompanyDetailPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    CompanyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-detail',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/company-detail/company-detail.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">상세정보</span>\n    <img src="assets/imgs/close.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="hasComData()">\n    <div class="top-wrap">\n      <img src="assets/imgs/processing_banner.png" class="bg">\n      <h3 class="name">{{ comData.company_name.substring(0, 2) }}***</h3>\n      <p><img src="assets/imgs/area_mark.png" width="15" /> {{ comData.area }} </p>\n      <h4><img src="assets/imgs/star2.png" width="15" /> {{ convRate(comData.rate) }} </h4>\n      <p><img src="assets/imgs/area_mark.png" width="15" /> {{ comData.complete_cnt }} 건 완료 </p>\n    </div>\n    \n    <div class="wrap">\n      <div class="list" style="height: 53px;">\n        <label style="margin-top:9px;">예상 가격</label>\n        <div class="content">\n          {{ numFormat(comData.final_price) }}원\n          <p>세금계산서 또는 현금영수증 발급 가능합니다.</p>\n        </div>\n      </div>\n      <div class="list">\n        <label>예상 설치용량</label>\n        <div class="content">{{ numFormat(comData.solar_power) }}kw</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'module_name\')">\n        <label>모듈 제품명</label>\n        <div class="content">{{ contInfoData.module_name }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'inv_name\')">\n        <label>인버터 제품명</label>\n        <div class="content">{{ contInfoData.inv_name }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'quality\')">\n        <label>설치할 구조물 품질</label>\n        <div class="content">{{ contInfoData.quality }}</div>\n      </div>\n      <div class="list" *ngIf="electLicence()">\n        <label>전기면허증</label>\n        <div class="content"><button ion-button color="light" (click)="viewImg(elect_licence)">보기</button></div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'module_guarent\')">\n        <label>모듈보증</label>\n        <div class="content">{{ contInfoData.module_guarent }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'inv_guarent\')">\n        <label>인버터보증</label>\n        <div class="content">{{ contInfoData.inv_guarent }}</div>\n      </div>\n      <div class="list">\n        <label>설치 후 A/S조건</label>\n        <div class="content">{{ comData.as_guide }}</div>\n      </div>\n      <div class="list mb10">\n        <label>결제종류</label>\n        <div class="content">현금(에스크로 계좌)</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="no-data mt30" *ngIf="!hasComData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/company-detail/company-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], CompanyDetailPage);
    return CompanyDetailPage;
}());

//# sourceMappingURL=company-detail.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessStatmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessStatmodalPage = /** @class */ (function () {
    function ProcessStatmodalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    ProcessStatmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessStatmodalPage');
    };
    ProcessStatmodalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({}, "", { animate: false });
    };
    ProcessStatmodalPage.prototype.confirm = function () {
        this.viewCtrl.dismiss({ client: 1 }, "", { animate: false });
    };
    ProcessStatmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-process-statmodal',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/process-statmodal/process-statmodal.html"*/'\n<div class="modal_wrapper"></div>\n<div class="main-wrap">\n  <div class="modal_content alert-md">\n    <div class="wrapper">\n      <div class="alert-head">\n        <div class="content">\n          의뢰해주셔서 감사합니다. <br/>\n          선택하신 업체와 진행을 위해서<br/> \n          담당자가 빠른 연락을 할 것입니다.\n        </div>\n        \n        <h3 class="mt20">*진행 순서 안내</h3>\n        <p>1.담당자가 유선상으로 진행 사항에 <br/>대해서 설명을 드립니다.</p>\n        <p>2.선택하신 업체와의 진행과정에 <br/>대해서 컨설팅을 해드립니다.</p>\n      </div>\n    </div>\n    \n    <div class="alert-button-group">\n      <button ion-button class="alert-button alert-button-md cancel alert-button-default alert-button-default-md" (click)="cancel()">\n        취소\n      </button>\n      <button ion-button class="disable-hover alert-button alert-button-md confirm alert-button-default alert-button-default-md" (click)="confirm()">\n        확인\n      </button>\n    </div>\n  </div>\n\n</div>'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/process-statmodal/process-statmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProcessStatmodalPage);
    return ProcessStatmodalPage;
}());

//# sourceMappingURL=process-statmodal.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GovernmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GovernmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GovernmentPage = /** @class */ (function () {
    function GovernmentPage(http, appmgr, navCtrl, navParams) {
        this.http = http;
        this.appmgr = appmgr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = this.appmgr.getUserInfo();
        console.log(this.userInfo);
    }
    GovernmentPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    GovernmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GovernmentPage');
    };
    GovernmentPage.prototype.consulting = function () {
        var _this = this;
        //  if(this.email!=null && this.name!=null && this.name!=null) {
        var sendData = [];
        sendData["email"] = this.email;
        sendData["name"] = this.name;
        sendData["contact"] = this.tel;
        sendData["division"] = "태양광정부지원";
        console.log(sendData);
        this.http.postHttpData("/requestGovernmentInquiry", sendData, function (result) {
            console.log(result);
            if (result == "ok") {
                window.alert("상담이 요청되었습니다");
                _this.email = null;
                _this.tel = null;
                _this.name = null;
            }
        });
    };
    GovernmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-government',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/government/government.html"*/'<ion-header>\n    <div class="top_bar">\n        <span class="title">상담요청</span>\n        <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="banner">\n    </div>\n    \n    \n    <div style="" class="wrap cont_2">\n      \n      <h3   style="color: #e15a00; \n      padding-left: 10px;" class="mt10">가정용 태양광 정부주택지원사업</h3><br>\n      <p class="mt1">태양광 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">태양광 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">태양광 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n     \n    </div>\n    <div class="form mt30">\n        <div class="alert-md">\n          <label>이메일</label>\n          <input type="text" class="alert-input" [(ngModel)]="email" />\n        </div>\n        <div class="alert-md">\n          <label>성함</label>\n          <input type="text" class="alert-input" maxlength="10" [(ngModel)]="name" />\n        </div>\n        <div class="alert-md">\n            <label>연락처</label>\n            <input type="text" class="alert-input" maxlength="15" [(ngModel)]="tel" />\n          </div>\n      </div>\n    <button style="   \n    background: #e15a00;\n    color: white;\n    width: 75%;\n    border-radius: 10px;\n    margin: auto;\n    top: 20px;\n    display: -webkit-box;"\n     ion-button color="light"  (click)="consulting()">상담 요청하기</button>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/government/government.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GovernmentPage);
    return GovernmentPage;
}());

//# sourceMappingURL=government.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitgeneratorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GovernmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BenefitgeneratorPage = /** @class */ (function () {
    function BenefitgeneratorPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BenefitgeneratorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GovernmentPage');
    };
    BenefitgeneratorPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    BenefitgeneratorPage.prototype.consulting = function () {
        var _this = this;
        var sendData = [];
        sendData["email"] = this.email;
        sendData["name"] = this.name;
        sendData["contact"] = this.tel;
        sendData["division"] = "수익형 발전소";
        console.log(sendData);
        this.http.postHttpData("/requestGovernmentInquiry", sendData, function (result) {
            console.log(result);
            if (result == "ok") {
                window.alert("상담이 요청되었습니다");
                _this.email = null;
                _this.tel = null;
                _this.name = null;
            }
        });
    };
    BenefitgeneratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-benefitgenerator',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/benefitgenerator/benefitgenerator.html"*/'<ion-header>\n    <div class="top_bar">\n        <span class="title">상담요청</span>\n        <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="banner">\n    </div>\n    \n    \n    <div style="" class="wrap cont_2">\n      \n      <h3   style="color: #e15a00; \n      padding-left: 10px;" class="mt10">수익형 발전소(RPS)</h3><br>\n      \n      <p class="mt1">수익형 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">수익형 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">수익형 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">수익형 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n      <p class="mt1">수익형 정부지원사업 설명 태양광태양광 정부지원사업 설명 태양광</p>\n     \n    </div>\n    <div class="form mt30">\n        <div class="alert-md">\n          <label>이메일</label>\n          <input type="text" class="alert-input" [(ngModel)]="email"/>\n        </div>\n        <div class="alert-md">\n          <label>성함</label>\n          <input type="text" class="alert-input" maxlength="10" [(ngModel)]="name"/>\n        </div>\n        <div class="alert-md">\n            <label>연락처</label>\n            <input type="text" class="alert-input" maxlength="15" [(ngModel)]="tel"/>\n          </div>\n      </div>\n    <button style="   \n    background: #e15a00;\n    color: white;\n    width: 75%;\n    border-radius: 10px;\n    margin: auto;\n    top: 20px;\n    display: -webkit-box;"\n     ion-button color="light"  (click)="consulting()">상담 요청하기</button>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/benefitgenerator/benefitgenerator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BenefitgeneratorPage);
    return BenefitgeneratorPage;
}());

//# sourceMappingURL=benefitgenerator.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceIntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var ServiceIntroPage = /** @class */ (function () {
    function ServiceIntroPage(sanitizer, navCtrl, navParams, splashScreen, platform, appmgr, event) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.appmgr = appmgr;
        this.event = event;
        this.redirect = false;
        this.reRead = 1;
        this.tab = "tab1";
        this.array = [];
        this.newarray = [];
        // this.redirect = navParams.get('redirect');
        this.redirect = navParams.get("redirect");
        this.array = navParams.get("array");
        console.log(this.array);
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].rank_flag == 1) {
                this.newarray.push({ "url": this.sanitizer.bypassSecurityTrustResourceUrl(this.array[i].url) });
            }
            // this.array[i].url=this.sanitizer.bypassSecurityTrustResourceUrl(this.array[i].url);	
        }
        console.log(this.array);
    }
    ServiceIntroPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    ServiceIntroPage.prototype.ionViewWillEnter = function () {
        // let userInfo = this.appmgr.getUserInfo();
        // this.reRead = userInfo.service_intro;
        // if( this.reRead == 0 ) {
        //   this.navCtrl.setRoot(HomePage, {},{animate:false} );
        //   return;
        // }
        console.log(this.array);
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.splashScreen.hide();
        }
    };
    ServiceIntroPage.prototype.notShowAgain = function () {
        var userData = {
            service_intro: 0
        };
        this.appmgr.setUserInfoIndivial(userData);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.closeWindow = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.isLogin = function () {
        if (this.redirect == true)
            return true;
        else
            return false;
    };
    ServiceIntroPage.prototype.anal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.isReRead = function () {
        if (this.reRead == 1)
            return true;
        else
            return false;
    };
    ServiceIntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-intro',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/service-intro/service-intro.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">서비스 안내</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-segment [(ngModel)]="tab">\n  <ion-segment-button value="tab1">\n  솔라미 시스템\n  </ion-segment-button>\n  <ion-segment-button value="tab2">\n   홍보 동영상\n  </ion-segment-button>\n  <ion-segment-button value="tab3">\n  제공되는 정보\n  </ion-segment-button>\n  \n</ion-segment>\n<!-- 솔라미 시스템 -->\n<ion-content>\n  <div [ngSwitch]="tab">\n      <ion-list *ngSwitchCase="\'tab1\'">\n        <div  class="title">\n            Solamy 플랫폼 시스템\n        </div>\n         \n        <div class="subtitle">\n            당신을 위한 맞춤형 태양관\n        </div>\n       \n\n          <div class="ttt">\n            Solamy는 지붕 위에 올라가지 않고도 컴퓨터와 모바일을 통해서\n            작업을 수행합니다. 주거용 태양광 시스템을 설계하고, 인증된\n            제품 반영하여 정확한 견적을 제공합니다. \n  \n            솔라미 플랫폼 가이드\n            주거용 태양광에 대해서 분석 의뢰하시면 24시간내에 자료를\n            받아 보실 수 있습니다. \n          </div>\n          \n\n\n          <p class="tt"> 1. 분석결과</p>\n         \n          <div class="ttt">\n            태양광 설치의 미리보기의 효과에 대한 분석자료를 제공합니다.\n          </div>\n         \n\n          <img class="img" src="assets/imgs/guide01.png"/>\n\n          <p class="tt">   2. 업체선정</p>\n        \n\n          <div class="ttt">\n            솔라미 플랫폼은 현재 오프라인에서 주거용 태양광 설치시 발생하는 \n            영업수당, 품질이 낮은 저렴한 제품 사용, 불투명한 소비자 가격 등의 \n            문제점을 제거합니다.  <br>\n            인증된 태양광 설치 제품을 반영하여,  최고의 전문가로 구성된 지역\n            태양광 업체들로부터 받은 견적을 분석하여 가장 좋은 조건의 업체를 \n            추천해드립니다. \n          </div>\n          \n          <img class="img" src="assets/imgs/guide02.png"/>\n\n        </ion-list>\n   \n    <!-- 홍보 동영상-->\n    <ion-list style="text-align: center;" *ngSwitchCase="\'tab2\'">\n        <div  *ngFor="let a of newarray ; let idx = index">\n                    <iframe width="90%" height="280"\n                    [src]="a.url">\n                    </iframe>\n    \n                  </div>\n    </ion-list>\n    <!-- 제공되는 정보 -->\n    <ion-list class="contract" *ngSwitchCase="\'tab3\'">\n      <div class="table">\n          <img src ="assets/imgs/1.png"/> <span>비교견적</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/2.png"/><span>당신의 주택/건물에 설치 예상 이미지</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/3.png"/><span>당신의 주소지의 월간 예상 발전량</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/4.png"/><span>최적의 설치 각도 및 방향</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/5.png"/><span>전기료 감면 효과</span>\n      </div>\n      <button  style="   \n     background: #262626;\n    margin-top: 1em;\n    border-radius: 10px;\n    color: white;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: -webkit-box;" ion-button color="light" class="login" (click)="anal()"><img style="width: 12px;\nheight: 12px;" class="mark" src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n\n<div class="auth-cont" *ngIf="!isLogin()">\n    <button  style="   \n    text-align: center;\n    background: #e15a00;\n    width: 40%;\nborder-radius:  10px 0 0px 10px;\nmargin-left: -0.5em;\n-webkit-box-shadow: none !important;\ncolor: white;\n    " ion-button color="light" class="login" (click)="login()">\n   <img style="width: 14px;\nheight: 14px; margin-right:5px;" class="mark" src="assets/imgs/lock-open.png">\n로그인</button>\n    <button  style="\n    color: black;\n    text-align: center;\n    background: #e97e00;\n    width: 40%;\nborder-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n-webkit-box-shadow: none !important;\ncolor: white;\n\n    " ion-button color="light" class="register" (click)="registerPage()"><img style="width: 14px;\nheight: 14px; margin-right:5px;" class="mark" src="assets/imgs/following.png">회원가입</button>\n</div>\n    </ion-list>\n    <!-- 설치완료 -->\n   \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/service-intro/service-intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ServiceIntroPage);
    return ServiceIntroPage;
}());

//# sourceMappingURL=service-intro.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_naver_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__term_term__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// pages



// common 



var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, alertCtrl, 
        // common
        appmgr, common, http, naver, kakaoCordovaSDK) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.naver = naver;
        this.kakaoCordovaSDK = kakaoCordovaSDK;
        this.user_id = 0;
        this.login_type = '';
        this.login_flag = false;
        this.push_flag = true;
    }
    SettingPage.prototype.ionViewWillEnter = function () {
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.login_type = userInfo.login_type;
        this.push_flag = this.intToBool(userInfo.push_flag);
        if (userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
    };
    SettingPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    SettingPage.prototype.resetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__["a" /* ResetPasswordPage */], {}, { animate: false });
    };
    SettingPage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__term_term__["a" /* TermPage */], { type: "term" }, { animate: false });
    };
    SettingPage.prototype.personal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__term_term__["a" /* TermPage */], { type: "personal" }, { animate: false });
    };
    SettingPage.prototype.logout = function () {
        var userData = {
            user_id: 0,
            name: "",
            email: "",
            login_type: '',
            mem_type: 0,
            login_flag: 0,
            // 
            push_flag: 1,
            status: 1,
            address: '',
            contact: '',
            month_fee: 0
        };
        this.appmgr.setUserInfoAll(userData);
        if (this.login_type == 'naver') {
            this.naver.logout();
        }
        else if (this.login_type == 'kakao') {
            this.kakaoCordovaSDK.logout();
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    SettingPage.prototype.pushChange = function () {
        var _this = this;
        var sendData = [];
        sendData["field"] = 'push_flag';
        sendData["value"] = this.boolToInt(this.push_flag);
        sendData["user_id"] = this.user_id;
        this.http.postHttpData("/updatePushFlag", sendData, function (result) {
            if (result) {
                var userData = {
                    push_flag: _this.push_flag
                };
                _this.appmgr.setUserInfoIndivial(userData);
            }
        });
    };
    SettingPage.prototype.memberExit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: '회원탈퇴하시면 회원정보 및 서비스 <br/>이용기록은 모두 삭제되며, <br/>삭제된 데이터는 복구되지 않습니다.',
            buttons: [
                {
                    text: '취소',
                    cssClass: 'cancel',
                    handler: function (data) {
                        // console.log("Cancel...", id);
                    }
                },
                {
                    text: '확인',
                    cssClass: 'confirm',
                    handler: function (data) {
                        var sendData = [];
                        sendData["user_id"] = _this.user_id;
                        _this.http.postHttpData("/deleteUser", sendData, function (result) {
                            if (result) {
                                _this.logout();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { login_status: false }, { animate: false });
                            }
                        });
                    }
                }
            ]
        });
        alert.present({ animate: false });
    };
    SettingPage.prototype.boolToInt = function (value) {
        if (value) {
            return 1;
        }
        else {
            return 0;
        }
    };
    SettingPage.prototype.intToBool = function (value) {
        if (value) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingPage.prototype.isEmail = function () {
        if (this.login_type == 'email') {
            return true;
        }
        else
            return false;
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/setting/setting.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">설정</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item (click)="resetPass()" *ngIf="isEmail()">\n    <ion-label>비밀번호 변경</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>푸시알림 설정</ion-label>\n    <ion-toggle color="energized" (ionChange)="pushChange()" [(ngModel)]="push_flag"></ion-toggle>\n  </ion-item>\n\n  <ion-item (click)="term()">\n    <ion-label>이용약관</ion-label>\n  </ion-item>\n  \n  <ion-item (click)="personal()">\n    <ion-label>개인정보취급방침</ion-label>\n  </ion-item>\n  \n  <ion-item (click)="logout()">\n    <ion-label>로그아웃</ion-label>\n  </ion-item>\n  \n  <ion-item (click)="memberExit()">\n    <ion-label>회원 탈퇴</ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2_naver_login__["a" /* NaverLogin */],
            __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["b" /* KakaoCordovaSDK */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 



var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, alertCtrl, 
        // common
        appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.email = '';
        this.password = '';
        this.repassword = '';
    }
    ResetPasswordPage.prototype.ionViewWillEnter = function () {
        var userInfo = this.appmgr.getUserInfo();
        this.email = userInfo.email;
    };
    ResetPasswordPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    ResetPasswordPage.prototype.reset = function () {
        var _this = this;
        if (!this.validate()) {
            return false;
        }
        var sendData = [];
        sendData["password"] = this.password;
        sendData["email"] = this.email;
        this.http.postHttpData("/updatePassword", sendData, function (result) {
            if (result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
            }
        });
    };
    ResetPasswordPage.prototype.validate = function () {
        var str = '';
        // password
        if (this.password == '') {
            str = '비밀번호를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.password != this.repassword) {
            str = '비밀번호가 일치하지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.password.length < 8) {
            str = '비밀번호 형식이 올바르지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        return true;
    };
    ResetPasswordPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/reset-password/reset-password.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비밀번호 변경</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>비밀번호</ion-label>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <ion-item class="mt10">\n        <ion-label floating>비밀번호 재입력</ion-label>\n        <ion-input [(ngModel)]="repassword" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item btn-cont mt50">\n      <a (click)="reset()" class="boxBtn save">저장</a>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__support_sample_support_sample__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var SupportInfoPage = /** @class */ (function () {
    function SupportInfoPage(navCtrl, navParams, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.user_id = 0;
        this.mem_type = 0;
        this.login_flag = false;
    }
    SupportInfoPage.prototype.ionViewWillEnter = function () {
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.mem_type = userInfo.mem_type;
        if (userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
    };
    SupportInfoPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    SupportInfoPage.prototype.sample = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__support_sample_support_sample__["a" /* SupportSamplePage */], {}, { animate: false });
    };
    SupportInfoPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    SupportInfoPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    SupportInfoPage.prototype.isLogin = function () {
        if (this.login_flag == true)
            return true;
        else
            return false;
    };
    SupportInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support-info',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/support-info/support-info.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">제공되는 정보</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <h3><img src="assets/imgs/support_info/info.png" width="20"> 제공되는 서비스</h3>\n\n  <ion-grid class="p0 ion-grid grid_1">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="price-comp">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/comp_price.png"></div>\n          <div class="text-cont"><h6>가격비교</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="expect-img">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/expect_img.png"></div>\n          <div class="text-cont"><h6>당신의 주택/건물에 <br/>설치 할 경우 예상 이미지</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_1">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="price-comp expect-pow">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/expect_power.png"></div>\n          <div class="text-cont"><h6>당신의 주소지의 <br/>월간 예상 발전량</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="expect-img sale_money">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/sale_money.png"></div>\n          <div class="text-cont"><h6>전기료 절감 누적금액</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_2">\n    <ion-row class="btn-cont">\n      <ion-col class="fee-elect">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/fee_sale.png"></div>\n          <div class="text-cont"><h6>전기료 감면 효과</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <div class="btn-wrap" *ngIf="!isLogin()">\n    <div class="sample-cont">\n      <button ion-button color="light" (click)="sample()" class="boxBtn sample">샘플 (예시)</button>\n    </div>\n    \n    <div class="login-cont">\n      <button ion-button color="light" class="login" (click)="login()">로그인</button>\n      <button ion-button color="light" class="register" (click)="registerPage()">회원가입</button>\n    </div>\n  </div>\n  \n  <div class="btn-wrap" *ngIf="isLogin()">\n    <div class="sample-cont mt40">\n      <button ion-button color="light" (click)="sample()" class="boxBtn sample">샘플 (예시)</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/support-info/support-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */]])
    ], SupportInfoPage);
    return SupportInfoPage;
}());

//# sourceMappingURL=support-info.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportSamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var SupportSamplePage = /** @class */ (function () {
    function SupportSamplePage(navCtrl, navParams, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.user_id = 0;
        this.mem_type = 0;
        this.login_flag = 1;
    }
    SupportSamplePage.prototype.ionViewWillEnter = function () {
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.mem_type = userInfo.mem_type;
        this.login_flag = userInfo.login_flag;
    };
    SupportSamplePage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    SupportSamplePage.prototype.analyseClient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
    };
    SupportSamplePage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    SupportSamplePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    SupportSamplePage.prototype.isLogin = function () {
        if (this.login_flag == 1)
            return true;
        else
            return false;
    };
    SupportSamplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support-sample',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/support-sample/support-sample.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">샘플(예시)</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="sample-wrap">\n    \n    <div class="top-wrap">\n      <img src="assets/imgs/analyse/analyze_banner.png">\n    </div>\n    <h3 class="address">\n      <img src="assets/imgs/analyse/area.png"> 경기 포천시 소흘읍\n    </h3>\n  \n    <div class="wrap">\n      <div class="title fee">\n        <img src="assets/imgs/analyse/fee-sale.png" width="15"> 전기료 감면효과\n      </div>\n      <div class="content gray">\n        우리집 월평균 전기요금 <span>100,000</span>\n      </div>\n      <div class="content yellow">\n        전기료 예상 절감액 <span>- 80,000</span>\n      </div>\n      <div class="content light-blue">\n        설치후 전기요금 <span>20,000</span>\n      </div>\n      <div class="description blue">\n        <p>20년간 누적 예상 전기요금 절감액</p>\n        <h3>3,085 <span>만원</span> </h3>\n      </div>\n    </div>\n    \n    <div class="wrap">\n      <div class="title module">\n        <img src="assets/imgs/analyse/module.png" width="20"> 태양광 최적 설치 정보\n      </div>\n      <div class="content gray">\n        태양광 최적 설치 용량 <span class="blue">3kw</span>\n      </div>\n      <div class="content gray">\n        최적각도 <span class="blue">33도</span>\n      </div>\n      <div class="content gray">\n        월간 예상 평균 발전량 <span class="blue">350kw</span>\n      </div>\n      <div class="content gray">\n        20년간 누적 예상 발전량 <span class="blue">48,350kw</span>\n      </div>\n    </div>\n  \n    <div class="wrap">\n      <div class="title module carborn">\n        <img src="assets/imgs/analyse/carborn-sale.png" width="20"> 탄소저감효과\n      </div>\n      <div class="description blue">\n        <p class="gray">30년생 소나무 심는 효과</p>\n        <h3 class="deep-green"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> 1,000 <span>그루</span> </h3>\n      </div>\n      <div class="description blue b-none">\n        <p class="gray">CO2 탄소 저감 효과</p>\n        <h3 class="blue"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> 700 <span>톤</span> </h3>\n      </div>\n    </div>\n\n  </div>\n  <!-- sample container -->\n  \n  <div class="btn-cont">\n    <button ion-button color="light" *ngIf="!isLogin()" (click)="login()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n    <button ion-button color="light" *ngIf="isLogin()" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n  </div>\n  \n  <div class="login-cont" *ngIf="!isLogin()">\n    <button ion-button color="light" class="login" (click)="login()">로그인</button>\n    <button ion-button color="light" class="register" (click)="registerPage()">회원가입</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/support-sample/support-sample.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */]])
    ], SupportSamplePage);
    return SupportSamplePage;
}());

//# sourceMappingURL=support-sample.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myquot_status_myquot_status__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_encoding__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 




var MyquotInputPage = /** @class */ (function () {
    function MyquotInputPage(navCtrl, navParams, alertCtrl, appmgr, common, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.quotFlag = false;
        // 
        this.analyse_id = 0;
        this.user_id = 0;
        this.email = '';
        // main data
        this.person = 1;
        this.insPrice = 0;
        this.module_name = '';
        this.inv_name = '';
        this.quality = '';
        this.module_guarent = '';
        this.inv_guarent = '';
        this.as_guide = '';
        this.final_price = 0;
        // select data
        this.modNameData = [];
        this.invNameData = [];
        this.qualityData = [];
        this.modGuaData = [];
        this.invGuaData = [];
        this.analyse_id = navParams.get('analyse_id');
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.email = userInfo.email;
        // 견적관리정보
        var sendData1 = [];
        this.http.postHttpData("/getContractInfoData", sendData1, function (result) {
            if (result) {
                console.log(result);
                _this.contInfoData = { "module_name": _this.uintToString(result.module_name.data), "inv_name": _this.uintToString(result.inv_name.data),
                    "quality": _this.uintToString(result.quality.data), "module_guarent": _this.uintToString(result.module_guarent.data),
                    "inv_guarent": _this.uintToString(result.inv_guarent.data), "module_flag": result.module_flag, "inv_flag": result.inv_flag, "inv_gflag": result.inv_gflag, "module_gflag": result.module_gflag, "quality_flag": result.quality_flag
                };
                console.log("contInfoData");
                console.log(_this.contInfoData);
                _this.modNameData = _this.contInfoData.module_name.split(",");
                _this.invNameData = _this.contInfoData.inv_name.split(",");
                _this.qualityData = _this.contInfoData.quality.split(",");
                _this.modGuaData = _this.contInfoData.module_guarent.split(",");
                _this.invGuaData = _this.contInfoData.inv_guarent.split(",");
            }
        });
    }
    MyquotInputPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_6_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    MyquotInputPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.email = userInfo.email;
        // 견적관리정보
        var sendData1 = [];
        this.http.postHttpData("/getContractInfoData", sendData1, function (result) {
            if (result) {
                console.log(result);
                _this.contInfoData = { "module_name": _this.uintToString(result.module_name.data), "inv_name": _this.uintToString(result.inv_name.data),
                    "quality": _this.uintToString(result.quality.data), "module_guarent": _this.uintToString(result.module_guarent.data),
                    "inv_guarent": _this.uintToString(result.inv_guarent.data), "module_flag": result.module_flag, "inv_flag": result.inv_flag, "inv_gflag": result.inv_gflag, "module_gflag": result.module_gflag, "quality_flag": result.quality_flag
                };
                _this.modNameData = _this.contInfoData.module_name.split(",");
                _this.invNameData = _this.contInfoData.inv_name.split(",");
                _this.qualityData = _this.contInfoData.quality.split(",");
                _this.modGuaData = _this.contInfoData.module_guarent.split(",");
                _this.invGuaData = _this.contInfoData.inv_guarent.split(",");
            }
        });
    };
    MyquotInputPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    MyquotInputPage.prototype.quotSubmit = function () {
        var _this = this;
        if (!this.validation())
            return false;
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        sendData["comp_id"] = this.user_id;
        sendData["person"] = this.person;
        sendData["price"] = this.insPrice;
        sendData["module_name"] = this.module_name;
        sendData["inv_name"] = this.inv_name;
        sendData["quality"] = this.quality;
        sendData["module_guarent"] = this.module_guarent;
        sendData["inv_guarent"] = this.inv_guarent;
        sendData["as_guide"] = this.as_guide;
        sendData["final_price"] = this.final_price;
        this.http.postHttpData("/setSubmitContract", sendData, function (result) {
            if (result) {
                _this.quotFlag = true;
            }
        });
    };
    MyquotInputPage.prototype.validation = function () {
        var str = '';
        if (this.insPrice == 0) {
            str = '설치 견적비용을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.as_guide == '') {
            str = '보증기간 및 A/S 안내를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.final_price == 0) {
            str = '최종 소비자가격을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.module_name == '') {
            str = '모듈 제품명을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.inv_name == '') {
            str = '인버터 제품명을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.quality == '') {
            str = '설치할 구조물 품질을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.module_guarent == '') {
            str = '모듈보증을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.inv_guarent == '') {
            str = '인버터 보증을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        return true;
    };
    MyquotInputPage.prototype.quotList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myquot_status_myquot_status__["a" /* MyquotStatusPage */], { tab: 'tab2' }, { animate: false });
    };
    // common
    MyquotInputPage.prototype.hasContInfo = function (type) {
        if (!this.contInfoData)
            return false;
        if (type == 'module_name' && this.contInfoData.module_flag == 1) {
            return true;
        }
        else if (type == 'inv_name' && this.contInfoData.inv_flag == 1) {
            return true;
        }
        else if (type == 'quality' && this.contInfoData.quality_flag == 1) {
            return true;
        }
        else if (type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
            return true;
        }
        else if (type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
            return true;
        }
        return false;
    };
    MyquotInputPage.prototype.operator = function (operate) {
        if (operate == 'inc') {
            this.person++;
        }
        else {
            if (this.person == 1)
                return;
            this.person--;
        }
    };
    MyquotInputPage.prototype.isQuot = function () {
        if (this.quotFlag == true) {
            return true;
        }
        else {
            return false;
        }
    };
    MyquotInputPage.prototype.isFirst = function (id) {
        if (id == 0)
            return true;
        else
            return false;
    };
    MyquotInputPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    MyquotInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myquot-input',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-input/myquot-input.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">견적 입력</span>\n    <img style="width:32px;" src="assets/imgs/goback.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="wrap" *ngIf="!isQuot()">\n    <div class="list">\n      <label stacked>설치인원</label>\n      \n      <div class="value">{{person}}</div><span style="display: block;\n      width: 100px;\n      position: absolute;\n      left: 10%;\n      top: 50%;" class="unit">명</span>\n      <img src="assets/imgs/minus.png" style="right: 15%;" class="operator" (click)="operator(\'dec\')">\n      <img src="assets/imgs/plus.png" style="right: 5%;" class="operator" (click)="operator(\'inc\')">\n    </div>\n\n    \n\n    <ion-item class="mt10" *ngIf="hasContInfo(\'module_name\')">\n      <ion-label style="font-size: 15px;\n      color: black;" stacked>모듈 제품명</ion-label>\n      <ion-select placeholder="선택하세요" interface="popover" [(ngModel)]="module_name">\n        <ion-option *ngFor="let item of modNameData ; let idx = index" value="{{item}}" selected="isFirst(idx)">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item style="    background: lightgray;" *ngIf="hasContInfo(\'inv_name\')">\n      <ion-label style="font-size: 15px;\n      color: black; "  stacked>인버터 제품명</ion-label>\n      <ion-select interface="popover" [(ngModel)]="inv_name">\n        <ion-option *ngFor="let item of invNameData ; let idx = index" value="{{item}}" selected="isFirst(idx)">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item *ngIf="hasContInfo(\'quality\')">\n      <ion-label style="font-size: 15px;\n      color: black; "  stacked>설치할 구조물 품질</ion-label>\n      <ion-select interface="popover" [(ngModel)]="quality">\n        <ion-option *ngFor="let item of qualityData ; let idx = index" value="{{item}}" selected="isFirst(idx)">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item *ngIf="hasContInfo(\'module_guarent\')">\n      <ion-label style="font-size: 15px;\n      color: black; "  stacked>모듈보증</ion-label>\n      <ion-select interface="popover" [(ngModel)]="module_guarent">\n        <ion-option *ngFor="let item of modGuaData ; let idx = index" value="{{item}}" selected="isFirst(idx)">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item *ngIf="hasContInfo(\'inv_guarent\')">\n      <ion-label style="font-size: 15px;\n      color: black; " stacked>인버터 보증</ion-label>\n      <ion-select interface="popover" [(ngModel)]="inv_guarent">\n        <ion-option *ngFor="let item of invGuaData ; let idx = index" value="{{item}}" selected="isFirst(idx)">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="list mt10">\n      <label stacked>보증기간 및 A/S 안내</label>\n      <textarea class="textarea" placeholder="설치 완료 후 내부 A/S 규정 입력해주세요" [(ngModel)]="as_guide"></textarea>\n    </div>\n    \n    <div class="list">\n      <label class="mb0" stacked>최종 소비자가 입력 (부가세 포함 가격)</label>\n      <input  style="    border-bottom: solid lightgray 1px;" type="text" class="width95" value="390,000" [(ngModel)]="final_price" />\n    </div>\n\n    <div class="btn-cont">\n      <button style="border-radius: 10px;\n      color: white; color: white;\n    font-size: 25px;" ion-button color="light" (click)="quotSubmit()" class="boxBtn quotSubmit"><img style="width:14px; height:14px; margin-right:5px;" src="assets/imgs/calcu.png"/>견적 제출하기</button>\n    </div>\n\n  </div>\n\n  <div class="wrap complete" *ngIf="isQuot()">\n    <p class="mt10">견적서를 제출해 주셔서 감사합니다. </p>\n    <p class="mt20">제출해주신 사항에 대한 진행 여부는 <br/>계약 및 완료 메뉴에서 확인 가능합니다.</p>\n    <div class="text-center">\n      <button ion-button (click)="quotList()" class="mt20">제출견적 목록</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-input/myquot-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], MyquotInputPage);
    return MyquotInputPage;
}());

//# sourceMappingURL=myquot-input.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_encoding__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 




var MyquotViewPage = /** @class */ (function () {
    function MyquotViewPage(navCtrl, navParams, appmgr, common, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.user_id = 0;
        this.cont_id = 0;
        this.cont_id = navParams.get('cont_id');
        console.log(this.cont_id);
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        // initialize
        // 제출한 견적얻기
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["cont_id"] = this.cont_id;
        this.http.postHttpData("/getContractById", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            if (result) {
                console.log(result);
                //module_name
                _this.submitCont = { "price": result.price, "person": result.person, "module_name": _this.uintToString(result.module_name.data),
                    "inv_guarent": _this.uintToString(result.inv_guarent.data), "inv_name": _this.uintToString(result.inv_name.data),
                    "final_price": result.final_price,
                    "quality": _this.uintToString(result.quality.data), "as_guide": _this.uintToString(result.as_guide.data), "module_guarent": _this.uintToString(result.module_guarent.data) };
            }
            else {
                console.log("???" + result);
                _this.submitCont = null;
            }
        });
        // 견적관리정보
        var sendData1 = [];
        this.http.postHttpData("/getContractInfoData", sendData1, function (result) {
            if (result) {
                console.log(result);
                _this.contInfoData = result;
            }
        });
    }
    MyquotViewPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_6_text_encoding__["TextDecoder"]("utf-8");
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        return decodedString;
    };
    MyquotViewPage.prototype.ionViewWillEnter = function () {
    };
    MyquotViewPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    // common
    MyquotViewPage.prototype.hasData = function () {
        if (this.submitCont) {
            return true;
        }
        else
            return false;
    };
    MyquotViewPage.prototype.getContInfo = function (type, value) {
        if (!this.contInfoData)
            return '';
        var arrStr = '';
        if (type == 'module_name') {
            arrStr = this.contInfoData.module_name.split(",");
            return arrStr[value];
        }
        else if (type == 'inv_name') {
            arrStr = this.contInfoData.inv_name.split(",");
            return arrStr[value];
        }
        else if (type == 'quality') {
            arrStr = this.contInfoData.quality.split(",");
            return arrStr[value];
        }
        else if (type == 'module_guarent') {
            arrStr = this.contInfoData.module_guarent.split(",");
            return arrStr[value];
        }
        else if (type == 'inv_guarent') {
            arrStr = this.contInfoData.inv_guarent.split(",");
            return arrStr[value];
        }
    };
    MyquotViewPage.prototype.hasContInfo = function (type) {
        if (!this.contInfoData)
            return false;
        if (type == 'module_name' && this.contInfoData.module_flag == 1) {
            return true;
        }
        else if (type == 'inv_name' && this.contInfoData.inv_flag == 1) {
            return true;
        }
        else if (type == 'quality' && this.contInfoData.quality_flag == 1) {
            return true;
        }
        else if (type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
            return true;
        }
        else if (type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
            return true;
        }
        return false;
    };
    MyquotViewPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    MyquotViewPage.prototype.returnData = function (date) {
        var date1 = this.common.getStrDate(date);
        if (date1) {
            return date1.replace(/-/g, ".").substring(0, 10);
        }
        else {
            return '';
        }
    };
    MyquotViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myquot-view',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-view/myquot-view.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">견적 보기</span>\n    <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="wrap" *ngIf="hasData()">\n    <h6>[제출일자] {{ returnData(submitCont.reg_time) }} </h6>\n    <div class="list">\n      <label>설치인원</label>\n      <div class="content">{{submitCont.person}}명</div>\n    </div>\n    <div class="list">\n      <label>설치 견적비용</label>\n      <div class="content">{{ numFormat(submitCont.price) }}만원</div>\n    </div>\n    <div class="list" *ngIf="hasContInfo(\'module_name\')">\n      <label>태양광 모듈</label>\n      <div class="content">{{ submitCont.module_name }}</div>\n    </div>\n    <div class="list" *ngIf="hasContInfo(\'inv_name\')">\n      <label>인버터</label>\n      <div class="content">{{ submitCont.inv_name }}</div>\n    </div>\n    <div class="list" *ngIf="hasContInfo(\'quality\')">\n      <label>구조물 제품명</label>\n      <div class="content">{{ submitCont.quality }}</div>\n    </div>\n    <div class="list" *ngIf="hasContInfo(\'module_guarent\')">\n      <label>모듈 보증 내용</label>\n      <div class="content">{{ submitCont.module_guarent }}</div>\n    </div>\n    <div class="list" *ngIf="hasContInfo(\'inv_guarent\')">\n      <label>인버터보증 내용</label>\n      <div class="content">{{ submitCont.inv_guarent }}</div>\n    </div>\n    <div class="list">\n      <label>보증기간 및 A/S안내</label>\n      <div class="content">{{ submitCont.as_guide }}</div>\n    </div>\n    <div class="list double">\n      <label>최종 소비자가격<br/>(부가세 포함 가격)</label>\n      <div class="content mt10">{{ numFormat(submitCont.final_price) }}원</div>\n    </div>\n  </div>\n\n  <div class="no-data mt30" *ngIf="!hasData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-view/myquot-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MyquotViewPage);
    return MyquotViewPage;
}());

//# sourceMappingURL=myquot-view.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotProcessStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendarmodal_calendarmodal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// common 



var MyquotProcessStatusPage = /** @class */ (function () {
    function MyquotProcessStatusPage(inapp, navCtrl, navParams, modalCtrl, appmgr, common, http, photoViewer, alertCtrl, platform, document, file, transfer) {
        var _this = this;
        this.inapp = inapp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.photoViewer = photoViewer;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.radio = false;
        this.client = false; // 의뢰버튼
        // 
        this.term = false;
        this.contract = false;
        this.pay_flag = 0;
        this.pay_time = '';
        // 평가주기
        this.imgUrl = [];
        this.custom_replay = '';
        // 
        this.user_id = 0;
        this.cont_id = 0;
        this.analyse_id = 0;
        // 
        this.ins_exp_time = '';
        this.ins_comp_time = '';
        this.contract_time = '';
        // 
        this.contract_path = '';
        this.cont_id = navParams.get('cont_id');
        this.analyse_id = navParams.get('analyse_id');
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        // initialize
        this.ins_exp_time = this.getToday();
        this.ins_comp_time = this.getToday();
        // 제출한 견적얻기
        // let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
        // modal.present({animate:false});
        console.log(this.cont_id);
        console.log(this.analyse_id);
        var sendData = [];
        sendData["cont_id"] = this.cont_id;
        sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/getQuotStatus", sendData, function (result) {
            // modal.dismiss({}, "", {animate:false});
            if (result) {
                console.log(result);
                _this.submitCont = { "name": _this.uintToString(result.name.data), "cont_price": result.cont_price, "price": result.price, "ins_hope_time": result.ins_hope_time };
                _this.pay_flag = result.pay_flag;
                _this.pay_time = result.pay_time;
                _this.custom_replay = _this.uintToString(result.custom_replay.data);
                _this.contract_time = _this.returnData(result.contract_time, 'min');
                if (result.contract_time)
                    _this.contract = true; // 계약되어있을 때
                // 
                _this.contract_path = _this.uintToString(result.contract_path.data);
                // rating
                var star = 'assets/imgs/star.png';
                var stared = 'assets/imgs/star2.png';
                for (var i = 0; i < 5; i++) {
                    if (result.rate > 0 && i + 1 <= result.rate) {
                        _this.imgUrl[i] = stared;
                    }
                    else
                        _this.imgUrl[i] = star;
                }
            }
            else {
                console.log(result);
                _this.submitCont = null;
            }
        });
    }
    MyquotProcessStatusPage.prototype.ionViewWillEnter = function () {
    };
    MyquotProcessStatusPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_7_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    MyquotProcessStatusPage.prototype.viewContract = function () {
        console.log(this.contract_path);
        if (!this.contract_path) {
            var str = '계약서파일이 존재하지 않습니다.';
            this.confirmAlert(str);
            return false;
        }
        if (this.contract_path.indexOf('pdf') > 0) {
            //http://solarmy.co.kr/solarmy_admin/uploads/15539567913.pdf
            var url = "http://solarmy.co.kr/solarmy_admin/uploads" + '/' + this.contract_path;
            var options = {
                location: 'yes',
                hidden: 'no',
                clearcache: 'yes',
                clearsessioncache: 'yes',
                zoom: 'yes',
                hardwareback: 'yes',
                mediaPlaybackRequiresUserAction: 'no',
                shouldPauseOnSuspend: 'no',
                closebuttoncaption: 'Close',
                disallowoverscroll: 'no',
                toolbar: 'yes',
                enableViewportScale: 'no',
                allowInlineMediaPlayback: 'no',
                presentationstyle: 'pagesheet',
                fullscreen: 'yes',
            };
            // this.download();
            // const browser = this.inapp.create(this.url,"_system","location=yes,enableViewportScale=yes,hidden=no" );
            var browser = this.inapp.create(url, '_system', options);
            // let modal1 = this.modalCtrl.create(PdfViewerPage, {
            //   url: url
            // });
            // modal1.present();
        }
    };
    MyquotProcessStatusPage.prototype.setContract = function () {
        var _this = this;
        this.contract_time = this.getNow();
        // let analyse_id = this.submitCont ? this.submitCont.analyse_id : 0;
        var sendData = [];
        sendData["cont_id"] = this.cont_id;
        sendData["ins_exp_time"] = this.ins_exp_time;
        sendData["ins_comp_time"] = this.ins_comp_time;
        sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/updateContDates", sendData, function (result) {
            if (result) {
                _this.contract = true;
            }
        });
    };
    MyquotProcessStatusPage.prototype.calendarEx = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__calendarmodal_calendarmodal__["a" /* CalendarmodalPage */], { reserve_date: '' });
        modal.present({ animate: false });
        modal.onDidDismiss(function (data) {
            if (data.date != "") {
                _this.ins_exp_time = data.date;
            }
        });
    };
    MyquotProcessStatusPage.prototype.calendarComp = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__calendarmodal_calendarmodal__["a" /* CalendarmodalPage */], { reserve_date: '' });
        modal.present({ animate: false });
        modal.onDidDismiss(function (data) {
            if (data.date != "") {
                _this.ins_comp_time = data.date;
            }
        });
    };
    // common
    MyquotProcessStatusPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    MyquotProcessStatusPage.prototype.viewImg = function (img_url) {
        var title = "";
        var options = {
            share: false,
            closeButton: true,
            copyToReference: false // default is false
        };
        this.photoViewer.show(img_url, title, options);
    };
    MyquotProcessStatusPage.prototype.agreeContract = function () {
        if (this.term == true)
            this.term = false;
        else
            this.term = true;
    };
    MyquotProcessStatusPage.prototype.hasData = function () {
        if (this.submitCont) {
            return true;
        }
        else
            return false;
    };
    MyquotProcessStatusPage.prototype.isTerm = function () {
        if (this.term == true)
            return true;
        else
            return false;
    };
    MyquotProcessStatusPage.prototype.isContract = function () {
        if (this.contract == true)
            return true;
        else
            return false;
    };
    MyquotProcessStatusPage.prototype.hasPay = function () {
        if (this.pay_flag == 1)
            return true;
        else
            return false;
    };
    MyquotProcessStatusPage.prototype.hasRating = function () {
        if (this.custom_replay)
            return true;
        else
            return false;
    };
    MyquotProcessStatusPage.prototype.numFormat = function (str) {
        if (str)
            return this.common.number_format(str);
        else
            return '0';
    };
    MyquotProcessStatusPage.prototype.returnData = function (date, type) {
        var date1 = this.common.getStrDate(date);
        if (date1) {
            if (type == 'day')
                return date1.replace(/-/g, ".").substring(0, 10);
            else if (type == 'min')
                return date1.replace(/-/g, ".").substring(0, 16);
        }
        else {
            return '';
        }
    };
    MyquotProcessStatusPage.prototype.correctDate = function (year, month, day) {
        var t_month = parseInt(month) < 10 ? '0' + month : month;
        var t_day = parseInt(day) < 10 ? '0' + day : day;
        return year + '-' + t_month + '-' + t_day;
    };
    MyquotProcessStatusPage.prototype.getToday = function () {
        var now_date = new Date();
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var today = this.correctDate(year, month, day);
        return today;
    };
    MyquotProcessStatusPage.prototype.formatNow = function (year, month, day, hour, min) {
        var t_month = parseInt(month) < 10 ? '0' + month : month;
        var t_day = parseInt(day) < 10 ? '0' + day : day;
        return year + '-' + t_month + '-' + t_day + ' ' + hour + ':' + min;
    };
    MyquotProcessStatusPage.prototype.getNow = function () {
        var now_date = new Date();
        var year = now_date.getFullYear();
        var month = now_date.getMonth() + 1;
        var day = now_date.getDate();
        var minutes = now_date.getMinutes();
        var hour = now_date.getHours();
        var today = this.formatNow(year, month, day, hour, minutes);
        return today;
    };
    MyquotProcessStatusPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    MyquotProcessStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myquot-process-status',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-process-status/myquot-process-status.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">진행현황</span>\n    <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="hasData()">\n    <div class="wrap wrap_1">\n      <h3 class="title">계약 정보</h3>\n      \n      <div class="list">\n        <label>고객명</label>\n        <div class="content">{{submitCont.name}}</div>\n      </div>\n      <div class="list cont">\n        <label>계약금</label>\n        <div class="content">{{ numFormat(submitCont.cont_price) }}원</div>\n      </div>\n      <div class="list cont">\n        <label>결제금액</label>\n        <div class="content">{{ numFormat(submitCont.price - submitCont.cont_price) }}원</div>\n      </div>\n      <div class="list cont">\n        <label>총금액</label>\n        <div class="content">{{ numFormat(submitCont.price) }}원</div>\n      </div>\n      <div class="list cont">\n        <label>고객 설치 희망일</label>\n        <div class="content">{{ returnData(submitCont.ins_hope_time, \'day\') }}</div>\n      </div>\n        \n      <div class="list cont" *ngIf="!isContract()">\n        <label>설치예정일</label>\n        <div class="content" (click)="calendarEx()">\n          <p>{{ins_exp_time}} <img src="assets/imgs/calendar.png" width="15" /> </p>\n        </div>\n      </div>\n      <div class="list" *ngIf="isContract()">\n        <label>설치예정일</label>\n        <div class="content">{{ins_exp_time}}</div>\n      </div>\n      <div class="list cont" *ngIf="!isContract()">\n        <label>설치완료일</label>\n        <div class="content" (click)="calendarComp()">\n          <p>{{ins_comp_time}} <img src="assets/imgs/calendar.png" width="15" /> </p>\n        </div>\n      </div>\n      <div class="list" *ngIf="isContract()">\n        <label>설치완료일</label>\n        <div class="content">{{ins_comp_time}}</div>\n      </div>\n\n      <div class="list double" *ngIf="!isContract()">\n        <label>계약서</label>\n        <div class="content"><button ion-button (click)="viewContract()" class="viewContract">계약서 보기</button></div>\n      </div>\n\n      <div class="contract btn-cont" *ngIf="!isContract()">\n        <div class="text-center">\n          <ion-checkbox id="contract" (click)="agreeContract()"></ion-checkbox>\n          <ion-label for="contract">계약서 내용을 확인하였으며, 계약체결을 진행합니다.</ion-label> \n        </div>\n        <button ion-button color="light" disabled *ngIf="!isTerm()" class="boxBtn contract">계약하기</button>\n        <button ion-button color="light" (click)="setContract()" *ngIf="isTerm()" class="boxBtn contract">계약하기</button>\n      </div>\n      <div class="contract btn-cont" *ngIf="isContract()">\n        <p>{{contract_time}}</p>\n        <h6>계약이 완료되었습니다.</h6>\n        <button ion-button class="viewContract mt10" (click)="viewContract()">계약서 보기</button>\n      </div>\n    </div>\n    \n    <div class="middle" *ngIf="isContract()"></div>\n    <div class="wrap wrap_2" *ngIf="isContract()">\n      <h3 class="title">결제 정보</h3>\n      \n      <div class="list">\n        <label>결제금액</label>\n        <div class="content">{{ numFormat(submitCont.price - submitCont.cont_price) }}원</div>\n      </div>\n      <div class="contract btn-cont" *ngIf="!hasPay()">\n        <h6>결제전입니다.</h6>\n      </div>\n      <div class="contract btn-cont" *ngIf="hasPay()">\n        <p>{{ returnData(pay_time, \'min\') }}</p>\n        <h6>결제가 완료되었습니다.</h6>\n      </div>\n    </div>\n    \n    <div class="middle" *ngIf="hasRating()"></div>\n    <div class="wrap wrap_2" *ngIf="hasRating()">\n      <h3 class="title b-none">고객 평가</h3>\n      \n      <div class="contract btn-cont">\n        <ul class="rating">\n          <li><img [src]="imgUrl[0]" ></li>\n          <li><img [src]="imgUrl[1]" ></li>\n          <li><img [src]="imgUrl[2]" ></li>\n          <li><img [src]="imgUrl[3]" ></li>\n          <li><img [src]="imgUrl[4]" ></li>\n        </ul>\n        <h6 class="thanks">{{ custom_replay }}</h6>\n      </div>\n      \n    </div>\n  </div>\n  <div class="no-data mt30" *ngIf="!hasData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/myquot-process-status/myquot-process-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], MyquotProcessStatusPage);
    return MyquotProcessStatusPage;
}());

//# sourceMappingURL=myquot-process-status.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyinfoUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charge_guide_charge_guide__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// common 



var MyinfoUpdatePage = /** @class */ (function () {
    function MyinfoUpdatePage(navCtrl, navParams, modalCtrl, alertCtrl, appmgr, common, http, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.camera = camera;
        this.user_id = 0;
        this.email = '';
        this.comp_name = '';
        this.address = '';
        this.clerk = '';
        this.contact = '';
        this.hp_num = '';
        this.elect_num = '';
        this.business_num = '';
        this.bank_name = '';
        this.bank_num = '';
        this.tax_email = '';
        this.tax_clerk = '';
        // 
        this.postCode = '';
        this.building = '';
        // 
        this.searchFlag = false; // search diaolog
        this.searchValFlag = false; // search result 
        this.input_address = '';
        // img
        this.tmp_elect_url = "";
        this.old_elect_url = "";
        this.elect_name = "첨부파일없음";
        this.tmp_buss_url = "";
        this.old_buss_url = "";
        this.buss_name = "첨부파일없음";
        this.userInfo = this.appmgr.getUserInfo();
        this.user_id = this.userInfo.user_id;
        this.email = this.uintToString(this.userInfo.email.data);
        // get user info
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        console.log("email to send" + this.email);
        var sendData = [];
        sendData["email"] = this.email;
        this.http.postHttpData("/checkUser", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log(result);
            if (result) {
                _this.comp_name = _this.uintToString(result.company_name.data);
                _this.address = _this.uintToString(result.address.data);
                _this.clerk = _this.uintToString(result.clerk.data);
                _this.hp_num = _this.uintToString(result.hp_num.data);
                _this.contact = _this.uintToString(result.contact.data);
                _this.old_elect_url = _this.uintToString(result.elect_num.data);
                _this.old_buss_url = _this.uintToString(result.business_num.data);
                _this.bank_name = _this.uintToString(result.bank_name.data);
                _this.bank_num = _this.uintToString(result.bank_num.data);
                _this.tax_email = _this.uintToString(result.tax_email.data);
                _this.tax_clerk = _this.uintToString(result.tax_clerk.data);
                // img
                if (_this.old_elect_url != "") {
                    _this.elect_name = _this.old_elect_url;
                }
                if (_this.old_buss_url != "") {
                    _this.buss_name = _this.old_buss_url;
                }
            }
        });
    }
    MyinfoUpdatePage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_6_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    MyinfoUpdatePage.prototype.ionViewWillEnter = function () {
    };
    MyinfoUpdatePage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    MyinfoUpdatePage.prototype.chargeGuidePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__charge_guide_charge_guide__["a" /* ChargeGuidePage */], {}, { animate: false });
    };
    MyinfoUpdatePage.prototype.save = function () {
        var _this = this;
        if (!this.validation())
            return false;
        // elect img upload
        // if(this.tmp_elect_url) {
        //   this.elect_num = this.tmp_elect_url;
        // }
        // else if(this.old_elect_url) {
        //   this.elect_num = 'no-update';
        // }
        // else{
        //   this.elect_num = 'deleted';
        // }
        // // business img upload
        // if(this.tmp_buss_url) {
        //   this.business_num = this.tmp_buss_url;
        // }
        // else if(this.old_buss_url) {
        //   this.business_num = 'no-update';
        // }
        // else{
        //   this.business_num = 'deleted';
        // }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["comp_name"] = this.comp_name;
        sendData["address"] = this.address;
        sendData["clerk"] = this.clerk;
        sendData["hp_num"] = this.hp_num;
        sendData["contact"] = this.contact;
        // sendData["elect_num"] = this.elect_num;
        // sendData["business_num"] = this.business_num;
        sendData["bank_name"] = this.bank_name;
        sendData["bank_num"] = this.bank_num;
        sendData["tax_email"] = this.tax_email;
        sendData["tax_clerk"] = this.tax_clerk;
        console.log(sendData);
        this.http.postHttpData("/updatePartnerData", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            if (result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {}, { animate: false });
            }
        });
    };
    MyinfoUpdatePage.prototype.validation = function () {
        var str = '';
        if (this.comp_name == '') {
            str = '회사이름을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.address == '') {
            str = '주소를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.contact == '') {
            str = '연락처를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        return true;
    };
    MyinfoUpdatePage.prototype.isSearch = function () {
        if (this.searchFlag) {
            return true;
        }
        else {
            return false;
        }
    };
    MyinfoUpdatePage.prototype.toggleSearchPop = function () {
        if (this.searchFlag) {
            return this.searchFlag = false;
        }
        else {
            return this.searchFlag = true;
        }
    };
    MyinfoUpdatePage.prototype.searchAddress = function () {
        var _this = this;
        var sendData = [];
        sendData["search_address"] = this.input_address;
        this.http.postHttpData("/getAddressByWord", sendData, function (result) {
            if (result) {
                _this.searchValFlag = true;
                var list = "";
                for (var i = 0; i < result.length; i++) {
                    list += '<li id="address_' + i + '">' + _this.common.subString(result[i].roadAddrPart1, 27) + '</li>';
                }
                document.getElementById("search_list").innerHTML = list;
                var _loop_1 = function (i) {
                    document.getElementById("address_" + i).addEventListener('click', function (event) { return _this.selectMenu(result[i]); });
                };
                for (var i = 0; i < result.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                _this.searchValFlag = false;
            }
        });
    };
    MyinfoUpdatePage.prototype.selectMenu = function (selectedVal) {
        this.postCode = selectedVal.zipNo;
        this.building = selectedVal.bdNm;
        // this.address = selectedVal.jibunAddr
        this.address = selectedVal.roadAddrPart1;
        this.toggleSearchPop();
    };
    MyinfoUpdatePage.prototype.isSearchVal = function () {
        if (this.searchValFlag) {
            return true;
        }
        else {
            return false;
        }
    };
    MyinfoUpdatePage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    // image process
    MyinfoUpdatePage.prototype.clickGallery = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            correctOrientation: true,
            maximumImagesCount: 1,
            targetWidth: 1000,
            targetHeight: 1000,
        };
        this.camera.getPicture(options)
            .then(function (url) {
            var d = new Date();
            var n = d.getTime();
            if (type == 'elect') {
                // this.tmp_elect_url = url;
                _this.elect_name = n + '.jpg';
                _this.updateLicence(url, 'elect_num');
            }
            else if (type == 'buss') {
                // this.tmp_buss_url = url;
                _this.buss_name = n + '.jpg';
                _this.updateLicence(url, 'business_num');
            }
        }, function (err) {
            console.log("clickGallery err: " + err);
        });
    };
    MyinfoUpdatePage.prototype.hasImg = function (oldImg, newImg) {
        if (oldImg != '' || newImg != '')
            return true;
        else
            return false;
    };
    MyinfoUpdatePage.prototype.delImage = function (type) {
        if (type == 'elect') {
            this.updateLicence('', 'elect_num');
            this.elect_name = '첨부파일없음';
        }
        else if (type == 'buss') {
            this.updateLicence('', 'business_num');
            this.buss_name = '첨부파일없음';
        }
    };
    MyinfoUpdatePage.prototype.updateLicence = function (url, field) {
        var sendData = [];
        sendData["email"] = this.email;
        sendData["url"] = url;
        sendData["field"] = field;
        this.http.postHttpData("/updateUserLicences", sendData, function (result) {
            if (result) {
                return true;
            }
            else
                return false;
        });
    };
    MyinfoUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myinfo-update',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/myinfo-update/myinfo-update.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">내정보 업데이트</span>\n    <img style="width:32px;" src="assets/imgs/goback.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n<!-- \n  <div class="top-wrap">\n    <h6>회원정보를 입력하셔야 견적에 참여하실 수 있습니다.</h6>\n    <button ion-button class="charge-guide" (click)="chargeGuidePage()">이용요금 안내</button>\n  </div>\n  <div class="border-cont"></div> -->\n\n  <div class="form">\n   \n    <div class="alert-md">\n      <label style="">이메일</label>\n      <div class="alert-input"> {{ email }} </div>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 회사명</label>\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="comp_name"/>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 주소</label>\n      <input type="text" class="alert-input address"  value="{{postCode}}" />\n      <button ion-button color="light" (click)="toggleSearchPop()">주소검색</button>\n    </div>\n    <div style="height: 30px;" class="alert-md">\n      <input style="width: 100%;" type="text" class="alert-input" disabled value="{{address}}"/>\n    </div>\n    <div style="height: 30px;" class="alert-md">\n      <input style="width: 100%;" type="text" class="alert-input"  value="{{building}}"/>\n    </div>\n    <div style="margin-top:1em; " class="alert-md">\n      <label>담당자</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="clerk"/>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 연락처</label>\n      <input  style="width:100%;" style="width: 100%;" type="text" class="alert-input" [(ngModel)]="contact" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <div class="alert-md">\n      <label>전화번호</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="hp_num" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <!--  -->\n    <div class="alert-md mt20 double">\n      <label>전기면허 </label>\n      <span style="top: 5px;" class="file-name">{{elect_name}}</span>\n      <img style="\n      margin-top: 10px !important;" src="assets/imgs/cancel.png" class="btn-cancel" width="10" *ngIf="hasImg(old_elect_url, elect_url)" (click)="delImage(\'elect\')">\n      <button style="margin-right: 15px;\n      right: 0px;\n      position: absolute;" ion-button color="light" (click)="clickGallery(\'elect\')">업로드</button>\n      <div class="hrline"></div>\n    </div>\n    <div class="alert-md mt20 double">\n      <label>사업자 등록번호</label>\n      <span  style="top: 5px;" class="file-name">{{buss_name}}</span>\n      <img  style="\n      margin-top: 10px !important;" src="assets/imgs/cancel.png" class="btn-cancel" width="10" *ngIf="hasImg(old_buss_url, buss_url)" (click)="delImage(\'buss\')">\n      <button style="margin-right: 15px;\n      right: 0px;\n      position: absolute;" ion-button color="light" (click)="clickGallery(\'buss\')">업로드</button>\n      <div class="hrline"></div>\n      \n    </div>\n    <!--  -->\n    <div class="alert-md mt10">\n      <label>은행계좌</label>\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="bank_name" placeholder="은행명"/>\n    </div>\n    <div class="alert-md">\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="bank_num" placeholder="계좌번호"/>\n    </div>\n    <div class="alert-md mt10">\n      <label class="v-alignB">세금계산서 이메일</label>\n      <input style="width:100%;" type="email" class="alert-input" [(ngModel)]="tax_email"/>\n    </div>\n    <div class="alert-md">\n      <label class="v-alignB">세금계산서 담당자</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="tax_clerk"/>\n    </div>\n    \n    <div class="btn-cont">\n      <button ion-button color="light" (click)="save()" class="boxBtn save"><img style="width:14px; height:14px; margin-right:5px;" src="assets/imgs/check.png">정보 저장</button>\n    </div>\n    \n  </div>\n</ion-content>\n\n<div *ngIf="isSearch()" class="search">\n  <div (click)="toggleSearchPop()" class="bg"></div>\n  <div class="result-wrap">\n    <div class="top-area etcForm">\n      <ion-searchbar [(ngModel)]="input_address" (ionInput)="searchAddress()" placeholder="주소를 입력해 주세요."></ion-searchbar>\n    </div>\n    <ul *ngIf="!isSearchVal()" class="result">\n      <li>주소를 상세히 입력해 주세요.</li>\n    </ul>\n    <ul class="result" id="search_list">\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/myinfo-update/myinfo-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], MyinfoUpdatePage);
    return MyinfoUpdatePage;
}());

//# sourceMappingURL=myinfo-update.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotationPage = /** @class */ (function () {
    function QuotationPage(renderer, navCtrl, navParams) {
        // this.content.ionScrollEnd.subscribe((data)=>{
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.array = [];
        //   console.log(data);
        // });
    }
    QuotationPage.prototype.logScrollStart = function () {
        console.log("start");
    };
    QuotationPage.prototype.logScrollEnd = function () {
        console.log("end");
        // window.alert("come to end");
    };
    QuotationPage.prototype.onScroll = function (data) {
        console.log(data);
    };
    QuotationPage.prototype.onPageScroll = function (d) {
        console.log(d);
    };
    QuotationPage.prototype.detectBottom = function () {
        console.log("detect come");
    };
    QuotationPage.prototype.ngAfterViewInit = function () {
    };
    QuotationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuotationPage');
        this.array = this.navParams.get("array");
        //   this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"111111","reg_date":"regdate"});
        //  this.array.push({"name":"abcde","address":"fff22222ffffff","reg_date":"regdate"});
        console.log(this.array);
        console.log(this.content);
        setTimeout(function () {
            //   setInterval(()=>{
            //     this.c.nativeElement.scrollTop +=1;
            //     console.log(this.c.nativeElement.scrollTop);
            //     if(this.c.nativeElement.scrollTop==this.c.nativeElement.scrollHeight-100){
            //       this.c.nativeElement.scrollTop=0;
            //     }
            // },100)
            // window.alert(this.content.nativeElement.offsetHeight);
            // // this.c.addScrollEventListener((e) => {
            // //   console.log(e)
            // // })
            // this.c.nativeElement.scrollTop=100;
            // console.log(this.c);
            // console.log(this.c.scrollTop);
            // window.alert(this.c.ionScrollEnd);
            // console.log(this.c.onScroll);
            // this.c.onscroll.subscribe((data)=>{
            //   console.log(data);
            // });
            // // // window.alert(height);
            console.log(_this.content);
            _this.content.ionScrollEnd.subscribe(function (data) {
                //... do things
                var dimensions = _this.content.getContentDimensions();
                console.log("Dimensions");
                console.log(dimensions);
                console.log("Scroll ");
                console.log(data);
                console.log("come to end!");
                console.log(dimensions.contentTop);
                console.log(data.scrollTop);
                if (data.scrollTop == 210) {
                    console.log("Looks like I'm in the bottom of the scroll element!");
                }
            });
        }, 500);
        // this.content.onscroll.subscribe((data)=>{
        //   console.log(data);
        //   // this.keyboard.close();
        // });
        // if(this.scroll.nativeElement.scrollTop==this.scroll.nativeElement.scrollHeight-100){
        //   this.scroll.nativeElement.scrollTop=0;
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], QuotationPage.prototype, "content", void 0);
    QuotationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotation',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/quotation/quotation.html"*/'<!--\n  Generated template for the QuotationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>실시간 견적 현황</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content (ionScrollEnd)="logScrollEnd()"  (ionScroll)="onScroll($event)"  padding>\n  <div \n class="test">\n      <ion-list >\n          <ion-item *ngFor="let a of array">\n              <p style="    width: 50%;\n              overflow-x: hidden; font-size:15px;">{{a.address}} </p><p style="width:15%;">{{a.name}} </p><p style="width:20%;">{{a.reg_date}} </p>\n              <button *ngIf="a.status==0" style="background-color: rgb(41, 41, 112);\n              vertical-align: middle;\n              line-height: 30px;" ion-button>견적요청</button>\n              <button *ngIf="a.status==1" style="background-color: #FFA200;\n              vertical-align: middle;\n              line-height: 30px;" ion-button>입금확인중</button>\n              <button *ngIf="a.status==2" style="background-color: #ff4000;\n              vertical-align: middle;\n              line-height: 30px;" ion-button>입금완료</button>\n          </ion-item>\n         \n        </ion-list>\n  </div>\n    \n\n    <div >\n\n\n      \n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/quotation/quotation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object])
    ], QuotationPage);
    return QuotationPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentInstallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_install_detail_current_install_detail__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CurrentInstallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentInstallPage = /** @class */ (function () {
    function CurrentInstallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.installArray = [];
        this.array_detail = [];
        console.log('ionViewDidLoad CurrentInstallPage');
        console.log(this.navParams.get("array"));
        this.installArray = this.navParams.get("array");
        this.array_detail = this.navParams.get("array_detail");
        console.log(this.installArray);
        console.log(this.array_detail);
    }
    CurrentInstallPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CurrentInstallPage.prototype.gotodetail = function (a) {
        console.log(a);
        console.log(this.array_detail);
        var abc = [];
        for (var i = 0; i < this.array_detail.length; i++) {
            console.log(a.id + "////" + this.array_detail[i].p_id);
            if (a.id == this.array_detail[i].p_id) {
                console.log("id matche d:" + a.id);
                console.log(this.array_detail[i]);
                abc = this.array_detail[i];
            }
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__current_install_detail_current_install_detail__["a" /* CurrentInstallDetailPage */], { "array": a, "array_detail": this.array_detail });
    };
    CurrentInstallPage.prototype.ionViewDidLoad = function () {
    };
    CurrentInstallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current-install',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/current-install/current-install.html"*/'<!--\n  Generated template for the CurrentInstallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n      <div class="top_bar">\n          <span class="title">설치 현황</span>\n          <img style="    width: 32px;\n          height: 25px;\n          top: 0;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n      </div>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container" *ngFor="let a of installArray" style="    width: 90% !important;">\n        <img (click)="gotodetail(a);" src="{{a.url}}" alt="Car" style="width:100%">\n        <div class="bottom">\n        <p style="font-size:17px; text-align: center">{{a.subject}}</p>\n        </div>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/current-install/current-install.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CurrentInstallPage);
    return CurrentInstallPage;
}());

//# sourceMappingURL=current-install.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentInstallDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CurrentInstallDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentInstallDetailPage = /** @class */ (function () {
    function CurrentInstallDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentarray = [];
        this.array_detail = [];
        this.realdetail = [];
        this.array = this.navParams.get("array");
        this.array_detail = this.navParams.get("array_detail");
        this.name = this.array.subject;
        this.amount = this.array.amount;
        this.url = this.array.url;
        this.address = this.array.area;
        this.time = this.array.i_date.split("T")[0].replace("-", ".").replace("-", ".");
        console.log('ionViewDidLoad CurrentInstallDetailPage');
        console.log(this.array_detail);
        console.log(this.array);
        for (var i = 0; i < this.array_detail.length; i++) {
            if (this.array_detail[i].p_id == this.array.id) {
                this.realdetail.push(this.array_detail[i]);
            }
        }
        console.log("real one is : ");
        console.log(this.realdetail);
        for (var i = 0; i < this.realdetail.length; i++) {
            if (this.realdetail[i].code == 2) {
                this.invertername = this.realdetail[i].content;
                this.inverterphoto = "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename;
            }
            if (this.realdetail[i].code == 1) {
                this.currentarray.push("http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename);
            }
        }
        console.log(this.currentarray);
    }
    CurrentInstallDetailPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CurrentInstallDetailPage.prototype.ionViewDidLoad = function () {
    };
    CurrentInstallDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current-install-detail',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/current-install-detail/current-install-detail.html"*/'<!--\n  Generated template for the CurrentInstallDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <div class="top_bar">\n        <span class="title">설치 현황 상세</span>\n        <img src="assets/imgs/close.png" class="back_img" (click)="back()">\n      </div>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n            float: left;">설치일 </p>  <p>{{time}}</p></ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">설치지역 </p>  <p>{{address}}</p></ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">설치용량 </p>  <p>{{amount}}</p></ion-label>\n        </ion-item>\n        <ion-item >\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">모듈제품명 </p>  <p>{{name}}</p></ion-label>\n          </ion-item>\n        <ion-item style="text-align: center;">\n            <ion-label><img src="{{url}}"/></ion-label>\n          </ion-item>\n          <ion-item >\n              <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n                float: left;">인버터 제품명 </p>  <p>{{invertername}}</p></ion-label>\n            </ion-item>\n            <ion-item style="text-align: center" >\n                <ion-label><img src="{{inverterphoto}}"/></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n                  float: left;">설치 현황 사진 </p> </ion-label>\n              </ion-item>\n              <ion-item style="text-align: center;" *ngFor="let a of currentarray"> \n                  <ion-label ><img src="{{a}}"/></ion-label>\n                </ion-item>\n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/current-install-detail/current-install-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CurrentInstallDetailPage);
    return CurrentInstallDetailPage;
}());

//# sourceMappingURL=current-install-detail.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 

var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, platform, appmgr, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.appmgr = appmgr;
        this.event = event;
        this.reRead = 1;
        // this.event.unsubscribe("get_sqlite_data");
        // this.event.subscribe("get_sqlite_data", (userInfo) => {
        //     this.reRead = userInfo.service_intro;
        //     if( this.reRead == 0 ) {
        //       this.navCtrl.setRoot(HomePage, {},{animate:false} );
        //     }
        //     else {
        //       this.navCtrl.setRoot(ServiceIntroPage, {},{animate:false} );
        //     }
        // });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    }
    FirstPage.prototype.ionViewWillEnter = function () {
        // let userInfo = this.appmgr.getUserInfo();
        // this.reRead = userInfo.service_intro;
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/first/first.html"*/''/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_center_custom_center__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_intro_service_intro__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setting_setting__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__support_info_support_info__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__compare_quotation_compare_quotation__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__analyse_client_analyse_client__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_client_my_client__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__myquot_status_myquot_status__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__myinfo_update_myinfo_update__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__charge_guide_charge_guide__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quotation_quotation__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__current_install_current_install__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__analyse_result_analyse_result__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 




// normal









// partners







var HomePage = /** @class */ (function () {
    // 
    function HomePage(iab, navCtrl, navParams, appmgr, common, alertCtrl, http, oneSignal, platform, event) {
        var _this = this;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.event = event;
        this.user_id = 0;
        this.mem_type = 1;
        this.array_quotaion = [];
        this.picturelist = [];
        this.login_flag = true;
        this.videolist = [];
        this.arrayInstall = [];
        this.arrayInstallDetail = [];
        this.login_flag = navParams.get('login_status');
        this.event.unsubscribe("get_sqlite_data");
        this.event.subscribe("get_sqlite_data", function (userInfo) {
            _this.mem_type = userInfo.mem_type;
            if (userInfo.login_flag == 1) {
                _this.login_flag = true;
            }
            else {
                _this.login_flag = false;
            }
        });
        setTimeout(function () {
            setInterval(function () {
                _this.scroll.nativeElement.scrollTop += 1;
                if (_this.scroll.nativeElement.scrollTop == _this.scroll.nativeElement.scrollHeight - 100) {
                    _this.scroll.nativeElement.scrollTop = 0;
                }
                // console.log(this.scroll.nativeElement.scrollHeight)
            }, 100);
            // this.scroll.nativeElement.scrollTop({ bottom: 50, top: 0, behavior: 'smooth' });
            // this.scroll._scrollContent.scrollTo({ bottom: 500,behavior: 'smooth' });
        }, 500);
    }
    HomePage.prototype.quotation = function () {
        console.log(this.array_quotaion);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__quotation_quotation__["a" /* QuotationPage */], { "array": this.array_quotaion });
    };
    HomePage.prototype.ab2str = function (buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    };
    HomePage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_3_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    HomePage.prototype.opening = function (v) {
        console.log(v);
        console.log(v.file);
        console.log(v.url);
        if (v.url != "") {
            var browser = this.iab.create(v.url);
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.mem_type = userInfo.mem_type;
        console.log("user info is : ");
        console.log(userInfo);
        if (userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.OneSignalInstall();
        }
        var sendData2 = [];
        sendData2["user_id"] = this.user_id;
        this.http.postHttpData("/getUserInfoById", sendData2, function (result) {
            console.log(result);
            _this.userInfo = result;
            if (result) {
                console.log(result);
            }
        });
        var sendData1 = [];
        this.http.postHttpData("/getBanner", sendData1, function (result) {
            if (result) {
                _this.picturelist = [];
                console.log("getBanner result gogo" + _this.picturelist);
                var count = 0;
                console.log(result);
                console.log(_this.picturelist);
                _this.picturelist = [];
                console.log(_this.picturelist);
                for (var i = 0; i < result.length; i++) {
                    console.log(_this.picturelist);
                    console.log(result[i]);
                    console.log(result[i].file_name.data);
                    console.log(result[i].file_path.data);
                    var filename = String.fromCharCode.apply(null, result[i].file_name.data);
                    var filepath = String.fromCharCode.apply(null, result[i].file_path.data);
                    var url = String.fromCharCode.apply(null, result[i].url.data);
                    var flag = result[i].rank_flag;
                    console.log(filename);
                    console.log(filepath);
                    console.log(url);
                    console.log(result[i].banner_type);
                    console.log("i is : " + i);
                    if (result[i].banner_type == 1) {
                        console.log("video input");
                        _this.videolist.push({ "url": url, "rank_flag": flag });
                    }
                    if (i > 4) {
                        console.log("i no input" + i);
                    }
                    else {
                        console.log("starting input");
                        if (result[i].banner_type == 0) {
                            console.log(flag);
                            if (flag == 1) {
                                _this.picturelist.push({ "file": "http://solarmy.co.kr/" + filepath + "" + filename, "url": url, "flag": flag });
                                console.log("http://solarmy.co.kr/" + filepath + "" + filename);
                            }
                        }
                        // else{
                        //   //image
                        //   this.picturelist.push({"file":"http://solarmy.co.kr/"+filepath+""+filename,"url":url,"flag":flag})
                        //   console.log("http://solarmy.co.kr/"+filepath+""+filename)
                        // }
                        console.log(_this.picturelist);
                    }
                }
                ;
                console.log(_this.picturelist);
            }
        });
        this.http.postHttpData("/getQuotation", sendData1, function (result) {
            if (result) {
                console.log("result gogo");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    console.log(String.fromCharCode.apply(null, result[i].name.data));
                    console.log(String.fromCharCode.apply(null, result[i].email.data));
                    console.log(String.fromCharCode.apply(null, result[i].address.data));
                    var name = _this.uintToString(result[i].name.data);
                    var address = _this.uintToString(result[i].address.data);
                    var status = result[i].status;
                    console.log(status);
                    console.log(name);
                    console.log(address);
                    console.log(result[i].reg_time.split("T")[0]);
                    // this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":address,"reg_date":result[i].reg_time.split("T")[0],"status":status})
                    _this.array_quotaion.push({ "name": name.substring(0, 1) + "*" + name.substring(2, 3), "address": address, "reg_date": result[i].reg_time.split("T")[0].replace(/-/gi, "."), "status": status });
                }
                console.log(_this.array_quotaion);
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
                // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
            }
        });
        this.http.postHttpData("/getInquiry", sendData1, function (result) {
            if (result) {
                console.log("getInquiry gogo");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    var division = _this.uintToString(result[i].division.data);
                    var email = String.fromCharCode.apply(null, result[i].email.data);
                    var name = _this.uintToString(result[i].name.data);
                    var phone = String.fromCharCode.apply(null, result[i].phone.data);
                    console.log(division);
                    console.log(email);
                    console.log(name);
                    console.log(phone);
                }
                // for(var i=0; i<result.length; i++){
                //   console.log(String.fromCharCode.apply(null, result[i].name.data));
                //   console.log(String.fromCharCode.apply(null, result[i].email.data));
                //   console.log(String.fromCharCode.apply(null, result[i].address.data));
                //   var name=this.uintToString( result[i].name.data);
                //   var address=this.uintToString(result[i].address.data);
                //   var status=result[i].status;
                //   console.log(status);
                //   console.log(name);
                //   console.log(address);
                //   console.log(result[i].reg_time.split("T")[0]);
                //   this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":address,"reg_date":result[i].reg_time.split("T")[0],"status":status})
                // }
                console.log(_this.array_quotaion);
            }
            else {
                console.log("error " + result);
            }
        });
        console.log("asking for banner");
        /**
         * banner_type 이 0인 경우 host + file_path + file_name 조합으로 이미지 불러오면 됩니다. ex) http://solarmy.co.kr/solarmy_admin/uploads/test1.png
    
    영상은 url 주소 입니다.
    banner_type 이 1인경우 url 을 쓰면 됩니다.
    
         */
        this.http.postHttpData("/getInstallation", sendData1, function (result) {
            if (result) {
                console.log("getInstallation result gogo");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    console.log(result[i]);
                    var filename = String.fromCharCode.apply(null, result[i].v_file_name.data);
                    var filepath = String.fromCharCode.apply(null, result[i].v_file_path.data);
                    console.log(filename);
                    console.log(filepath);
                    var area = String.fromCharCode.apply(null, result[i].area.data);
                    var amount = String.fromCharCode.apply(null, result[i].amount.data);
                    var subject = String.fromCharCode.apply(null, result[i].subject.data);
                    var id = result[i].id;
                    var i_date = result[i].i_date;
                    console.log("http://solarmy.co.kr/" + filepath + "" + filename);
                    console.log(area);
                    console.log(amount);
                    console.log(subject);
                    console.log("mmmmmmmmmmmmmm");
                    console.log(_this.uintToString(result[i].area.data));
                    console.log(_this.uintToString(result[i].amount.data));
                    console.log(_this.uintToString(result[i].subject.data));
                    _this.arrayInstall.push({ "id": id, "i_date": i_date, "url": "http://solarmy.co.kr" + filepath + "" + filename, "area": _this.uintToString(result[i].area.data), "amount": _this.uintToString(result[i].amount.data), "subject": _this.uintToString(result[i].subject.data) });
                }
                ;
                console.log(_this.arrayInstall);
            }
        });
        this.http.postHttpData("/getInstallDetail", sendData1, function (result) {
            if (result) {
                console.log("getInstallDetail result gogo");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    console.log(result[i]);
                    var filename = "";
                    var filepath = "";
                    if (result[i].file_name != null) {
                        console.log("gogo");
                        filename = String.fromCharCode.apply(null, result[i].file_name.data);
                    }
                    if (result[i].file_path != null) {
                        filepath = String.fromCharCode.apply(null, result[i].file_path.data);
                    }
                    console.log(filename);
                    console.log(filepath);
                    var code = String.fromCharCode.apply(null, result[i].code.data);
                    var contents = String.fromCharCode.apply(null, result[i].content.data);
                    var id = result[i].id;
                    var p_id = result[i].p_id;
                    var v_flag = result[i].v_flag;
                    var reg_time = result[i].reg_time;
                    // var subject=String.fromCharCode.apply(null, result[i].subject.data) 
                    // this.array_pic.push("http://solarmy.co.kr/"+filepath+""+filename)
                    // console.log("http://solarmy.co.kr/"+filepath+""+filename)
                    // console.log(area);
                    // console.log(amount);
                    // console.log(subject);
                    // console.log("mmmmmmmmmmmmmm")
                    console.log(_this.uintToString(result[i].code.data));
                    console.log(_this.uintToString(result[i].content.data));
                    _this.arrayInstallDetail.push({ "id": id, "p_id": p_id, "v_flag": v_flag, "reg_time": reg_time, "filename": filename, "filepath": filepath, "code": _this.uintToString(result[i].code.data), "content": _this.uintToString(result[i].content.data) });
                    console.log(_this.arrayInstallDetail);
                }
                ;
            }
            else {
                console.log("getInstallDetail result gogo error " + result);
            }
        });
    };
    HomePage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    HomePage.prototype.myclientt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__my_client_my_client__["a" /* MyClientPage */], {}, { animate: false });
    };
    HomePage.prototype.supportInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__support_info_support_info__["a" /* SupportInfoPage */], {}, { animate: false });
    };
    HomePage.prototype.installcheck = function () {
        console.log(this.arrayInstallDetail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__current_install_current_install__["a" /* CurrentInstallPage */], { "array": this.arrayInstall, "array_detail": this.arrayInstallDetail }, { animate: false });
    };
    HomePage.prototype.compQuotation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__compare_quotation_compare_quotation__["a" /* CompareQuotationPage */], {}, { animate: false });
    };
    HomePage.prototype.anal = function () {
        if (this.userInfo == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */], {}, { animate: false });
            // let alert = this.alertCtrl.create({ 
            //   title: '로그인을 해주세요',
            //   // subTitle: '24시간 내에 (영업시간 기준) 분석 <br />요청하신 자료를 받아 보실 수 있습니다.',
            //   buttons: [
            //       {
            //         text: '취소',
            //         cssClass: 'cancel',
            //         handler: data => {
            //           // console.log("Cancel...", id);
            //         }
            //       },
            //       {
            //         text: '확인',
            //         cssClass: 'confirm',
            //         handler: data => {
            //         }
            //       }
            //   ]
            // });
            // alert.present({animate:false});
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
        }
    };
    HomePage.prototype.anal_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__analyse_result_analyse_result__["a" /* AnalyseResultPage */], {}, { animate: false });
    };
    HomePage.prototype.customer_center = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__custom_center_custom_center__["a" /* CustomCenterPage */], {}, { animate: false });
    };
    HomePage.prototype.service_intro = function () {
        console.log(this.videolist);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__service_intro_service_intro__["a" /* ServiceIntroPage */], { redirect: this.login_flag, "array": this.videolist }, { animate: false });
    };
    HomePage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__setting_setting__["a" /* SettingPage */], {}, { animate: false });
    };
    HomePage.prototype.isLogin = function () {
        if (this.login_flag == true)
            return true;
        else
            return false;
    };
    HomePage.prototype.isPartners = function () {
        if (this.mem_type == 1)
            return true;
        else
            return false;
    };
    // partners
    HomePage.prototype.myQuotStatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__myquot_status_myquot_status__["a" /* MyquotStatusPage */], {}, { animate: false });
    };
    HomePage.prototype.chargeGuidePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__charge_guide_charge_guide__["a" /* ChargeGuidePage */], {}, { animate: false });
    };
    HomePage.prototype.myInfoUpdate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */], {}, { animate: false });
    };
    HomePage.prototype.OneSignalInstall = function () {
        var _this = this;
        this.oneSignal.startInit('a7627c17-c314-4d42-b7d3-2f8369a77e09', '775054775564');
        var iosSettings = {
            "kOSSettingsKeyAutoPrompt": true,
            "kOSSettingsKeyInAppLaunchURL": true
        };
        this.oneSignal.iOSSettings(iosSettings);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
        });
        this.oneSignal.endInit();
        this.oneSignal.getIds().then(function (data) {
            var sendData = [];
            sendData['user_id'] = _this.user_id;
            sendData["field"] = 'token';
            sendData["value"] = data.userId;
            _this.http.postHttpData("/updateTokenId", sendData, function (result) { });
        });
    };
    //----prev, next for banner img slides------//
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "scroll", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/home/home.html"*/'\n<ion-content padding>\n  <div class="top-cont">\n      <div class="logo-cont">\n          <img class="bg" src="assets/imgs/solarmy_logo.png">\n          <img style="width: 25px;\n          height: 25px;\n          float: right;\n          position: relative;\n          top: 10px;\n          right: 25px;" src="assets/imgs/sharing.png" (click)="setting()">\n\n      </div>\n     \n     \n      \n  </div>\n \n  <div class="main-upper">\n    <div class="main-banner">\n      <div class="main-image">\n          <ion-slides #slides style="width:100% !important; height:220px"  pager >\n              <ion-slide *ngFor="let a of picturelist" (click)="opening(a)" style="width:100% !important;" >\n                  <img   src="{{a.file}}">\n              </ion-slide>\n          </ion-slides>\n      </div>\n      <img class="img-btn-before" src="assets/imgs/btn/before.png" (click)="prev()"/>\n      <img class="img-btn-next" src="assets/imgs/btn/next.png" (click)="next()"/>\n\n      <p class="banner-text">당신을 위한 맞춤형 태양광</p>\n      <p class="banner-title">SOLARMY</p>\n    </div>\n    <div class="main-login">\n        <div class="auth-cont" *ngIf="!isLogin()">\n          <button  style="   \n          text-align: center;\n          background: #e15a00;\n          width: 40%;\n    border-radius:  10px 0 0px 10px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    color: white;\n          " ion-button color="light" class="login" (click)="login()">\n         <img style="width: 12px;\n  height: 12px;" class="mark" src="assets/imgs/lock-open.png">&nbsp;\n   로그인</button>\n          <button  style="\n          color: black;\n          text-align: center;\n          background: #e97e00;\n          width: 40%;\n    border-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    color: white;\n\n          " ion-button color="light" class="register" (click)="registerPage()"><img style="width: 12px;\n    height: 12px;" class="mark" src="assets/imgs/following.png">&nbsp;회원가입</button>\n        </div>\n      </div>\n    \n      <div *ngIf="isLogin()&&isPartners()">\n        <button style="   \n        text-align: center;\n        background: #ff4000;\n    border-radius: 6px;\n  color: white;\n  width: 80%;\n        " ion-button color="light" class="login" (click)="myQuotStatus()"><img style="width: 14px;\n  height: 14px; margin-right:5px;" class="mark" src="assets/imgs/folder.png">내 견적 현황</button>\n      </div>\n    <div class="main-second" *ngIf="isLogin()">\n <div *ngIf="isLogin()&&!isPartners()">\n        <button style="   \n        text-align: center;\n    border-radius: 6px;\n        background: #ff4000;\n  color: white;\n  width: 80%;\n        " ion-button color="light" class="login" (click)="myclientt()"><img style="width: 12px;\n  height: 12px;" class="mark" src="assets/imgs/folder.png">내 의뢰 현황</button>\n </div>\n    </div>\n    <div style="    margin-top: 1em;" class="quotation">\n      <div class="up" style="display: list-item;    margin-top: 0.8em;">\n          <strong style="  font-size:18px;  float: left;\n          margin-left: 18px;" (click)="quotation();">실시간 견적현황</strong>\n          <span class="more" style="\n          float: right;\n    \n          margin-right: 30px;" (click)="quotation();">more</span>\n          <img class="arrow" src="assets/imgs/arrow.png"/>\n          <hr style="    margin: 5px 0 !important;">\n          \n      </div>\n      <div #scroll class="down">\n        <div  *ngFor="let a of array_quotaion">\n\n\n          <p class="quotationp"> {{a.address}}  </p> <p class="quotationp1 "style="width:15%; float:left;"> {{a.name}}</p><p class="quotationp2" style="width:20%; margin-right:15px; float:left;">{{a.reg_date}}</p>\n          </div>\n      </div>\n     \n\n      \n    </div>\n    <!-- <div class="main-second" *ngIf="isLogin()&&isPartners()">\n    \n    </div> -->\n\n   \n    <div  class="main-second" *ngIf="isLogin()&&!isPartners()">\n      <button  style="   \n      text-align: center;\n      background: #353b5d;\n    margin-top: 1em;\n    border-radius: 10px;\ncolor: white;\nwidth: 80%;\n      " ion-button color="light" class="login" (click)="anal()"> <img style="width: 12px;\n  height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/bar-chart.png">\n   분석 의뢰하기</button>\n      </div>\n      <div  *ngIf="isPartners()" class="baek">\n          <button   style="   \n          text-align: center;\n      -webkit-box-shadow: none !important;\n          background: #353b5d;\n      border-radius: 30px 0px 0px 30px;\n      color: white;\n          " ion-button color="light" class="login" (click)="chargeGuidePage()"><img style="width: 14px;\n      height: 12px; margin-right:5px;" class="mark" src="assets/imgs/calcu.png">이용요금 안내</button>\n      <button *ngIf="isPartners()"  style="   \n      text-align: center;\n      background: #566174;\n      color: white;\n      border-radius: 0px 30px 30px 0px;\n      margin-left: -0.5em;\n      -webkit-box-shadow: none !important;\n      " ion-button color="light" class="login" (click)=" myInfoUpdate()"><img style="width: 14px;\n      height: 12px; margin-right:5px;" class="mark" src="assets/imgs/following.png">내 정보 업데이트</button>\n        </div>\n      \n      <div class="main-second" *ngIf="!isLogin()">\n          <button style="   \n          text-align: center;\n          background: #353b5d;\n    color: white;\nmargin-top:1em;\n    border-radius: 10px;\n    width: 80%;\n          " ion-button color="light" class="login" (click)="anal()"><img style="width: 12px;\n    height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n   \n        </div>\n    \n    <!-- <div class="analyze">\n      <ion-grid class="p0 ion-grid grid_2" *ngIf="!isPartners()" (click)="login()">\n        <ion-row class="btn-cont">\n          <ion-col class="analyse">\n            <div class="middle-wrap">\n              <div class="img-top"><img class="mark" src="assets/imgs/home/analyse.png"></div>\n              <div class="text-cont"><h6>분석 의뢰하기</h6></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </div> -->\n    <div class="installation">\n      <div class="up" style="display: list-item;    margin-top: 0.8em;">\n       \n        <strong style="    float: left;\n       \n        margin-left: 15px; font-size: 18px;" (click)="installcheck()">설치 현황</strong>\n      <span class="more" style="\n      float: right;\n\n      margin-right: 30px;" (click)="installcheck();">more</span>\n      <img class="arrow" src="assets/imgs/arrow.png"/>\n      <hr style="    margin: 5px 0 !important;">\n    </div>\n      \n      <div class="w3-row-padding"> \n  \n        <div *ngFor="let a of arrayInstall" class="w3-third" style="width:50%; \n        margin-top: 1em;">\n        <div  class="w3-card">\n          <img class="installpic" src="{{a.url}}" alt="Car" style="width:100%">\n          <div class="w3-container">\n          <p style="text-align: center">{{a.subject}}</p>\n          </div>\n        </div>\n        </div>\n        \n      </div>\n    </div>\n    <div class="mainlast" >\n        <button style="   \n        text-align: center;\n  -webkit-box-shadow: none !important;\n        background: #353b5d;\n        width: 40%;\n        margin-top: 20px;\n  border-radius: 10px 0px 0px 10px;\n  color: white;\n        " ion-button color="light" class="login" (click)="service_intro()"><img style="width: 12px;\n  height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/grid.png">서비스 소개</button>\n  <button style="   \n  text-align: center;\n  background: #566174;\ncolor: white;\nmargin-top: 20px;\nwidth: 40%;\n  border-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n  -webkit-box-shadow: none !important;\n  " ion-button color="light" class="login" (click)="customer_center()"><img style="width: 12px;\nheight: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/earphone.png">고객센터</button>\n\n    </div>\n    \n\n   \n\n  </div>\n  \n  \n<ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미(Solarmy)</h3>\n    <p>통신판매업신고: 제20129-경기포천-19129호</p>\n  </div>\n</ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _l || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(291);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_naver_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_kakao_sdk__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic_ngx__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_opener_ngx__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_pdf_viewer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_first_first__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calendarmodal_calendarmodal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_auth_register_auth__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_find_pass_find_pass__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_term_term__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_custom_center_custom_center__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_setting_setting__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_support_info_support_info__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_support_sample_support_sample__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reset_password_reset_password__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_service_intro_service_intro__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_compare_quotation_compare_quotation__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_analyse_client_analyse_client__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_analyse_result_analyse_result__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_my_client_my_client__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_process_status_process_status__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_process_statmodal_process_statmodal__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_company_detail_company_detail__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_pdf_viewer_pdf_viewer__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_charge_guide_charge_guide__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_myinfo_update_myinfo_update__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_myquot_status_myquot_status__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_myquot_input_myquot_input__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_myquot_view_myquot_view__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_myquot_process_status_myquot_process_status__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_quotation_quotation__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_current_install_current_install__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_current_install_detail_current_install_detail__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_government_government__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_benefitgenerator_benefitgenerator__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// pages

























// partners















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendarmodal_calendarmodal__["a" /* CalendarmodalPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_quotation_quotation__["a" /* QuotationPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_service_intro_service_intro__["a" /* ServiceIntroPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_current_install_detail_current_install_detail__["a" /* CurrentInstallDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_auth_register_auth__["a" /* RegisterAuthPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_find_pass_find_pass__["a" /* FindPassPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_government_government__["a" /* GovernmentPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_benefitgenerator_benefitgenerator__["a" /* BenefitgeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_type_register_type__["a" /* RegisterTypePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_custom_center_custom_center__["a" /* CustomCenterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_support_info_support_info__["a" /* SupportInfoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_sample_support_sample__["a" /* SupportSamplePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_compare_quotation_compare_quotation__["a" /* CompareQuotationPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_current_install_current_install__["a" /* CurrentInstallPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_analyse_client_analyse_client__["a" /* AnalyseClientPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_analyse_result_analyse_result__["a" /* AnalyseResultPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_my_client_my_client__["a" /* MyClientPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_process_status_process_status__["a" /* ProcessStatusPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_process_statmodal_process_statmodal__["a" /* ProcessStatmodalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_company_detail_company_detail__["a" /* CompanyDetailPage */], __WEBPACK_IMPORTED_MODULE_41__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                // partners
                __WEBPACK_IMPORTED_MODULE_43__pages_charge_guide_charge_guide__["a" /* ChargeGuidePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_myquot_status_myquot_status__["a" /* MyquotStatusPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_myquot_input_myquot_input__["a" /* MyquotInputPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_myquot_view_myquot_view__["a" /* MyquotViewPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_myquot_process_status_myquot_process_status__["a" /* MyquotProcessStatusPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/service-introduction/service-introduction.module#ServiceIntroductionPageModule', name: 'ServiceIntroductionPage', segment: 'service-introduction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_government_government__["a" /* GovernmentPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_benefitgenerator_benefitgenerator__["a" /* BenefitgeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_current_install_detail_current_install_detail__["a" /* CurrentInstallDetailPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_current_install_current_install__["a" /* CurrentInstallPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_quotation_quotation__["a" /* QuotationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendarmodal_calendarmodal__["a" /* CalendarmodalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_service_intro_service_intro__["a" /* ServiceIntroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_auth_register_auth__["a" /* RegisterAuthPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_find_pass_find_pass__["a" /* FindPassPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_type_register_type__["a" /* RegisterTypePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_custom_center_custom_center__["a" /* CustomCenterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_support_info_support_info__["a" /* SupportInfoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_sample_support_sample__["a" /* SupportSamplePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_compare_quotation_compare_quotation__["a" /* CompareQuotationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_analyse_client_analyse_client__["a" /* AnalyseClientPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_analyse_result_analyse_result__["a" /* AnalyseResultPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_my_client_my_client__["a" /* MyClientPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_process_status_process_status__["a" /* ProcessStatusPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_process_statmodal_process_statmodal__["a" /* ProcessStatmodalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_company_detail_company_detail__["a" /* CompanyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                // partners
                __WEBPACK_IMPORTED_MODULE_43__pages_charge_guide_charge_guide__["a" /* ChargeGuidePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_myquot_status_myquot_status__["a" /* MyquotStatusPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_myquot_input_myquot_input__["a" /* MyquotInputPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_myquot_view_myquot_view__["a" /* MyquotViewPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_myquot_process_status_myquot_process_status__["a" /* MyquotProcessStatusPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_49__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic_ngx__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_opener_ngx__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_51__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_10_naver_login__["a" /* NaverLogin */],
                __WEBPACK_IMPORTED_MODULE_11_kakao_sdk__["b" /* KakaoCordovaSDK */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingPage = /** @class */ (function () {
    function LoadingPage(navParams) {
        this.navParams = navParams;
        this.load_txt = "";
        this.load_txt = this.navParams.get("txt");
    }
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/loading/loading.html"*/'<div class="content">\n    <div class="loading">\n        <img src="assets/imgs/loading.gif"/>\n        <p>{{ load_txt }}</p>\n    </div>\n</div>  '/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ServiceIntroPage } from '../pages/service-intro/service-intro';

var MyApp = /** @class */ (function () {
    function MyApp(app, platform, alertCtrl, 
        // splashScreen: SplashScreen,
        statusBar) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_first_first__["a" /* FirstPage */];
        this.platform.ready().then(function () {
            if (_this.platform.is('android') || _this.platform.is('ios')) {
                statusBar.styleDefault();
                // splashScreen.hide();
                _this.platform.registerBackButtonAction(function () {
                    var overlay = _this.app._appRoot._overlayPortal.getActive();
                    var modallay = _this.app._appRoot._modalPortal.getActive();
                    if (overlay && overlay.dismiss) {
                        overlay.dismiss({}, "", { animate: false });
                    }
                    else if (modallay && modallay.dismiss) {
                        modallay.dismiss({}, "", { animate: false });
                    }
                    else if (_this.navCtrl.canGoBack()) {
                        _this.navCtrl.pop({ animate: false });
                    }
                    else {
                        if (_this.navCtrl.getActive().component !== __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]) {
                            _this.app.getActiveNav().pop();
                        }
                        else {
                            var alert1 = _this.alertCtrl.create({
                                subTitle: '앱을 종료하시겠습니까?',
                                buttons: [
                                    {
                                        text: '취소',
                                        cssClass: 'cancel',
                                        handler: function (data) {
                                            // console.log("Cancel...", id);
                                        }
                                    },
                                    {
                                        text: '확인',
                                        cssClass: 'confirm',
                                        handler: function (data) {
                                            _this.platform.exitApp();
                                        }
                                    }
                                ]
                            });
                            alert1.present({ animate: false });
                        }
                    }
                }, 1);
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/app/app.html"*/'<ion-nav #rootNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic_ngx__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PdfViewerPage = /** @class */ (function () {
    function PdfViewerPage(fileOpener, file, transfer, diagnostic, inapp, document, navCtrl, navParams, modalCtrl, viewCtrl) {
        this.fileOpener = fileOpener;
        this.file = file;
        this.transfer = transfer;
        this.diagnostic = diagnostic;
        this.inapp = inapp;
        this.document = document;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.url = this.navParams.get('url');
        console.log(this.url);
        //     browser.on('loadstart').subscribe(
        //       (data) => {
        //        this.downloadfile(this.url)
        //       },
        //       err => {
        //         console.log("InAppBrowser Loadstop Event Error: " + err);
        // });
        //   let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
        //   modal.present({animate:false});
        //   setTimeout(() => {
        //     const options: DocumentViewerOptions = {
        //       title: 'My PDF'
        //     }
        //     this.document.viewDocument(this.url, 'application/pdf', options)
        //     modal.dismiss({}, "", {animate:false});
        // }, 5000);
    }
    PdfViewerPage.prototype.downloadfile = function (url) {
        var _this = this;
        console.log("INSIDE DOWNLOAD FILE", url);
        var extension = url.substr(url.length - 4);
        console.log(extension);
        if (extension == '.pdf') {
            console.log("FILE IS PDF");
            this.diagnostic.requestExternalStorageAuthorization().then(function (e) {
                var fileTransfer = _this.transfer.create();
                fileTransfer.download(url, _this.file.documentsDirectory + "receipt.pdf").then(function (entry) {
                    console.log('download complete: ' + entry.toURL());
                    _this.fileOpener.open(entry.toURL(), 'application/pdf')
                        .then(function () { return console.log('File is opened'); })
                        .catch(function (e) { return console.log('Error openening file', e); });
                }, function (error) {
                    console.log("ERRO WHILE DOWNLOADING", error);
                });
            }).catch(function (e) {
                console.log("EXTERNAL STORAGE HAS NO PERMISSIon");
            });
        }
        else {
        }
    };
    PdfViewerPage.prototype.download = function () {
        var fileTransfer = this.transfer.create();
        var url = 'http://solarmy.co.kr/solarmy_admin/uploads/15539567913.pdf';
        fileTransfer.download(url, this.file.externalDataDirectory + 'file.pdf').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            // handle error
        });
    };
    PdfViewerPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    PdfViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pdf-viewer',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/pdf-viewer/pdf-viewer.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">계약서</span>\n    <img src="assets/imgs/close.png" class="back_img" (click)="onClose()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <pdf-viewer [src]="url" \n              [show-all]="true"\n              [original-size]="false"\n              [zoom]="1.0" \n              style="display: block"\n  ></pdf-viewer> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/pdf-viewer/pdf-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic_ngx__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PdfViewerPage);
    return PdfViewerPage;
}());

//# sourceMappingURL=pdf-viewer.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// common 

var RegisterTypePage = /** @class */ (function () {
    function RegisterTypePage(navCtrl, navParams, appmgr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
    }
    RegisterTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterTypePage');
    };
    RegisterTypePage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    RegisterTypePage.prototype.registerCustomer = function () {
        this.gotoRegister(0);
    };
    RegisterTypePage.prototype.registerPartners = function () {
        this.gotoRegister(1);
    };
    RegisterTypePage.prototype.gotoRegister = function (mem_type) {
        var saveData = {
            email: '',
            password: '',
            mem_type: mem_type
        };
        this.appmgr.setSaveInfo(saveData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], {}, { animate: false });
    };
    RegisterTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-type',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/register-type/register-type.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 class="mt40">회원유형을 선택해주세요.</h3>\n  <div class="customer mt20">\n    <div class="btn-cont" (click)="registerCustomer()">\n      <div class="img-top"><img style="width:50px;" class="mark" src="assets/imgs/clientimage.png"></div>\n      <div class="center">\n        <h6 >고객 회원</h6>\n        <p>분석을 의뢰하고 싶어요</p>\n        <img class="arrow" src="assets/imgs/arrowright.png"/>\n      </div>\n     \n    </div>\n  </div>\n\n  <div class="partners mt20">\n    <div class="btn-cont" (click)="registerPartners()">\n      <div class="img-top"><img style="width:50px;" class="mark" src="assets/imgs/partnersimage.png"></div>\n      <div class="center">\n        <h6>파트너스</h6>\n        <p>태양광 설치 사업자 회원</p>\n        <img class="arrow" src="assets/imgs/arrowright.png"/>\n      </div>\n    \n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/register-type/register-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */]])
    ], RegisterTypePage);
    return RegisterTypePage;
}());

//# sourceMappingURL=register-type.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_naver_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_type_register_type__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_pass_find_pass__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// common 



// normal



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, appmgr, common, http, naver, kakaoCordovaSDK) {
        // if( navParams.get('mem_type') ) {
        //   this.mem_type = navParams.get('mem_type');  // partners
        // }else {
        //   this.mem_type = 0;  // normal member
        // }
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.naver = naver;
        this.kakaoCordovaSDK = kakaoCordovaSDK;
        this.saveId = false;
        this.savePass = false;
        this.email = '';
        this.password = '';
        this.mem_type = 0;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var saveInfo = this.appmgr.getSaveInfo();
        this.email = saveInfo.email;
        this.password = saveInfo.password;
        if (saveInfo.email != '') {
            this.saveId = true;
        }
        if (saveInfo.password != '') {
            this.savePass = true;
        }
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var str = '';
        if (this.email == '') {
            str = '이메일주소를 입력하세요.';
            this.confirmAlert(str);
            return;
        }
        else if (this.email.indexOf('@') == -1) {
            str = '이메일 형식이 올바르지 않습니다.';
            this.confirmAlert(str);
            return;
        }
        var sendData = [];
        sendData["email"] = this.email;
        sendData["password"] = this.password;
        this.http.postHttpData("/checkEmail", sendData, function (result) {
            console.log("result");
            console.log(result);
            if (result) {
                if (result == 'not-match') {
                    str = '비밀번호가 올바르지 않습니다.';
                    _this.confirmAlert(str);
                }
                else {
                    _this.mem_type = result.type;
                    var saveData = {
                        email: '',
                        password: '',
                        mem_type: 0
                    };
                    if (_this.saveId && _this.savePass) {
                        saveData = {
                            email: _this.email,
                            password: _this.password,
                            mem_type: _this.mem_type
                        };
                    }
                    else if (_this.saveId) {
                        saveData = {
                            email: _this.email,
                            password: '',
                            mem_type: _this.mem_type
                        };
                    }
                    else if (_this.savePass) {
                        saveData = {
                            email: '',
                            password: _this.password,
                            mem_type: _this.mem_type
                        };
                    }
                    _this.appmgr.setSaveInfo(saveData);
                    var userData = {
                        user_id: result.id,
                        name: result.name,
                        email: result.email,
                        login_type: 'email',
                        mem_type: result.type,
                        login_flag: 1,
                        push_flag: result.push_flag,
                        status: result.status,
                        address: result.address,
                        contact: result.contact,
                        month_fee: result.month_fee
                    };
                    _this.appmgr.setUserInfoAll(userData);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], {}, { animate: false });
                }
            }
            else {
                str = '등록되지 않은 계정입니다.';
                _this.confirmAlert(str);
            }
        });
    };
    LoginPage.prototype.findPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__find_pass_find_pass__["a" /* FindPassPage */], {}, { animate: false });
    };
    LoginPage.prototype.naverLogin = function () {
        var _this = this;
        this.naver.login()
            .then(function (result) {
            // alert(JSON.stringify(result));
            // result.email, result.nickname, result.age, result.gender(M), result.id, result.name
            // alert(result.email+"\n"+result.nickname+"\n"+result.age+"\n"+result.gender
            //                 +"\n"+result.id+"\n"+result.name);                                
            // this.navCtrl.push(LoginPage, {login_type:1, email:result.email}, {animate:false}); // 성공
            _this.checkLogin(result.email);
            // alert('naver email='+ result.email);
        }, function (err) {
            console.log("naverLogin : " + err); // 실패
        });
    };
    LoginPage.prototype.kakaotalkLogin = function () {
        var _this = this;
        var loginOptions = {};
        loginOptions['authTypes'] = [__WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["a" /* AuthTypes */].AuthTypeTalk, __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["a" /* AuthTypes */].AuthTypeStory, __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["a" /* AuthTypes */].AuthTypeAccount];
        this.kakaoCordovaSDK.login(loginOptions)
            .then(function (result) {
            // res.id, res.nickname
            console.log(result);
            console.log(result.properties.email);
            console.log(result.properties.nickname);
            // alert(result.id+"\n"+result.accessToken+"\n"+result.nickname);
            // this.navCtrl.push(LoginPage, {login_type:2, email:result.email}, {animate:false}); // 성공
            _this.checkLogin(result.id);
        }, function (err) {
            console.log(err);
            window.alert(JSON.stringify(err, Object.getOwnPropertyNames(err)));
            console.log("kakaotalkLogin Err: " + err.errorCode); // 실패
        });
    };
    LoginPage.prototype.checkLogin = function (email) {
        var _this = this;
        var sendData = [];
        sendData["email"] = email;
        this.http.postHttpData("/checkUser", sendData, function (result) {
            if (result) {
                var userData = {
                    user_id: result.id,
                    name: result.name,
                    email: result.email,
                    // login_type  : 'naver',
                    login_type: 'kakao',
                    mem_type: result.type,
                    login_flag: 1,
                    push_flag: result.push_flag,
                    status: result.status,
                    address: result.address,
                    contact: result.contact,
                    month_fee: result.month_fee
                };
                _this.appmgr.setUserInfoAll(userData);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], {}, { animate: false });
            }
            else {
                var sendData_1 = [];
                sendData_1["email"] = email;
                sendData_1["password"] = '';
                sendData_1["type"] = 0;
                sendData_1["login_type"] = 'kakao';
                _this.http.postHttpData("/registerUser", sendData_1, function (result) {
                    if (result) {
                        var saveData = {
                            email: '',
                            password: '',
                            mem_type: 0
                        };
                        _this.appmgr.setSaveInfo(saveData);
                        var userData = {
                            email: email,
                            user_id: result,
                            mem_type: 0,
                            login_flag: 1
                        };
                        _this.appmgr.setUserInfoIndivial(userData);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], {}, { animate: false });
                    }
                });
            }
        });
    };
    LoginPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/login/login.html"*/'\n<ion-content class="container">\n  <!-- <img src="assets/imgs/login/bg.png" class="background"/> -->\n  <div class="logo-cont">\n      <div class="wrap">\n        <img class="bg" src="assets/imgs/solarmy_logo.png">\n      </div>\n    </div>\n  <div class="form">\n    <ion-list>\n      <ion-item>\n        <ion-label style="font-size: 16px;\n        color: white;" floating>이메일</ion-label>\n        <ion-input [(ngModel)]="email" type="email"></ion-input>\n      </ion-item>\n    \n      <ion-item class="mt10">\n        <ion-label style="font-size: 16px;\n        color: white;"  floating>비밀번호</ion-label>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item check-cont mt10">\n      <div class="f-left itemEtc">\n        \n        <ion-checkbox [(ngModel)]="saveId" id="saveId"></ion-checkbox>\n        <ion-label for="saveId">아이디 저장</ion-label>\n        <ion-checkbox [(ngModel)]="savePass" class="ml10"></ion-checkbox>\n        <ion-label>비밀번호 저장</ion-label>\n        \n      </div>\n     \n    </div>\n    <div class="item btn-cont">\n      <a style="color:white;" (click)="login()" class="boxBtn login">\n        <img style="width: 14px;\n        height: 14px;" class="mark" src="assets/imgs/lock-open.png">&nbsp;\n  로그인</a>\n      <div class="f-right itemEtc">\n          <p style="    position: absolute;\n          left: 10%;\n      " class="text-center mt10"><a class="txtBtn" (click)="findPass()" for="findPass"  >비밀번호 찾기</a></p>\n          <p class="text-center mt10"><a class="txtBtn" (click)="registerPage()" >회원가입</a></p>\n    \n        </div>\n     \n      <!-- <a (click)="naverLogin()" class="boxBtn mt30 naver">네이버 로그인</a> -->\n      <a (click)="kakaotalkLogin()" class="boxBtn mt30 kakao">카카오톡 연결하기</a>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2_naver_login__["a" /* NaverLogin */],
            __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["b" /* KakaoCordovaSDK */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_client_my_client__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// common 



var AnalyseClientPage = /** @class */ (function () {
    function AnalyseClientPage(navCtrl, navParams, modalCtrl, alertCtrl, appmgr, common, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.user_id = 0;
        this.mem_type = 0;
        this.login_flag = false;
        this.email = '';
        this.name = '';
        this.address = '';
        this.contact = '';
        this.month_fee = "";
        // 
        this.postCode = '';
        this.building = '';
        this.searchFlag = false; // search diaolog
        this.searchValFlag = false; // search result 
        this.input_address = '';
        this.userInfo = this.appmgr.getUserInfo();
        console.log(this.userInfo);
        this.email = String.fromCharCode.apply(null, this.userInfo.email.data);
        this.user_id = this.userInfo.user_id;
        this.mem_type = this.userInfo.mem_type;
        // this.email = this.userInfo.email;
        this.name = this.uintToString(this.userInfo.name.data);
        this.address = this.uintToString(this.userInfo.address.data);
        console.log(this.address);
        // this.postCode = userInfo.zipcode,
        // this.building = userInfo.building,
        this.contact = this.uintToString(this.userInfo.contact.data);
        this.month_fee = this.userInfo.month_fee;
        this.month_fee = this.numberWithCommas(this.month_fee) + "원";
        this.postCode = this.userInfo.zipcode;
        if (this.userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
        this.postCode = '';
        this.building = '';
    }
    AnalyseClientPage.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    AnalyseClientPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_4_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    AnalyseClientPage.prototype.ionViewWillEnter = function () {
    };
    AnalyseClientPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    AnalyseClientPage.prototype.analyseClient = function () {
        var _this = this;
        if (!this.validation())
            return false;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */], { txt: "제출중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["name"] = this.name;
        sendData["address"] = this.address;
        sendData["contact"] = this.contact;
        sendData["month_fee"] = this.month_fee;
        this.http.postHttpData("/analyseNormalClient", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            if (result) {
                var alert_1 = _this.alertCtrl.create({
                    title: '의뢰해주셔서 감사합니다.',
                    subTitle: '24시간 내에 (영업시간 기준) 분석 <br />요청하신 자료를 받아 보실 수 있습니다.',
                    buttons: [
                        {
                            text: '취소',
                            cssClass: 'cancel',
                            handler: function (data) {
                                // console.log("Cancel...", id);
                            }
                        },
                        {
                            text: '확인',
                            cssClass: 'confirm',
                            handler: function (data) {
                                _this.clientSuccess();
                            }
                        }
                    ]
                });
                alert_1.present({ animate: false });
            }
        });
    };
    AnalyseClientPage.prototype.clientSuccess = function () {
        var userData = {
            name: this.name,
            address: this.address,
            zipcode: this.postCode,
            building: this.building,
            contact: this.contact,
            month_fee: this.month_fee
        };
        this.appmgr.setUserInfoIndivial(userData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_client_my_client__["a" /* MyClientPage */], {}, { animate: false });
    };
    AnalyseClientPage.prototype.validation = function () {
        var str = '';
        if (this.name == '') {
            str = '성함을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.address == '') {
            str = '주소를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.contact == '') {
            str = '연락처를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (Number(this.month_fee) <= 0) {
            str = '월평균 전기요금을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        return true;
    };
    AnalyseClientPage.prototype.isSearch = function () {
        if (this.searchFlag) {
            return true;
        }
        else {
            return false;
        }
    };
    AnalyseClientPage.prototype.toggleSearchPop = function () {
        if (this.searchFlag) {
            return this.searchFlag = false;
        }
        else {
            return this.searchFlag = true;
        }
    };
    AnalyseClientPage.prototype.searchAddress = function () {
        var _this = this;
        var sendData = [];
        sendData["search_address"] = this.input_address;
        this.http.postHttpData("/getAddressByWord", sendData, function (result) {
            if (result) {
                _this.searchValFlag = true;
                var list = "";
                for (var i = 0; i < result.length; i++) {
                    list += '<li id="address_' + i + '">' + _this.common.subString(result[i].roadAddrPart1, 27) + '</li>';
                }
                document.getElementById("search_list").innerHTML = list;
                var _loop_1 = function (i) {
                    document.getElementById("address_" + i).addEventListener('click', function (event) { return _this.selectMenu(result[i]); });
                };
                for (var i = 0; i < result.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                _this.searchValFlag = false;
            }
        });
    };
    AnalyseClientPage.prototype.selectMenu = function (selectedVal) {
        this.postCode = selectedVal.zipNo;
        this.building = selectedVal.bdNm;
        // this.address = selectedVal.jibunAddr
        this.address = selectedVal.roadAddrPart1;
        this.toggleSearchPop();
    };
    AnalyseClientPage.prototype.isSearchVal = function () {
        if (this.searchValFlag) {
            return true;
        }
        else {
            return false;
        }
    };
    AnalyseClientPage.prototype.confirmAlert = function (str) {
        var alert = this.alertCtrl.create({
            subTitle: str,
            buttons: ['확인']
        });
        alert.present({ animate: false });
    };
    AnalyseClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analyse-client',template:/*ion-inline-start:"/Users/jpd/Dropbox/solamy 2/src/pages/analyse-client/analyse-client.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">분석 의뢰하기</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  \n  <div class="form mt30">\n    <div class="alert-md">\n      <label>이메일</label>\n      <div  class="alert-input"> {{ email }} </div>\n    </div>\n    <div class="alert-md">\n      <label>성명</label>\n      <input style="    padding-top: 0;\n      padding-bottom: 0;" type="text" class="alert-input" [(ngModel)]="name"/>\n    </div>\n    <div class="alert-md">\n      <label>주소</label>\n      <input type="text" class="alert-input address" disabled value="{{postCode}}" />\n      <button style="color: white;\n      background: black;\n      border-radius: 5px;" ion-button color="light" (click)="toggleSearchPop()">주소검색</button>\n    </div>\n    <div class="alert-md">\n      <label></label>\n      <input style="    padding-top: 0;\n      padding-bottom: 0;" type="text" class="alert-input" disabled value="{{address}}"/>\n    </div>\n    <div class="alert-md">\n      <label></label>\n      <input style="    padding-top: 0;\n      padding-bottom: 0;" *ngIf="building==\'\'" placeholder="상세주소를 입력" type="text" class="alert-input"  value="{{building}}"/>\n       <input style="    padding-top: 0;\n       padding-bottom: 0;" *ngIf="building!=\'\'" type="text" class="alert-input"  value="{{building}}"/>\n    </div>\n    <div class="alert-md">\n      <label>연락처</label>\n      <input type="number" class="alert-input" [(ngModel)]="contact" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <div class="alert-md double">\n      <label>월평균 전기요금</label>\n      <input type="text" class="alert-input" [(ngModel)]="month_fee" />\n    </div>\n    \n    <div class="btn-cont">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="/assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n  \n  </div>\n</ion-content>\n\n<div *ngIf="isSearch()" class="search">\n  <div (click)="toggleSearchPop()" class="bg"></div>\n  <div class="result-wrap">\n    <div class="top-area etcForm">\n      <ion-searchbar [(ngModel)]="input_address" (ionInput)="searchAddress()" placeholder="주소를 입력해 주세요."></ion-searchbar>\n    </div>\n    <ul *ngIf="!isSearchVal()" class="result">\n      <li>주소를 상세히 입력해 주세요.</li>\n    </ul>\n    <ul class="result" id="search_list">\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/jpd/Dropbox/solamy 2/src/pages/analyse-client/analyse-client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */]])
    ], AnalyseClientPage);
    return AnalyseClientPage;
}());

//# sourceMappingURL=analyse-client.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    HttpProvider.prototype.postHttpData = function (subUrl, sendData, callback) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* CONFIG */].http_server + subUrl;
        var postData = new FormData();
        var array_key = Object.keys(sendData);
        for (var idx = 0; idx < array_key.length; idx++) {
            postData.append(array_key[idx], sendData[array_key[idx]]);
        }
        var data = this.http.post(url, postData);
        data.subscribe(function (res) {
            if (res.errcode == 'ok') {
                callback(res.errmsg);
            }
            else if (res.errcode == 'fail') {
                callback(null);
            }
        }, function (err) {
            console.log("postHttpData" + JSON.stringify(err));
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var PUSH_APP_ID = "a7627c17-c314-4d42-b7d3-2f8369a77e09";
// const SERVER_IP = "192.168.2.131";
// const SERVER_IP = "solarmy.cafe24app.com";
var SERVER_IP = "localhost:3200";
var HTTP_PORT = 8001;
var IMG_URL = "http://" + SERVER_IP + "/solarmy_server/uploads/"; // url of http server
var ESCRO_URL = "http://" + SERVER_IP + "/solarmy_admin/escro/escro"; // url of http server
var CONFIG = {
    http_server: "http://" + SERVER_IP,
    IMG_URL: IMG_URL,
    PUSH_APP_ID: PUSH_APP_ID,
    ESCRO_URL: ESCRO_URL
};
//몇번 해봤는데대표님 덕분에 납땜 됩니다! 다음에 명함 나오자마자 말씀드리고 첫번째로 찾아뵙도록 하겠습니다! 감사합니다 :) 사업이야기 더 들려주 술 
// const length = q.length;
//     let count = 0;
//     let i = 0;
//     for (i = length; i > 0; i--) { 
//         let indexOfi = q.indexOf(i);
//         if (indexOfi !== i - 1) { 
//             q.splice(indexOfi, 1);
//             q.splice(i - 1, 0, i);
//             let cal = i - 1 - indexOfi;
//             if (cal <= 2) {
//                 count += cal;
//             } else {
//                 console.log("Too chaotic");
//                 return;
//             }
//         }
//     }
//     console.log(count);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmgrProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { EmailValidator } from '../../../node_modules/@angular/forms';
var AppmgrProvider = /** @class */ (function () {
    /*********************/
    function AppmgrProvider(event, platform) {
        var _this = this;
        this.event = event;
        this.platform = platform;
        this.sqlite = null;
        this.database = null;
        this.userInfo = {
            user_id: 0,
            name: "",
            email: "",
            login_type: '',
            mem_type: 0,
            login_flag: 0,
            // 
            push_flag: 1,
            status: 1,
            address: '',
            zipcode: '',
            building: '',
            contact: '',
            month_fee: 0,
            service_intro: 1
        };
        // saveInfo = {
        //   email : "",
        //   password : "",
        //   mem_type : 0
        // };
        /********test*********/
        // userInfo = {
        //     user_id : 1,
        //     name : "test",
        //     email : "test@mail.com",
        // login_type : 0,
        //     mem_type : 0,
        //     login_flag : 1,
        //     // 
        //     push_flag: 1,
        //     status: 1,
        //     address: '',
        //     contact: '',
        //     month_fee: 0
        // };
        this.saveInfo = {
            email: "",
            password: "",
            mem_type: 0
        };
        this.platform.ready().then(function () {
            if (_this.platform.is('android') || _this.platform.is('ios')) {
                _this.sqlite = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
                var self = _this;
                self.sqlite.create({
                    name: 'solarmy.db',
                    location: 'default'
                }).then(function (db) {
                    self.database = db;
                    self.sqliteGetUserData();
                    console.log("db created!!!");
                });
            }
        });
    }
    AppmgrProvider.prototype.getQuo = function () {
    };
    AppmgrProvider.prototype.sqliteGetUserData = function () {
        var _this = this;
        console.log("sqliteGetUserData come");
        this.database.executeSql('CREATE TABLE IF NOT EXISTS userinf(rowid INTEGER PRIMARY KEY, user_id INT, name TEXT, email TEXT, login_type TEXT, mem_type INT, login_flag INT, ' +
            'push_flag INT, status INT, address TEXT, zipcode TEXT, building TEXT, contact TEXT, month_fee INT, service_intro INT)', [])
            .then(function (res) { return console.log('Executed SQL'); })
            .catch(function (e) {
            alert("sqliteGetUserData CREATE Catch : " + JSON.stringify(e));
        });
        this.database.executeSql('SELECT * FROM userinf ', [])
            .then(function (res) {
            if (res.rows.length == 0) {
                _this.database.executeSql('INSERT INTO userinf VALUES(NULL,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [_this.userInfo.user_id, _this.userInfo.name, _this.userInfo.email, _this.userInfo.login_type, _this.userInfo.mem_type, _this.userInfo.login_flag,
                    _this.userInfo.push_flag, _this.userInfo.status, _this.userInfo.address, _this.userInfo.zipcode, _this.userInfo.building,
                    _this.userInfo.contact, _this.userInfo.month_fee, _this.userInfo.service_intro])
                    .then(function (res) {
                    // alert("sqliteGetUserData1... type="+this.userInfo.mem_type+":"+"login_flag="+this.userInfo.login_flag);
                    _this.event.publish("get_sqlite_data", _this.userInfo);
                    console.log("userInfo come" + _this.userInfo);
                })
                    .catch(function (e) { alert("sqliteGetUserData : " + JSON.stringify(e)); });
            }
            else {
                _this.userInfo.user_id = res.rows.item(0).user_id;
                _this.userInfo.name = res.rows.item(0).name;
                _this.userInfo.email = res.rows.item(0).email;
                _this.userInfo.login_type = res.rows.item(0).login_type;
                _this.userInfo.mem_type = res.rows.item(0).mem_type;
                _this.userInfo.login_flag = res.rows.item(0).login_flag;
                _this.userInfo.push_flag = res.rows.item(0).push_flag;
                _this.userInfo.status = res.rows.item(0).status;
                _this.userInfo.address = res.rows.item(0).address;
                _this.userInfo.zipcode = res.rows.item(0).zipcode;
                _this.userInfo.building = res.rows.item(0).building;
                _this.userInfo.contact = res.rows.item(0).contact;
                _this.userInfo.month_fee = res.rows.item(0).month_fee;
                _this.userInfo.service_intro = res.rows.item(0).service_intro;
                _this.event.publish("get_sqlite_data", _this.userInfo);
            }
            // ////////////////////// for save data
            _this.database.executeSql('CREATE TABLE IF NOT EXISTS saveInfo(rowid INTEGER PRIMARY KEY, email TEXT, password TEXT, mem_type INT)', [])
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) {
                alert("sqliteGetUserData CREATE Catch : " + JSON.stringify(e));
            });
            _this.database.executeSql('SELECT * FROM saveInfo ', [])
                .then(function (res) {
                if (res.rows.length == 0) {
                    _this.database.executeSql('INSERT INTO saveInfo VALUES(NULL,?, ?, ?)', [_this.saveInfo.email, _this.saveInfo.password, _this.saveInfo.mem_type])
                        .then(function (res) {
                    })
                        .catch(function (e) { alert("sqliteGetUserData saveInfo : " + JSON.stringify(e)); });
                }
                else {
                    _this.saveInfo.email = res.rows.item(0).email;
                    _this.saveInfo.password = res.rows.item(0).password;
                }
            })
                .catch(function (e) {
                alert("sqliteGetUserData executeSql Catch : " + JSON.stringify(e));
            });
        });
    };
    AppmgrProvider.prototype.sqliteSaveUserData = function () {
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.database.executeSql('UPDATE userinf SET user_id="' + this.userInfo.user_id + '", name="' + this.userInfo.name + '", email="' + this.userInfo.email
                + '", login_type="' + this.userInfo.login_type + '", mem_type="' + this.userInfo.mem_type + '", login_flag="' + this.userInfo.login_flag + '", push_flag="' + this.userInfo.push_flag + '", status="' + this.userInfo.status
                + '", address="' + this.userInfo.address + '", zipcode="' + this.userInfo.zipcode + '", building="' + this.userInfo.building + '", contact="' + this.userInfo.contact + '", month_fee="' + this.userInfo.month_fee + '", service_intro="' + this.userInfo.service_intro + '" WHERE rowid=1', [])
                .then(function (res) { })
                .catch(function (e) {
                alert("sqliteSaveUserData executeSql Catch : " + JSON.stringify(e));
            });
        }
    };
    AppmgrProvider.prototype.getUserInfo = function () {
        console.log("user info is : ");
        console.log(this.userInfo);
        return this.userInfo;
    };
    AppmgrProvider.prototype.setUserInfoAll = function (data) {
        console.log("setUserInfoAll");
        this.userInfo.user_id = data.user_id;
        this.userInfo.name = data.name;
        this.userInfo.email = data.email;
        this.userInfo.login_type = data.login_type;
        this.userInfo.mem_type = data.mem_type;
        this.userInfo.login_flag = data.login_flag;
        this.userInfo.push_flag = data.push_flag;
        this.userInfo.status = data.status;
        this.userInfo.address = data.address;
        this.userInfo.contact = data.contact;
        this.userInfo.month_fee = data.month_fee;
        // console.log('setUserInfoAll', this.userInfo);
        this.sqliteSaveUserData();
    };
    AppmgrProvider.prototype.setUserInfoIndivial = function (data) {
        this.userInfo.user_id = data.user_id ? data.user_id : this.userInfo.user_id;
        this.userInfo.name = data.name ? data.name : this.userInfo.name;
        this.userInfo.email = data.email ? data.email : this.userInfo.email;
        this.userInfo.login_type = data.login_type ? data.login_type : this.userInfo.login_type;
        this.userInfo.mem_type = data.mem_type ? data.mem_type : this.userInfo.mem_type;
        this.userInfo.login_flag = data.login_flag ? data.login_flag : this.userInfo.login_flag;
        this.userInfo.push_flag = data.push_flag ? data.push_flag : this.userInfo.push_flag;
        this.userInfo.status = data.status ? data.status : this.userInfo.status;
        this.userInfo.address = data.address ? data.address : this.userInfo.address;
        this.userInfo.zipcode = data.zipcode ? data.zipcode : this.userInfo.zipcode;
        this.userInfo.building = data.building ? data.building : this.userInfo.building;
        this.userInfo.contact = data.contact ? data.contact : this.userInfo.contact;
        this.userInfo.month_fee = data.month_fee ? data.month_fee : this.userInfo.month_fee;
        this.userInfo.service_intro = data.service_intro == 0 ? 0 : 1;
        // console.log('setUserInfoIndivial', this.userInfo);
        this.sqliteSaveUserData();
    };
    ////////////////// for save user email & password
    AppmgrProvider.prototype.sqliteUpdateSaveData = function () {
        if (this.platform.is('android') || this.platform.is('ios')) {
            this.database.executeSql('UPDATE saveInfo SET email="' + this.saveInfo.email + '", password="' + this.saveInfo.password + '", mem_type="' + this.saveInfo.mem_type + '" WHERE rowid=1', [])
                .then(function (res) { })
                .catch(function (e) {
                alert("sqliteSaveUserData executeSql Catch : " + JSON.stringify(e));
            });
        }
    };
    AppmgrProvider.prototype.getSaveInfo = function () {
        return this.saveInfo;
    };
    AppmgrProvider.prototype.setSaveInfo = function (data) {
        this.saveInfo.email = data.email;
        this.saveInfo.password = data.password;
        this.saveInfo.mem_type = data.mem_type;
        // console.log("this.saveInfo=", this.saveInfo);
        this.sqliteUpdateSaveData();
    };
    AppmgrProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], AppmgrProvider);
    return AppmgrProvider;
}());

//# sourceMappingURL=appmgr.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map