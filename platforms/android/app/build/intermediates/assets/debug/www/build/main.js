webpackJsonp([2],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(76);
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareQuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(47);
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
        this.partnerflag = this.navParams.get("partnerflag");
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
        if (this.login_flag) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: false });
        }
    };
    CompareQuotationPage.prototype.isLogin = function () {
        if (this.login_flag == true)
            return true;
        else
            return false;
    };
    CompareQuotationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compare-quotation',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/compare-quotation/compare-quotation.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비교견적</span>\n      <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="top-wrap">\n    <p class="intro">\n      인증된 태양광 설치 제품을 반영하여, 최고의 전문가로 <br/>구성된 지역 태양광 업체들로부터 받은 견적을 분석하여 <br/>가장 좋은 조건의 업체를 추천해드립니다.\n    </p>\n\n    <div class="ranking">\n      <div><img src="assets/imgs/comp_quotation/ranking2.png"></div>\n      <h3 >추천 1순위~3순위<span>(최저가, 보증, 평가)</span></h3>\n    </div>\n  </div>\n\n  <ion-grid class="p0 ion-grid grid_1 mt20">\n    <ion-row class="btn-cont">\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/comp_quotation/expect_price.png"></div>\n          <div class="text-cont"><h6>예상가격</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/comp_quotation/compability.png"></div>\n          <div class="text-cont"><h6>예상설치용량</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 32px;" src="assets/imgs/comp_quotation/module.png"></div>\n          <div class="text-cont"><h6>모듈제품</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_2">\n    <ion-row class="btn-cont">\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 22px;" src="assets/imgs/comp_quotation/inverter.png"></div>\n          <div class="text-cont"><h6>인버터제품</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 30px;" src="assets/imgs/comp_quotation/consure.png"></div>\n          <div class="text-cont"><h6>보증여부</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="bgdblue">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" style="width: 30px;" src="assets/imgs/comp_quotation/as.png"></div>\n          <div class="text-cont"><h6>A/S조건</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="btn-wrap" >\n    <div *ngIf="!partnerflag" class="btn-cont mt20">\n      <button ion-button color="light" (click)="login()" class="boxBtn analyseClient"><img src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n    \n    <div *ngIf="!login_flag" class="login-cont">\n      <button ion-button color="light" class="login" (click)="login()"><img style="width: 20px;\n        height: 20px; margin-right: 5px" class="mark" src="assets/imgs/lock-open.png">&nbsp;로그인</button>\n      <button ion-button color="light" class="register" (click)="registerPage()"><img style="width: 20px;\n        height: 20px; margin-right: 5px" class="mark" src="assets/imgs/following.png">회원가입</button>\n    </div>\n  </div>\n\n  <!-- <div class="btn-wrap" *ngIf="isLogin()">\n    <div class="btn-cont mt40">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n    </div>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/compare-quotation/compare-quotation.html"*/,
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyse_result_analyse_result__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_status_process_status__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(22);
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
        this.result = [];
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
        console.log(this.user_id);
        this.http.postHttpData("/getAnalyseByUserId", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log("getAnalyseByUserId");
            console.log(result);
            _this.result = result;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], { animate: false });
    };
    MyClientPage.prototype.analyseResult = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__analyse_result_analyse_result__["a" /* AnalyseResultPage */], { analyse_id: id }, { animate: false });
    };
    MyClientPage.prototype.processStatus = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_status_process_status__["a" /* ProcessStatusPage */], { analyse_id: id, array: this.result }, { animate: false });
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
                if (!this.clientData[i].contract_time || this.clientData[i].contract_time == "0000-00-00 00:00:00") {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    MyClientPage.prototype.returnData = function (date) {
        // console.log(date);
        if (!date) {
            return '';
        }
        if (date == "0000-00-00 00:00:00") {
            console.log("????");
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
            selector: 'page-my-client',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/my-client/my-client.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">내 의뢰 현황</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n  \n<ion-content padding>\n \n\n  <ion-grid class="p0 ion-grid" *ngFor="let item of clientData ; let idx = index">\n    <ion-row>\n      <ion-col col-12>\n        <div class="wrap">\n          <p style="width: 45%;\n          display: inline-table;" class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n          <p style="width: 45%;\n          margin-left: 25px;\n          display: inline-table;" class="contract mt1" *ngIf="hasContDate( idx )">[계약일] <span>{{ returnData(item.contract_time) }}</span> </p>\n          <div class="address mt10">ㆍ{{item.address}}</div>\n          <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n        </div>\n\n        <div class="btn-cont">\n          <div class="analyseBtn" (click)="analyseResult(item.id)">\n            <img src="assets/imgs/bar-chart.png">분석결과\n          </div>\n          <div class="process" (click)="processStatus(item.id)">\n            <img src="assets/imgs/check.png">진행현황\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="mt30 b-none" *ngIf="!isClient()">\n    <div class="address mt30 text-center">의뢰한 목록이 없습니다.</div>\n    \n    <div class="btn-client mt30">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/my-client/my-client.html"*/,
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(35);
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
            selector: 'page-analyse-result',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/analyse-result/analyse-result.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">분석결과</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n  \n<ion-content padding>\n  <div *ngIf="hasAnResult()">\n    <div class="top-wrap">\n      <img style="width: 100%;\n      height: 240px;\n      margin: auto;\n      display: -webkit-box;"\n      src="{{roof_path}}" >\n    </div>\n    <h3 class="address">\n      <img src="assets/imgs/analyse/area.png"> {{ address }}\n    </h3>\n\n    <ion-grid class="p0 ion-grid" >\n      <ion-row>\n        <ion-col col-12>\n            <div class="btn-cont">\n                <div class="analyseBtn" (click)="analyseResult(item.id)">\n                  <img src="assets/imgs/analyse_result.png">전기료 감면효과\n                </div>\n              </div>\n          <div class="wrap">\n              <div style="    margin-top: 3.5em;" class="content gray">\n                  우리집 월평균 전기요금 <span style="color:#247ccd; float: right;">{{ numFormat(\'month_fee\') }}</span>\n                </div>\n                <div class="content yellow">\n                  전기료 예상 절감액 <span style="color:#247ccd; float: right;text-align: right;">- {{ numFormat(\'sale_fee\') }}</span>\n                </div>\n                <div class="content light-blue">\n                  설치후 전기요금 <span style="color:#247ccd; float: right;">{{ numFormat(\'elect_fee\') }}</span>\n                </div>\n               \n          </div>\n          <div style="background-color: #f6f6f6;     color: #247ccd;\n        " class="wrap2">\n              <div class="description blue">\n                  <p>20년간 누적 예상 전기요금 절감액</p>\n                  <h3> {{ numFormat(\'expect_elect_fee\') }} <span>만원</span> </h3>\n                </div>\n          </div>\n  \n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="p0 ion-grid" >\n        <ion-row>\n          <ion-col col-12>\n              <div class="btn-cont">\n                  <div style="background:#e97e00" class="analyseBtn" (click)="analyseResult(item.id)">\n                    <img src="assets/imgs/analyse_result.png"> 태양광 최적 설치 정보\n                  </div>\n                </div>\n            <div class="wrap">\n                <!-- <div style=" margin-top: 3.5em;" class="content gray">\n                  <div  class="analyseBtn" (click)="analyseResult(item.id)">\n                    우리집 월평균 전기요금 <span style="color:#e97e00;float: right;">{{ numFormat(\'month_fee\') }}</span>\n                  </div>\n                  <div class="content yellow">\n                    전기료 예상 절감액 <span style="color:#e97e00;float: right;">- {{ numFormat(\'sale_fee\') }}</span>\n                  </div>\n                  <div class="content light-blue">\n                    설치후 전기요금 <span style="color:#e97e00;float: right;">{{ numFormat(\'elect_fee\') }}</span>\n                  </div>\n                 </div> -->\n                 <div style=" margin-top: 3.5em;" class="content gray">\n                    태양광 최적 설치 용량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'solar_power\') }}kw</span>\n                  </div>\n                  <div class="content gray">\n                    최적각도 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'opt_angle\') }}도</span>\n                  </div>\n                  <div class="content gray">\n                    월간 예상 평균 발전량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'month_expect_power\') }}kw</span>\n                  </div>\n                  <div class="content gray">\n                    20년간 누적 예상 발전량 <span style="color:#e97e00;float: right;" class="blue">{{ numFormat(\'expect_power\') }}kw</span>\n                  </div>\n            </div>\n           \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="p0 ion-grid" >\n          <ion-row>\n            <ion-col col-12>\n                <div class="btn-cont">\n                    <div style="background: #7da808" class="analyseBtn" (click)="analyseResult(item.id)">\n                      <img src="assets/imgs/analyse_result.png">탄소저감효과\n                    </div>\n                  </div>\n                  <div class="wrap2">\n                      <div style="margin-top: 3.5em;" class="description blue">\n                          <p style="    font-size: 16px;" class="gray">30년생 소나무 심는 효과(20년간 누적 기준)</p>\n                          <h3 class="deep-green" style="color:#7da808"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> {{ numFormat(\'tree_effect\') }} <span>그루</span> </h3>\n                        </div>\n                        <div class="description blue">\n                          <p style="    font-size: 16px;" class="gray">CO2 탄소 저감 효과(20년간 누적 기준)</p>\n                          <h3 class="blue" style="color:#7da808"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> {{ numFormat(\'co_pexpect\') }} <span>톤</span> </h3>\n                        </div>\n                  </div>\n                 \n      \n             \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-grid class="p0 ion-grid" >\n        <ion-row>\n          <ion-col col-12>\n              <div class="btn-cont">\n                  <div style="background:#8b8b8b" class="analyseBtn" (click)="analyseResult(item.id)">\n                    <img src="assets/imgs/analyse_result.png">기타사항\n                  </div>\n                </div>\n                <div   class="wrap2">\n                    <div style="text-align: left !important;" class="description blue">\n                        <p style=" margin-top: 50px;" class="gray"> {{ etc }}</p>\n                      </div>\n                </div>\n               \n                \n    \n           \n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    \n    <!-- <div class="wrap">\n      <div class="title module">\n        <img src="assets/imgs/analyse/module.png" width="20"> 태양광 최적 설치 정보\n      </div>\n     \n    </div>\n\n    <div class="wrap">\n      <div class="title module carborn">\n        <img src="assets/imgs/analyse/carborn-sale.png" width="20"> 탄소저감효과\n      </div>\n      <div class="description blue">\n        <p class="gray">30년생 소나무 심는 효과</p>\n        <h3 class="deep-green"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> {{ numFormat(\'tree_effect\') }} <span>그루</span> </h3>\n      </div>\n      <div class="description blue">\n        <p class="gray">CO2 탄소 저감 효과</p>\n        <h3 class="blue"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> {{ numFormat(\'co_pexpect\') }} <span>톤</span> </h3>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div class="no-data text-center" *ngIf="!hasAnResult()">\n    <h3>분석 진행중입니다.</h3>\n    <p>\n      24시간 내에 (영업시간 기준) 분석 요청하신 <br/>\n      자료를 받아 보실 수 있습니다.\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/analyse-result/analyse-result.html"*/,
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

/***/ 134:
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
            selector: 'page-calendarmodal',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/calendarmodal/calendarmodal.html"*/'<div class="modal_wrapper">    \n</div>\n<div class="modal_content">        \n    <div class="title_bar"></div>\n    <div class="calendar_container">\n        <div *ngFor="let item of calendarArr ; let idx = index" class="content">\n            <ion-row class="mt5">\n                <ion-col col-1></ion-col>\n                <ion-col col-3>\n                    <div class="border"></div>\n                </ion-col>\n                <ion-col col-4 class="date_txt">{{item.year}}년 {{item.month}}월</ion-col>\n                <ion-col col-3>\n                    <div class="border"></div>\n                </ion-col>\n                <ion-col col-1></ion-col>\n            </ion-row>\n            <div class="calendar_content mt5">\n                <div class="weekday">일</div>\n                <div class="weekday">월</div>\n                <div class="weekday">화</div>\n                <div class="weekday">수</div>\n                <div class="weekday">목</div>\n                <div class="weekday">금</div>\n                <div class="weekday">토</div>\n            </div>        \n            <div *ngFor="let days of item.days ; let idx = index" class="calendar_content">\n                <div (click)="selDay(item.year, item.month, days[0])" class="{{ isEnableSel(item.year, item.month, days[0]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[0])" class="today">{{ days[0] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[0])" class="other">{{ days[0] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[1])" class="{{ isEnableSel(item.year, item.month, days[1]) }}">\n                        <div *ngIf="isToday(item.year, item.month, days[1])" class="today">{{ days[1] }}</div>\n                        <div *ngIf="!isToday(item.year, item.month, days[1])" class="other">{{ days[1] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[2])" class="{{ isEnableSel(item.year, item.month, days[2]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[2])" class="today">{{ days[2] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[2])" class="other">{{ days[2] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[3])" class="{{ isEnableSel(item.year, item.month, days[3]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[3])" class="today">{{ days[3] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[3])" class="other">{{ days[3] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[4])" class="{{ isEnableSel(item.year, item.month, days[4]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[4])" class="today">{{ days[4] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[4])" class="other">{{ days[4] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[5])" class="{{ isEnableSel(item.year, item.month, days[5]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[5])" class="today">{{ days[5] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[5])" class="other">{{ days[5] }}</div>\n                </div>\n                <div (click)="selDay(item.year, item.month, days[6])" class="{{ isEnableSel(item.year, item.month, days[6]) }}">\n                    <div *ngIf="isToday(item.year, item.month, days[6])" class="today">{{ days[6] }}</div>\n                    <div *ngIf="!isToday(item.year, item.month, days[6])" class="other">{{ days[6] }}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button ion-button class="mt15" (click)="cancel()">취소</button>\n    <button ion-button class="mt15 other_btn" (click)="confirm()">확인</button>\n</div>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/calendarmodal/calendarmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalendarmodalPage);
    return CalendarmodalPage;
}());

//# sourceMappingURL=calendarmodal.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myquot_input_myquot_input__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myquot_view_myquot_view__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myquot_process_status_myquot_process_status__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(22);
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
    function MyquotStatusPage(alertCtrl, navCtrl, navParams, appmgr, common, http, modalCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
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
        this.regStatus = this.navParams.get("regStatus");
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
                    // if(this.quotData[i].reg_time
                    var date = new Date();
                    console.log(date);
                    var timestamp = date.getTime();
                    var pastTime = new Date(result[i].reg_time);
                    console.log(pastTime);
                    // var newdate=date-pastTime;
                    var timeDiff = Math.abs(date.getTime() - pastTime.getTime());
                    // days difference
                    var diff = Math.abs(date.getTime() - pastTime.getTime()) / 3600000;
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600));
                    console.log(diff);
                    console.log(diffDays);
                    if (diffDays < 25) {
                        _this.quotData.push({ "solar_power": result[i].solar_power, "reg_time": result[i].reg_time, "id": result[i].analyse_id, "month_fee": result[i].month_fee, "contract_time": result[i].contract_time, "address": _this.uintToString(result[i].address.data).split(" ")[0] + _this.uintToString(result[i].address.data).split(" ")[1] });
                    }
                }
                console.log(_this.quotData);
                var tag = "reg_time";
                _this.quotData.sort(function (a, b) {
                    console.log(a[tag]);
                    // convert date object into number to resolve issue in typescript
                    var dateA = new Date(a[tag]).getTime();
                    var dateB = new Date(b[tag]).getTime();
                    return dateB > dateA ? 1 : -1;
                });
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
                    console.log("iiiiiiiiiii is : " + i);
                    console.log(result);
                    _this.submitCont.push({ "submit_cont_time": result[i].submit_cont_time, "solar_power": result[i].solar_power, "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "address": _this.uintToString(result[i].address.data).split(" ")[0] + _this.uintToString(result[i].address.data).split(" ")[1], "month_fee": result[i].month_fee });
                }
                console.log(_this.submitCont);
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
        // 계약완료, 계약대기
        this.http.postHttpData("/getAgreeContract", sendData1, function (result) {
            if (result) {
                console.log("계약대기 완료 출력시작");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    //  reg_time,submit_cont_time,address,month_fee
                    console.log(result[i].contract_path.data);
                    _this.agreeCont.push({ "ins_exp_time": result[i].ins_exp_time, "contract_time": result[i].contract_time, "status": result[i].status, "contract_path": _this.uintToString(result[i].contract_path.data), "quote_status": result[i].quote_status, "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "submit_cont_time": result[i].submit_cont_time, "address": _this.uintToString(result[i].address.data), "month_fee": result[i].month_fee });
                }
                var tag = "reg_time";
                _this.agreeCont.sort(function (a, b) {
                    console.log(a[tag]);
                    // convert date object into number to resolve issue in typescript
                    var dateA = new Date(a[tag]).getTime();
                    var dateB = new Date(b[tag]).getTime();
                    return dateB > dateA ? 1 : -1;
                });
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
                    _this.complCont.push({ "contract_time": result[i].contract_time, "status": result[i].status, "id": result[i].id, "reg_time": result[i].reg_time, "analyse_id": result[i].analyse_id, "address": _this.uintToString(result[i].address.data), "month_fee": result[i].month_fee });
                }
                var tag = "reg_time";
                _this.complCont.sort(function (a, b) {
                    console.log(a[tag]);
                    // convert date object into number to resolve issue in typescript
                    var dateA = new Date(a[tag]).getTime();
                    var dateB = new Date(b[tag]).getTime();
                    return dateB > dateA ? 1 : -1;
                });
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
        console.log("sssssback");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */], { animate: false });
    };
    // 요청 견적
    MyquotStatusPage.prototype.quotation = function (analyse_id, solar) {
        if (this.regStatus == 0) {
            var alert_1 = this.alertCtrl.create({
                title: '승인 후에 견적내기 가능합니다',
                subTitle: '24시간 이내에<br />담당자가 연락드립니다',
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myquot_input_myquot_input__["a" /* MyquotInputPage */], { comapny_id: this.user_id, analyse_id: analyse_id, "solar": solar }, { animate: false });
        }
    };
    // 제출한 견적
    MyquotStatusPage.prototype.quotationView = function (id, analyse_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myquot_view_myquot_view__["a" /* MyquotViewPage */], { cont_id: id, analyse_id: analyse_id }, { animate: false });
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
            selector: 'page-myquot-status',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-status/myquot-status.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <strong class="title">내 견적 현황</strong>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-segment [(ngModel)]="tab">\n  <ion-segment-button value="tab1">\n    요청 견적\n  </ion-segment-button>\n  <ion-segment-button value="tab2">\n    제출한 견적\n  </ion-segment-button>\n  <ion-segment-button value="tab3">\n    진행현황\n  </ion-segment-button>\n  \n</ion-segment>\n<!-- 요청 견적 -->\n<ion-content>\n  <div [ngSwitch]="tab">\n    <ion-list *ngSwitchCase="\'tab1\'">\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of quotData ; let idx = index">\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <div class="address mt10">ㆍ{{ item.address }}</div>\n              <div class="fee">태양광설치 용량: {{item.solar_power}} Kw </div>\n            </div>\n\n            <div class="btn-cont">\n              <div class="quotation" (click)="quotation(item.id,item.solar_power)">\n                <img src="assets/imgs/calcu.png">견적내기\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <h3 class="tip" *ngIf="!hasQuot()">요청중인 견적이 없습니다.</h3>\n    </ion-list>\n    <!-- 제출한 견적 -->\n    <ion-list *ngSwitchCase="\'tab2\'">\n      \n      <ion-grid class="p0 ion-grid" *ngFor="let item of submitCont ; let idx = index">\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p style="    width: 45%;\n              float: left;" class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <p style="    float: right;\n              width: 45%;\n\n              margin: 0;\n              margin-top: 0px !important;" class="contract mt1">[제출일자] <span>{{returnData(item.submit_cont_time)}}</span> </p>\n            \n              <div style="margin-top:25px !important;" class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n              <div style="margin-top:15px !important;" class="fee">태양광설치 용량: {{item.solar_power}} Kw </div>\n            </div>\n\n            <div class="btn-cont">\n              <div class="quotation" (click)="quotationView(item.id,item.analyse_id)">\n                <img src="assets/imgs/quotation_view.png">견적보기\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <h3 class="tip" *ngIf="!hasSubmitCont()">제출한 견적이 없습니다.</h3>\n    </ion-list>\n    <!-- 계약 -->\n    <ion-list class="contract" *ngSwitchCase="\'tab3\'">\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of agreeCont ; let idx = index">\n        <img style="width: 70px; margin-left: 5%;" *ngIf="item.ins_exp_time!=null&&item.ins_exp_time!=\'0000-00-00 00:00:00\'" src="assets/imgs/계약완료.png"/>\n        <img style="width: 70px; margin-left: 5%;" *ngIf="item.ins_exp_time==null||item.ins_exp_time==\'0000-00-00 00:00:00\'" src="assets/imgs/계약 대기.png"/>\n        <ion-row>\n          <ion-col col-12>\n            <div class="wrap">\n              <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n              <p class="contract mt1">[계약일] <span>{{returnData(item.contract_time)}}</span> </p>\n              <div class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n              <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n            </div>\n\n            <div class="btn-cont">\n              <div  *ngIf="item.ins_exp_time!=null&&item.ins_exp_time!=\'0000-00-00 00:00:00\'"class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                <img src="assets/imgs/calcu.png">진행현황\n              </div>\n              <div style="background : #e18f00"  *ngIf="item.ins_exp_time==null||item.ins_exp_time==\'0000-00-00 00:00:00\'"class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                  <img src="assets/imgs/calcu.png">계약하기\n                </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid class="p0 ion-grid" *ngFor="let item of complCont ; let idx = index">\n          <img style="width: 70px; margin-left: 5%;"  src="assets/imgs/설치완료.png"/>\n          <ion-row>\n            <ion-col col-12>\n              <div class="wrap">\n                <p class="date">[요청일자] <span>{{returnData(item.reg_time)}}</span> </p>\n                <p class="contract mt1">[계약일] <span>{{returnData(item.contract_time)}}</span> </p>\n                <div class="address mt10">ㆍ{{ partnersAddress(item.address) }}</div>\n                <div class="fee">ㆍ월평균 전기 요금: {{numFormat(item.month_fee)}}원</div>\n              </div>\n  \n              <div class="btn-cont">\n                <div style="background:#494949;" class="processStatus" (click)="processStatus(item.id, item.analyse_id)">\n                  <img src="assets/imgs/calcu.png">진행현황\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <h3 class="tip" *ngIf="!hasComplete()">완료된 견적이 없습니다.</h3>\n\n        \n    </ion-list>\n    <!-- 설치완료 -->\n   \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-status/myquot-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MyquotStatusPage);
    return MyquotStatusPage;
}());

//# sourceMappingURL=myquot-status.js.map

/***/ }),

/***/ 136:
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
            selector: 'page-charge-guide',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/charge-guide/charge-guide.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">이용요금</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n    <h4 style="text-align: left;\n    margin-left: 1.3em;" class="ptitle">이용요금 안내</h4>\n  <div class="wrap">\n    \n    <div class="parters-title">파트너스 이용요금</div>\n    <div class="line"></div>\n    <div class="content">총 계약 금액의 <span style="color:#e15a00">10%</span></div>\n\n    <h6 style="text-align: center;" class="ptitle mt30">예시) 태양광 설치 금액이 110만원일때</h6>\n    <div>파트너스 수령금액은</div>\n    <div class="content">\n      99만원\n      <p>(솔라미 이용요금을 제한 태양광 설치 금액 90만원+VAT10%)</p>\n    </div>\n\n   \n  </div>\n  <div class="description mt30">\n    <h6 style="    margin-left: 1.3em;" class="ptitle">대금지급 관련 안내</h6>\n    <p style="margin-left: 1.5em;">ㆍ 지급 받을 금액에 대한 세금계산서 발행이 필요합니다.</p>\n    <p style="margin-left: 1.5em;">ㆍ 설치 완료후 고객의 에스크로 계좌 승인 후. 24시간내에 지급됩니다.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/charge-guide/charge-guide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChargeGuidePage);
    return ChargeGuidePage;
}());

//# sourceMappingURL=charge-guide.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/service-introduction/service-introduction.module": [
		392,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_center_custom_center__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_intro_service_intro__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setting_setting__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__support_info_support_info__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__compare_quotation_compare_quotation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__analyse_client_analyse_client__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_client_my_client__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__myquot_status_myquot_status__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__myinfo_update_myinfo_update__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__charge_guide_charge_guide__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__quotation_quotation__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__current_install_current_install__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__analyse_result_analyse_result__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__noti_noti__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__escro_escro__ = __webpack_require__(58);
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
    function HomePage(iab, navCtrl, navParams, appmgr, sanitizer, common, alertCtrl, http, oneSignal, platform, event) {
        var _this = this;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.sanitizer = sanitizer;
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.event = event;
        this.user_id = 0;
        this.flagopen = "열기";
        this.mem_type = 1;
        this.arrayinstalltodisplay = [];
        this.array_quotaion = [];
        this.picturelist = [];
        this.login_flag = true;
        this.videolist = [];
        this.arrayInstall = [];
        this.arrayInstallDetail = [];
        this.footeropen = false;
        this.flagopen = "열기";
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__quotation_quotation__["a" /* QuotationPage */], { "array": this.array_quotaion });
    };
    HomePage.prototype.ab2str = function (buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    };
    HomePage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_4_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    HomePage.prototype.opening = function (v) {
        console.log(v);
        if (v == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__service_intro_service_intro__["a" /* ServiceIntroPage */], { redirect: this.login_flag, partnerflag: this.isPartners(), "array": this.videolist }, { animate: false });
        }
    };
    HomePage.prototype.onv = function (value) {
        console.log(value);
        var options = {
            zoom: 'no',
        };
        // this.iab.create("https://escrow.nonghyup.com/?certMarkURLKey="+value,'_system',options)
        window.open("https://escrow.nonghyup.com/?certMarkURLKey=" + value, '_system', 'height=700, width=650, status=yes, toolbar=no, menubar=no, location=no');
        // (<HTMLInputElement>document.getElementById("forming")).submit();
        // document.CERTMARK_FORM.certMarkURLKey.value = key;
        // document.CERTMARK_FORM.action='https://escrow.nonghyup.com/?certMarkURLKey=' + key; 
        // document.CERTMARK_FORM.target='self';
        // document.CERTMARK_FORM.submit();
    };
    HomePage.prototype.escroclick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__escro_escro__["a" /* EscroPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.mem_type = userInfo.mem_type;
        console.log("user info is : ");
        console.log(userInfo);
        this.user_id = Number(localStorage.getItem("id"));
        this.partnerflag = Number(localStorage.getItem("partnerflag"));
        this.email = localStorage.getItem("email");
        console.log(this.user_id);
        if (userInfo.login_flag == 1) {
            this.login_flag = true;
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.OneSignalInstall();
            }
        }
        else {
            this.login_flag = false;
        }
        var message = [];
        var sendData12 = [];
        message["note"] = 0;
        message["user_id"] = this.user_id;
        // this.http.postHttpData("/sendPush", message, (result) => {
        //   console.log("sendmmmm")
        //   console.log(result);
        //   window.alert(result);
        //   if(result) {
        //   }
        // })
        this.http.postHttpData("/getNotice", sendData12, function (result) {
            console.log("getnoti");
            console.log(result);
            _this.notilist = result;
            if (result) {
            }
        });
        var sendData2 = [];
        sendData2["user_id"] = this.user_id;
        this.http.postHttpData("/getUserInfoById", sendData2, function (result) {
            _this.userInfo = result;
            if (result) {
                _this.regStatus = result.reg_status;
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
                                console.log("file path and name" + filename + "///" + filepath);
                                _this.picturelist.push({ "file": "http://solarmy.co.kr/" + filepath + "" + filename, "url": url, "flag": flag, "type": 0 });
                                console.log("http://solarmy.co.kr/" + filepath + "" + filename);
                            }
                        }
                        else {
                            //video
                        }
                        console.log("kkkk");
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
                    var newaddress = [];
                    newaddress = address.split(" ");
                    var newaddressstring = "";
                    console.log(newaddress);
                    console.log(newaddress.length);
                    // for(var i=0; i<newaddress.length; i++){
                    //   if(i==newaddress.length-1){
                    //   }else if(i==newaddress.length-1){
                    //   }else{
                    //     // newaddressstring=newaddressstring+""+newaddress[i]
                    //   }
                    // }
                    if (newaddress[0] == "서울특별시" || newaddress[0] == "인천광역시" || newaddress[0] == "부산광역시" || newaddress[0] == "대구광역시" || newaddress[0] == "광주광역시") {
                        newaddressstring = newaddress[0] + " " + newaddress[1];
                    }
                    else {
                        newaddressstring = newaddress[0] + " " + newaddress[1] + " " + newaddress[2];
                    }
                    console.log("new addressstring is : " + newaddressstring);
                    var status = result[i].status;
                    console.log(status);
                    console.log(name);
                    console.log(address);
                    console.log(result[i].reg_time.split("T")[0]);
                    // this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":address,"reg_date":result[i].reg_time.split("T")[0],"status":status})
                    _this.array_quotaion.push({ "name": name.substring(0, 1) + "*" + name.substring(2, 3), "address": newaddressstring, "reg_date": result[i].reg_time.split("T")[0].replace(/-/gi, "."), "status": status });
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
                    console.log("input done");
                }
                ;
                console.log("before sorting array");
                console.log(_this.arrayInstall);
                var tag = "i_date";
                _this.arrayInstall.sort(function (a, b) {
                    console.log(a[tag]);
                    // convert date object into number to resolve issue in typescript
                    var dateA = new Date(a[tag]).getTime();
                    var dateB = new Date(b[tag]).getTime();
                    return dateB > dateA ? 1 : -1;
                });
                console.log(_this.arrayInstall);
                for (var i = 0; i < _this.arrayInstall.length; i++) {
                    if (i < 2) {
                        _this.arrayinstalltodisplay.push(_this.arrayInstall[i]);
                    }
                }
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    HomePage.prototype.myclientt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__my_client_my_client__["a" /* MyClientPage */], {}, { animate: false });
    };
    HomePage.prototype.supportInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__support_info_support_info__["a" /* SupportInfoPage */], {}, { animate: false });
    };
    HomePage.prototype.installcheck = function () {
        console.log(this.arrayInstallDetail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__current_install_current_install__["a" /* CurrentInstallPage */], { "array": this.arrayInstall, "array_detail": this.arrayInstallDetail }, { animate: false });
    };
    HomePage.prototype.compQuotation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__compare_quotation_compare_quotation__["a" /* CompareQuotationPage */], {}, { animate: false });
    };
    HomePage.prototype.anal = function () {
        if (this.userInfo == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], {}, { animate: false });
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
        }
    };
    HomePage.prototype.anal_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__analyse_result_analyse_result__["a" /* AnalyseResultPage */], {}, { animate: false });
    };
    HomePage.prototype.customer_center = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__custom_center_custom_center__["a" /* CustomCenterPage */], { redirect: this.login_flag, partnerflag: this.isPartners() }, { animate: false });
    };
    HomePage.prototype.service_intro = function () {
        console.log(this.videolist);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__service_intro_service_intro__["a" /* ServiceIntroPage */], { redirect: this.login_flag, partnerflag: this.isPartners(), "array": this.videolist }, { animate: false });
    };
    HomePage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__setting_setting__["a" /* SettingPage */], { "flag": this.login_flag }, { animate: false });
    };
    HomePage.prototype.gonoti = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__noti_noti__["a" /* NotiPage */], { "flag": this.login_flag, "notilist": this.notilist, "partnerflag": this.partnerflag }, { animate: false });
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__myquot_status_myquot_status__["a" /* MyquotStatusPage */], { "regStatus": this.regStatus }, { animate: false });
    };
    HomePage.prototype.chargeGuidePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__charge_guide_charge_guide__["a" /* ChargeGuidePage */], {}, { animate: false });
    };
    HomePage.prototype.myInfoUpdate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */], {}, { animate: false });
    };
    HomePage.prototype.oopening = function () {
        console.log("goo");
        if (this.footeropen == true) {
            this.flagopen = "열기";
            this.footeropen = false;
        }
        else {
            this.flagopen = "닫기";
            this.footeropen = true;
        }
    };
    HomePage.prototype.OneSignalInstall = function () {
        var _this = this;
        this.oneSignal.startInit('0016198c-1b1d-4535-9335-b908bed3554a', '199290897115');
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
            _this.http.postHttpData("/updateTokenId", sendData, function (result) {
                console.log("updatetoken id : ");
                console.log(result);
            });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "scroll", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/home/home.html"*/'\n<ion-content padding>\n  <div class="top-cont">\n      <div class="logo-cont">\n          <img class="bg" src="assets/imgs/solarmy_logo.png">\n          <img style="width: 25px;\n          height: 25px;\n          float: right;\n          position: relative;\n          top: 10px;\n          right: 25px;" *ngIf="isLogin()" src="assets/imgs/iconfinder_icon-ios7-bell_211694.png" (click)="gonoti()">\n          <img style="width: 25px;\n          height: 25px;\n          float: right;\n          position: relative;\n          top: 10px;\n          right: 25px;" src="assets/imgs/sharing.png" (click)="setting()">\n\n      </div>\n     \n     \n      \n  </div>\n \n  <div class="main-upper">\n    <div class="main-banner">\n      <div class="main-image">\n          <ion-slides #slides style="width:100% !important; height:220px"  pager >\n              <ion-slide *ngFor="let a of picturelist; let i = index" (click)="opening(i)" style="width:100% !important;" >\n                  <img *ngIf="a.type==0"  src="{{a.file}}">\n                  \n              </ion-slide>\n          </ion-slides>\n      </div>\n      <img class="img-btn-before" src="assets/imgs/btn/before.png" (click)="prev()"/>\n      <img class="img-btn-next" src="assets/imgs/btn/next.png" (click)="next()"/>\n<!-- \n      <p class="banner-text">당신을 위한 맞춤형 태양광</p>\n      <p class="banner-title">SOLARMY</p> -->\n    </div>\n    <div class="main-login">\n        <div class="auth-cont" *ngIf="!isLogin()">\n          <button  style="   \n          text-align: center;\n          background: #e15a00;\n          width: 40%;\n    border-radius:  10px 0 0px 10px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    color: white;\n          " ion-button color="light" class="login" (click)="login()">\n         <img style="width: 12px;\n  height: 12px;" class="mark" src="assets/imgs/lock-open.png">&nbsp;\n   로그인</button>\n          <button  style="\n          color: black;\n          text-align: center;\n          background: #e97e00;\n          width: 40%;\n    border-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    color: white;\n\n          " ion-button color="light" class="register" (click)="registerPage()"><img style="width: 12px;\n    height: 12px;" class="mark" src="assets/imgs/following.png">&nbsp;회원가입</button>\n        </div>\n      </div>\n    \n      <div *ngIf="isLogin()&&isPartners()">\n        <button style="   \n        text-align: center;\n        background: #ff4000;\n    border-radius: 6px;\n  color: white;\n  width: 80%;\n        " ion-button color="light" class="login" (click)="myQuotStatus()"><img style="width: 14px;\n  height: 14px; margin-right:5px;" class="mark" src="assets/imgs/folder.png">내 견적 현황</button>\n      </div>\n    <div class="main-second" *ngIf="isLogin()">\n <div *ngIf="isLogin()&&!isPartners()">\n        <button style="   \n        text-align: center;\n    border-radius: 6px;\n        background: #ff4000;\n  color: white;\n  width: 80%;\n        " ion-button color="light" class="login" (click)="myclientt()"><img style="width: 12px;\n  height: 12px;" class="mark" src="assets/imgs/folder.png">내 의뢰 현황</button>\n </div>\n    </div>\n    <div style="    margin-top: 1em;" class="quotation">\n      <div class="up" style="display: list-item;    margin-top: 0.8em;">\n          <strong style="  font-size:18px;  float: left;\n          margin-left: 18px;" (click)="quotation();">실시간 견적현황</strong>\n          <span class="more" style="\n          float: right;\n    \n          margin-right: 30px;" (click)="quotation();">more</span>\n          <img class="arrow" src="assets/imgs/arrow.png"/>\n          <hr style="    margin: 5px 0 !important;">\n          \n      </div>\n      <div #scroll class="down">\n        <div class="quot" *ngFor="let a of array_quotaion">\n\n\n          <p class="quotationp"> {{a.address}}  </p> <p class="quotationp1 "style="width:15%; float:left;"> {{a.name}}</p><p class="quotationp2" style="width:20%; margin-right:15px; float:left;">{{a.reg_date}}</p>\n          </div>\n      </div>\n     \n\n      \n    </div>\n    <!-- <div class="main-second" *ngIf="isLogin()&&isPartners()">\n    \n    </div> -->\n\n   \n    <div  class="main-second" *ngIf="isLogin()&&!isPartners()">\n      <button  style="   \n      text-align: center;\n      background: #353b5d;\n    margin-top: 1em;\n    border-radius: 10px;\ncolor: white;\nwidth: 80%;\n      " ion-button color="light" class="login" (click)="anal()"> <img style="width: 12px;\n  height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/bar-chart.png">\n   분석 의뢰하기</button>\n      </div>\n      <div  *ngIf="isPartners()" class="baek">\n          <button   style="   \n          text-align: center;\n      -webkit-box-shadow: none !important;\n          background: #353b5d;\n      border-radius: 10px 0px 0px 10px;\n      color: white;\n          " ion-button color="light" class="login" (click)="chargeGuidePage()"><img style="width: 14px;\n      height: 12px; margin-right:5px;" class="mark" src="assets/imgs/calcu.png">이용요금 안내</button>\n      <button *ngIf="isPartners()"  style="   \n      text-align: center;\n      background: #566174;\n      color: white;\n      border-radius: 0px 10px 10px 0px;\n      margin-left: -0.5em;\n      -webkit-box-shadow: none !important;\n      " ion-button color="light" class="login" (click)=" myInfoUpdate()"><img style="width: 14px;\n      height: 12px; margin-right:5px;" class="mark" src="assets/imgs/following.png">내 정보 업데이트</button>\n        </div>\n      \n      <div class="main-second" *ngIf="!isLogin()">\n          <button style="   \n          text-align: center;\n          background: #353b5d;\n    color: white;\nmargin-top:1em;\n    border-radius: 10px;\n    width: 80%;\n          " ion-button color="light" class="login" (click)="anal()"><img style="width: 12px;\n    height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n   \n        </div>\n    \n    <!-- <div class="analyze">\n      <ion-grid class="p0 ion-grid grid_2" *ngIf="!isPartners()" (click)="login()">\n        <ion-row class="btn-cont">\n          <ion-col class="analyse">\n            <div class="middle-wrap">\n              <div class="img-top"><img class="mark" src="assets/imgs/home/analyse.png"></div>\n              <div class="text-cont"><h6>분석 의뢰하기</h6></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </div> -->\n    <div class="installation">\n      <div class="up" style="display: list-item;    margin-top: 0.8em;">\n       \n        <strong style="    float: left;\n       \n        margin-left: 15px; font-size: 18px;" (click)="installcheck()">설치 현황</strong>\n      <span class="more" style="\n      float: right;\n      margin-right: 30px;" (click)="installcheck();">more</span>\n      <img class="arrow" src="assets/imgs/arrow.png"/>\n      <hr style="    margin: 5px 0 !important;">\n    </div>\n      \n      <div class="w3-row-padding"> \n  \n        <div *ngFor="let a of arrayinstalltodisplay" class="w3-third" style="width:50%; \n        margin-top: 1em;">\n        <div  class="w3-card">\n          <img class="installpic" src="{{a.url}}" alt="Car" style="width:100%">\n          <div class="w3-container">\n          <p style="text-align: center">{{a.subject}}</p>\n          </div>\n        </div>\n        </div>\n        \n      </div>\n    </div>\n    <div class="mainlast" >\n        <button style="   \n        text-align: center;\n  -webkit-box-shadow: none !important;\n        background: #353b5d;\n        width: 40%;\n        margin-top: 20px;\n  border-radius: 10px 0px 0px 10px;\n  color: white;\n        " ion-button color="light" class="login" (click)="service_intro()"><img style="width: 12px;\n  height: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/grid.png">서비스 소개</button>\n  <button style="   \n  text-align: center;\n  background: #566174;\ncolor: white;\nmargin-top: 20px;\nwidth: 40%;\n  border-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n  -webkit-box-shadow: none !important;\n  " ion-button color="light" class="login" (click)="customer_center()"><img style="width: 12px;\nheight: 12px;     margin-right: 5px;" class="mark" src="assets/imgs/earphone.png">고객센터</button>\n\n    </div>\n    \n\n   \n\n  </div>\n  \n  \n<ion-footer>\n  <div class="footer-cont">\n    <div class="footerupper">\n        <h3 style="float:left;">© 솔라미(Solarmy)</h3> <p style="float:right;" (click)="oopening()" >{{flagopen}}</p>\n    </div>\n\n    <div *ngIf="!footeropen"  style="display: block;" class="opened">\n    \n    </div>\n    <div *ngIf="footeropen" style="\n    display: block;    margin-top: 20px;" class="opened">\n        대표 : 이정혁<br>\n        사업자등록번호 : 121-41-43084 <br>\n        통신판매업 : 제 2019-의정부호원-0204호<br>\n        메일 : cs@solarmy.co.kr<br>\n        고객센터 : 070.7664.2221<br>\n        주소 : 서울시 강북구 도봉로76가길 55, 성신여대 운정그린캠퍼스 B동 108호<br>\n        호스팅서비스제공자 : 솔라미(Solarmy)<br>\n        전자금융분쟁처리 Tel. 070.7664.2221<br>\n    </div>\n    \n    <!-- <p>통신판매업신고: 제20129-경기포천-19129호</p> -->\n    \n    <div style="margin-top:20px;     font-size: 11px;\n  " class="footerdown">\n        솔라미(Solarmy)는 통신판매중개자이며 통신판매의 당사자가 아닙니다. <br>\n        따라서 솔라미는 상품거래정보 및 거래에 대한 책임을 지지 않습니다.\n    \n    </div>\n   \n    <!-- <img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark02.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a>  -->\n <a href="#" (click)="escroclick();"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark01.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a>\n  \n  </div>\n</ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_auth_register_auth__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__term_term__ = __webpack_require__(77);
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
        console.log("register come");
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
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__term_term__["a" /* TermPage */], { type: "personal", "email": this.email, "pass": this.password, "repass": this.repassword }, { animate: false }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log(data);
                if (data.email != "") {
                    _this.email = data.email;
                }
                if (data.pass != "") {
                    _this.password = data.pass;
                }
                if (data.repass != "") {
                    _this.repassword = data.repass;
                }
            });
        });
    };
    RegisterPage.prototype.term = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__term_term__["a" /* TermPage */], { type: "term", "email": this.email, "pass": this.password, "repass": this.repassword }, { animate: false }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                console.log(data);
                if (data.email != "") {
                    _this.email = data.email;
                }
                if (data.pass != "") {
                    _this.password = data.pass;
                }
                if (data.repass != "") {
                    _this.repassword = data.repass;
                }
            });
        });
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register/register.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="form">\n    <ion-list>\n      <ion-item style="    margin-top: 1em;">\n        <ion-label style="color:black !important; margin-top:10px;  font-size:12px;">이메일</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="email" type="email" (ionBlur)="checkEmail()"></ion-input>\n      </ion-item>\n    \n      <ion-item class="mt10">\n        <ion-label style="color:black !important; margin-top:10px; font-size:12px;" >비밀번호</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <ion-item class="mt10">\n        <ion-label style="color:black !important; margin-top:10px;  font-size:12px;" >비밀번호 재입력</ion-label>\n        <ion-input style="\n        max-height: 30px;" [(ngModel)]="repassword" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item tip mt10">\n        비밀번호는 영문, 숫자, 특수문자8자 이상\n    </div>\n    <div class="item btn-cont mt40">\n      \n      <div style="text-align: left !important" class="text-center itemEtc">\n        <ion-checkbox [(ngModel)]="agreeTerm" ></ion-checkbox>\n        <strong (click)="term()" >이용약관</strong> <span class="term">및</span> <strong (click)="personal()" >개인정보처리방침</strong> \n        <ion-label>에 모두 동의합니다.</ion-label>\n      </div>\n      <button ion-button color="light" (click)="createUser()" class="boxBtn createUser">\n          <img style="width: 14px;\n          height: 14px; margin-right:5px;" class="mark" src="assets/imgs/following.png">\n          계정 만들기</button>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register/register.html"*/,
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
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
            selector: 'page-register-auth',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register-auth/register-auth.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <div class="item tip">\n     {{email}}로 발송된 인증 번호를<br />\n       아래에 입력해주세요.\n    </div>\n    <ion-list class="mt10">\n      <ion-item>\n        <ion-input [(ngModel)]="inputAuthKey" type="number" placeholder=""></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item tip mt40 text-center">\n      인증 번호를 받지 못하셨나요? <strong (click)="resendAuth()">다시받기</strong>\n    </div>\n    <div class="item btn-cont mt40">\n      \n      <button ion-button color="light" (click)="getAuth()" class="boxBtn auth">\n          <img style="width: 14px;\n          height: 14px; margin-right:5px;" class="mark" src="assets/imgs/check.png">\n\n        인증하기\n        <code>{{time}}</code>\n      </button>\n    </div>\n  </div>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register-auth/register-auth.html"*/,
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

/***/ 252:
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
            selector: 'page-find-pass',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/find-pass/find-pass.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비밀번호 찾기</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <div class="item tip">\n      <span>\n          가입하신 이메일 주소로 <br>임시비밀번호를 보내 드립니다.\n      </span>\n    \n    </div>\n    <ion-list class="mt20">\n      <ion-item>\n        <ion-input [(ngModel)]="email" type="email" placeholder="이메일주소"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item btn-cont mt40">\n      <button ion-button color="light" (click)="sendMail()" class="boxBtn sendMail"> <img style="margin-right:5px; width: 22px;\n        height: 15px;" class="mark" src="assets/imgs/envelope.png">보내기</button>\n    </div>\n    <div class="item tip mt10 text-center">\n      메일을 받지 못하셨나요? <strong class="resend" (click)="sendMail()" style="font-size:15px">다시받기</strong>\n    </div>\n    <hr>\n    <div class="item btn-cont mt30">\n      <p>임시비밀번호로 로그인 후 새로운 비밀 번호를 설정해주세요.</p>\n    </div>\n  </div>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/find-pass/find-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], FindPassPage);
    return FindPassPage;
}());

//# sourceMappingURL=find-pass.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kakao_sdk__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compare_quotation_compare_quotation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__government_government__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__benefitgenerator_benefitgenerator__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__escro_escro__ = __webpack_require__(58);
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
        this.partnerflag = this.navParams.get("partnerflag");
    }
    CustomCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomCenterPage');
    };
    CustomCenterPage.prototype.compareQuo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__compare_quotation_compare_quotation__["a" /* CompareQuotationPage */], { "partnerflag": this.partnerflag }, { animate: false });
    };
    CustomCenterPage.prototype.escroclick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__escro_escro__["a" /* EscroPage */]);
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
        this.callNumber.callNumber("07076642221", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    CustomCenterPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    CustomCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-center',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/custom-center/custom-center.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">고객센터</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="testing">\n    \n  </div>\n  <div class="banner">\n    <img class="avartar" src="assets/imgs/logoonly.png">\n  </div>\n  \n  <div class="wrap cont_1">\n    <img style="width:30%; margin-top:1.5em; " src="assets/imgs/solamyonly.png">\n    <p class="mt10">Solamy와 카카오톡 친구가 되세요.</p>\n    <p class="mt1">친구 추가시 업무진행이 편리합니다</p>\n    <div (click)="connectToKakao()" class="kakao">\n      <label style="font-size: 14px;\n      line-height: 2.5em;">카카오톡 아이디 solarmy365</label>\n    </div>\n  </div>\n  \n  <div style="\n  height: 180px;" class="wrap cont_2">\n    <div style="margin-top:15px;" class="phone">\n      <img style="width:40px;" src="assets/imgs/customerearphone.png">\n    </div>\n    <h3 class="mt10">고객센터 전화연결</h3>\n    <p class="mt1">전화 업무상담은 오전 10시에서 오후5시까지 운영합니다.</p>\n    <div class="phone-num">070.7664.2221</div>\n    <button style="   \n    text-align: center;\n    background: #e15a00;\ncolor: white;\nwidth: 75%;\n \nborder-radius: 10px;\nmargin-left: -0.5em;\n    -webkit-box-shadow: none !important;\n    " ion-button color="light"  (click)="phonecall()">전화연결하기</button>\n  </div>\n  <div style="  background:white;  height: auto !important;" class="wrap cont_2">\n  <ion-grid class="p0 ion-grid bottom">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="service_intro" (click)="compareQuo()">\n        <div style="    " class="text-center">\n          <img style="width:24px; height:24px;" src="assets/imgs/bar-chartblack.png">\n          <h6>비교견적안내</h6>\n        </div>\n      </ion-col>\n      <ion-col style="   " col-6 class="service_intro" (click)="government()">\n        <div style="\n        margin-top: 0.5em;" class="text-center">\n            <img style="width:24px; height:24px;" src="assets/imgs/homeblack.png">\n          <strong style="display:block;">가정용 태양광 <br>정부주택지원 사업</strong>\n        </div>\n      </ion-col>\n      <ion-col style="    " col-6 class="cutomer_center" (click)="generator()">\n        <div class="text-center">\n            <img style="width:24px; height:24px;" src="assets/imgs/energyblack.png">\n          <h6>수익형발전소</h6>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n  \n<ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미(Solarmy)</h3>\n  \n  <a href="#" (click)="escroclick();"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark01.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a>\n  \n  \n  </div>\n</ion-footer>\n</ion-content>\n\n<!-- <ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미</h3>\n    <p>통신판매업신고: 제20129-경기포천-19129호</p>\n    <img src="assets/imgs/footer_logo.png">\n  </div>\n</ion-footer> -->'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/custom-center/custom-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_kakao_sdk__["b" /* KakaoCordovaSDK */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CustomCenterPage);
    return CustomCenterPage;
}());

//# sourceMappingURL=custom-center.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_detail_company_detail__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__process_statmodal_process_statmodal__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calendarmodal_calendarmodal__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config_config__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__escro_escro__ = __webpack_require__(58);
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
        this.array = [];
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
        this.installDay = '';
        this.contCompDate = '';
        this.contract_path = ''; // 계약서 경로
        this.escro_url = __WEBPACK_IMPORTED_MODULE_15__config_config__["a" /* CONFIG */].ESCRO_URL; // 에스크로 결제 
        this.target = "_system"; // "_self";//_blank, _system
        this.inAppoptions_Android = {
            location: 'yes',
        };
        this.array = navParams.get("array");
        this.analyse_id = navParams.get('analyse_id');
        console.log(this.array);
        console.log(this.analyse_id);
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].id == this.analyse_id) {
                console.log("!!!KKK");
                console.log(this.array[i]);
            }
        }
        console.log(this.array[i]);
        console.log("above is array from before ");
        this.confirmflag = localStorage.getItem("confirm" + this.analyse_id);
        if (this.confirmflag == "yes") {
            this.confirmmessage = "구매확정완료";
        }
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
                        var contract_time = "";
                        if (result[i].contract_time != null) {
                            if (result[i].contract_time == "0000-00-00 00:00:00") {
                                contract_time = "";
                            }
                            else {
                                var ndate = new Date(result[i].contract_time);
                                ndate.setDate(ndate.getDate());
                                console.log(_this.formatDate(ndate));
                                contract_time = _this.formatDate(ndate);
                            }
                            // contract_time=this.array[i].contract_time.split("T")[0].replace("-",".").replace("-",".")
                        }
                        else {
                            contract_time = "";
                        }
                        var ins_exp_time = "";
                        if (result[i].ins_exp_time != null) {
                            if (result[i].ins_exp_time == "0000-00-00 00:00:00") {
                            }
                            else {
                                var ndate = new Date(result[i].ins_exp_time);
                                ndate.setDate(ndate.getDate());
                                console.log(_this.formatDate(ndate));
                                ins_exp_time = _this.formatDate(ndate);
                            }
                            // ins_exp_time=result[i].ins_exp_time.split("T")[0].replace("-",".").replace("-",".")
                        }
                        else {
                            ins_exp_time = "";
                        }
                        var ins_comp_time = "";
                        if (result[i].ins_comp_time != null) {
                            if (result[i].ins_comp_time == "0000-00-00 00:00:00") {
                                ins_comp_time = "";
                            }
                            else {
                                console.log(result[i].ins_comp_time);
                                var ndate = new Date(result[i].ins_comp_time);
                                ndate.setDate(ndate.getDate());
                                console.log(_this.formatDate(ndate));
                                ins_comp_time = _this.formatDate(ndate);
                                console.log(ins_comp_time);
                            }
                        }
                        else {
                            ins_comp_time = "";
                        }
                        var ins_hope_time = "";
                        if (result[i].ins_hope_time != null) {
                            var ndate = new Date(result[i].ins_hope_time);
                            ndate.setDate(ndate.getDate());
                            console.log(_this.formatDate(ndate));
                            ins_hope_time = _this.formatDate(ndate);
                        }
                        else {
                            ins_hope_time = "";
                        }
                        _this.newarray = { "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time };
                        console.log(_this.newarray);
                        _this.comData.push({ "add_price": result[i].add_price, "company_name": _this.uintToString(result[i].company_name.data), "comp_id": result[i].comp_id, "final_price": result[i].final_price, "rate": result[i].rate, "analyse_id": result[i].analyse_id });
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
                console.log(result);
                _this.contCompId = result.cont_comp_id;
                if (result.contract_time != "0000-00-00 00:00:00") {
                    _this.contCompDate = _this.getStrDate(result.contract_time);
                    console.log("동의일 : " + _this.contCompDate);
                    _this.contractFlag = true; // 계약된것으로 절환
                }
                var sendData2 = [];
                sendData2["comp_id"] = _this.contCompId;
                sendData2["analyse_id"] = _this.analyse_id;
                var sendData1_1 = [];
                sendData1_1["analyse_id"] = _this.analyse_id;
                console.log(sendData2);
                _this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
                    if (result) {
                        console.log("kkkkkkkkkkkkkkk");
                        console.log(result);
                        var sendData1_2 = [];
                        sendData1_2["analyse_id"] = _this.analyse_id;
                        sendData1_2["cont_id"] = result.cid;
                        _this.http.postHttpData("/getQuotStatus", sendData1_2, function (result) {
                            if (result) {
                                console.log(result);
                                var sendData1_3 = [];
                                sendData1_3["analyse_id"] = _this.analyse_id;
                                sendData1_3["cont_id"] = result.id;
                                _this.http.postHttpData("/getCompanyData", sendData1_3, function (result2) {
                                    if (result2) {
                                        console.log("new result is ");
                                        console.log(result2);
                                        console.log(_this.contractcomp_id);
                                        for (var i = 0; i < result2.length; i++) {
                                            if (result2[i].comp_id == _this.contractcomp_id) {
                                                _this.cname = _this.uintToString(result2[i].company_name.data);
                                                _this.contract_path = _this.uintToString(result2[i].contract_path.data);
                                                console.log("contract path is ");
                                                console.log(_this.contract_path);
                                                console.log(_this.cname);
                                                console.log(result);
                                                if (result.add_price_content != null) {
                                                    var contract_time = "";
                                                    if (result.contract_time != null) {
                                                        contract_time = result.contract_time;
                                                    }
                                                    else {
                                                        contract_time = "";
                                                    }
                                                    var ins_exp_time = "";
                                                    if (result.ins_exp_time != null && result.ins_exp_time != "0000-00-00 00:00:00") {
                                                        ins_exp_time = result.ins_exp_time;
                                                    }
                                                    else {
                                                        ins_exp_time = "";
                                                    }
                                                    var ins_comp_time = "";
                                                    if (result.ins_comp_time != null && result.ins_comp_time != "0000-00-00 00:00:00") {
                                                        ins_comp_time = result.ins_comp_time;
                                                    }
                                                    else {
                                                        ins_comp_time = "";
                                                    }
                                                    var ins_hope_time = "";
                                                    if (result.ins_hope_time != null) {
                                                        ins_hope_time = result.ins_hope_time;
                                                    }
                                                    else {
                                                        ins_hope_time = "";
                                                    }
                                                    var comname = "";
                                                    for (var i = 0; i < _this.comData.length; i++) {
                                                        if (_this.comData[i].comp_id == result.comp_id) {
                                                            comname = _this.comData[i].company_name;
                                                        }
                                                        console.log(_this.comData[i].comp_id);
                                                    }
                                                    _this.contData = { "add_price": result.add_price, "final_price": result.final_price, "add_price_content": _this.uintToString(result.add_price_content.data), "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": comname, "cont_price": result.cont_price };
                                                    _this.newarray = { "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time };
                                                    console.log("tttthis is new arrayyyy");
                                                    console.log(_this.newarray);
                                                    console.log(_this.comData);
                                                }
                                                else {
                                                    var contract_time = "";
                                                    if (result.contract_time != null) {
                                                        contract_time = result.contract_time;
                                                    }
                                                    else {
                                                        contract_time = "";
                                                    }
                                                    var ins_exp_time = "";
                                                    if (result.ins_exp_time != null && result.ins_exp_time != "0000-00-00 00:00:00") {
                                                        ins_exp_time = result.ins_exp_time;
                                                    }
                                                    else {
                                                        ins_exp_time = "";
                                                    }
                                                    var ins_comp_time = "";
                                                    if (result.ins_comp_time != null && result.ins_comp_time != "0000-00-00 00:00:00") {
                                                        ins_comp_time = result.ins_comp_time;
                                                    }
                                                    else {
                                                        ins_comp_time = "";
                                                    }
                                                    var ins_hope_time = "";
                                                    if (result.ins_hope_time != null) {
                                                        ins_hope_time = result.ins_hope_time;
                                                    }
                                                    else {
                                                        ins_hope_time = "";
                                                    }
                                                    if (result.company_name != undefined) {
                                                        _this.contData = { "add_price": result.add_price, "final_price": result.final_price, "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time, "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.uintToString(result.company_name.data), "cont_price": result.cont_price };
                                                    }
                                                    else {
                                                        _this.contData = { "add_price": result.add_price, "final_price": result.final_price, "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time, "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.cname, "cont_price": result.cont_price };
                                                    }
                                                    _this.newarray = { "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time };
                                                    console.log(_this.cname);
                                                    console.log("this is new array");
                                                    console.log(_this.newarray);
                                                    console.log(_this.comData);
                                                    console.log(_this.contData);
                                                }
                                                _this.pay = result.pay_flag;
                                                _this.payDate = _this.getStrDate(result.pay_time);
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
                                            }
                                        }
                                    }
                                });
                            }
                        });
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
    ProcessStatusPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('.');
    };
    ProcessStatusPage.prototype.escroclick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__escro_escro__["a" /* EscroPage */]);
    };
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
        localStorage.setItem("confirm" + this.analyse_id, "yes");
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
            console.log(sendData);
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
            ///viewContract
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
        }
    };
    ProcessStatusPage.prototype.detailCompany = function (comp_id, analyse_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__company_detail_company_detail__["a" /* CompanyDetailPage */], { contractinfo: this.contractinfo, comp_id: comp_id, analyse_id: analyse_id }, { animate: false });
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
                        console.log(result);
                        _this.contCompId = _this.contCompTmpId; // radio에서 선택된 comp_id
                        // 계약된 회사정보(계약&평가 정보얻기)
                        var sendData2 = [];
                        sendData2["comp_id"] = _this.contCompId;
                        sendData2["analyse_id"] = _this.analyse_id;
                        _this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
                            if (result) {
                                console.log(result);
                                _this.contData = { "company_name": _this.uintToString(result.company_name.data), "comp_id": result.comp_id, "final_price": result.final_price, "rate": result.rate, "analyse_id": result.analyse_id };
                                _this.processStatus();
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
    ProcessStatusPage.prototype.returnData = function (date) {
        var date1 = this.common.getStrDate(date);
        if (date1) {
            return date1.replace(/-/g, ".").substring(0, 10);
        }
        else {
            return '';
        }
    };
    ProcessStatusPage.prototype.processStatus = function () {
        var _this = this;
        this.tab = "tab2";
        console.log("processStatus come");
        console.log(this.analyse_id);
        console.log("processStatus come");
        var sendData1 = [];
        sendData1["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/getAnalyseById", sendData1, function (result) {
            if (result) {
                console.log(result);
                _this.contCompId = result.cont_comp_id;
                if (result.contract_time != "0000-00-00 00:00:00") {
                    _this.contCompDate = _this.getStrDate(result.contract_time);
                    _this.contractFlag = true; // 계약된것으로 절환
                }
                // 계약된 회사정보(계약&평가 정보얻기)
                var sendData2 = [];
                sendData2["comp_id"] = _this.contCompId;
                sendData2["analyse_id"] = _this.analyse_id;
                var sendData1_4 = [];
                sendData1_4["analyse_id"] = _this.analyse_id;
                console.log(sendData2);
                _this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
                    if (result) {
                        console.log("kkkkkkkkkkkkkkk");
                        console.log(result);
                        var sendData1_5 = [];
                        sendData1_5["analyse_id"] = _this.analyse_id;
                        sendData1_5["cont_id"] = result.cid;
                        _this.http.postHttpData("/getCompanyData", sendData1_5, function (result) {
                            if (result) {
                                console.log(result);
                                // if((HTMLElement document.getElementById('gender_Male').checked) {
                                //   //Male radio button is checked
                                // }else if(document.getElementById('gender_Female').checked) {
                                //   //Female radio button is checked
                                // }
                                for (var i = 0; i < result.length; i++) {
                                    console.log(_this.contractcomp_id + "////" + result[i].comp_id);
                                    if (result[i].comp_id == _this.contractcomp_id) {
                                        _this.cname = _this.uintToString(result[i].company_name.data);
                                        _this.contract_path = _this.uintToString(result[i].contract_path.data);
                                        console.log(_this.contract_path);
                                    }
                                    console.log(_this.contData);
                                    console.log(_this.contData["comp_id"]);
                                    if (result[i].comp_id == _this.contData["comp_id"]) {
                                    }
                                }
                                _this.http.postHttpData("/getQuotStatus", sendData1_5, function (result) {
                                    if (result) {
                                        console.log(result);
                                        if (result.add_price_content != null) {
                                            var contract_time = "";
                                            if (result.contract_time != null && result.contract_time != "0000-00-00 00:00:00") {
                                                contract_time = result.contract_time;
                                            }
                                            else {
                                                contract_time = "";
                                            }
                                            var ins_exp_time = "";
                                            if (result.ins_exp_time != null && result.ins_exp_time != "0000-00-00 00:00:00") {
                                                ins_exp_time = result.ins_exp_time;
                                            }
                                            else {
                                                ins_exp_time = "";
                                            }
                                            var ins_comp_time = "";
                                            if (result.ins_comp_time != null && result.ins_comp_time != "0000-00-00 00:00:00") {
                                                ins_comp_time = result.ins_comp_time;
                                            }
                                            else {
                                                ins_comp_time = "";
                                            }
                                            var ins_hope_time = "";
                                            if (result.ins_hope_time != null) {
                                                ins_hope_time = result.ins_hope_time;
                                            }
                                            else {
                                                ins_hope_time = "";
                                            }
                                            console.log(result);
                                            console.log(_this.cname);
                                            _this.contData = { "add_price": result.add_price, "final_price": result.final_price, "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time, "add_price_content": _this.uintToString(result.add_price_content.data), "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.cname, "cont_price": result.cont_price };
                                            _this.newarray = { "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time };
                                            console.log("tttttttttthis is new array");
                                            console.log(_this.contData);
                                            console.log(_this.newarray);
                                        }
                                        else {
                                            var contract_time = "";
                                            if (result.contract_time != null && result.contract_time != "0000-00-00 00:00:00") {
                                                contract_time = result.contract_time;
                                            }
                                            else {
                                                contract_time = "";
                                            }
                                            var ins_exp_time = "";
                                            if (result.ins_exp_time != null && result.ins_exp_time != "0000-00-00 00:00:00") {
                                                ins_exp_time = result.ins_exp_time;
                                            }
                                            else {
                                                ins_exp_time = "";
                                            }
                                            var ins_comp_time = "";
                                            if (result.ins_comp_time != null && result.ins_comp_time != "0000-00-00 00:00:00") {
                                                ins_comp_time = result.ins_comp_time;
                                            }
                                            else {
                                                ins_comp_time = "";
                                            }
                                            var ins_hope_time = "";
                                            if (result.ins_hope_time != null) {
                                                ins_hope_time = result.ins_hope_time;
                                            }
                                            else {
                                                ins_hope_time = "";
                                            }
                                            _this.contData = { "add_price": result.add_price, "final_price": result.final_price, "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time, "add_price_flag": result.add_price_flag, "comp_id": result.comp_id, "company_name": _this.cname, "cont_price": result.cont_price };
                                            _this.newarray = { "contract_time": contract_time, "ins_exp_time": ins_exp_time, "ins_comp_time": ins_comp_time, "ins_hope_time": ins_hope_time };
                                            console.log(result);
                                            console.log("this is new array");
                                            console.log(_this.contData);
                                            console.log(_this.newarray);
                                        }
                                    }
                                });
                            }
                        });
                        // if(result.status==4){
                        //   this.confirmmessage="구매확정완료"
                        // }
                        // this.comData={"inv_guarent":this.uintToString(result.inv_guarent.data),"module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),"inv_name":this.uintToString(result.inv_name),"module_name":this.uintToString(result.module_name),"address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
                        console.log(_this.contData);
                        // this.contData = result;
                        _this.pay = result.pay_flag;
                        _this.payDate = _this.getStrDate(result.pay_time);
                        _this.contract_path = result.contract_path;
                        if (result.custom_replay != null) {
                            _this.comment = _this.uintToString(result.custom_replay.data);
                        }
                        _this.rating = result.rate;
                        var star = 'assets/imgs/star.png';
                        var stared = 'assets/imgs/star2.png';
                        for (var i = 0; i < 5; i++) {
                            if (result.rate > 0 && i + 1 <= result.rate) {
                                _this.hasCom = 0;
                                _this.imgUrl[i] = stared;
                            }
                            else
                                _this.imgUrl[i] = star;
                        }
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
        if (this.contCompId > 0 && this.contCompId == comp_id) {
            this.contractcomp_id = comp_id;
            return true;
        }
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
        this.comData = [];
        // 계약된 회사정보(계약&평가 정보얻기)
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        sendData["comp_id"] = this.contCompId;
        sendData["installDay"] = this.installDay; // 설치날자
        // sendData["contCompDate"] = this.contCompDate;   // 계약날자
        this.http.postHttpData("/updateContData", sendData, function (result) {
            console.log(result);
            // window.alert("계약완료");
            if (result) {
                _this.contractFlag = true; // 계약된것으로 절환
                var sendData_1 = [];
                sendData_1["analyse_id"] = _this.analyse_id;
                _this.http.postHttpData("/getCompanyData", sendData_1, function (result) {
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
                                _this.newarray.ins_hope_time = result[i].ins_hope_time;
                                //파트너 계약 동의일 5 - 11
                                console.log(_this.newarray);
                                _this.comData.push({ "add_price": result[i].add_price, "company_name": _this.uintToString(result[i].company_name.data), "comp_id": result[i].comp_id, "final_price": result[i].final_price, "rate": result[i].rate, "analyse_id": result[i].analyse_id });
                                console.log(_this.comData);
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
            selector: 'page-process-status',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/process-status/process-status.html"*/'\n<ion-header>\n    <div class="top_bar">\n      <span class="title">진행현황</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  <ion-segment [(ngModel)]="tab">\n    <ion-segment-button value="tab1">\n      업체선정\n    </ion-segment-button>\n    <ion-segment-button value="tab2">\n      계약 및 평가\n    </ion-segment-button>\n  </ion-segment>\n  \n  <ion-content>\n    <div [ngSwitch]="tab">\n      <ion-list class="company" *ngSwitchCase="\'tab1\'">\n        <div *ngIf="hasCompany()">\n          <h3 class="title">참여업체</h3>\n          \n          <ion-list>\n            <ion-item [ngClass]="item.comp_id==contCompId ? \'selected\':\'noselected\'"  *ngFor="let item of comData ; let idx = index">\n              <img class="lo" *ngIf="idx==0" src="assets/imgs/first.png"/>\n              <img class="lo" *ngIf="idx==1" src="assets/imgs/second.png"/>\n              <img class="lo" *ngIf="idx==2" src="assets/imgs/third.png"/>\n              <ion-thumbnail item-start *ngIf="hasSeledComp()">\n                <input type="radio" name="radio" disabled *ngIf="!isSeledComp(item.comp_id)" class="mr20">\n                <input type="radio" name="radio" disabled *ngIf="isSeledComp(item.comp_id)" checked class="mr20"> {{idx+1}}\n              </ion-thumbnail>\n              <ion-thumbnail item-start *ngIf="!hasSeledComp()">\n                <input type="radio" name="radio" class="mr20" *ngIf="idx==0" checked (click)="radioClicked( item.comp_id,idx )"> <span *ngIf="idx==0">{{idx+1}}</span> \n                <input type="radio" name="radio" class="mr20" *ngIf="idx!=0"  (click)="radioClicked( item.comp_id,idx )"> <span *ngIf="idx!=0">{{idx+1}}</span> \n                <!-- <input type="radio" name="radio" class="mr20" *ngIf="idx!=0"  (click)="radioClicked( item.comp_id,idx )"> {{idx+1}}aaaa -->\n              </ion-thumbnail>\n              <h2>{{item.company_name.substring(0, 2)}}***</h2>\n              <h3 style="font-size:2rem;">{{numFormat(item.final_price)}}원</h3>\n              <p *ngIf="item.rate!=null"><img src="assets/imgs/star2.png" width="10"> {{ item.rate}}</p>\n              <button style="    width: 7rem !important;" ion-button color="light" item-end (click)="detailCompany( item.comp_id, item.analyse_id )">상세정보</button>\n            </ion-item>\n            \n          </ion-list>\n          \n          <div class="btn-cont" *ngIf="!isCliented()">\n            <button ion-button color="light" disabled class="boxBtn analyseClient" *ngIf="!isRadio()" ><img style="width: 12px;\n              height: 12px;" class="mark" src="assets/imgs/folder.png">업체 진행 의뢰하기</button>\n            <button style="color:white; background-color:#e15a00;" ion-button color="light" (click)="companyClient()" class="boxBtn analyseClient" *ngIf="isRadio()" >업체 진행 의뢰하기</button>\n          </div>\n          <div class="btn-cont client" *ngIf="isCliented()">\n            <h3>의뢰가 완료되었습니다.</h3>\n            <button ion-button color="light" (click)="processStatus()" class="boxBtn analyseClient">진행 현황 보기</button>\n          </div>\n        </div>\n        <div *ngIf="!hasCompany()" class="no-company">\n          <div class="text-center">\n            <div class="complain">\n              의뢰해주셔서 감사합니다. <br>\n              선택하신 업체와 진행을 위해서<br> \n              담당자가 빠른 연락을 할 것입니다.\n            </div>\n            <div class="content">\n              <h3 class="">*진행 순서 안내</h3>\n              <p>1. 담당자가 유선상으로 진행 사항에 <br>대해서 설명을 드립니다.</p>\n              <p>2. 선택하신 업체와의 진행과정에 <br>대해서 컨설팅을 해드립니다.</p>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n      \n      <ion-list class="contract" *ngSwitchCase="\'tab2\'">\n        <div *ngIf="isCliented()">\n          <div class="wrap wrap_1">\n            <h3 class="title">계약 정보</h3>\n            \n            <div class="list">\n              <label>업체명</label>\n              <div class="content">{{ contData.company_name }}</div>\n            </div>\n            <div class="list cont" *ngIf="!isContract()">\n              <label>계약서</label>\n              <div class="content"><button ion-button class="viewContract2" (click)="viewContract()">계약서 보기</button></div>\n            </div>\n            <div *ngIf="!isContract()" class="list" >\n              <label>설치희망일</label>\n              <div class="content">\n                <p (click)="calendar()">{{installDay}} <img src="assets/imgs/calendar.png" width="15" /> </p>\n              </div>\n            </div>\n            <div *ngIf="isContract()" class="list" >\n                <label>설치희망일</label>\n                <div class="content">\n                  <p (click)="calendar()">{{returnData(newarray.ins_hope_time,\'day\')}}  </p>\n                </div>\n              </div>\n            <div *ngIf="newarray.ins_exp_time!=\'\'" class="list">\n              <label>설치예정일</label>\n              <div class="content">{{returnData(newarray.ins_exp_time,\'day\')}}</div>\n            </div>\n            \n            <div  class="list" *ngIf="isContract()">\n              <label>계약동의일</label>\n              <div class="content">{{returnData(contCompDate,\'day\')}}</div>\n            </div>\n            <div  class="list" *ngIf="isContract()&&newarray.ins_comp_time!=\'\'">\n              <label>설치완료일</label>\n              <div class="content">{{ returnData(newarray.ins_comp_time, \'day\') }} </div>\n            </div>\n\n  \n          \n  \n            <div class="contract btn-cont" *ngIf="!isContract()">\n              <div class="text-center">\n                <ion-checkbox id="contract" (click)="agreeContract()"></ion-checkbox>\n                <ion-label for="contract">계약서 내용을 확인하였으며, 계약체결을 진행합니다.</ion-label> \n              </div>\n              <button ion-button color="light" disabled *ngIf="!isTerm()" class="boxBtn contract">계약하기</button>\n              <button ion-button color="light" (click)="setContract()" *ngIf="isTerm()" class="boxBtn contract">계약하기</button>\n            </div>\n            <div class="contract btn-cont" *ngIf="isContract()">\n              <p>{{ contCompDate }}</p>\n              <h6>계약이 완료되었습니다.</h6>\n              <button style="background-color:transparent !important;" ion-button class="viewContract mt20" (click)="viewContract()"><img style="    width: 14px;\n                height: 14px;\n                margin-right: 5px;" src="assets/imgs/pencil.png">계약서 보기</button>\n            </div>\n          </div>\n          \n          <div class="middle"></div>\n\n          <div *ngIf="contData.add_price!=0" class="wrap wrap_2">\n              <h3 class="title">추가 금액</h3>\n              \n              <div class="list">\n                <label>추가금액 안내</label>\n                <div class="content">{{contData.add_price_content}}</div>\n              </div>\n              <div class="list">\n                  <label>추가금액</label>\n                  <div class="content">{{contData.add_price}} </div>\n                </div>\n             \n           \n            </div>\n\n          <div class="wrap wrap_2">\n            <h3 class="title">결제 정보</h3>\n            <div class="list">\n              <label>총 결제금액</label>\n              <div class="content" *ngIf="contData.add_price==\'0\'">{{ numFormat(contData.final_price ) }}원</div>\n              <div class="content" *ngIf="contData.add_price!=\'0\'">{{ numFormat(contData.final_price +contData.add_price) }}원 (추가금액 {{contData.add_price}})</div>\n            </div>\n            <div class="list">\n                <label>결제계좌정보</label>\n                <div class="content">농협 301-7169-8917-31 (예금주: 이정혁 솔라미) </div>\n              </div>\n           \n            <div class="contract btn-cont" *ngIf="isPay()">\n              <p>{{ payDate }}</p>\n              <h6>결제가 완료되었습니다.</h6>\n              <button style="background: #e15a00 !important;\n              color: white !important;" ion-button class="viewContract mt20" (click)="viewContract2()">\n              <img style="    width: 14px;\n              height: 14px;\n              margin-right: 5px;" src="assets/imgs/check.png">\n              {{confirmmessage}}</button>\n\n\n            </div>\n          </div>\n            <div class="bottom" style="    text-align: center;" *ngIf="!isPay()">\n                <FORM name=\'CERTMARK_FORM\' METHOD=\'POST\'>\n                    <input type="hidden" name="certMarkURLKey">\n                </FORM> \n                <a href="#" (click)="escroclick();"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark01.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a> \n             \n              <div style="\n              margin-top: 2%;" class="right-wrap2">\n                <p> 고객님께서 입금하신 공사대금은 <strong>구매확정</strong> 전까지</p>\n                <p> 에스크로 계좌에서 안전하게 보호됩니다.</p>\n              </div>\n            </div>\n         \n          \n          <div class="middle" *ngIf="isPay()"></div>\n          <div class="wrap wrap_2" *ngIf="isPay()">\n            <h3 class="title b-none">평가하기</h3>\n            \n            <div class="contract btn-cont">\n              <ul class="rating mb10" *ngIf="!hasComment()">\n                <li (click)="setRating(0)"><img [src]="imgUrl[0]" ></li>\n                <li (click)="setRating(1)"><img [src]="imgUrl[1]" ></li>\n                <li (click)="setRating(2)"><img [src]="imgUrl[2]" ></li>\n                <li (click)="setRating(3)"><img [src]="imgUrl[3]" ></li>\n                <li (click)="setRating(4)"><img [src]="imgUrl[4]" ></li>\n              </ul>\n              <ul class="rating mb10" *ngIf="hasComment()">\n                <li><img [src]="imgUrl[0]" ></li>\n                <li><img [src]="imgUrl[1]" ></li>\n                <li><img [src]="imgUrl[2]" ></li>\n                <li><img [src]="imgUrl[3]" ></li>\n                <li><img [src]="imgUrl[4]" ></li>\n              </ul>\n              <textarea class="textarea" *ngIf="!hasComment()" placeholder="후기를 남겨주세요(500자 이내)" [(ngModel)]="comment"></textarea>\n              <textarea class="textarea" *ngIf="hasComment()" disabled [(ngModel)]="comment"></textarea>\n              <button sytle="background-color:#e97e00 !important;" ion-button disabled *ngIf="hasComment()" class="mt20 width100"> <img style="    width: 14px;\n                height: 14px;\n                margin-right: 5px;" src="assets/imgs/speach.png">평가 완료</button>\n              <button sytle="background-color:#e97e00 !important;" ion-button *ngIf="!hasComment()" (click)="setComment()" class="mt20 width100"><img style="    width: 14px;\n                height: 14px;\n                margin-right: 5px;" src="assets/imgs/speach.png">{{evalval}}</button>\n            </div>\n          </div>\n        </div>\n      \n        <div *ngIf="!isCliented()" class="no-company">\n          <div class="text-center">\n            <div class="complain">\n              의뢰해주셔서 감사합니다. <br>\n              선택하신 업체와 진행을 위해서<br> \n              담당자가 빠른 연락을 할 것입니다.\n            </div>\n            <div class="content">\n              <h3 class="">*진행 순서 안내</h3>\n              <p>1. 담당자가 유선상으로 진행 사항에 <br>대해서 설명을 드립니다.</p>\n              <p>2. 선택하신 업체와의 진행과정에 <br>대해서 컨설팅을 해드립니다.</p>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/process-status/process-status.html"*/,
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

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(76);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.http = http;
        this.photoViewer = photoViewer;
        this.comp_id = 0;
        this.analyse_id = 0;
        this.resultarea = [];
        this.modulecount = 0;
        this.invNamecount = 0;
        this.qualitycount = 0;
        this.modGcount = 0;
        this.etcCount = 0;
        this.invGcount = 0;
        this.invGuaData = [];
        this.elect_licence = ''; // 전기면허증
        this.comp_id = navParams.get('comp_id');
        this.analyse_id = navParams.get('analyse_id');
        // this.contractinfo=navParams.get('contractinfo');
        var sendData2 = [];
        sendData2["comp_id"] = this.comp_id;
        sendData2["analyse_id"] = this.analyse_id;
        console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
            if (result) {
                console.log("kkkkkkkkkkkkkkk");
                console.log(result);
                _this.contractinfo = result;
                console.log("contractinfo is : " + _this.contractinfo);
                console.log(_this.contractinfo);
                _this.moduleName = _this.uintToString(_this.contractinfo.module_name.data);
                _this.invName = _this.uintToString(_this.contractinfo.inv_name.data);
                _this.qName = _this.uintToString(_this.contractinfo.quality.data);
                _this.modName = _this.uintToString(_this.contractinfo.module_guarent.data);
                _this.modulePhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.module_file.data);
                _this.invPhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.inv_file.data);
                _this.qPhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.quality_file.data);
                _this.modPhoto = _this.uintToString(_this.contractinfo.module_guarent_file.data);
                if (_this.modPhoto.indexOf("http://") > -1) {
                }
                else {
                    _this.modPhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.module_guarent_file.data);
                }
                console.log(_this.moduleName);
                console.log(_this.invName);
                console.log(_this.qName);
                console.log(_this.modName);
                console.log(_this.modulePhoto);
                console.log(_this.invPhoto);
                console.log(_this.qPhoto);
                console.log(_this.modPhoto);
            }
        });
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
        /**
         *
         *  <h4 style="margin:16px 0">{{moduleName}}</h4>
            <img src="{{modulePhoto}}" />
            <h4 style="margin:16px 0">{{invName}}</h4>
            <img src="{{invPhoto}}"/>
            <h4 style="margin:16px 0">{{qName}}</h4>
            <img src="{{qPhoto}}"/>
            <h4 style="margin:16px 0">{{modName}}</h4>
            <img src="{{modPhoto}}"/>
            <h4 style="margin:16px 0">{{invGName}}</h4>
            <img src="{{invGPhoto}}"/>
            <h4 style="margin:16px 0">{{etcName}}</h4>
            <img src="{{etcPhoto}}"/>
         */
        console.log("id is : " + this.comp_id);
        // this.moduleName=localStorage.getItem("moduleName"+this.analyse_id+this.comp_id);
        // this.invName=localStorage.getItem("invName"+this.analyse_id+this.comp_id);
        // this.qName=localStorage.getItem("qName"+this.analyse_id+this.comp_id);
        // this.modName=localStorage.getItem("modName"+this.analyse_id+this.comp_id);
        // this.invGName=localStorage.getItem("invGName"+this.analyse_id+this.comp_id);
        // this.etcName=localStorage.getItem("etcName"+this.analyse_id+this.comp_id);
        // this.modulePhoto=localStorage.getItem("modulePhoto"+this.analyse_id+this.comp_id);
        // this.invPhoto=localStorage.getItem("invPhoto"+this.analyse_id+this.comp_id);
        // this.qPhoto=localStorage.getItem("qPhoto"+this.analyse_id+this.comp_id);
        // this.modPhoto=localStorage.getItem("modPhoto"+this.analyse_id+this.comp_id);
        // this.invGPhoto=localStorage.getItem("invGPhoto"+this.analyse_id+this.comp_id);
        // this.etcPhoto=localStorage.getItem("etcPhoto"+this.analyse_id+this.comp_id);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["comp_id"] = this.comp_id;
        sendData["analyse_id"] = this.analyse_id;
        console.log(this.comp_id);
        console.log(this.analyse_id);
        var sendData2 = [];
        sendData2["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/getCompanyData", sendData2, function (result) {
            modal.dismiss({}, "", { animate: false });
            console.log("result show");
            console.log(result);
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    console.log(i);
                    if (result[i].comp_id == _this.comp_id) {
                        console.log(result[i]);
                        console.log(result[i].company_name.data);
                        var area = _this.uintToString(result[i].area.data);
                        _this.resultarea = area.split("||");
                        //설치예정일 5 -5
                        //설치완료일 5- 10
                        //설치희망일 4-24
                        //고객 계약 동의일 5-9
                        //파트너 계약 동의일 5 - 11
                        _this.comData = { "as_guide": _this.uintToString(result[i].as_guide.data), "complete_cnt": result[i].complete_cnt, "area": _this.resultarea, "company_name": _this.uintToString(result[i].company_name.data), "comp_id": result[i].comp_id, "final_price": result[i].final_price, "rate": result[i].rate, "analyse_id": result[i].analyse_id };
                    }
                }
                console.log("come data");
                console.log(_this.comData);
            }
        });
        /**
         *
         *
         * this.http.postHttpData("/getComsinfodata", sendData1, (result2) => {
                  if(result2) {
        
                    var result=result2[0];
                    console.log("result is : ")
                    console.log(result);
                  if(this.moduleName==null){
                    var modulename=this.uintToString(result.module_name.data);
                    var m1filename=this.uintToString(result.m1_file_name.data)
                    var m1filepath=this.uintToString(result.m1_file_path.data)
                    var first="http://solarmy.co.kr/"+m1filepath+m1filename;
                    localStorage.setItem("moduleName"+this.analyse_id+this.comp_id,modulename);
                    localStorage.setItem("modulePhoto"+this.analyse_id+this.comp_id,first);
                    this.moduleName=modulename;
                    this.modulePhoto=first;
                  }else{
        
        
                   
                  }
                   
                    var inv_name=this.uintToString(result.inv_name.data);
                    var inv_guarent=this.uintToString(result.inv_guarent.data);
                    var module_guarent=this.uintToString(result.module_guarent.data);
                    var quality=this.uintToString(result.quality.data);
                   
                    
                   
                    var m2filename=this.uintToString(result.m2_file_name.data)
                    var m2filepath=this.uintToString(result.m2_file_path.data)
                    var m3filename=this.uintToString(result.m3_file_name.data)
                    var m3filepath=this.uintToString(result.m3_file_path.data)
                    var second="http://solarmy.co.kr/"+m2filepath+m2filename;
                    console.log(inv_name);
                    console.log(module_guarent);
                    console.log(modulename);
                    console.log(second);
                    
                    this.invName=inv_name;
                    this.invPhoto=second;
                    console.log(quality);
                    console.log(first);
                 
                    var third="http://solarmy.co.kr/"+m3filepath+m3filename;
                    this.qPhoto=third;
                    this.qName=quality;
                    var m4filename;
                    var m4filepath;
                    if(result.m4_file_name!=null){
                       m4filename=this.uintToString(result.m4_file_name.data)
                       m4filepath=this.uintToString(result.m4_file_path.data)
                    }else{
                      this.modName=module_guarent;
                      this.modPhoto="http://solarmy.co.kr/"+m4filepath+m4filename;
                    }
                    var m5filename;
                    var m5filepath;
                    if(result.m5_file_name!=null){
                       m5filename=this.uintToString(result.m5_file_name.data)
                       m5filepath=this.uintToString(result.m5_file_path.data)
                    }else{
                      this.invGName=inv_guarent;
                      this.invGPhoto="http://solarmy.co.kr/"+m5filepath+m5filename;
                    }
                   
                   
                  }
                });
         */
        // this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
        //   if(result) {
        //     console.log("result issss");
        //     console.log(result);
        //     for (var i=0; i<result.length; i++){
        //       console.log(result[i]+"i index"+i);
        //       console.log(result[i])
        //     if(result[i].code==1){
        //     this.modulecount++;
        //     if(this.modulecount==1){
        //       console.log(result[i]);
        //       this.modulePhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       console.log("filepath1"+this.uintToString(result[i].file_path.data));
        //       this.moduleName=this.uintToString(result[i].product_name.data);
        //       localStorage.setItem("moduleName"+this.comp_id,this.moduleName);
        //       localStorage.setItem("modulePhoto"+this.comp_id,this.modulePhoto);
        //       console.log("module photo");
        //       console.log(this.modulePhoto);
        //       console.log(this.moduleName);
        //       //http://solarmy.co.kr/solarmy_admin/uploads/20190327/155366537011.png
        //     }
        //     }
        //   if(result[i].code==2){
        //     this.invNamecount++;
        //     if(this.invNamecount==1){
        //       console.log("filepath2"+this.uintToString(result[i].file_path.data));
        //       this.invPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       this.invName=this.uintToString(result[i].product_name.data);
        //       console.log("invName isl :"+this.invName);
        //       localStorage.setItem("invName"+this.comp_id,this.invName);
        //       localStorage.setItem("invPhoto"+this.comp_id,this.invPhoto);
        //     }
        //   }
        //   if(result[i].code==3){
        //     this.qualitycount++;
        //     if(this.qualitycount==1){
        //       console.log("filepath3"+this.uintToString(result[i].file_path.data));
        //       this.qPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       this.qName=this.uintToString(result[i].product_name.data);
        //       localStorage.setItem("qName"+this.comp_id,this.qName);
        //       localStorage.setItem("qPhoto"+this.comp_id,this.qPhoto);
        //     }
        //   }
        //   if(result[i].code==4){
        //     this.modGcount++;
        //     if(this.modGcount==1){
        //       console.log("filepath4"+this.uintToString(result[i].file_path.data));
        //       this.modPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       this.modName=this.uintToString(result[i].product_name.data);
        //       localStorage.setItem("modPhoto"+this.comp_id,this.modPhoto);
        //       localStorage.setItem("modName"+this.comp_id,this.modName);
        //     }
        //   }
        //   if(result[i].code==5){
        //     this.invGcount++;
        //     if(this.invGcount==1){
        //       console.log("filepath5"+this.uintToString(result[i].file_path.data));
        //       this.invGPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       this.invGName=this.uintToString(result[i].product_name.data);
        //       localStorage.setItem("invGPhoto"+this.comp_id,this.invGPhoto);
        //       localStorage.setItem("invGName"+this.comp_id,this.invGName);
        //     }
        //   }
        //   if(result[i].code==6){
        //     this.etcCount++;
        //     if(this.etcCount==1){
        //       console.log("filepath6"+this.uintToString(result[i].file_path.data));
        //       this.etcPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
        //       this.etcName=this.uintToString(result[i].product_name.data);
        //       console.log("etcphoto");
        //       console.log(this.etcPhoto)
        //       console.log(this.etcName);
        //       localStorage.setItem("etcPhoto"+this.comp_id,this.etcPhoto);
        //       localStorage.setItem("etcName"+this.comp_id,this.etcName);
        //     }
        //   }
        // }
        //     // this.contInfoData = {"id":result.id,"elec_licence":result.elec_licence,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_flag":result.module_flag,"module_gflag":result.module_gflag,"quality_flag":result.quality_flag,"inv_guarent":this.uintToString(result.inv_guarent.data),"inv_name":this.uintToString(result.inv_name.data),
        //     // "module_guarent":this.uintToString(result.module_guarent.data),"module_name":this.uintToString(result.module_name.data),
        //     // "quality":this.uintToString(result.quality.data)};
        //     console.log(this.contInfoData);
        //   }
        // });
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
            selector: 'page-company-detail',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/company-detail/company-detail.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">상세정보</span>\n    <img src="assets/imgs/close.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="hasComData()">\n    <div class="top-wrap">\n      <img src="assets/imgs/processing_banner.png" class="bg">\n      <h3 class="name">{{ comData.company_name.substring(0, 2) }}***</h3>\n      <div style="display:inline-flex; margin-top:25px;" class="topsub">\n          <p style="\n          overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 130px;\n    height: 20px;"><img src="assets/imgs/redmap.png" width="15" /> {{ comData.area }} </p>\n          <p style="\n          float: left;"><img src="assets/imgs/star2.png" width="15" /> {{ convRate(comData.rate) }} </p>\n          <p style="\n          float: left;"><img src="assets/imgs/area_mark.png" width="15" /> {{ comData.complete_cnt }} 건 완료 </p>\n        \n      </div>\n      </div>\n    \n    <div class="wrap">\n      <div class="list" style="height: 53px;">\n        <label style="margin-top:9px;">예상 가격</label>\n        <div class="content" style="margin-top:9px;">\n          {{ numFormat(comData.final_price) }}원\n        </div>\n      </div>\n      <!-- <div class="list">\n        <label>예상 설치용량</label>\n        <div class="content">{{ numFormat(comData.solar_power) }}kw</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'module_name\')">\n        <label>모듈 제품명</label>\n        <div class="content">{{ contInfoData.module_name }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'inv_name\')">\n        <label>인버터 제품명</label>\n        <div class="content">{{ contInfoData.inv_name }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'quality\')">\n        <label>설치할 구조물 품질</label>\n        <div class="content">{{ contInfoData.quality }}</div>\n      </div>\n      <div class="list" *ngIf="electLicence()">\n        <label>전기면허증</label>\n        <div class="content"><button ion-button color="light" (click)="viewImg(elect_licence)">보기</button></div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'module_guarent\')">\n        <label>모듈보증</label>\n        <div class="content">{{ contInfoData.module_guarent }}</div>\n      </div>\n      <div class="list" *ngIf="hasContInfo(\'inv_guarent\')">\n        <label>인버터보증</label>\n        <div class="content">{{ contInfoData.inv_guarent }}</div>\n      </div> -->\n      <div style="    text-align: center;" class="bottomlist">\n        <h4 *ngIf="moduleName!=null"  style="margin:16px 0">{{moduleName}}</h4>\n        <img *ngIf="moduleName!=null"  src="{{modulePhoto}}" />\n        <h4 *ngIf="invName!=null" style="margin:16px 0">{{invName}}</h4> \n        <img  *ngIf="invName!=null" src="{{invPhoto}}"/>\n        <h4 *ngIf="qName!=null" style="margin:16px 0">{{qName}}</h4> \n        <img *ngIf="qName!=null" src="{{qPhoto}}"/>\n        <h4 *ngIf="modName!=\'\'"  style="margin:16px 0">{{modName}}</h4> \n        <img *ngIf="modName!=\'\'" src="{{modPhoto}}"/>\n        <h4 *ngIf="invGName!=\'\'" style="margin:16px 0">{{invGName}}</h4> \n        <img *ngIf="invGName!=\'\'"  src="{{invGPhoto}}"/>\n        <!-- <h4 *ngIf="etcName!=null" style="margin:16px 0">{{etcName}}</h4>\n        <img *ngIf="etcName!=null" src="{{etcPhoto}}"/> -->\n      </div>\n      <div class="list">\n        <label>설치 후 A/S조건</label>\n        <div class="content">{{ comData.as_guide }}</div>\n      </div>\n      <div class="list mb10">\n        <label>결제종류</label>\n        <div class="content">현금(에스크로 계좌)</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="no-data mt30" *ngIf="!hasComData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/company-detail/company-detail.html"*/,
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

/***/ 256:
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
            selector: 'page-process-statmodal',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/process-statmodal/process-statmodal.html"*/'\n<div class="modal_wrapper"></div>\n<div class="main-wrap">\n  <div class="modal_content alert-md">\n    <div class="wrapper">\n      <div class="alert-head">\n        <div class="content">\n          의뢰해주셔서 감사합니다. <br/>\n          선택하신 업체와 진행을 위해서<br/> \n          담당자가 빠른 연락을 할 것입니다.\n        </div>\n        \n        <h3 class="mt20">*진행 순서 안내</h3>\n        <p>1.담당자가 유선상으로 진행 사항에 <br/>대해서 설명을 드립니다.</p>\n        <p>2.선택하신 업체와의 진행과정에 <br/>대해서 컨설팅을 해드립니다.</p>\n      </div>\n    </div>\n    \n    <div class="alert-button-group">\n      <button ion-button class="alert-button alert-button-md cancel alert-button-default alert-button-default-md" (click)="cancel()">\n        취소\n      </button>\n      <button ion-button class="disable-hover alert-button alert-button-md confirm alert-button-default alert-button-default-md" (click)="confirm()">\n        확인\n      </button>\n    </div>\n  </div>\n\n</div>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/process-statmodal/process-statmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProcessStatmodalPage);
    return ProcessStatmodalPage;
}());

//# sourceMappingURL=process-statmodal.js.map

/***/ }),

/***/ 257:
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
    function GovernmentPage(alertCtrl, http, appmgr, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
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
                var alert_1 = _this.alertCtrl.create({
                    title: '상담이 요청되었습니다.',
                    subTitle: '담당자가 확인 후 전화 연락드리겠습니다.',
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
                                _this.email = null;
                                _this.tel = null;
                                _this.name = null;
                            }
                        }
                    ]
                });
                alert_1.present({ animate: false });
            }
        });
    };
    GovernmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-government',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/government/government.html"*/'<ion-header>\n    <div class="top_bar">\n        <span class="title">상담요청</span>\n        <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="banner">\n    </div>\n    \n    \n    <div style="" class="wrap cont_2">\n      \n     \n\n        <img class="img" src="assets/imgs/01.jpg"/>\n    </div>\n    <div class="form mt30">\n        <div class="alert-md">\n          <label>이메일</label>\n          <input type="text" class="alert-input" [(ngModel)]="email" />\n        </div>\n        <div class="alert-md">\n          <label>성함</label>\n          <input type="text" class="alert-input" maxlength="10" [(ngModel)]="name" />\n        </div>\n        <div class="alert-md">\n            <label>연락처</label>\n            <input type="text" class="alert-input" maxlength="15" [(ngModel)]="tel" />\n          </div>\n      </div>\n    <button style="   \n    background: #e15a00;\n    color: white;\n    width: 75%;\n    border-radius: 10px;\n    margin: auto;\n    top: 20px;\n    display: -webkit-box;"\n     ion-button color="light"  (click)="consulting()">상담 요청하기</button>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/government/government.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GovernmentPage);
    return GovernmentPage;
}());

//# sourceMappingURL=government.js.map

/***/ }),

/***/ 258:
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
    function BenefitgeneratorPage(alertCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
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
                var alert_1 = _this.alertCtrl.create({
                    title: '상담이 요청되었습니다.',
                    subTitle: '담당자가 확인 후 전화 연락드리겠습니다.',
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
                                _this.email = null;
                                _this.tel = null;
                                _this.name = null;
                            }
                        }
                    ]
                });
                alert_1.present({ animate: false });
            }
        });
    };
    BenefitgeneratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-benefitgenerator',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/benefitgenerator/benefitgenerator.html"*/'<ion-header>\n    <div class="top_bar">\n        <span class="title">상담요청</span>\n        <img src="assets/imgs/logout.png" style="width:32px" class="back_img" (click)="back()">\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="banner">\n    </div>\n    \n    \n    <div style="" class="wrap cont_2">\n      \n\n        <img class="img" src="assets/imgs/02.jpg"/>\n     \n    </div>\n    <div class="form mt30">\n        <div class="alert-md">\n          <label>이메일</label>\n          <input type="text" class="alert-input" [(ngModel)]="email"/>\n        </div>\n        <div class="alert-md">\n          <label>성함</label>\n          <input type="text" class="alert-input" maxlength="10" [(ngModel)]="name"/>\n        </div>\n        <div class="alert-md">\n            <label>연락처</label>\n            <input type="text" class="alert-input" maxlength="15" [(ngModel)]="tel"/>\n          </div>\n      </div>\n    <button style="   \n    background: #e15a00;\n    color: white;\n    width: 75%;\n    border-radius: 10px;\n    margin: auto;\n    top: 20px;\n    display: -webkit-box;"\n     ion-button color="light"  (click)="consulting()">상담 요청하기</button>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/benefitgenerator/benefitgenerator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BenefitgeneratorPage);
    return BenefitgeneratorPage;
}());

//# sourceMappingURL=benefitgenerator.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceIntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__analyse_client_analyse_client__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__escro_escro__ = __webpack_require__(58);
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
        this.partnerflag = navParams.get("partnerflag");
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_type_register_type__["a" /* RegisterTypePage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    ServiceIntroPage.prototype.escroclick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__escro_escro__["a" /* EscroPage */]);
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
    ServiceIntroPage.prototype.isP = function () {
        if (this.partnerflag == true) {
            return true;
        }
        else {
            return false;
        }
    };
    ServiceIntroPage.prototype.isLogin = function () {
        if (this.redirect == true)
            return true;
        else
            return false;
    };
    ServiceIntroPage.prototype.anal = function () {
        console.log(this.isLogin);
        if (this.isLogin() == true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__analyse_client_analyse_client__["a" /* AnalyseClientPage */], {}, { animate: false });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], {}, { animate: false });
        }
    };
    ServiceIntroPage.prototype.isReRead = function () {
        if (this.reRead == 1)
            return true;
        else
            return false;
    };
    ServiceIntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-intro',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/service-intro/service-intro.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">서비스 안내</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-segment [(ngModel)]="tab">\n  <ion-segment-button value="tab1">\n  홍보 동영상\n  </ion-segment-button>\n  <ion-segment-button value="tab2">\n   솔라미 시스템\n  </ion-segment-button>\n  <ion-segment-button value="tab3">\n  제공되는 정보\n  </ion-segment-button>\n  \n</ion-segment>\n<!-- 솔라미 시스템 -->\n<ion-content>\n  <div [ngSwitch]="tab">\n      <ion-list style="    text-align: center;\n    " *ngSwitchCase="\'tab1\'">\n      \n\n        \n        <div style="    margin-top: 20px;" *ngFor="let a of newarray ; let idx = index">\n                    <iframe width="90%" height="280"\n                    [src]="a.url">\n                    </iframe>\n    \n                  </div>\n\n        </ion-list>\n    <!-- 홍보 동영상-->\n    <ion-list style="text-align: center;" *ngSwitchCase="\'tab2\'">\n\n          <img class="img" src="assets/imgs/22.png"/>\n\n    </ion-list>\n    <!-- 제공되는 정보 -->\n    <ion-list class="contract" *ngSwitchCase="\'tab3\'">\n      <div class="table">\n          <img src ="assets/imgs/1.png"/> <span>비교견적</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/2.png"/><span>당신의 주택/건물에 설치 예상 이미지</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/3.png"/><span>당신의 주소지의 월간 예상 발전량</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/4.png"/><span>최적의 설치 각도 및 방향</span>\n      </div>\n      <div class="table">\n          <img src ="assets/imgs/5.png"/><span>전기료 감면 효과</span>\n      </div>\n      <button  *ngIf="!isP()" style="   \n     background: #262626;\n    margin-top: 1em;\n    border-radius: 10px;\n    color: white;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: -webkit-box;" ion-button color="light" class="login" (click)="anal()"><img style="width: 12px;\nheight: 12px;" class="mark" src="assets/imgs/bar-chart.png">분석 의뢰하기</button>\n\n<div class="auth-cont" *ngIf="!isLogin()">\n    <button  style="   \n    text-align: center;\n    background: #e15a00;\n    width: 40%;\nborder-radius:  10px 0 0px 10px;\nmargin-left: -0.5em;\n-webkit-box-shadow: none !important;\ncolor: white;\n    " ion-button color="light" class="login" (click)="login()">\n   <img style="width: 14px;\nheight: 14px; margin-right:5px;" class="mark" src="assets/imgs/lock-open.png">\n로그인</button>\n    <button  style="\n    color: black;\n    text-align: center;\n    background: #e97e00;\n    width: 40%;\nborder-radius: 0px 10px 10px 0px;\nmargin-left: -0.5em;\n-webkit-box-shadow: none !important;\ncolor: white;\n\n    " ion-button color="light" class="register" (click)="registerPage()"><img style="width: 14px;\nheight: 14px; margin-right:5px;" class="mark" src="assets/imgs/following.png">회원가입</button>\n</div>\n    </ion-list>\n    <!-- 설치완료 -->\n   \n  </div>\n\n\n<ion-footer>\n  <div class="footer-cont">\n    <h3>© 솔라미(Solarmy)</h3>\n    <FORM name=\'CERTMARK_FORM\' METHOD=\'POST\'>\n      <input type="hidden" name="certMarkURLKey">\n  </FORM> \n  <!-- <a href="javascript:onPopCertMar(\'eb0b73c3740ee4489320997ed6a60473\')"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark02.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a>  -->\n  <a href="#" (click)="escroclick();"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark01.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a> \n             \n  \n  </div>\n</ion-footer>\n</ion-content>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/service-intro/service-intro.html"*/,
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_naver_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__term_term__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(41);
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
        this.isLogin = false;
        this.push_flag = true;
        this.isLogin = this.navParams.get("flag");
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
    SettingPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
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
            selector: 'page-setting',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/setting/setting.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">설정</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item (click)="resetPass()" *ngIf="isEmail()">\n    <ion-label>비밀번호 변경</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>푸시알림 설정</ion-label>\n    <ion-toggle color="energized" (ionChange)="pushChange()" [(ngModel)]="push_flag"></ion-toggle>\n  </ion-item>\n\n  <ion-item (click)="term()">\n    <ion-label>이용약관</ion-label>\n  </ion-item>\n  \n  <ion-item (click)="personal()">\n    <ion-label>개인정보처리방침</ion-label>\n  </ion-item>\n  \n  <ion-item *ngIf="isLogin==true" (click)="logout()">\n    <ion-label>로그아웃</ion-label>\n  </ion-item>\n  <ion-item *ngIf="isLogin==false" (click)="login()">\n      <ion-label>로그인</ion-label>\n    </ion-item>\n  <ion-item (click)="memberExit()">\n    <ion-label>회원 탈퇴</ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/setting/setting.html"*/,
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
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
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/reset-password/reset-password.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">비밀번호 변경</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="form">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>비밀번호</ion-label>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <ion-item class="mt10">\n        <ion-label floating>비밀번호 재입력</ion-label>\n        <ion-input [(ngModel)]="repassword" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item btn-cont mt50">\n      <a (click)="reset()" class="boxBtn save">저장</a>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/reset-password/reset-password.html"*/,
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

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__support_sample_support_sample__ = __webpack_require__(263);
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
            selector: 'page-support-info',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/support-info/support-info.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">제공되는 정보</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <h3><img src="assets/imgs/support_info/info.png" width="20"> 제공되는 서비스</h3>\n\n  <ion-grid class="p0 ion-grid grid_1">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="price-comp">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/comp_price.png"></div>\n          <div class="text-cont"><h6>가격비교</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="expect-img">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/expect_img.png"></div>\n          <div class="text-cont"><h6>당신의 주택/건물에 <br/>설치 할 경우 예상 이미지</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_1">\n    <ion-row class="btn-cont">\n      <ion-col col-6 class="price-comp expect-pow">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/expect_power.png"></div>\n          <div class="text-cont"><h6>당신의 주소지의 <br/>월간 예상 발전량</h6></div>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="expect-img sale_money">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/sale_money.png"></div>\n          <div class="text-cont"><h6>전기료 절감 누적금액</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="p0 ion-grid grid_2">\n    <ion-row class="btn-cont">\n      <ion-col class="fee-elect">\n        <div class="middle-wrap">\n          <div class="img-top"><img class="mark" src="assets/imgs/support_info/fee_sale.png"></div>\n          <div class="text-cont"><h6>전기료 감면 효과</h6></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <div class="btn-wrap" *ngIf="!isLogin()">\n    <div class="sample-cont">\n      <button ion-button color="light" (click)="sample()" class="boxBtn sample">샘플 (예시)</button>\n    </div>\n    \n    <div class="login-cont">\n      <button ion-button color="light" class="login" (click)="login()">로그인</button>\n      <button ion-button color="light" class="register" (click)="registerPage()">회원가입</button>\n    </div>\n  </div>\n  \n  <div class="btn-wrap" *ngIf="isLogin()">\n    <div class="sample-cont mt40">\n      <button ion-button color="light" (click)="sample()" class="boxBtn sample">샘플 (예시)</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/support-info/support-info.html"*/,
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportSamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analyse_client_analyse_client__ = __webpack_require__(47);
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
            selector: 'page-support-sample',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/support-sample/support-sample.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">샘플(예시)</span>\n      <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="sample-wrap">\n    \n    <div class="top-wrap">\n      <img src="assets/imgs/analyse/analyze_banner.png">\n    </div>\n    <h3 class="address">\n      <img src="assets/imgs/analyse/area.png"> 경기 포천시 소흘읍\n    </h3>\n  \n    <div class="wrap">\n      <div class="title fee">\n        <img src="assets/imgs/analyse/fee-sale.png" width="15"> 전기료 감면효과\n      </div>\n      <div class="content gray">\n        우리집 월평균 전기요금 <span>100,000</span>\n      </div>\n      <div class="content yellow">\n        전기료 예상 절감액 <span>- 80,000</span>\n      </div>\n      <div class="content light-blue">\n        설치후 전기요금 <span>20,000</span>\n      </div>\n      <div class="description blue">\n        <p>20년간 누적 예상 전기요금 절감액</p>\n        <h3>3,085 <span>만원</span> </h3>\n      </div>\n    </div>\n    \n    <div class="wrap">\n      <div class="title module">\n        <img src="assets/imgs/analyse/module.png" width="20"> 태양광 최적 설치 정보\n      </div>\n      <div class="content gray">\n        태양광 최적 설치 용량 <span class="blue">3kw</span>\n      </div>\n      <div class="content gray">\n        최적각도 <span class="blue">33도</span>\n      </div>\n      <div class="content gray">\n        월간 예상 평균 발전량 <span class="blue">350kw</span>\n      </div>\n      <div class="content gray">\n        20년간 누적 예상 발전량 <span class="blue">48,350kw</span>\n      </div>\n    </div>\n  \n    <div class="wrap">\n      <div class="title module carborn">\n        <img src="assets/imgs/analyse/carborn-sale.png" width="20"> 탄소저감효과\n      </div>\n      <div class="description blue">\n        <p class="gray">30년생 소나무 심는 효과</p>\n        <h3 class="deep-green"> <img src="assets/imgs/analyse/tree.png" class="ml2" width="18"> 1,000 <span>그루</span> </h3>\n      </div>\n      <div class="description blue b-none">\n        <p class="gray">CO2 탄소 저감 효과</p>\n        <h3 class="blue"> <img src="assets/imgs/analyse/lamp.png" class="ml2" width="14"> 700 <span>톤</span> </h3>\n      </div>\n    </div>\n\n  </div>\n  <!-- sample container -->\n  \n  <div class="btn-cont">\n    <button ion-button color="light" *ngIf="!isLogin()" (click)="login()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n    <button ion-button color="light" *ngIf="isLogin()" (click)="analyseClient()" class="boxBtn analyseClient"><img src="assets/imgs/analyze_client_w.png">분석 의뢰하기</button>\n  </div>\n  \n  <div class="login-cont" *ngIf="!isLogin()">\n    <button ion-button color="light" class="login" (click)="login()">로그인</button>\n    <button ion-button color="light" class="register" (click)="registerPage()">회원가입</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/support-sample/support-sample.html"*/,
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myquot_status_myquot_status__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_wheel_selector__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_encoding__);
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
    function MyquotInputPage(wheel, popoverCtrl, navCtrl, navParams, alertCtrl, appmgr, common, http) {
        var _this = this;
        this.wheel = wheel;
        this.popoverCtrl = popoverCtrl;
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
        this.contInfoData = []; // 견적관리정보
        // main data
        this.person = 1;
        this.insPrice = 0;
        this.module_name = '';
        this.inv_name = '';
        this.quality = '';
        this.module_guarent = '';
        this.modulegphoto = '';
        this.calidadphoto = '';
        this.modulephoto = '';
        this.inverterphoto = '';
        this.inv_guarent = '';
        this.as_guide = '';
        this.final_price = '';
        this.jsonData = {
            calidad: [
                { description: "", photo: "" }
            ],
            inverter: [
                { description: "", photo: "" }
            ],
            hospital: [],
            moduleg: []
        };
        this.invNameData = [];
        this.qualityData = [];
        this.modGuaData = [];
        this.modulecount = 0;
        this.invNamecount = 0;
        this.qualitycount = 0;
        this.modGcount = 0;
        this.etcCount = 0;
        this.modulenamearray = [];
        this.calidadnamearray = [];
        this.inverternamearray = [];
        this.modulegnamearray = [];
        this.modulephotoarray = [];
        this.calidadphotoarray = [];
        this.inverterphotoarray = [];
        this.modulegphotoarray = [];
        this.calidad = [];
        this.invGcount = 0;
        this.invGuaData = [];
        this.com_id = navParams.get("comapny_id");
        this.analyse_id = navParams.get('analyse_id');
        this.solar = navParams.get('solar');
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.email = userInfo.email;
        var sendData2 = [];
        //comp_id analyse_id
        sendData2["comp_id"] = this.com_id;
        sendData2["analyse_id"] = this.analyse_id;
        console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
            console.log(result);
            if (result) {
                console.log("kkkkkkkkkkkkkkk");
                console.log(result);
                _this.contractinfo = result;
            }
        });
        // 견적관리정보
        var sendData1 = [];
        this.http.postHttpData("/getContractInfoData", sendData1, function (result) {
            if (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    console.log(i + "i is : " + result[i]);
                    console.log(result[i]);
                    console.log("name is : " + _this.uintToString(result[i].product_name.data));
                    _this.contInfoData.push({ "file_name": _this.uintToString(result[i].file_name.data),
                        "file_path": _this.uintToString(result[i].file_path.data),
                        "code": result[i].code, "id": result[i].id, "product_name": _this.uintToString(result[i].product_name.data)
                    });
                    var filepath = _this.uintToString(result[i].file_path.data);
                    var filename = _this.uintToString(result[i].file_name.data);
                    if (result[i].code == "1") {
                        //모듈
                        console.log(result[i]);
                        _this.modulePhoto = "http://solarmy.co.kr" + _this.uintToString(result[i].file_path.data) + "" + _this.uintToString(result[i].file_name.data);
                        var module_name = _this.uintToString(result[i].product_name.data);
                        console.log("module name is : " + module_name);
                        if (module_name.length > 0) {
                            _this.modulephotoarray.push(filepath + filename);
                            _this.modulenamearray.push(module_name);
                        }
                        console.log(_this.modulephotoarray);
                        console.log("photo done");
                        console.log(_this.modulenamearray);
                        //http://solarmy.co.kr/solarmy_admin/uploads/20190327/155366537011.png
                        _this.modNameData = { "file_name": _this.uintToString(result[i].file_name.data), "file_path": _this.uintToString(result[i].file_path.data), "name": _this.uintToString(result[i].product_name.data) };
                    }
                    if (result[i].code == 2) {
                        var inv_name = _this.uintToString(result[i].product_name.data);
                        console.log("inverter name is : " + inv_name);
                        if (inv_name.length > 0) {
                            _this.inverterphotoarray.push(filepath + filename);
                            _this.inverternamearray.push(inv_name);
                        }
                    }
                    if (result[i].code == 3) {
                        var calidad_name = _this.uintToString(result[i].product_name.data);
                        console.log("calidad_name name is : " + calidad_name);
                        if (calidad_name.length > 0) {
                            _this.calidadphotoarray.push(filepath + filename);
                            _this.calidadnamearray.push(calidad_name);
                        }
                    }
                    if (result[i].code == 4) {
                        var moduleg = _this.uintToString(result[i].product_name.data);
                        console.log("moduleg name is : " + moduleg);
                        if (moduleg.length > 0) {
                            _this.modulegphotoarray.push(filepath + filename);
                            _this.modulegnamearray.push(moduleg);
                        }
                    }
                    // if(result[i].code==5){
                    //   var inverterg=this.uintToString(result[i].product_name.data);
                    //     console.log("moduleg name is : "+inverterg);
                    //     if(inverterg.length>0){
                    //       this.invertergnamearray.push(inverterg);
                    //     }
                    // }
                    if (result[i].code == 6) {
                        _this.etcName = _this.uintToString(result[i].product_name.data);
                        _this.etcPhoto = "http://solarmy.co.kr" + filepath + filename;
                    }
                    console.log("etc is : ");
                    console.log(_this.etcPhoto);
                    console.log(_this.etcName);
                    // if(result[i].code==6){
                    //   this.invGuaData.push(this.uintToString(result[i].product_name.data))
                    // }
                }
                console.log("module name array is : " + _this.modulenamearray);
                for (var i = 0; i < _this.modulenamearray.length; i++) {
                    _this.jsonData.hospital[i] = { description: _this.modulenamearray[i], photo: _this.modulephotoarray[i] };
                }
                for (var i = 0; i < _this.inverternamearray.length; i++) {
                    _this.jsonData.inverter[i] = { description: _this.inverternamearray[i], photo: _this.inverterphotoarray[i] };
                }
                for (var i = 0; i < _this.calidadnamearray.length; i++) {
                    _this.jsonData.calidad[i] = { description: _this.calidadnamearray[i], photo: _this.calidadphotoarray[i] };
                }
                for (var i = 0; i < _this.modulegnamearray.length; i++) {
                    _this.jsonData.moduleg[i] = { description: _this.modulegnamearray[i], photo: _this.modulegphotoarray[i] };
                }
                console.log("json array printing");
                console.log(_this.modulephotoarray);
                console.log(_this.inverterphotoarray);
                console.log(_this.calidadphotoarray);
                console.log(_this.jsonData);
                console.log(_this.jsonData.inverter[0]);
                console.log(_this.jsonData.inverter[0].photo);
                // for(var i=0; i<this.invertergnamearray.length; i++){
                //   this.jsonData.inverterg[i]={description:this.invertergnamearray[i]}
                // }
                console.log(_this.jsonData);
                console.log("contInfoData");
                console.log(_this.modNameData);
                console.log("file path for module is : " + _this.modulegphotoarray);
                // this.modNameData    = this.contInfoData.module_name
                // this.invNameData    = this.contInfoData.inv_name
                // this.qualityData    = this.contInfoData.quality.split(",");
                // this.modGuaData     = this.contInfoData.module_guarent.split(",");
                // this.invGuaData     = this.contInfoData.inv_guarent.split(",");
            }
            console.log("all done");
        });
    }
    MyquotInputPage.prototype.optionsFn = function () {
        console.log(this.module_name);
    };
    // presentPopoverInverterg(){
    //   this.wheel.show({
    //     title: "기타사항을 선택해주세요",
    //     items: [
    //      this.jsonData.moduleg
    //     ],
    //     positiveButtonText: "선택",
    //     negativeButtonText: "취소",
    //     defaultItems: [
    //       {index:0, value: this.jsonData.moduleg[0].description},
    //     ]
    //   }).then(
    //     result => {
    //       console.log(result);
    //       this.module_guarent=result[0].description;
    //       this.modulegphoto=result[0].photo;
    //       console.log(result[0].description);
    //     },
    //     err => console.log('Error: ' + JSON.stringify(err))
    //     );
    // }
    MyquotInputPage.prototype.presentPopoverInverter = function () {
        var _this = this;
        this.wheel.show({
            title: "인버터 제품명을 선택해주세요..",
            items: [
                this.jsonData.inverter
            ],
            positiveButtonText: "선택",
            negativeButtonText: "취소",
            defaultItems: [
                { index: 0, value: this.jsonData.inverter[0].photo },
            ]
        }).then(function (result) {
            // console.log(result[0].name + ' (id= ' + this.jsonData.firstNames[result[0].index].id + '), ' +
            console.log(_this.jsonData.inverter[result[0].index].photo);
            console.log(result);
            _this.inv_name = result[0].description;
            console.log(result[0].description);
            console.log(result[0].photo);
            _this.invPhoto = _this.jsonData.inverter[result[0].index].photo;
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    MyquotInputPage.prototype.presentPopoverCalidad = function () {
        var _this = this;
        this.wheel.show({
            title: "설치할 구조물 품질을 선택해주세요",
            items: [
                this.jsonData.calidad
            ],
            positiveButtonText: "선택",
            negativeButtonText: "취소",
            defaultItems: [
                { index: 0, value: this.jsonData.calidad[0].description },
            ]
        }).then(function (result) {
            console.log(result);
            console.log(result[0].description);
            _this.quality = result[0].description;
            _this.calidadphoto = _this.jsonData.calidad[result[0].index].photo;
            console.log("구조물 품질" + _this.calidadphoto);
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    MyquotInputPage.prototype.presentPopover = function () {
        var _this = this;
        this.wheel.show({
            title: "모듈 제품명을 선택해주세요",
            items: [
                this.jsonData.hospital
            ],
            positiveButtonText: "선택",
            negativeButtonText: "취소",
            defaultItems: [
                { index: 0, value: this.jsonData.hospital[0].description },
            ]
        }).then(function (result) {
            console.log(result);
            console.log(result[0].description);
            _this.module_name = result[0].description;
            _this.modulephoto = _this.jsonData.hospital[result[0].index].photo;
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    MyquotInputPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_7_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        return decodedString;
    };
    MyquotInputPage.prototype.ionViewWillEnter = function () {
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.email = userInfo.email;
        // 견적관리정보
        // let sendData1 = [];
        // this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
        //   if(result) {
        //     console.log(result);
        //     this.contInfoData = {"module_name":this.uintToString(result.module_name.data),"inv_name":this.uintToString(result.inv_name.data),
        //     "quality":this.uintToString(result.quality.data),"module_guarent":this.uintToString(result.module_guarent.data),
        //       "inv_guarent":this.uintToString(result.inv_guarent.data),"module_flag":result.module_flag,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_gflag":result.module_gflag,"quality_flag":result.quality_flag
        //   };
        //     this.modNameData    = this.contInfoData.module_name.split(",");
        //     this.invNameData    = this.contInfoData.inv_name.split(",");
        //     this.qualityData    = this.contInfoData.quality.split(",");
        //     this.modGuaData     = this.contInfoData.module_guarent.split(",");
        //     this.invGuaData     = this.contInfoData.inv_guarent.split(",");
        //   }
        //   console.log()
        // });
    };
    MyquotInputPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    MyquotInputPage.prototype.quotSubmit = function () {
        var _this = this;
        if (!this.validation())
            return false;
        var newfinal = "";
        if (this.final_price.indexOf("원") > -1) {
            newfinal = this.final_price.split("원")[0];
        }
        else {
            newfinal = this.final_price;
        }
        var sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        sendData["comp_id"] = this.user_id;
        sendData["person"] = this.person;
        sendData["price"] = 0;
        sendData["module_name"] = this.module_name;
        sendData["inv_name"] = this.inv_name;
        sendData["quality"] = this.quality;
        sendData["module_guarent"] = this.etcName;
        sendData["inv_guarent"] = this.inv_guarent;
        sendData["as_guide"] = this.as_guide;
        sendData["final_price"] = newfinal;
        sendData["module_file"] = this.modulephoto;
        sendData["inv_file"] = this.invPhoto;
        sendData["quality_file"] = this.calidadphoto;
        sendData["module_guarent_file"] = this.etcPhoto;
        sendData["solarpower"] = this.solar;
        console.log(sendData);
        this.http.postHttpData("/setSubmitContract", sendData, function (result) {
            if (result) {
                _this.quotFlag = true;
            }
        });
    };
    MyquotInputPage.prototype.validation = function () {
        var str = '';
        // if( this.insPrice == 0 ) {
        //   str = '설치 견적비용을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        if (this.as_guide == '') {
            str = '보증기간 및 A/S 안내를 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        else if (this.final_price == '') {
            str = '최종 소비자가격을 입력하세요.';
            this.confirmAlert(str);
            return false;
        }
        // else if( this.module_name == '' ) {
        //   str = '모듈 제품명을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        // else if( this.inv_name == '' ) {
        //   str = '인버터 제품명을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        // else if( this.quality == '' ) {
        //   str = '설치할 구조물 품질을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        // else if( this.module_guarent == '' ) {
        //   str = '모듈보증을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        // else if( this.inv_guarent == '' ) {
        //   str = '인버터 보증을 입력하세요.';
        //   this.confirmAlert(str);
        //   return false;
        // }
        return true;
    };
    MyquotInputPage.prototype.quotList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myquot_status_myquot_status__["a" /* MyquotStatusPage */], { tab: 'tab2' }, { animate: false });
    };
    // common
    MyquotInputPage.prototype.hasContInfo = function (type) {
        if (!this.contInfoData)
            return false;
        return true;
        // if(type == 'module_name' && this.contInfoData.module_flag == 1) {
        //   return true;
        // }
        // else if(type == 'inv_name' && this.contInfoData.inv_flag == 1) {
        //   return true;
        // }
        // else if(type == 'quality' && this.contInfoData.quality_flag == 1) {
        //   return true;
        // }
        // else if(type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
        //   return true;
        // }
        // else if(type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
        //   return true;
        // }
        // return false;
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
    MyquotInputPage.prototype.checkFocus = function () {
        console.log("onfocus");
        if (this.final_price.length > 0) {
            this.final_price = "";
        }
    };
    MyquotInputPage.prototype.change = function (event) {
        console.log(event);
        console.log(this.final_price + "");
        this.final_price = "" + this.final_price + "원";
        // (<HTMLInputElement>document.getElementById("value1")).value = event+"won";
    };
    MyquotInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myquot-input',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-input/myquot-input.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">견적 입력</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="wrap" *ngIf="!isQuot()">\n    <div class="list">\n        <ion-item class="mt10" >\n            <ion-label style="font-size: 15px;\n            color: black;" stacked>태양광 설치 용량</ion-label>\n            <ion-label style="font-size: 15px;\n            color: black;" stacked>{{solar}} KW </ion-label>\n          </ion-item>\n      <label stacked>설치인원</label>\n      \n      <div class="value">{{person}}</div><span style="display: block;\n      width: 100px;\n      position: absolute;\n      left: 10%;\n      top: 80%;" class="unit">명</span>\n      <img src="assets/imgs/minus.png" style="right: 15%;" class="operator" (click)="operator(\'dec\')">\n      <img src="assets/imgs/plus.png" style="right: 5%;" class="operator" (click)="operator(\'inc\')">\n    \n    \n      \n    \n    </div>\n\n\n    <div style="    text-align: center;" class="bottomlist">\n\n\n      <ion-list>\n                \n      <ion-item>\n          <ion-label (click)="presentPopover()">모듈 제품 선택  &nbsp;&nbsp;<ion-icon name="ios-arrow-down"></ion-icon>\n          </ion-label>\n          <ion-label >{{module_name}}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label (click)="presentPopoverInverter()">인버터 제품 선택 &nbsp;&nbsp;<ion-icon name="ios-arrow-down"></ion-icon>\n            </ion-label>\n            <ion-label >{{inv_name}}</ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label (click)="presentPopoverCalidad()">설치할 구조물 선택 &nbsp;&nbsp; <ion-icon name="ios-arrow-down"></ion-icon>\n              </ion-label>\n              <ion-label >{{quality}}</ion-label>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label (click)="presentPopoverModuleg()">모듈보증 &nbsp;&nbsp; <ion-icon name="ios-arrow-down"></ion-icon>\n                </ion-label>\n                <ion-label >{{module_guarent}}</ion-label>\n              </ion-item>\n                 <ion-item>\n              <ion-label (click)="presentPopoverInverterg()">인버터 보증 &nbsp;&nbsp; <ion-icon name="ios-arrow-down"></ion-icon>\n              </ion-label>\n              <ion-label >{{inv_guarent}}</ion-label>\n            </ion-item> -->\n        <!-- <ion-item *ngIf="inv_name!=\'\'" style="text-align: center;" > \n          <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{inv_name}}</p><img src="{{invPhoto}}"/></ion-label>\n        </ion-item>  \n  <ion-item *ngIf="quality!=\'\'" style="text-align: center;" > \n          <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{quality}}</p><img src="{{qPhoto}}"/></ion-label>\n        </ion-item> \n     \n\n        <ion-item *ngIf="module_guarent!=\'\'" style="text-align: center;" > \n          <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{module_guarent}}</p><img src="{{modPhoto}}"/></ion-label>\n        </ion-item> \n  \n        <ion-item *ngIf="inv_guarent!=\'\'" style="text-align: center;" > \n          <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{inv_guarent}}</p><img src="{{invGPhoto}}"/></ion-label>\n        </ion-item>\n       \n        <ion-item *ngIf="etcName!=\'\'" style="text-align: center;" > \n          <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{etcName}}</p><img src="{{etcPhoto}}"/></ion-label>\n        </ion-item>  -->\n      </ion-list>\n      <p>{{etcName}}</p>\n        <img src={{etcPhoto}}/>\n      <!-- {{module_name}} \n      <img src="{{modulePhoto}}"/>\n      {{inv_name}} \n      <img src="{{invPhoto}}"/>\n      {{quality}} \n      <img src="{{qPhoto}}"/>\n      {{module_guarent}} \n      <img src="{{modPhoto}}"/>\n      {{inv_guarent}} \n      <img src="{{invGPhoto}}"/>\n      {{etcName}}\n      <img src="{{etcPhoto}}"/> -->\n     \n    </div>\n\n\n    <div class="list mt10">\n      <label stacked>보증기간 및 A/S 안내</label>\n      <textarea class="textarea" placeholder="설치 완료 후 내부 A/S 규정 입력해주세요" [(ngModel)]="as_guide"></textarea>\n    </div>\n    \n    <div class="list">\n      <label class="mb0" stacked>최종 소비자가 입력 (부가세 포함 가격)</label>\n      <ion-input (ionFocus)="checkFocus()" (blur)="change($event);" id="value1"   style="  color:black;  border-bottom: solid lightgray 1px;" type="text" class="width95"  [(ngModel)]="final_price" ></ion-input>\n\n    </div>\n\n    <div class="btn-cont">\n      <button style="border-radius: 10px;\n      color: white; color: white;\n    font-size: 25px;" ion-button color="light" (click)="quotSubmit()" class="boxBtn quotSubmit"><img style="width:14px; height:14px; margin-right:5px;" src="assets/imgs/calcu.png"/>견적 제출하기</button>\n    </div>\n\n  </div>\n\n  <div class="wrap complete" *ngIf="isQuot()">\n    <p class="mt10">견적서를 제출해 주셔서 감사합니다. </p>\n    <p class="mt20">제출해주신 사항에 대한 진행 여부는 <br/>계약 및 완료 메뉴에서 확인 가능합니다.</p>\n    <div class="text-center">\n      <button ion-button (click)="quotList()" class="mt20">제출견적 목록</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-input/myquot-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_wheel_selector__["a" /* WheelSelector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */]])
    ], MyquotInputPage);
    return MyquotInputPage;
}());

//# sourceMappingURL=myquot-input.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(17);
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
        this.modulecount = 0;
        this.invNamecount = 0;
        this.qualitycount = 0;
        this.modGcount = 0;
        this.etcCount = 0;
        this.invGcount = 0;
        this.invGuaData = [];
        this.cont_id = 0;
        this.cont_id = navParams.get('cont_id');
        console.log(this.cont_id);
        this.analyse_id = navParams.get('analyse_id');
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        // initialize
        // 제출한 견적얻기
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        console.log(this.moduleName);
        console.log("this is that the first time ");
        var sendData2 = [];
        sendData2["comp_id"] = this.user_id;
        sendData2["analyse_id"] = this.analyse_id;
        console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, function (result) {
            console.log(result);
            if (result) {
                console.log("kkkkkkkkkkkkkkk");
                console.log(result);
                _this.contractinfo = result;
                console.log("contractinfo is : " + _this.contractinfo);
                console.log(_this.contractinfo);
                _this.moduleName = _this.uintToString(_this.contractinfo.module_name.data);
                _this.invName = _this.uintToString(_this.contractinfo.inv_name.data);
                _this.qName = _this.uintToString(_this.contractinfo.quality.data);
                _this.modName = _this.uintToString(_this.contractinfo.module_guarent.data);
                if (_this.contractinfo.module_file == null) {
                }
                else {
                    _this.modulePhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.module_file.data);
                }
                if (_this.contractinfo.inv_file == null) {
                }
                else {
                    _this.invPhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.inv_file.data);
                }
                if (_this.contractinfo.quality_file == null) {
                }
                else {
                    _this.qPhoto = "http://solarmy.co.kr" + _this.uintToString(_this.contractinfo.quality_file.data);
                }
                if (_this.contractinfo.module_guarent_file == null) {
                }
                else {
                    _this.modPhoto = "" + _this.uintToString(_this.contractinfo.module_guarent_file.data);
                }
                console.log(_this.moduleName);
                console.log(_this.invName);
                console.log(_this.qName);
                console.log(_this.modName);
                console.log(_this.modulePhoto);
                console.log(_this.invPhoto);
                console.log(_this.qPhoto);
                console.log(_this.modPhoto);
            }
        });
        var sendData = [];
        sendData["cont_id"] = this.cont_id;
        this.http.postHttpData("/getContractById", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            if (result) {
                console.log(result);
                //module_name
                _this.submitCont = { "reg_time": result.reg_time, "price": result.price, "person": result.person, "module_name": _this.uintToString(result.module_name.data),
                    "inv_guarent": _this.uintToString(result.inv_guarent.data), "inv_name": _this.uintToString(result.inv_name.data),
                    "final_price": result.final_price,
                    "quality": _this.uintToString(result.quality.data), "as_guide": _this.uintToString(result.as_guide.data), "module_guarent": _this.uintToString(result.module_guarent.data) };
                console.log(_this.submitCont);
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
            selector: 'page-myquot-view',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-view/myquot-view.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">견적 보기</span>\n    <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="wrap" *ngIf="hasData()">\n    <h6>[제출일자] {{ returnData(submitCont.reg_time) }} </h6>\n    <div class="list">\n      <label>설치인원</label>\n      <div class="content">{{submitCont.person}}명</div>\n    </div>\n    \n    <div style="    text-align: center;" class="bottomlist">\n      <h4 style="margin:16px 0">{{moduleName}}</h4>\n      <img src="{{modulePhoto}}" />\n      <h4 style="margin:16px 0">{{invName}}</h4> \n      <img src="{{invPhoto}}"/>\n      <h4 style="margin:16px 0">{{qName}}</h4> \n      <img src="{{qPhoto}}"/>\n      <h4 style="margin:16px 0">{{modName}}</h4> \n      <img src="{{modPhoto}}"/>\n      <h4 style="margin:16px 0">{{invGName}}</h4> \n      <img src="{{invGPhoto}}"/>\n      <h4 style="margin:16px 0">{{etcName}}</h4>\n      <img src="{{etcPhoto}}"/>\n    </div>\n    \n    <div class="list">\n      <label>보증기간 및 A/S안내</label>\n      <div class="content">{{ submitCont.as_guide }}</div>\n    </div>\n    <div class="list double">\n      <label>최종 소비자가격<br/>(부가세 포함 가격)</label>\n      <div class="content mt10">{{ numFormat(submitCont.final_price) }}원</div>\n    </div>\n  </div>\n\n  <div class="no-data mt30" *ngIf="!hasData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-view/myquot-view.html"*/,
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyquotProcessStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendarmodal_calendarmodal__ = __webpack_require__(134);
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
        console.log("id and anal id issss : " + this.cont_id + "///" + this.analyse_id);
        this.http.postHttpData("/getQuotStatus", sendData, function (result) {
            // modal.dismiss({}, "", {animate:false});
            if (result) {
                console.log(result);
                if (result.add_price_content != null) {
                    _this.submitCont = { "add_price": result.add_price, "add_price_content": _this.uintToString(result.add_price_content.data), "ins_comp_time": result.ins_comp_time, "ins_exp_time": result.ins_exp_time, "final_price": result.final_price, "name": _this.uintToString(result.name.data), "cont_price": result.cont_price, "price": result.price, "ins_hope_time": result.ins_hope_time };
                }
                else {
                    _this.submitCont = { "add_price": result.add_price, "add_price_content": "none", "ins_comp_time": result.ins_comp_time, "ins_exp_time": result.ins_exp_time, "final_price": result.final_price, "name": _this.uintToString(result.name.data), "cont_price": result.cont_price, "price": result.price, "ins_hope_time": result.ins_hope_time };
                }
                _this.pay_flag = result.pay_flag;
                _this.pay_time = result.pay_time;
                if (result.custom_replay != null) {
                    _this.custom_replay = _this.uintToString(result.custom_replay.data);
                }
                console.log("dfsfsdfd");
                console.log(_this.custom_replay);
                _this.contract_time = _this.returnData(result.contract_time, 'min');
                console.log(result.ins_comp_time);
                console.log(result.ins_exp_time);
                if (result.ins_comp_time && result.ins_exp_time != "0000-00-00 00:00:00") {
                    _this.contract = true; // 계약되어있을 때
                }
                else {
                    _this.contract = false;
                }
                console.log(_this.contract);
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
        else {
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
        }
    };
    MyquotProcessStatusPage.prototype.setContract = function () {
        var _this = this;
        this.contract_time = this.getNow();
        // let analyse_id = this.submitCont ? this.submitCont.analyse_id : 0;
        var sendData = [];
        sendData["cont_id"] = this.cont_id;
        sendData["ins_exp_time"] = this.ins_exp_time;
        sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/updateContDates", sendData, function (result) {
            if (result) {
                _this.contract = true;
                var sendData_1 = [];
                sendData_1["cont_id"] = _this.cont_id;
                sendData_1["analyse_id"] = _this.analyse_id;
                _this.http.postHttpData("/getQuotStatus", sendData_1, function (result) {
                    // modal.dismiss({}, "", {animate:false});
                    if (result) {
                        console.log(result);
                        if (result.add_price_content != null) {
                            _this.submitCont = { "add_price": result.add_price, "add_price_content": _this.uintToString(result.add_price_content.data), "ins_comp_time": result.ins_comp_time, "ins_exp_time": result.ins_exp_time, "final_price": result.final_price, "name": _this.uintToString(result.name.data), "cont_price": result.cont_price, "price": result.price, "ins_hope_time": result.ins_hope_time };
                        }
                        else {
                            _this.submitCont = { "add_price": result.add_price, "add_price_content": "none", "ins_comp_time": result.ins_comp_time, "ins_exp_time": result.ins_exp_time, "final_price": result.final_price, "name": _this.uintToString(result.name.data), "cont_price": result.cont_price, "price": result.price, "ins_hope_time": result.ins_hope_time };
                        }
                        _this.pay_flag = result.pay_flag;
                        _this.pay_time = result.pay_time;
                        if (result.custom_replay != null) {
                            _this.custom_replay = _this.uintToString(result.custom_replay.data);
                        }
                        console.log("dfsfsdfd");
                        console.log(_this.custom_replay);
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
            selector: 'page-myquot-process-status',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-process-status/myquot-process-status.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">진행현황</span>\n    <img src="assets/imgs/back.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="hasData()">\n    <div class="wrap wrap_1">\n      <h3 class="title">계약 정보</h3>\n      \n      <div class="list">\n        <label>고객명</label>\n        <div class="content">{{submitCont.name}}</div>\n      </div>\n    \n      <div class="list cont">\n        <label>총금액</label>\n        <div class="content">{{ numFormat(submitCont.final_price) }}원</div>\n      </div>\n      <div class="list cont">\n        <label>고객 설치 희망일</label>\n        <div class="content">{{ returnData(submitCont.ins_hope_time, \'day\') }}</div>\n      </div>\n        \n      <div class="list cont" *ngIf="!isContract()">\n        <label>설치예정일</label>\n        <div class="content" (click)="calendarEx()">\n          <p>{{ins_exp_time}} <img src="assets/imgs/calendar.png" width="15" /> </p>\n        </div>\n      </div>\n      <div class="list" *ngIf="isContract()">\n        <label>설치예정일</label>\n        <div class="content">{{ returnData(submitCont.ins_exp_time, \'day\') }}</div>\n      </div>\n      <div class="list cont" *ngIf="!isContract()">\n        <label>설치완료일</label>\n        <div class="content" >\n          <!-- <p>{{ ins_comp_time }}  <img src="assets/imgs/calendar.png" width="15" /> </p> -->\n        </div>\n      </div>\n      <div class="list" *ngIf="isContract()">\n        <label>설치완료일</label>\n        <div *ngIf="submitCont.ins_comp_time!=\'0000-00-00 00:00:00\'" class="content">{{ returnData(submitCont.ins_comp_time, \'day\') }} </div>\n      </div>\n\n      <div class="list double" *ngIf="!isContract()">\n        <label>계약서</label>\n        <div class="content"><button ion-button (click)="viewContract()" class="viewContract">계약서 보기</button></div>\n      </div>\n\n      <div class="contract btn-cont" *ngIf="!isContract()">\n        <div class="text-center">\n          <ion-checkbox id="contract" (click)="agreeContract()"></ion-checkbox>\n          <ion-label for="contract">계약서 내용을 확인하였으며, 계약체결을 진행합니다.</ion-label> \n        </div>\n        <button ion-button color="light" disabled *ngIf="!isTerm()" class="boxBtn contract">계약하기</button>\n        <button ion-button color="light" (click)="setContract()" *ngIf="isTerm()" class="boxBtn contract">계약하기</button>\n      </div>\n      <div class="contract btn-cont" *ngIf="isContract()">\n        <p>{{contract_time}}</p>\n        <h6>계약이 완료되었습니다.</h6>\n        <button ion-button class="viewContract mt10" (click)="viewContract()">계약서 보기</button>\n      </div>\n    </div>\n    \n    <div class="middle" *ngIf="isContract()"></div>\n\n    <div *ngIf="submitCont.add_price!=0" class="wrap wrap_2">\n        <h3 class="title">추가 금액</h3>\n        \n        <div class="list">\n          <label>추가금액 안내</label>\n          <div class="content">{{submitCont.add_price_content}}</div>\n        </div>\n        <div class="list">\n            <label>추가금액</label>\n            <div class="content">{{submitCont.add_price}} </div>\n          </div>\n       \n     \n      </div>\n\n    <div class="wrap wrap_2" *ngIf="isContract()">\n      <h3 class="title">결제 정보</h3>\n      \n      <div style="height:60px;" class="list">\n        <label>결제금액</label>\n        <div *ngIf="submitCont.add_price!=0" class="content">\n            {{ numFormat(submitCont.final_price+submitCont.add_price ) }}원 (추가금액 : {{submitCont.add_price}} 원 )\n        </div>\n        <div *ngIf="submitCont.add_price==0" class="content">\n            {{ numFormat(submitCont.final_price ) }}원\n        </div>\n      </div>\n      <div class="contract btn-cont" *ngIf="!hasPay()">\n        <h6>결제전입니다.</h6>\n      </div>\n      <div class="contract btn-cont" *ngIf="hasPay()">\n        <p>{{ returnData(pay_time, \'min\') }}</p>\n        <h6>결제가 완료되었습니다.</h6>\n      </div>\n    </div>\n    \n    <div class="middle" *ngIf="hasRating()"></div>\n    <div class="wrap wrap_2" *ngIf="hasRating()">\n      <h3 class="title b-none">고객 평가</h3>\n      \n      <div class="contract btn-cont">\n        <ul class="rating">\n          <li><img [src]="imgUrl[0]" ></li>\n          <li><img [src]="imgUrl[1]" ></li>\n          <li><img [src]="imgUrl[2]" ></li>\n          <li><img [src]="imgUrl[3]" ></li>\n          <li><img [src]="imgUrl[4]" ></li>\n        </ul>\n        <h6 class="thanks">{{ custom_replay }}</h6>\n      </div>\n      \n    </div>\n  </div>\n  <div class="no-data mt30" *ngIf="!hasData()">\n    <h3>로딩중입니다...</h3>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myquot-process-status/myquot-process-status.html"*/,
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyinfoUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charge_guide_charge_guide__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_encoding__ = __webpack_require__(17);
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
        this.user_id = Number(localStorage.getItem("id"));
        this.email = localStorage.getItem("email");
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
        this.area = "";
    };
    MyinfoUpdatePage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { animate: false });
    };
    MyinfoUpdatePage.prototype.chargeGuidePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__charge_guide_charge_guide__["a" /* ChargeGuidePage */], {}, { animate: false });
    };
    MyinfoUpdatePage.prototype.doSomething = function (i) {
        console.log(i);
        var sports = document.forms['demoForm'].elements['sports'];
        console.log(sports[i].checked);
        if (sports[i].checked == true) {
            console.log(sports[i].value + "is checked inputtttt");
            this.area += sports[i].value + "||";
            console.log(this.area);
        }
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
        console.log(this.area);
        this.area = "";
        var sports = document.forms['demoForm'].elements['sports'];
        for (var i = 0, len = sports.length; i < len; i++) {
            sports[i].onclick = this.doSomething(i);
        }
        // console.log(sports);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loading_loading__["a" /* LoadingPage */], { txt: "로딩중입니다..." });
        modal.present({ animate: false });
        var sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["comp_name"] = this.comp_name;
        sendData["address"] = this.address;
        sendData["address_detail"] = this.address_detail;
        sendData["post"] = this.postCode;
        sendData["clerk"] = this.clerk;
        sendData["hp_num"] = this.hp_num;
        sendData["contact"] = this.contact;
        sendData["elect_num"] = this.elect_num;
        sendData["business_num"] = this.business_num;
        sendData["bank_name"] = this.bank_name;
        sendData["bank_num"] = this.bank_num;
        sendData["tax_email"] = this.tax_email;
        sendData["tax_clerk"] = this.tax_clerk;
        sendData["area"] = this.area;
        console.log(sendData);
        this.http.postHttpData("/updatePartnerData", sendData, function (result) {
            modal.dismiss({}, "", { animate: false });
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {}, { animate: false });
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
        this.address_detail = selectedVal.bdNm;
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
        var options = {
            quality: 50,
            targetHeight: 600,
            targetWidth: 600,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true
        };
        var result = this.camera.getPicture(options).then(function (url) {
            console.log("url is : " + url);
            window.alert(url);
            url = url.replace(" ", "%20");
            window.alert(url);
            // var d = new Date();
            //     var n = d.getTime();
            //     console.log(url);
            //     if(type == 'elect') {
            //       // this.tmp_elect_url = url;
            //       this.elect_name = n+'.jpg';
            //       this.updateLicence(url, 'elect_num');
            //     }
            //     else if(type == 'buss') {
            //       // this.tmp_buss_url = url;
            //       this.buss_name = n+'.jpg';
            //       this.updateLicence(url, 'business_num');
            //     }
        }, function (err) {
            window.alert(err);
            console.log("clickGallery err: " + err);
        });
        // var options = {
        //     quality: 100,
        //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        //     destinationType: this.camera.DestinationType.DATA_URL,
        //     correctOrientation: true,
        //     maximumImagesCount: 1,
        //     targetWidth: 1000,
        //     targetHeight: 1000,
        // };
        // this.camera.getPicture(options)
        // .then(
        //     (url) => {
        //       var d = new Date();
        //       var n = d.getTime();
        //       console.log(url);
        //       if(type == 'elect') {
        //         // this.tmp_elect_url = url;
        //         this.elect_name = n+'.jpg';
        //         this.updateLicence(url, 'elect_num');
        //       }
        //       else if(type == 'buss') {
        //         // this.tmp_buss_url = url;
        //         this.buss_name = n+'.jpg';
        //         this.updateLicence(url, 'business_num');
        //       }
        //     }, 
        //     (err) => {
        //         console.log("clickGallery err: "+err);
        //     }
        // );
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
    MyinfoUpdatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
                _this.area = _this.uintToString(result.area.data);
                console.log(_this.area);
                _this.comp_name = _this.uintToString(result.company_name.data);
                _this.address = _this.uintToString(result.address.data);
                _this.address_detail = _this.uintToString(result.address_detail.data);
                _this.postCode = _this.uintToString(result.post.data);
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
            var sports = document.forms['demoForm'].elements['sports'];
            console.log(_this.area.split("||"));
            var a = _this.area.split("||");
            console.log(a.length);
            for (var i = 0, len = sports.length; i < len; i++) {
                console.log(sports[i].type);
                console.log(sports[i].checked);
                // sports[i].checked="false";
                // sports[i].checked=false;
            }
            setTimeout(function () {
                for (var i = 0, len = sports.length; i < len; i++) {
                    console.log(sports[i].value);
                    for (var j = 0; j < a.length; j++) {
                        console.log(a[j]);
                        if (a[j] == sports[i].value) {
                            console.log(a[j] + "is matched so clicked" + sports[i].checked);
                            if (sports[i].checked == true) {
                                sports[i].checked = false;
                                sports[i].checked = true;
                            }
                            else {
                                sports[i].checked = false;
                                sports[i].checked = true;
                            }
                        }
                    }
                }
            }, 2000);
        });
    };
    MyinfoUpdatePage.prototype.updateLicence = function (url, field) {
        var sendData = [];
        sendData["email"] = this.email;
        sendData["url"] = url;
        sendData["field"] = field;
        this.http.postHttpData("/updateUserLicences", sendData, function (result) {
            if (result) {
                console.log("updating licence...");
                console.log(result);
                return true;
            }
            else {
                console.log("updating llllllicence...");
                console.log(result);
                return false;
            }
        });
    };
    MyinfoUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myinfo-update',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myinfo-update/myinfo-update.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">내정보 업데이트</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n<!-- \n  <div class="top-wrap">\n    <h6>회원정보를 입력하셔야 견적에 참여하실 수 있습니다.</h6>\n    <button ion-button class="charge-guide" (click)="chargeGuidePage()">이용요금 안내</button>\n  </div>\n  <div class="border-cont"></div> -->\n\n  <div class="form">\n   \n    <div class="alert-md">\n      <label style="">이메일</label>\n      <div class="alert-input"> {{ email }} </div>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 회사명</label>\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="comp_name"/>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 주소</label>\n      <input type="text" class="alert-input address"  value="{{postCode}}" />\n      <button ion-button color="light" (click)="toggleSearchPop()">주소검색</button>\n    </div>\n    <div style="height: 30px;" class="alert-md">\n      <input style="width: 100%; \n      padding: 10px 0 9px;" type="text"  class="alert-input" disabled value="{{address}}"/>\n    </div>\n    <div style="height: 30px;" class="alert-md">\n      <input style="\n      padding: 10px 0 9px; width: 100%; margin-top:10px; " type="text" placeholder="상세주소를 입력하세요"  class="alert-input"   [(ngModel)]="address_detail"/>\n    </div>\n    <div style="margin-top:1em; " class="alert-md">\n      <label>담당자</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="clerk"/>\n    </div>\n    <div class="alert-md">\n      <label><span>*</span> 연락처</label>\n      <input  style="width:100%;" style="width: 100%;" type="text" class="alert-input" [(ngModel)]="contact" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <div class="alert-md">\n      <label>전화번호</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="hp_num" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <!--  -->\n    <!-- <div class="alert-md mt20 double">\n      <label>전기면허 </label>\n      <span style="top: 5px;" class="file-name">{{elect_name}}</span>\n      <img style="\n      margin-top: 10px !important;" src="assets/imgs/cancel.png" class="btn-cancel" width="10" *ngIf="hasImg(old_elect_url, elect_url)" (click)="delImage(\'elect\')">\n      <button style="margin-right: 15px;\n      right: 0px;\n      position: absolute;" ion-button color="light" (click)="clickGallery(\'elect\')">업로드</button>\n      <div class="hrline"></div>\n    </div>\n    <div class="alert-md mt20 double">\n      <label>사업자 등록번호</label>\n      <span  style="top: 5px;" class="file-name">{{buss_name}}</span>\n      <img  style="\n      margin-top: 10px !important;" src="assets/imgs/cancel.png" class="btn-cancel" width="10" *ngIf="hasImg(old_buss_url, buss_url)" (click)="delImage(\'buss\')">\n      <button style="margin-right: 15px;\n      right: 0px;\n      position: absolute;" ion-button color="light" (click)="clickGallery(\'buss\')">업로드</button>\n      <div class="hrline"></div>\n      \n    </div> -->\n    <!--  -->\n    <div class="alert-md mt10">\n      <label>은행계좌</label>\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="bank_name" placeholder="은행명"/>\n    </div>\n    <div class="alert-md">\n      <input style="width: 100%;" type="text" class="alert-input" [(ngModel)]="bank_num" placeholder="계좌번호"/>\n    </div>\n    <div class="alert-md mt10">\n      <label class="v-alignB">세금계산서 이메일</label>\n      <input style="width:100%;" type="email" class="alert-input" [(ngModel)]="tax_email"/>\n    </div>\n    <div class="alert-md">\n      <label class="v-alignB">세금계산서 담당자</label>\n      <input style="width:100%;" type="text" class="alert-input" [(ngModel)]="tax_clerk"/>\n    </div>\n    <div class="alert-md">\n        <label class="v-alignB">담당지역</label>\n        <form action="#" method="post" class="demoForm" id="demoForm">\n            <input type="checkbox"  name="sports" value="서울">서울 <input type="checkbox" name="sports" value="경기">경기 <input type="checkbox"  name="sports" value="강원">강원\n            <input type="checkbox"  name="sports" value="충북">충북  <input id="ss" type="checkbox" name="sports" value="충남">충남 <input type="checkbox"  name="sports" value="전북">전북 <input type="checkbox" name="sports" value="전남">전남\n            <input type="checkbox" name="sports" value="경북">경북 <input  type="checkbox" name="sports" value="경남">경남 <input type="checkbox" name="sports" value="제주">제주\n        \n          </form>\n         </div>\n    \n    <div class="btn-cont">\n      <button ion-button color="light" (click)="save()" class="boxBtn save"><img style="width:14px; height:14px; margin-right:5px;" src="assets/imgs/check.png">정보 저장</button>\n    </div>\n    \n  </div>\n</ion-content>\n\n<div *ngIf="isSearch()" class="search">\n  <div (click)="toggleSearchPop()" class="bg"></div>\n  <div class="result-wrap">\n    <div class="top-area etcForm">\n      <ion-searchbar [(ngModel)]="input_address" (ionInput)="searchAddress()" placeholder="주소를 입력해 주세요."></ion-searchbar>\n    </div>\n    <ul *ngIf="!isSearchVal()" class="result">\n      <li>주소를 상세히 입력해 주세요.</li>\n    </ul>\n    <ul class="result" id="search_list">\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/myinfo-update/myinfo-update.html"*/,
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

/***/ 268:
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
    QuotationPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], QuotationPage.prototype, "content", void 0);
    QuotationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotation',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/quotation/quotation.html"*/'<!--\n  Generated template for the QuotationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>실시간 견적 현황</ion-title>\n  </ion-navbar> -->\n  <div class="top_bar">\n      <span class="title">실시간 견적 현황</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n    </div>\n</ion-header>\n\n\n<ion-content #content (ionScrollEnd)="logScrollEnd()"  (ionScroll)="onScroll($event)"  padding>\n  <div \n class="test">\n      <ion-list >\n          <ion-item *ngFor="let a of array">\n              <p style="color:black;font-weight: bold;    width: 45%;\n              overflow-x: hidden; font-size:15px;">{{a.address}} </p><p style="width:11%;">{{a.name}} </p><p style="width:25%;">{{a.reg_date}} </p>\n              <button  style="background-color: rgb(41, 41, 112);\n              vertical-align: middle;\n              line-height: 30px;" ion-button>견적요청</button>\n             \n          </ion-item>\n         \n        </ion-list>\n  </div>\n    \n\n    <div >\n\n\n      \n        </div>\n        <ion-footer>\n          <div class="footer-cont">\n            <h3>© 솔라미(Solarmy)</h3>\n            <p>통신판매업신고: 제20129-경기포천-19129호</p>\n            <FORM name=\'CERTMARK_FORM\' METHOD=\'POST\'>\n              <input type="hidden" name="certMarkURLKey">\n          </FORM> \n          <a href="javascript:onPopCertMar(\'eb0b73c3740ee4489320997ed6a60473\')"><img src=\'https://escrow.nonghyup.com/images/IC/es/img_nh_mark02.gif\' alt=\'에스크로이체로 결제하기\' border=\'0\'/></a> \n          \n          \n          </div>\n        </ion-footer>\n        \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/quotation/quotation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], QuotationPage);
    return QuotationPage;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentInstallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_install_detail_current_install_detail__ = __webpack_require__(270);
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
        this.installArray = this.navParams.get("array");
        console.log(this.installArray);
        var tag = "i_date";
        this.installArray.sort(function (a, b) {
            console.log(a[tag]);
            // convert date object into number to resolve issue in typescript
            var dateA = new Date(a[tag]).getTime();
            var dateB = new Date(b[tag]).getTime();
            return dateB > dateA ? 1 : -1;
        });
        this.array_detail = this.navParams.get("array_detail");
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
            selector: 'page-current-install',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/current-install/current-install.html"*/'<!--\n  Generated template for the CurrentInstallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n      <div class="top_bar">\n          <span class="title">설치 현황</span>\n          <img style="    width: 32px;\n          height: 25px;\n          top: 0;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n      </div>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <div class="container" *ngFor="let a of installArray" style="    width: 90% !important;">\n        <img (click)="gotodetail(a);" src="{{a.url}}" alt="Car" style="width:100%">\n        <div class="bottom">\n        <p style="font-size:17px; text-align: center">{{a.subject}}</p>\n        </div>\n      </div> -->\n      <ion-list  style="\n      background:#eff2f3;\n        padding: 10px;"\n        \n        >\n        <ion-item style=" \n        min-height: 70px;  background:#eff2f3;" *ngFor="let a of installArray">\n        <div (click)="gotodetail(a)">\n            <p style="    font-size: 16px;\n         \n            font-weight: bold;">\n              {{a.subject}}\n            </p>\n        </div> \n          \n        </ion-item>\n       \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/current-install/current-install.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CurrentInstallPage);
    return CurrentInstallPage;
}());

//# sourceMappingURL=current-install.js.map

/***/ }),

/***/ 270:
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
        this.inverterphoto = [];
        this.thirdarray = [];
        this.fourtharray = [];
        this.fiftharray = [];
        this.sixtharray = [];
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
        console.log("real one issssss : ");
        console.log(this.realdetail);
        for (var i = 0; i < this.realdetail.length; i++) {
            if (this.realdetail[i].code == "2") {
                this.inverterphoto.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
            }
            if (this.realdetail[i].code == "1") {
                this.currentarray.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
            }
            if (this.realdetail[i].code == "3") {
                this.thirdarray.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
            }
            if (this.realdetail[i].code == "4") {
                this.fourtharray.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
            }
            console.log("????");
            console.log(this.inverterphoto);
            console.log(this.thirdarray);
            console.log(this.fourtharray);
            if (this.realdetail[i].code == 5) {
                this.fiftharray.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
            }
            if (this.realdetail[i].code == 6) {
                this.sixtharray.push({ "content": this.realdetail[i].content, "photo": "http://solarmy.co.kr/" + this.realdetail[i].filepath + this.realdetail[i].filename });
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
            selector: 'page-current-install-detail',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/current-install-detail/current-install-detail.html"*/'<!--\n  Generated template for the CurrentInstallDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <div class="top_bar">\n        <span class="title">설치 현황 상세</span>\n        <img src="assets/imgs/close.png" class="back_img" (click)="back()">\n      </div>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n            float: left;">설치일 </p>  <p>{{time}}</p></ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">설치지역 </p>  <p>{{address}}</p></ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">설치용량 </p>  <p>{{amount}}</p></ion-label>\n        </ion-item>\n        <ion-item >\n            <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n              float: left;">제목 </p>  <p style="font-size:1.3rem;">{{name}}</p></ion-label>\n          </ion-item>\n        <ion-item style="text-align: center;">\n            <ion-label><img src="{{url}}"/></ion-label>\n          </ion-item>\n          <!-- <ion-item >\n              <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n                float: left;">인버터 제품명 </p>  <p>{{invertername}}</p></ion-label>\n            </ion-item>\n            <ion-item style="text-align: center" >\n                <ion-label><img src="{{inverterphoto}}"/></ion-label>\n              </ion-item> -->\n              <!-- <ion-item>\n                <ion-label style="    margin-top: 1.5em;"><p style="    width: 30%;\n                  float: left;">설치 현황 사진 </p> </ion-label>\n              </ion-item> -->\n              <ion-item style="text-align: center;" *ngFor="let a of currentarray"> \n                  <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                </ion-item>\n                <ion-item style="text-align: center;" *ngFor="let a of inverterphoto"> \n                  <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                </ion-item>  \n                <ion-item style="text-align: center;" *ngFor="let a of thirdarray"> \n                    <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                  </ion-item> \n\n          <ion-item style="text-align: center;" *ngFor="let a of fourtharray"> \n                  <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                </ion-item> \n             \n    \n              \n                <ion-item style="text-align: center;" *ngFor="let a of fiftharray"> \n                  <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                </ion-item>\n                <ion-item style="text-align: center;" *ngFor="let a of sixtharray"> \n                  <ion-label ><p style="font-size:1.5em; margin-bottom:5px;">{{a.content}}</p><img src="{{a.photo}}"/></ion-label>\n                </ion-item> \n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/current-install-detail/current-install-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CurrentInstallDetailPage);
    return CurrentInstallDetailPage;
}());

//# sourceMappingURL=current-install-detail.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticedetail_noticedetail__ = __webpack_require__(272);
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
 * Generated class for the NotiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotiPage = /** @class */ (function () {
    function NotiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notilist = [];
        this.notilistnew = [];
        var a = this.navParams.get("flag");
        this.notilist = this.navParams.get("notilist");
        this.partnerflag = this.navParams.get("partnerflag");
        // this.notilist.push({"content":"abc"});
        // this.notilist.push({"content":"abc22"});
        // this.notilist.push({"content":"abc333"});
        console.log(this.partnerflag);
        for (var i = 0; i < this.notilist.length; i++) {
            if (this.notilist[i].user_type == this.partnerflag) {
                console.log(this.notilist[i]);
                console.log(this.uintToString(this.notilist[i].file_path.data));
                console.log(this.uintToString(this.notilist[i].file_name.data));
                var filepath = this.uintToString(this.notilist[i].file_path.data);
                var filename = this.uintToString(this.notilist[i].file_name.data);
                this.notilistnew.push({ "url": filepath + filename, "subject": this.uintToString(this.notilist[i].subject.data), "content": this.uintToString(this.notilist[i].content.data), "date": this.notilist[i].reg_time.split("T")[0] });
            }
        }
        var tag = "date";
        this.notilistnew.sort(function (a, b) {
            console.log(a[tag]);
            // convert date object into number to resolve issue in typescript
            var dateA = new Date(a[tag]).getTime();
            var dateB = new Date(b[tag]).getTime();
            return dateB > dateA ? 1 : -1;
        });
        console.log(this.notilistnew);
    }
    NotiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotiPage');
    };
    NotiPage.prototype.back = function () {
        this.navCtrl.pop({ animate: false });
    };
    NotiPage.prototype.gotodetail = function (a) {
        console.log(a);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__noticedetail_noticedetail__["a" /* NoticedetailPage */], { "url": a.url, "date": a.date, "content": a.content, "subject": a.subject });
    };
    NotiPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_2_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
    NotiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noti',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/noti/noti.html"*/'<!--\n  Generated template for the NotiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>공지사항</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <div style="    background: white;" class="top_bar">\n    <span class="title">공지사항</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n<ion-content style="background: #eff2f3;" padding>\n  <ion-list  style="\n  background:#eff2f3;\n    padding: 10px;"\n    \n    >\n    <ion-item style=" \n    min-height: 70px;  background:#eff2f3;" *ngFor="let a of notilistnew">\n    <div (click)="gotodetail(a)">\n        <p style="    font-size: 18px;\n     \n        font-weight: bold;">\n          {{a.subject}}\n        </p>\n        <p>\n          {{a.date}}\n        </p>\n    </div> \n      \n    </ion-item>\n   \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/noti/noti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotiPage);
    return NotiPage;
}());

//# sourceMappingURL=noti.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticedetailPage; });
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
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticedetailPage = /** @class */ (function () {
    function NoticedetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.content = this.navParams.get("content");
        this.subject = this.navParams.get("subject");
        this.date = this.navParams.get("date");
        this.url = this.navParams.get("url");
        console.log(this.url);
        this.url = "http://solarmy.co.kr/" + this.url;
        console.log(this.url);
    }
    NoticedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticedetailPage');
    };
    NoticedetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NoticedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticedetail',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/noticedetail/noticedetail.html"*/'<!--\n  Generated template for the NoticedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <div style="    background: white;" class="top_bar">\n        <span class="title">공지사항</span>\n        <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n      </div>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list  style="\n    background:#eff2f3;\n      padding: 10px;"\n      \n      >\n      <ion-item style=" \n      min-height: 70px;  background:#eff2f3;" >\n      <div >\n          <p>\n              {{date}}\n            </p>\n\n          <p style="   margin-top:15px; font-size: 18px;\n       \n          font-weight: bold;">\n            {{subject}}\n          </p>\n          <p style="margin-top:25px;">\n            {{content}}\n          </p>\n     \n      </div> \n        \n      </ion-item>\n     \n    </ion-list>\n    <img src={{url}}/>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/noticedetail/noticedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NoticedetailPage);
    return NoticedetailPage;
}());

//# sourceMappingURL=noticedetail.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
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
            selector: 'page-first',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/first/first.html"*/''/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/first/first.html"*/,
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(295);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_naver_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_kakao_sdk__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_wheel_selector__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic_ngx__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener_ngx__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_pdf_viewer__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_first_first__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendarmodal_calendarmodal__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_auth_register_auth__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_find_pass_find_pass__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_term_term__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_custom_center_custom_center__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_support_info_support_info__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_support_sample_support_sample__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_service_intro_service_intro__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_compare_quotation_compare_quotation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_analyse_client_analyse_client__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_analyse_result_analyse_result__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_my_client_my_client__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_process_status_process_status__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_process_statmodal_process_statmodal__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_company_detail_company_detail__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_pdf_viewer_pdf_viewer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_charge_guide_charge_guide__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_myinfo_update_myinfo_update__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_myquot_status_myquot_status__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_myquot_input_myquot_input__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_myquot_view_myquot_view__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_myquot_process_status_myquot_process_status__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_quotation_quotation__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_current_install_current_install__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_current_install_detail_current_install_detail__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_government_government__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_benefitgenerator_benefitgenerator__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_noti_noti__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_escro_escro__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_noticedetail_noticedetail__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_popover_popover__ = __webpack_require__(391);
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
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendarmodal_calendarmodal__["a" /* CalendarmodalPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_quotation_quotation__["a" /* QuotationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_service_intro_service_intro__["a" /* ServiceIntroPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_current_install_detail_current_install_detail__["a" /* CurrentInstallDetailPage */],
                __WEBPACK_IMPORTED_MODULE_62__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_60__pages_escro_escro__["a" /* EscroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_auth_register_auth__["a" /* RegisterAuthPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_find_pass_find_pass__["a" /* FindPassPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_government_government__["a" /* GovernmentPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_benefitgenerator_benefitgenerator__["a" /* BenefitgeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_register_type_register_type__["a" /* RegisterTypePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_custom_center_custom_center__["a" /* CustomCenterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_info_support_info__["a" /* SupportInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_support_sample_support_sample__["a" /* SupportSamplePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_compare_quotation_compare_quotation__["a" /* CompareQuotationPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_noticedetail_noticedetail__["a" /* NoticedetailPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_noti_noti__["a" /* NotiPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_current_install_current_install__["a" /* CurrentInstallPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_analyse_client_analyse_client__["a" /* AnalyseClientPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_analyse_result_analyse_result__["a" /* AnalyseResultPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_my_client_my_client__["a" /* MyClientPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_process_status_process_status__["a" /* ProcessStatusPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_process_statmodal_process_statmodal__["a" /* ProcessStatmodalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_company_detail_company_detail__["a" /* CompanyDetailPage */], __WEBPACK_IMPORTED_MODULE_42__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                // partners
                __WEBPACK_IMPORTED_MODULE_44__pages_charge_guide_charge_guide__["a" /* ChargeGuidePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_myquot_status_myquot_status__["a" /* MyquotStatusPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_myquot_input_myquot_input__["a" /* MyquotInputPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_myquot_view_myquot_view__["a" /* MyquotViewPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_myquot_process_status_myquot_process_status__["a" /* MyquotProcessStatusPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/service-introduction/service-introduction.module#ServiceIntroductionPageModule', name: 'ServiceIntroductionPage', segment: 'service-introduction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_62__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_61__pages_noticedetail_noticedetail__["a" /* NoticedetailPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_escro_escro__["a" /* EscroPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_noti_noti__["a" /* NotiPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_government_government__["a" /* GovernmentPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_benefitgenerator_benefitgenerator__["a" /* BenefitgeneratorPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_current_install_detail_current_install_detail__["a" /* CurrentInstallDetailPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_current_install_current_install__["a" /* CurrentInstallPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_quotation_quotation__["a" /* QuotationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendarmodal_calendarmodal__["a" /* CalendarmodalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_service_intro_service_intro__["a" /* ServiceIntroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_auth_register_auth__["a" /* RegisterAuthPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_find_pass_find_pass__["a" /* FindPassPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_register_type_register_type__["a" /* RegisterTypePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_custom_center_custom_center__["a" /* CustomCenterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_info_support_info__["a" /* SupportInfoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_support_sample_support_sample__["a" /* SupportSamplePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_compare_quotation_compare_quotation__["a" /* CompareQuotationPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_analyse_client_analyse_client__["a" /* AnalyseClientPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_analyse_result_analyse_result__["a" /* AnalyseResultPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_my_client_my_client__["a" /* MyClientPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_process_status_process_status__["a" /* ProcessStatusPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_process_statmodal_process_statmodal__["a" /* ProcessStatmodalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_company_detail_company_detail__["a" /* CompanyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                // partners
                __WEBPACK_IMPORTED_MODULE_44__pages_charge_guide_charge_guide__["a" /* ChargeGuidePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_myinfo_update_myinfo_update__["a" /* MyinfoUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_myquot_status_myquot_status__["a" /* MyquotStatusPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_myquot_input_myquot_input__["a" /* MyquotInputPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_myquot_view_myquot_view__["a" /* MyquotViewPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_myquot_process_status_myquot_process_status__["a" /* MyquotProcessStatusPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_50__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic_ngx__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener_ngx__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_wheel_selector__["a" /* WheelSelector */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_52__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_10_naver_login__["a" /* NaverLogin */],
                __WEBPACK_IMPORTED_MODULE_11_kakao_sdk__["b" /* KakaoCordovaSDK */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 35:
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
            selector: 'page-loading',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/loading/loading.html"*/'<div class="content">\n    <div class="loading">\n        <img src="assets/imgs/loading.gif"/>\n        <p>{{ load_txt }}</p>\n    </div>\n</div>  '/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_term_term__ = __webpack_require__(77);
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
                            window.alert(_this.navCtrl.getActive().component);
                            if (_this.navCtrl.getActive().component !== __WEBPACK_IMPORTED_MODULE_5__pages_term_term__["a" /* TermPage */]) {
                            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/app/app.html"*/'<ion-nav #rootNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/app/app.html"*/
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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic_ngx__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(56);
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
            selector: 'page-pdf-viewer',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/pdf-viewer/pdf-viewer.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">계약서</span>\n    <img src="assets/imgs/close.png" class="back_img" (click)="onClose()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <pdf-viewer [src]="url" \n              [show-all]="true"\n              [original-size]="false"\n              [zoom]="1.0" \n              style="display: block"\n  ></pdf-viewer> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/pdf-viewer/pdf-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic_ngx__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], PdfViewerPage);
    return PdfViewerPage;
}());

//# sourceMappingURL=pdf-viewer.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        this.items = [];
        console.log('Hello PopoverComponent Component');
        this.items.push("1");
        this.items.push("12");
        this.items.push("1");
        this.items.push("1");
        this.items.push("1");
    }
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/components/popover/popover.html"*/'<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{item}}\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/components/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_naver_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_type_register_type__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_pass_find_pass__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_text_encoding__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_text_encoding__);
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
    function LoginPage(navCtrl, navParams, alertCtrl, appmgr, common, http, naver, kakaoCordovaSDK, platform) {
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
        this.platform = platform;
        this.saveId = false;
        this.savePass = false;
        this.email = '';
        this.password = '';
        this.mem_type = 0;
    }
    LoginPage.prototype.uintToString = function (uintArray) {
        var decoder = new __WEBPACK_IMPORTED_MODULE_10_text_encoding__["TextDecoder"]("utf-8");
        var encodedString = String.fromCharCode.apply(null, uintArray);
        var decodedString = decoder.decode(new Uint8Array(uintArray));
        //         let decoder = new TextDecoder('utf-8');
        // return decoder.decode(uintArray);
        //  var   decodedString = encodeURIComponent(encodedString);
        return decodedString;
    };
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
                    console.log(result);
                    localStorage.setItem("id", result.id);
                    localStorage.setItem("partnerflag", result.type);
                    localStorage.setItem("email", _this.uintToString(result.email.data));
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/login/login.html"*/'\n<ion-content class="container">\n  <!-- <img src="assets/imgs/login/bg.png" class="background"/> -->\n  <div class="logo-cont">\n      <div class="wrap">\n        <img class="bg" src="assets/imgs/solarmy_logo.png">\n      </div>\n    </div>\n  <div class="form">\n    <ion-list>\n      <ion-item>\n        <ion-label style="font-size: 16px;\n        color: white;" floating>이메일</ion-label>\n        <ion-input [(ngModel)]="email" type="email"></ion-input>\n      </ion-item>\n    \n      <ion-item class="mt10">\n        <ion-label style="font-size: 16px;\n        color: white;"  floating>비밀번호</ion-label>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n      <span></span>\n    </ion-list>\n\n    <div class="item check-cont mt10">\n      <div class="f-left itemEtc">\n        \n        <ion-checkbox [(ngModel)]="saveId" id="saveId"></ion-checkbox>\n        <ion-label for="saveId">아이디 저장</ion-label>\n        <ion-checkbox [(ngModel)]="savePass" class="ml10"></ion-checkbox>\n        <ion-label>비밀번호 저장</ion-label>\n        \n      </div>\n     \n    </div>\n    <div class="item btn-cont">\n      <a style="color:white;" (click)="login()" class="boxBtn login">\n        <img style="width: 14px;\n        height: 14px;" class="mark" src="assets/imgs/lock-open.png">&nbsp;\n  로그인</a>\n      <div class="f-right itemEtc">\n          <p style="    position: absolute;\n          left: 10%;\n      " class="text-center mt10"><a class="txtBtn" (click)="findPass()" for="findPass"  >비밀번호 찾기</a></p>\n          <p class="text-center mt10"><a class="txtBtn" (click)="registerPage()" >회원가입</a></p>\n    \n        </div>\n     \n      <!-- <a (click)="naverLogin()" class="boxBtn mt30 naver">네이버 로그인</a> -->\n      <a (click)="kakaotalkLogin()" class="boxBtn mt30 kakao">카카오톡 연결하기</a>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2_naver_login__["a" /* NaverLogin */],
            __WEBPACK_IMPORTED_MODULE_3_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(250);
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
            selector: 'page-register-type',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register-type/register-type.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">회원가입</span>\n      <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 class="mt40">회원유형을 선택해주세요.</h3>\n  <div class="customer mt20">\n    <div class="btn-cont" (click)="registerCustomer()">\n      <div class="img-top"><img style="width:50px;" class="mark" src="assets/imgs/clientimage.png"></div>\n      <div class="center">\n        <h6 >고객 회원</h6>\n        <p>분석을 의뢰하고 싶어요</p>\n        <img class="arrow" src="assets/imgs/arrowright.png"/>\n      </div>\n     \n    </div>\n  </div>\n\n  <div class="partners mt20">\n    <div class="btn-cont" (click)="registerPartners()">\n      <div class="img-top"><img style="width:50px;" class="mark" src="assets/imgs/partnersimage.png"></div>\n      <div class="center">\n        <h6>파트너스</h6>\n        <p>태양광 설치 사업자 회원</p>\n        <img class="arrow" src="assets/imgs/arrowright.png"/>\n      </div>\n    \n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/register-type/register-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */]])
    ], RegisterTypePage);
    return RegisterTypePage;
}());

//# sourceMappingURL=register-type.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_client_my_client__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding__ = __webpack_require__(17);
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
    }
    AnalyseClientPage.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    AnalyseClientPage.prototype.checkFocus = function () {
        console.log("onfocus");
        if (this.month_fee.length > 0) {
            this.month_fee = "";
        }
    };
    AnalyseClientPage.prototype.change = function (event) {
        console.log(event);
        console.log(this.month_fee);
        var final_price = this.month_fee;
        this.month_fee = this.month_fee + "원";
        // (<HTMLInputElement>document.getElementById("value1")).value = event+"won";
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
        var userInfo = this.appmgr.getUserInfo();
        this.user_id = userInfo.user_id;
        this.userInfo = userInfo;
        console.log(userInfo);
        console.log(this.userInfo);
        console.log("email issss");
        this.email = localStorage.getItem("email");
        this.user_id = this.userInfo.user_id;
        this.mem_type = this.userInfo.mem_type;
        // this.name = this.uintToString(this.userInfo.name.data);
        // this.address = this.uintToString(this.userInfo.address.data) 
        console.log(this.address);
        // this.postCode = userInfo.zipcode,
        // this.building = userInfo.building,
        // this.contact = this.uintToString(this.userInfo.contact.data)  
        // this.month_fee = this.userInfo.month_fee;
        // this.month_fee=this.numberWithCommas(this.month_fee)+"원";
        // this.postCode=this.userInfo.zipcode;
        if (this.userInfo.login_flag == 1) {
            this.login_flag = true;
        }
        else {
            this.login_flag = false;
        }
        this.postCode = '';
        this.building = '';
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
        var newvalue = document.getElementById("detailaddress").value;
        var sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["name"] = this.name;
        sendData["address"] = this.address;
        sendData["address_detail"] = newvalue;
        sendData["post"] = this.postCode;
        sendData["contact"] = this.contact;
        sendData["month_fee"] = this.month_fee;
        console.log(sendData);
        this.http.postHttpData("/getCountsAnal", sendData, function (result) {
            if (result) {
                console.log(result.cnt);
                if (result.cnt > 2) {
                    modal.dismiss({}, "", { animate: false });
                    var alert_1 = _this.alertCtrl.create({
                        title: '분석의뢰 제한 안내',
                        subTitle: '2개월 이내에는 <br />세번의 요청만 가능합니다. ',
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
                                    _this.navCtrl.pop();
                                }
                            }
                        ]
                    });
                    alert_1.present({ animate: false });
                }
                else {
                    _this.http.postHttpData("/analyseNormalClient", sendData, function (result) {
                        modal.dismiss({}, "", { animate: false });
                        if (result) {
                            var alert_2 = _this.alertCtrl.create({
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
                            alert_2.present({ animate: false });
                        }
                    });
                }
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
        console.log(this.postCode);
        console.log(this.building);
        console.log(this.address);
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
            selector: 'page-analyse-client',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/analyse-client/analyse-client.html"*/'\n<ion-header>\n  <div class="top_bar">\n    <span class="title">분석 의뢰하기</span>\n    <img style="width:32px;" src="assets/imgs/logout.png" class="back_img" (click)="back()">\n  </div>\n</ion-header>\n\n<ion-content padding>\n  \n  <div class="form mt30">\n    <div class="alert-md">\n      <label>이메일</label>\n      <div  class="alert-input"> {{ email }} </div>\n    </div>\n    <div class="alert-md">\n      <label>성명</label>\n      <input style="    padding-top: 0;\n      padding-bottom: 0;" type="text" class="alert-input" [(ngModel)]="name"/>\n    </div>\n    <div class="alert-md" style="margin-bottom:10px">\n      <label>주소</label>\n      <input type="text" class="alert-input address" disabled value="{{postCode}}" />\n      <button style="color: white;\n      background: black;\n      border-radius: 5px;" ion-button color="light" (click)="toggleSearchPop()">주소검색</button>\n    </div>\n    <div class="alert-md" style="margin-bottom:10px">\n      <label></label>\n      <input style=" padding-top: 0;\n      padding-left: 10px;\n      padding-bottom: 0;\n      padding: 0 0 9px;" type="text"  class="alert-input" disabled value="{{address}}"/>\n    </div>\n    <div class="alert-md">\n      <label></label>\n      <input style="padding-top: 0;\n      padding-left: 10px;\n      padding-bottom: 0;\n      padding: 0 0 9px;" id="detailaddress"  placeholder="상세주소를 입력" type="text" class="alert-input"  value="{{building}}"/>\n    </div>\n    <div class="alert-md">\n      <label>연락처</label>\n      <input type="number" class="alert-input" [(ngModel)]="contact" placeholder="‘-’제외하고 숫자만 입력"/>\n    </div>\n    <div class="alert-md double">\n      <label>월평균 전기요금</label>\n      <ion-input (ionFocus)="checkFocus()" (blur)="change($event);" id="value1"   style="  color:black;  border-bottom: solid lightgray 1px;" type="text" class="width95"  [(ngModel)]="month_fee" ></ion-input>\n\n    </div>\n    \n    <div class="btn-cont">\n      <button ion-button color="light" (click)="analyseClient()" class="boxBtn analyseClient"><img src="/assets/imgs/bar-chart.png">분석 의뢰하기</button>\n    </div>\n  \n  </div>\n</ion-content>\n\n<div *ngIf="isSearch()" class="search">\n  <div (click)="toggleSearchPop()" class="bg"></div>\n  <div class="result-wrap">\n    <div class="top-area etcForm">\n      <ion-searchbar [(ngModel)]="input_address" (ionInput)="searchAddress()" placeholder="주소를 입력해 주세요."></ion-searchbar>\n    </div>\n    <ul *ngIf="!isSearchVal()" class="result">\n      <li>주소를 상세히 입력해 주세요.</li>\n    </ul>\n    <ul class="result" id="search_list">\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/analyse-client/analyse-client.html"*/,
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscroPage; });
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
 * Generated class for the EscroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscroPage = /** @class */ (function () {
    function EscroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EscroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscroPage');
    };
    EscroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escro',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/escro/escro.html"*/'<!--\n  Generated template for the EscroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>에스크로 페이지</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img src="assets/imgs/escro.png"/>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/escro/escro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EscroPage);
    return EscroPage;
}());

//# sourceMappingURL=escro.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(76);
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
        console.log("postHttpDataaaaaaaa" + subUrl);
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
            else {
                console.log("res");
                console.log(res);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var PUSH_APP_ID = "a7627c17-c314-4d42-b7d3-2f8369a77e09";
// const SERVER_IP = "192.168.2.131";
var SERVER_IP = "solarmy.cafe24app.com";
// const SERVER_IP = "localhost:3200";
var HTTP_PORT = 8001;
var IMG_URL = "http://" + SERVER_IP + "/solarmy_server/uploads/"; // url of http server
var ESCRO_URL = "http://" + SERVER_IP + "/solarmy_admin/escro/escro"; // url of http server
var CONFIG = {
    http_server: "http://" + SERVER_IP,
    IMG_URL: IMG_URL,
    PUSH_APP_ID: PUSH_APP_ID,
    ESCRO_URL: ESCRO_URL
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(17);
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
    function TermPage(viewCtrl, navCtrl, navParams, appmgr, common, http, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appmgr = appmgr;
        this.common = common;
        this.http = http;
        this.platform = platform;
        this.type = '';
        this.content = '';
        this.viewCtrl = viewCtrl;
        var typeTmp = navParams.get('type');
        this.email = navParams.get('email');
        this.pass = navParams.get('pass');
        this.repass = navParams.get('repass');
        console.log(this.email);
        console.log(this.pass);
        console.log(this.repass);
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
        var sendData = [];
        sendData['type'] = this.type == '이용약관' ? 0 : 1;
        if (this.type == '개인정보 처리 방침') {
        }
        // this.http.postHttpData("/getTerm", sendData, (result) => 
        // {
        //   console.log(result);
        //   if(result) {
        //     this.content = this.uintToString(result.term.data) 
        //   }
        // });
    };
    TermPage.prototype.back = function () {
        this.viewCtrl.dismiss({ "email": this.email, "pass": this.pass, "repass": this.repass });
    };
    TermPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-term',template:/*ion-inline-start:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/term/term.html"*/'\n<ion-header>\n  <div class="top_bar">\n      <span class="title">{{type}}</span>\n      <img style="width:32px;" src="assets/imgs/logout.png"  class="back_img" (click)="back()">\n  </div>\n</ion-header>\n<br>\n<br>\n<ion-content padding>\n    <div *ngIf="type==\'이용약관\'" class="wrap mt30">\n     <br>   솔라미 이용약관 <br>\n     <br>   솔라미의 이용과 관련하여 필요한 사항을 규정합니다.\n     <br>   \n     <br>   목 차\n     <br>   제1장 서비스 이용계약\n     <br>   제2장 대금보호시스템\n     <br>   제3장 안심중재솔루션\n     <br>   부칙\n     <br>   최종 약관 시행일자 : 2019년 4월 20일\n     <br>   \n     <br>   제1장 서비스 이용\n     <br>   제1조 (목적)\n     <br>   본 약관은 솔라미(이하 "솔라미"이라 합니다)이 회원에게 제공하는 서비스의 이용과 관련하여 솔라미와 회원 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.\n     <br>   \n     <br>   제2조 (정의)\n     <br>   본 약관에서 사용하는 용어의 정의는 다음과 같습니다.\n     <br>   • (1)"회원"은 본 약관에 동의하고 솔라미 플랫폼(솔라미어플리케이션 및 홈페이지(www.solarmy.co.kr)를 포함한 솔라미가 관리/운영하는 웹사이트 및 어플리케이션 등 서비스 플랫폼 일체를 의미함)의 회원가입 절차를 완료한 자를 의미합니다.\n     <br>   • (2)"고객회원"은 회원 중 태양광 분석 및 비교견적을 의뢰하기 위하여 회원이 된 자를 의미합니다.\n     <br>   • (3)“파트너”는 회원 중 태양광 비교견적 의뢰를 받아 태양광 설치 및 유지보수를 수행하기 위하여 회원이 된 자를 의미합니다.\n     <br>   • (4)"서비스"는 회원들이 적합한 파트너스를 찾을 수 있도록 회원이 스스로 작성한 정보를 다른 회원이 볼 수 있도록 솔라미 어플리케이션 및 홈페이지에 게시할 수 있도록 하는 온라인 서비스, 고객 회원과 파트너스가 서비스 계약의 체결 중개 및 대금 보호 시스템 등을 제공하는 오프라인 서비스를 의미합니다.\n     <br>   • (5)“계정(ID)"이라 함은 회원의 식별과 서비스 이용을 위하여 회원이 선정하고, 회원의 이메일 주소를 의미합니다.\n     <br>   • (6)"비밀번호"라 함은 회원이 부여 받은 계정(ID)과 일치되는 회원임을 확인하고 회원의 정보 및 권익보호를 위해 회원 자신이 선정하여 비밀로 관리하는 문자, 숫자 또는 특수 문자의 조합을 의미합니다.\n     <br>   • (7)"회원정보"라 함은 회원의 계정(ID), 비밀번호, 성명 등 회원이 솔라미에 제공한 일반정보 및 서비스 이용정보 등 생성 정보를 통칭합니다.\n     <br>   \n     <br>   제3조 (약관의 명시와 개정)\n     <br>   • 솔라미는 이 약관의 내용을 회원이 알 수 있도록 솔라미 플랫폼에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지합니다.\n     <br>   • 솔라미는 회원이 솔라미와 이 약관의 내용에 관하여 질의 및 응답을 할 수 있도록 조치를 취합니다.\n     <br>   • 솔라미는 「약관의 규제에 관한 법률」 등 관련 법령에 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.\n     <br>   • 솔라미는 약관을 개정할 경우에는 적용일자 및 개정내용, 개정 사유 등을 명시하여 그 적용일자로부터 최소한 7일 이전(회원에게 불리하거나 중대한 사항의 변경은 30일 이전)부터 그 적용일자 경과 후 상당한 기간이 경과할 때까지 초기화면 또는 초기화면과의 연결화면을 통해 공지합니다.\n     <br>   • 솔라미는 약관을 개정할 경우에는 원칙적으로 개정약관 공지 후 개정약관의 적용에 대한 회원의 동의 여부를 확인합니다. 다만 개정약관 공지 시 회원이 동의 또는 거부의 의사표시를 하지 않으면 승낙한 것으로 간주하겠다는 내용도 함께 공지한 경우에는 회원이 약관 시행일까지 거부의사를 표시하지 않는다면 개정약관에 동의한 것으로 간주할 수 있습니다.\n     <br>   • 회원이 개정약관의 적용에 동의하지 않는 경우 회원은 솔라미 서비스 이용계약을 해지할 수 있습니다.\n     <br>   \n     <br>   제4조 (회원가입)\n     <br>   • 회원이 되려고 하는 자는 약관의 내용에 대하여 동의를 하고, 솔라미 플랫폼의 회원가입 페이지에서 제공하는 양식을 작성하여 회원가입 하는 방법으로 이용신청을 하여야 합니다.\n     <br>   • 제1항의 회원가입이 완료된 이후에도 솔라미가 제공하는 태양광설치 비교 견적 서비스를 이용하기 위하여, 고객회원이 분석의뢰를 등록시 이메일주소, 성명, 주소, 핸드폰 번호, 월평균전기요금 정보를 입력하여야하며, 파트너스는 비교견적에 지원하기 위하여 이메일, 회사명, 주소, 담당자성함, 핸드폰번호, 회사전호번호,전기면허증, 사업자등록번호,은행계좌, 세금계산서 이메일주소, 세금계산서 담당자성함 등 추가적인 정보를 입력하여야 하며, 추가적인 정보를 입력하지 아니한 경우 서비스 이용이 제한될 수 있습니다.\n     <br>   • 솔라미는 회원이 되려고 하는 자에게 실명확인 및 본인인증, 기타 필요한 정보를 요구할 수 있으며, 그 절차와 방식은 관련 법령에 따릅니다.\n     <br>   • 회원이 되려고 하는 자는 이용 신청 시 제1항 및 제2항에서 요구하는 정보 항목에 대하여 실제 정보를 기재하여야 합니다. 실명 또는 정보를 허위로 기재하거나 타인의 명의를 도용한 경우 이 약관에 의한 회원의 권리를 주장할 수 없고, 솔라미는 환급 없이 서비스 이용계약을 취소하거나 해지할 수 있습니다.\n     <br>   • 회원가입은 회원의 이용 약관에 대한 동의와 회원의 이용 신청에 대한 솔라미의 승낙으로 성립합니다. 이용 약관에 관한 동의는 이용 신청 당시 솔라미 이용약관에 동의함을 선택하거나 기타 동의 버튼 또는 서명 등을 통해 의사표시를 합니다.\n     <br>   \n     <br>   제5조 (이용신청의 승낙과 제한)\n     <br>   • 회원이 되려는 자가 제4조에서 정하는 바에 따라 정당히 이용신청을 한 경우에 상당한 이유가 없는 한 솔라미는 이용신청을 승낙합니다.\n     <br>   • 솔라미는 다음 각 호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않을 수 있습니다.\n     <br>   • (1)제4조에 위반하여 이용신청을 하는 경우\n     <br>   • (2)자신의 책임 있는 사유에 의한 이용제한 기록이 있는 자가 이용신청을 하는 경우\n     <br>   • (3)법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우\n     <br>   • (4)솔라미의 이익을 저해하려는 목적으로 신청하는 경우\n     <br>   • (5)이전에 회원의 자격을 상실한 적이 있는 자로서 솔라미의 회원 재가입 승낙을 얻지 못한 경우\n     <br>   • (6)그 밖에 1호 내지 5호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우\n     <br>   솔라미는 다음 각 호의 어느 하나에 해당하는 경우에는 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.\n     <br>   • (1)서비스 관련 제반 용량의 부족함 등 솔라미의 설비에 여유가 없는 경우\n     <br>   • (2)기술상 장애 사유가 있는 경우\n     <br>   • (3)그 밖에 위 각 호에 준하는 사유로 이용신청의 승낙이 곤란한 경우\n     <br>   회원이 한 제5조의 이용신청에 대하여 솔라미가 승낙한 경우 회원이 본 약관 및 관련 법령을 위반하지 않은 이상 회원과  솔라미 간에 유효하게 서비스 이용계약이 체결된 것으로 봅니다.\n     <br>   \n     <br>   제6조 (회원 계정(ID) 및 비밀번호)\n     <br>   • 솔라미는 회원이 가입시 설정한 이메일 주소를 계정(ID)으로 부여합니다.\n     <br>   • 솔라미는 회원정보를 통하여 당해 회원의 서비스 이용가능 여부 등을 판단하는 등 제반 회원 관리업무를 수행할 권한이 있으며, 다음과 같은 이유로 회원의 아이디 및 비밀번호 변경을 요구하거나 변경 할 수 있습니다.\n     <br>   • (1)회원 아이디가 회원의 이메일, 전화번호 등으로 등록되어 사생활 침해가 우려되는 경우\n     <br>   • (2)타인에게 혐오감을 주거나 미풍양속에 저해할 목적으로 신청한 경우\n     <br>   • (3)보안 및 아이디 정책, 서비스의 원활한 제공 등의 목적으로 변경할 필요성이 있는 경우\n     <br>   • (4)기타 솔라미가 필요하다고 인정되는 경우\n     <br>   회원은 자신의 회원정보를 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다. 회원이 본인의 회원정보를 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대하여는 회원에게 책임이 있으며 솔라미의 고의 또는 과실이 없는 한 솔라미는 책임을 부담하지 않습니다.\n     <br>   비밀번호의 관리책임은 회원에게 있으며, 회원이 원하는 경우에는 보안상의 이유 등으로 언제든지 변경이 가능합니다.\n     <br>   회원은 정기적으로 비밀번호를 변경하여야 합니다.\n     <br>   회원은 회원 정보가 도용되거나 제3자가 이를 사용하고 있음을 인지한 경우 이를 즉시 솔라미에 통지하고 솔라미의 안내에 따라야 합니다. 회원이 이를 인지하고서도 통지하지 않거나, 통지한 경우에도 솔라미의 안내에 따르지 않아 발생한 피해에 대해 솔라미는 고의 또는 과실이 없는 한 책임지지 않습니다.\n     <br>   회원은 매 접속 종료 시 확실히 로그아웃을 하여야 합니다.\n     <br>   \n     <br>   제7조 (회원 정보의 제공 및 변경)\n     <br>   • 회원은 본 약관에 의하여 솔라미에 정보를 제공하여야 하는 경우에는 진실된 정보를 제공하여야 하며, 허위정보 제공으로 인해 발생한 불이익에 대해서는 보호받지 못합니다.\n     <br>   • 회원은 솔라미 플랫폼을 통하여 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 계정(ID) 등은 수정이 제한될 수 있습니다. 이러한 경우에는 새로운 계정(ID)으로 재가입해야 하며, 회원탈퇴한 계정(ID)은 재가입이 제한됩니다.\n     <br>   • 회원은 솔라미에 제공한 정보가 변경되었을 경우 지체 없이 온라인으로 수정을 하거나 스스로 수정이 불가능한 경우 솔라미에 그 변경사항을 알려야 합니다.\n     <br>   • 회원이 회원정보의 변경사항을 제2항에 의하여 수정하지 아니하거나 제3항에 의하여 솔라미에 알리지 아니하여 발생한 불이익에 대하여 솔라미는 책임을 지지 아니하며, 수정하지 아니하여 발생하는 문제의 책임은 회원에게 있습니다.\n     <br>   \n     <br>   제8조 (개인정보의 보호 및 관리)\n     <br>   • 솔라미는 관련 법령이 정하는 바에 따라 계정정보 등을 포함한 회원의 개인정보를 보호하기 위해 노력합니다. 회원의 개인정보의 보호 및 사용에 대해서는 관련 법령 및 솔라미가 별도로 고지하는 개인정보 처리방침이 적용됩니다.\n     <br>   • 솔라미는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보, 신용정보의 보호를 위해 보안시스템을 갖추어야 하며 개인정보 처리방침을 공시하고 준수합니다. 솔라미는 관련 법령, 본 약관 및 개인정보 처리방침에서 정한 경우를 제외하고는 회원의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.\n     <br>   • 솔라미는 회원의 귀책사유로 인하여 노출된 회원의 계정정보를 포함한 타인의 모든 개인정보, 비밀정보에 대해서 일체의 책임을 지지 않습니다.\n     <br>   • 솔라미는 플랫폼 내 서비스를 확장ᆞ추가하는 경우 회원의 개인정보 및 데이터를 이전할 수 있고, 이전한 개인정보 및 데이터를 이용할 수 있습니다.\n     <br>   \n     <br>   제9조 (솔라미의 의무)\n     <br>   • 솔라미는 관련 법령과 본 약관이 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게 하여야 합니다.\n     <br>   • 솔라미는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실된 때에는 천재지변, 비상사태, 해결이 곤란한 기술적 결함 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다. 다만 협력사의 설비에 장애가 생기거나 협력사의 고의 또는 과실로 인하여 데이터 등이 멸실된 때에는 솔라미에 고의 또는 중과실이 없는 한 솔라미는 면책됩니다.\n     <br>   • 솔라미가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우 그러한 손해가 솔라미의 고의나 과실에 기해 발생한 경우에 한하여 책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.\n     <br>   • 솔라미는 회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 신속히 처리하여야 합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 통보하여야 합니다.\n     <br>   \n     <br>   제10조 (회원의 의무)\n     <br>   • 회원은 다음 행위(또는 이에 준하는 행위를 포함함)를 하여서는 안 됩니다.\n     <br>   • (1)비정상적인 시스템 접근\n     <br>   • 악성코드, 바이러스 등의 프로그램을 고의 또는 과실로 설치, 유포하는 행위\n     <br>   • 비교견적 정보 및 파트너의 정보를 수집하기 위해 크롤링을 하는 행위\n     <br>   • 리버스엔지니어링, 디컴파일, 디스어셈블 및 기타 일체의 가공행위를 통하여 서비스를 복제, 분해 또는 모방 기타 변형하는 행위\n     <br>   (2)비정상적인 서비스 이용\n     <br>   • 허위 또는 타인의 정보로 가입을 하는 행위\n     <br>   • 정당한 사유 없이 다수의 계정으로 활동을 하는 행위\n     <br>   • 계정 내 불리한 정보를 삭제하기 위해 의도적으로 계정을 탈퇴/재가입하는 행위\n     <br>   • 상습적으로 분석의뢰 및 비교견적 진행 의사 없이 견적 및 구현 가능 여부를 판단하기 위한 목적으로 서비스를 이용하는 행위\n     <br>   • 고객회원이 상습적으로 비교분석 의뢰를 등록 후 검수 상담만을 진행하고 파트너스 결정을 진행하지 않는 행위\n     <br>   • 고객회원이 비교분석 및 비교견적 의뢰 중에 분석의뢰 내용을 상습적으로 변경, 조정하는 행위\n     <br>   • 솔라미의 의사에 반하여 동일 또는 유사한 내용(비용 및 기간을 포함)의 분석의뢰를 반복하여 등록하는 행위\n     <br>   (3)허위 또는 과장된 정보 입력\n     <br>   • 파트너가 자신의 정보를 다르게 입력하는 행위\n     <br>   • 기타 솔라미 서비스 이용 시 회원이 입력하는 정보 일체에 대하여 허위 또는 과장된 정보를 입력하는 행위\n     <br>   (4)타인의 서비스 이용 방해\n     <br>   • 상습적으로 설치 일정을 지연시키는 행위\n     <br>   • 상습적으로 미팅 일정을 준수하지 않는 행위\n     <br>   • 비교 견적 최종 결정된 내용과 다른 요구를 하는 행위\n     <br>   • 서비스 내에서 체결한 계약을 정당한 사유 없이 이행하지 않는 행위\n     <br>   (5)직거래가 제한된 서비스에서의 직거래 유도\n     <br>   • 솔라미 플랫폼 내에 상호(성명), 로고 등 상표, 주소, 전화번호, 이메일 주소 등 신원 식별을 용이하게 하는 정보를 입력하는 행위\n     <br>   • 사전 협의 없이 솔라미를 제외하고 직거래를 하는 행위\n     <br>   (6)업무 방해\n     <br>   • 도배 광고, 홍보 스팸 등을 보내는 행위\n     <br>   • 파트너가 상습적으로 세금계산서(영수증, 계산서, 거래명세서 등 일체의 거래에 관한 증명서류를 포함)를 발행하지 않거나 거래일자보다 늦게 발행하는 행위\n     <br>   (7)공공질서 위반\n     <br>   • 성별, 정치, 종교, 장애, 연령, 사회적 신분, 인종, 지역, 직업 등을 차별하거나 이에 대한 편견을 조장하는 행위\n     <br>   • 솔라미 또는 다른 회원, 제3자를 차별 또는 비방하거나 명예를 훼손하는 행위\n     <br>   • 솔라미 또는 다른 회원, 제3자에게 욕설, 폭언, 협박을 하는 행위\n     <br>   • 과도한 신체 노출이나 음란한 행위를 묘사하거나, 성매매 관련 정보를 공유하거나, 타인에게 성적 수치심이나 불쾌감을 유발할 수 있는 내용을 게시하는 등 미풍양속에 반하는 정보를 솔라미 사이트, 플랫폼에 등록하는 행위\n     <br>   • 혐오스러운 사진 또는 내용을 게시하거나, 욕설, 비속어, 은어를 사용하는 등 사회 통념에 반하는 비정상적인 활동을 하는 행위\n     <br>   (8)타인의 권리 침해\n     <br>   • 솔라미 및 다른 회원, 제3자의 특허권, 상표권, 저작권 등 지적재산권을 침해하는 행위 또는 침해할 우려가 있는 행위\n     <br>   • 타인의 개인정보를 침해하는 행위\n     <br>   • 기타 웹 해킹 프로그램, 매크로 프로그램, 보이스 피싱을 위한 미러링 사이트 등 타인의 권리를 침해하거나 침해할 우려가 있는 모든 행위\n     <br>   (9)계정 거래, 양도, 대리, 교환 등\n     <br>   • 계정 및 계정 내 컨텐츠를 타인에게 판매, 양도, 대여하거나, 타인에게 그 이용을 허락 또는 이를 시도하는 행위 및 이를 알선하는 행위\n     <br>   (10)명의 사칭, 도용 등\n     <br>   • 다른 회원, 제3자 또는 솔라미 직원을 사칭하는 행위\n     <br>   (11)기타\n     <br>   • 본 조에 준하는 행위로서 솔라미의 이익(영업)을 저해하는 행위\n     <br>   • 솔라미의 동의 없이 영리, 영업, 광고, 정치활동 등을 목적으로 서비스를 사용하는 행위\n     <br>   • 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위\n     <br>   • 관련 법령에서 금지하거나 선량한 풍속 기타 사회통념상 허용되지 아니하거나 원활한 서비스 제공에 악영향을 끼치는 행위\n     <br>   회원은 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 솔라미가 통지하는 사항 등을 확인하고 준수할 의무가 있습니다.\n     <br>   \n     <br>   제11조 (회원의 의무 위반에 대한 제재)\n     <br>   • 회원이 제10조의 의무를 위반한 경우에 솔라미는 사안의 중요성과 다른 회원, 제3자, 솔라미가 입은 손해를 고려하여 회원에게 다음과 같은 제재를 할 수 있습니다.\n     <br>   • (1)서면경고\n     <br>    솔라미는 제10조의 의무를 위반한 회원에게 의무 위반의 내용, 위반 시기 등을 기재하여 서면으로 경고할 수 있습니다.\n     <br>   • (2)이용의 제한\n     <br>    솔라미는 일정한 기간을 정하여 비교분석 등록 및 비교견적 지원, 미팅과 로그인 등을 제한할 수 있습니다.\n     <br>   • (3)영구 정지\n     <br>    솔라미는 회원의 계정을 영구적으로 정지할 수 있습니다.\n     <br>   솔라미는 제10조의 의무를 위반하여 제재 대상이 된 회원들에게 이메일 등을 통하여 제재 내용을 고지합니다.\n     <br>   \n     <br>   제12조 (회원에 대한 정보 제공 서비스)\n     <br>   고객회원과 파트너는 솔라미 플랫폼을 통하여 다음과 같은 서비스를 제공받을 수 있습니다. 본 조의 서비스는 솔라미 플랫폼을 통하여 무상으로 진행됩니다.\n     <br>   • (1)고객회원은 자신이 발주하는 태양광 분석의뢰 및 비교견적을 수행할 파트너를 구하기 위하여 분석의뢰를 등록할 수 있습니다.\n     <br>   • (2)파트너는 비교견적 지원을 수행하기 위하여 정보업데이트를 통해서 자신의 프로필을 등록할 수 있습니다.\n     <br>   • (3)파트너는 자신이 원하는 태양광 설치를 수행하기 위하여 등록된 견적내기에 지원할 수 있습니다.\n     <br>   \n     <br>   제13조 (솔라미 회원간 서비스 계약의 체결에 관한 중개)\n     <br>   • 고객회원은 제12조 제3호에 따라 지원한 파트너 중 원하는 파트너가 있는 경우 파트너 업체 선정 후 솔라미의 중개 아래 해당 파트너와 계약을 진행합니다. 솔라미의 사전 서면 동의가 없는 이상 고객회원과 파트너는 솔라미의 중개 없이 계약 진행을 할 수 없으며, 솔라미를 거래 과정에서 제외하고 분석의뢰 및 태양광 설치 수행에 대한 계약 역시 체결할 수 없습니다.\n     <br>   • 중개 과정을 통해 고객회원과 태양광 설치 계약할 파트너를 결정하면 고객회원과 파트너는 솔라미가 제공하는 양식을 기초로 태양광 설치 수행에 관한 구체적인 내용이 포함된 계약(이하 “솔라미 회원간 서비스 계약”)을 솔라미, 고객회원, 파트너 상호간의 협의에 따라 결정된 내용으로 체결합니다. 솔라미 회원간 서비스 계약의 당사자는 계약 유형별로 상이할 수 있습니다. 단, 솔라미 및 회원의 합의에 따라 회원 중 일방 당사자가 제공하는 회원 양식을 이용할 수 있으며, 이 경우 회원들은 솔라미의 대금보호시스템, 솔라미 이용요금 등 솔라미가 요구하는 내용을 회원 양식에 추가하거나 별도로 계약을 체결하여야 합니다.\n     <br>   • 솔라미 회원간 서비스 계약 체결 후 계약에서 정한 사항에 따라 고객회원은 솔라미에 계약 대금을 지급하고, 솔라미는 이를 계약 기간 동안 보관하며, 솔라미 회원간 서비스 계약에서 정해진 바에 따라 귀사는 파트너에게 대금을 지급합니다. 단 솔라미, 고객회원, 파트너 상호간의 협의에 따라 고객회원이 직접 파트너에게 대금을 지급하고 파트너는 솔라미에게 이용요금(고객회원이 지급한 대금 중 부가가치세를 제외한 금액에 솔라미가 정한 비율을 곱한 금액. 부가가치세 10% 별도.)을 지급할 수 있습니다.\n     <br>   • 솔라미 회원간 서비스 계약 및 기타 고객회원과 파트너, 솔라미 사이에 체결한 개별 계약은 본 약관에 우선합니다. 솔라미 회원간 서비스 계약에 의하여 별도로 정해지지 아니한 사항은 본 약관에 의합니다.\n     <br>   • 고객회원과 파트너는 업무를 진행함에 있어 발생하는 다양한 요청 등에 대해 솔라미 회원간 서비스 계약에 특별히 정해진 사항을 제외하고는 공휴일을 포함하여 최대 7일 이내(이하 “확인 기간”)에 의사를 표시할 의무가 있습니다. 이를 지키지 않을 경우 처리되는 모든 사항(환불, 취소, 분쟁 해결 절차 등)에 대한 책임은 본인에게 있습니다.\n     <br>   • 본 조의 서비스는 유상으로 제공됩니다. 고객회원과 파트너가 상호 프로젝트를 진행하기로 하고 솔라미 회원간 서비스 계약을 체결한 경우, 파트너는 솔라미 서비스 계약에 따라 솔라미에게 이용요금을 지급하는 바, 솔라미는 고객회원이 예치한 대금 중 부가가치세를 제외한 금액에 솔라미가 정한 비율을 곱한 금액을 솔라미 이용요금으로 차감한 후 파트너에게 지급합니다. 제3조 단서의 경우에는 그에 따릅니다.\n     <br>   • 솔라미는 솔라미 회원간 서비스 계약에 따른 파트너의 업무 수행 과정 및 결과물에 관하여 보증하지 아니하며, 이에 관하여 일체의 책임을 부담하지 아니합니다.\n     <br>   \n     <br>   제14조 (유료서비스의 이용조건 등)\n     <br>   • 솔라미는 유료 서비스를 제공함에 있어 솔라미의 정책에 따라 회원에게 유료 서비스의 이용 금액(이용요금 등 그 명칭을 불문함.) 또는 이용 기한 등 이용 조건을 정할 수 있습니다. 유료 서비스의 이용조건은 각 유료 서비스 세부 이용 지침 또는 개별 계약에서 정하거나 각 유료 서비스 결제 화면 등에 게시하여 회원에게 공지합니다.\n     <br>   • 회원은 솔라미가 정한 방법(계좌이체, 신용카드, 핸드폰, 기타 솔라미가 정하는 결제 수단)으로 이용금액을 솔라미에 납부할 수 있습니다.\n     <br>   \n     <br>   제15조 (서비스의 변경 및 내용 수정)\n     <br>   솔라미는 운영상, 기술상의 필요에 따라 서비스 내용을 수정하거나 변경할 수 있으며, 이 경우 변경 사항을 솔라미 플랫폼에 공지합니다. 이에 대하여 솔라미는 회원 또는 제3자에 어떠한 책임도 부담하지 않습니다.\n     <br>   \n     <br>   제16조 (서비스의 제공 및 중단 등)\n     <br>   • 솔라미는 회원의 제5조 및 제6조에 따라 이용 신청을 승낙한 때부터 서비스를 개시합니다. 단 솔라미가 필요한 경우 일부 서비스는 특정 시점부터 개시할 수 있습니다. 이러한 경우 솔라미는 사전 또는 사후에 이를 공지합니다. 회원으로 가입한 이후라도 일부 서비스는 솔라미가 필요한 경우 특정 회원에게만 서비스를 제공할 수 있습니다. 솔라미는 서비스를 일정 범위로 분할하여 각 범위 별로 이용 가능 시간을 별도로 정할 수 있습니다. 이 경우 그 내용을 사전 또는 사후에 이를 사이트에 공시하거나 회원에게 이를 통지합니다.\n     <br>   • 서비스는 연중무휴, 1일 24시간을 원칙으로 합니다. 다만 서비스 성격에 따라 토요일, 일요일, 공휴일과 평일 오후 6시 이후에는 제공이 제한될 수 있습니다.\n     <br>   • 제2항에도 불구하고, 다음 각 호의 어느 하나에 해당하는 경우에는 일정한 시간 동안 서비스가 제공되지 아니할 수 있으며, 해당 시간 동안 솔라미는 서비스를 제공할 의무가 없습니다.\n     <br>   • (1)컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 서비스의 수정을 위하여 필요한 경우\n     <br>   • (2)해킹 등의 전자적 침해사고, 통신 사고, 회원들의 비정상적인 서비스 이용행태, 예상할 수 없는 서비스의 불안정성에 대응하기 위하여 필요한 경우\n     <br>   • (3)관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는 경우\n     <br>   • (4)천재지변, 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우\n     <br>   • (5)분할, 합병, 영업양도, 영업의 폐지, 당해 서비스의 수익 악화 등 솔라미의 경영상 중대한 필요에 의한 경우\n     <br>   솔라미는 제3항 각호의 경우, 1주일 전에 그 사실을 회원에게 개별 서비스 초기 화면이나 솔라미 플랫폼에 사전 고지하며, 이 기간 동안 회원이 고지 내용을 인지하지 못한데 대하여 솔라미는 책임을 부담하지 아니합니다. 사전에 통지할 수 없는 부득이한 사정(긴급한 시스템 점검ᆞ 증설ᆞ교체, 시스템 관리자의 고의, 과실 없는 디스크 장애ᆞ시스템 다운, 제3자인 PC통신 회사, 기간통신사업자 등의 사정으로 인한 서비스 제공의 불가 등 솔라미가 통제할 수 없는 사정)이 있는 경우에는 그 사정이 종료된 후에 즉시 사후에 통지를 할 수 있습니다.\n     <br>   또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제, 미전송, 기타 통신 데이터의 손실이 발생할 수 있으므로 회원은 중요한 메시지 등을 별도로 보관하고 서비스 중지 기간 이후 메시지 등의 전송 여부를 확인하여야 합니다. 솔라미의 고의 또는 과실이 없는 한 솔라미는 이에 대하여 책임을 부담하지 않습니다. 솔라미의 사정으로 서비스를 영구적으로 중단하여야 할 경우에 상기항을 준용합니다. 다만 이 경우에는 사전 고지 기간을 1개월로 합니다.\n     <br>   \n     <br>   제17조 (정보 제공 및 광고의 게재)\n     <br>   • 솔라미는 회원의 편의를 위하여 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보 및 광고를 배너 게재, 전자우편, 서신우편, 휴대폰 문자메시지, 전화, 어플리케이션 알림 등의 방법으로 회원에게 제공할 수 있습니다. 회원은 이를 원하지 않을 경우에 솔라미가 제공하는 방법에 따라 수신을 거부할 수 있습니다.\n     <br>   • 전항 단서에 따른 수신 거부 회원의 경우라도 이용약관, 개인정보보호정책, 기타 회원의 이익에 영향을 미칠 수 있는 중요한 사항의 변경 등 회원이 반드시 알고 있어야 하는 사항에 대해서는 전항의 방법으로 정보의 제공 등을 할 수 있습니다.\n     <br>   • 솔라미 플랫폼에는 배너와 링크(Link) 등 다양한 형태의 광고가 포함될 수 있으며, 이는 제 3자가 제공하는 페이지와 연결될 수 있습니다.\n     <br>   • 제3항에 따라 제3자가 제공하는 페이지로 연결될 경우 해당 페이지는 솔라미의 서비스 영역이 아니므로 솔라미가 신뢰성, 안정성 등을 보장하지 않으며 그로 인한 회원의 손해에 대하여도 솔라미는 책임을 지지 않습니다.\n     <br>   • 솔라미는 서비스 상에 게재되어 있거나 서비스를 통한 제3자와의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 관련 법에 특별한 규정이 있거나 솔라미의 고의 또는 중과실로 인한 경우가 아닌 한 책임을 지지 않습니다.\n     <br>   \n     <br>   제18조 (회원의 해지)\n     <br>   회원은 솔라미 플랫폼을 통하여 서비스 이용계약을 해지(이하 “회원탈퇴”라 합니다)할 수 있습니다. 회원이 회원탈퇴를 신청한 경우 솔라미는 회원 본인의 신청인지 여부를 확인할 수 있으며, 솔라미는 확인 완료 후에 회원의 신청에 따른 조치를 취합니다.\n     <br>   \n     <br>   제19조 (솔라미의 해지)\n     <br>   • 솔라미는 회원이 본 약관을 위반한 경우 또는 다음 각 호의 경우에는 회원에 대하여 10일의 기간을 정하여 시정할 것을 최고하고 그 기간 동안 시정되지 않을 경우 서비스 이용 계약을 해지할 수 있습니다. 다만, 회원이 현행법 위반 및 고의 또는 중대한 과실로 솔라미에 손해를 입힌 경우에는 사전통보 없이 서비스 이용계약을 해지할 수 있습니다.\n     <br>   • (1)비 실명 가입, 주민등록번호의 도용 등 회원이 제공한 데이터가 허위임이 판명된 경우\n     <br>   • (2)범죄적 행위에 관련되는 경우\n     <br>   • (3)국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행할 경우\n     <br>   • (4)타인의 서비스 아이디 및 비밀번호를 도용한 경우\n     <br>   • (5)타인의 명예를 손상시키거나 불이익을 주는 경우\n     <br>   • (6)같은 사용자가 다른 아이디로 이중 등록을 한 경우\n     <br>   • (7)서비스에 위해를 가하는 등 서비스의 건전한 이용을 저해하는 경우\n     <br>   • (8)기타 관련법령이나 솔라미가 정한 이용조건에 위배되는 경우\n     <br>   제1항에 의하여 계약이 해지되는 경우 회원에게 제공되는 서비스는 모두 중단되며, 회원의 활동과 관련하여 누적된 사항은 모두 비공개 처리됩니다.\n     <br>   \n     <br>   제20조 (솔라미의 회원에 대한 제재)\n     <br>   • 회원이 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지할 수 있습니다. 이 경우 솔라미는 회원의 접속을 금지할 수 있으며, 회원이 게시한 내용의 전부 또는 일부를 임의로 삭제 할 수 있습니다.\n     <br>   • 1년 이상 휴면 회원인 경우에는 안내 메일 또는 공지사항 발표 후 1주일 간의 통지 기간을 거쳐 서비스 사용을 중지할 수 있습니다.\n     <br>   • 회원이 제공하는 정보의 내용이 허위인 것으로 판명되거나, 허위가 있다고 의심할 만한 합리적인 사유가 발생할 경우 회원의 본 서비스 사용을 일부 또는 전부 이용 정지할 수 있으며, 이로 인해 발생하는 불이익에 대해 솔라미는 책임을 부담하지 아니합니다.\n     <br>   \n     <br>   제21조 (양도 금지)\n     <br>   회원은 본 약관에 의한 서비스의 이용권한, 솔라미 회원간 서비스 계약 등 기타 이용계약 상의 권리, 지위 등을 타인에게 양도 및 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.\n     <br>   \n     <br>   제22조 (면책)\n     <br>   • 솔라미는 다음 각 호의 경우에는 면책 됩니다.\n     <br>   • (1)전시, 사변, 천재지변, 국가비상사태, 해결이 곤란한 기술적 결함 기타 불가항력적 사유로 서비스를 제공할 수 없는 경우\n     <br>   • (2)회원의 귀책사유로 인한 서비스의 중지, 이용 장애 및 서비스 이용계약이 해지된 경우\n     <br>   • (3)기간통신 사업자가 전기통신서비스를 중지하거나 정상적으로 제공하지 아니한 경우\n     <br>   • (4)사전에 공지된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나 장애가 발생한 경우\n     <br>   • (5)회원의 컴퓨터 환경으로 인하여 발생하는 제반 문제 또는 솔라미의 고의 또는 중대한 과실이 없는 네트워크 환경으로 인하여 발생하는 문제로 인한 경우\n     <br>   • (6)솔라미의 고의 또는 중과실 없이 회원 상호간 또는 회원과 제3자간에 서비스를 매개로 분쟁이 발생한 경우\n     <br>   • (7)무료서비스와 관련하여 솔라미의 고의 또는 중대한 과실이 없는 경우\n     <br>   • (8)솔라미가 아닌 다른 사업자가 제공하는 서비스와 관련하여 솔라미의 고의 또는 중대한 과실이 없는 경우\n     <br>   • (9)서비스가 정상적으로 제공되었음에도 불구하고 회원이 주관적으로 기대하는 이익, 결과를 얻지 못하거나 상실한 경우 또는 회원의 취사선택으로 발생한 손해의 경우\n     <br>   • (10)회원의 컴퓨터 오류에 의한 손해가 발생한 경우 또는 신상정보 및 전자우편주소를 부정확하게 기재하거나 미 기재하여 손해가 발생한 경우\n     <br>   • (11)관련 법령, 정부 정책 등에 따라 서비스를 제공할 수 없는 경우\n     <br>   • (12)회원 또는 제3자가 서비스 내 또는 웹사이트 상에 게시 또는 전송한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 대해서 솔라미의 고의 또는 중대한 과실이 없는 경우\n     <br>   솔라미 플랫폼에 게시된 프로필 등 회원 기재사항은 고객회원과 파트너가 직접 기재한 것으로 솔라미는 그에 대한 검증이나 진실성을 보증하지 아니하며, 이에 관하여 일체 책임을 부담하지 아니합니다.\n     <br>   회원은 자기의 권한 및 책임으로 솔라미 플랫폼에 정보 및 의견을 게시하며 솔라미는 서비스 과정에서 회원이나 제3자에 의해 표시된 정보 및 의견의 사실 여부를 검증하거나 이를 승인할 의무가 없습니다. 솔라미는 회원 또는 기타 유관기관이 서비스에 게재한 정보(회원의 경력, 프로필, 평가 등 게시물을 포함하며 이에 제한되지 아니합니다) 및 의견의 진실성, 정확성, 신뢰도를 보장하지 않습니다. 따라서 솔라미는 회원이 위 정보 및 의견을 신뢰함으로 인하여 입게 된 모든 종류의 손실이나 손해에 대하여 책임을 부담하지 아니합니다.\n     <br>   회원의 불법적인 행위 또는 본 약관에 위반되는 행위로 인하여 솔라미에 손해가 발생하거나 수사기관, 행정청으로부터 형사처벌 또는 제재를 받은 경우 회원은 회원의 비용(손해배상금, 소송비용, 변호사 비용 등을 포함하되 이에 한정하지 아니함)으로 손해를 전보하고 솔라미를 면책하여야 합니다.\n     <br>   솔라미는 제13조에 의한 솔라미 회원간 서비스 계약 체결 후 파트너의 업무 수행으로 인한 결과물에 대하여 검수하거나 검사할 의무가 없습니다.\n     <br>   \n     <br>   제23조 (손해배상)\n     <br>   솔라미는 회원간 서비스 계약 체결 전 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 솔라미는 고의 또는 중과실에 의한 손해를 제외하고는 어떠한 책임도 부담하지 아니합니다.\n     <br>   \n     <br>   제24조 (재판관할)\n     <br>   솔라미의 서비스 제공과 관련하여 솔라미와 회원 사이에 분쟁이 발생한 경우, 솔라미와 회원은 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다. 발생한 분쟁에 대하여 소송이 제기될 경우에는 당사자의 주소지를 관할하는 법원을 관할 법원으로 합니다. 다만 본 조의 규정은 솔라미 회원간 서비스 계약에 의하여 중재로 해결하는 경우에는 적용되지 아니합니다.\n     <br>   \n     <br>   제25조 (솔라미 플랫폼 분석의뢰 및 격적 내용)\n     <br>   • 회원이 게시한 모든 내용의 저작권은 회원이 소유하며, 솔라미는 플랫폼 내에 이를 게시(변형, 가공, 요약, 발췌, 취합 행위를 포함)할 수 있는 권리를 갖습니다. 솔라미는 다음 각 호에 해당하는 내용의 게시를 금지합니다. 이를 위반한 경우, 솔라미는 해당 내용에 대해 사전통지 없이 삭제, 이동 또는 등록 거부의 조치를 취할 수 있습니다.\n     <br>   • (1)서비스 이용 목적에 부합하지 않는 경우\n     <br>   • (2)일치하거나 유사한 내용이 있어 중복되는 경우\n     <br>   • (3)이메일 주소, 핸드폰, 전화번호, 주소, URL 등의 내용을 직접 기재한 경우\n     <br>   • (4)솔라미가 지정하지 않은 업무 형태(파트너 직접채용)과 관련된 경우\n     <br>   • (5)솔라미가 제공하는 대금 지급 이외의 형태를 제안하는 경우\n     <br>   • (6)본 서비스를 통하지 않고 직접 거래를 유도하거나 권유, 제안하는 경우\n     <br>   • (7)본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 내용인 경우\n     <br>   • (8)다른 회원 또는 제 3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우\n     <br>   • (9)공공질서 및 미풍양속에 위반되는 내용인 경우\n     <br>   • (10)범죄적 행위에 결부된다고 인정되는 내용일 경우\n     <br>   • (11)제3자의 초상권, 저작권 등 기타 권리를 침해하는 내용인 경우\n     <br>   • (12)서비스 성격에 부합하지 않는 정보의 경우\n     <br>   • (13)기타 관계 법령에 위배되는 경우\n     <br>   솔라미는 내용이 게시된 지 상당한 기간 이상 경과되어, 효용성이 없어진 경우 해당 내용을 이동 또는 삭제할 수 있습니다.\n     <br>   솔라미는 타인의 저작권을 침해하는 내용에 대하여 저작권법에 정해진 절차에 의하여 저작권자 또는 회원의 요청에 의해 해당 내용을 삭제하거나 다시 게시할 수 있으며, 이 경우 솔라미는 면책됩니다. 회원의 내용이 타인의 저작권을 침해함으로써 발생하는 민, 형사상의 책임은 전적으로 회원이 부담하여야 합니다.\n     <br>   회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 플랫폼에 게재된 내용을 상업적으로 사용할 수 없습니다.\n     <br>   솔라미는 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크, 로고, 디자인, 서비스 명칭, 정보 및 상표 등과 관련된 지적재산권 및 기타 권리는 솔라미에게 있습니다. 회원은 솔라미가 명시적으로 승인한 경우를 제외하고는 상기 항에 기재한 소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매, 배포, 제작, 양도, 재라이센스, 담보권설정행위, 상업적 이용행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수 없습니다.\n     <br>   \n     <br>   제26조 (지적재산권)\n     <br>   • 파트너는 솔라미 회원간 서비스 계약을 체결한 후 계약에 따른 업무를 수행함에 있어서 특허권, 상표권, 저작권 등 제3자의 지적재산권을 침해하여서는 아니 됩니다. 만일 업무에 따른 결과물이 제3자의 지적재산권을 침해하여 고객회원 또는 제3자에게 손해를 끼칠 경우에 파트너는 민ᆞ형사상의 모든 책임을 지게 됩니다.\n     <br>   • 제1항의 경우 고객회원 또는 솔라미가 제3자로부터 이의제기, 경고, 민ᆞ형사상 소송, 행정 구제 절차 등의 청구를 받은 경우 파트너는 자신의 비용으로 지적재산권을 침해 당한 제3자에게 배상하여야 하며, 고객회원 또는 솔라미를 면책(손해배상금, 소송비용, 변호사 비용 등을 포함하되 이에 한정하지 아니함)하여야 합니다.\n     <br>   • 솔라미는 파트너의 결과물이 제3자의 지적재산권을 침해하는지 여부에 대해 조사하지 않으며, 이에 대해서는 고객회원이 직접 도용이나 침해 여부를 조사하여야 합니다.\n     <br>   \n     <br>   제2장 대금보호시스템\n     <br>   대금보호시스템은 고객회원이 파트너의 용역 제공의 대가를 용역을 공급받기 전에 솔라미에게 예치(이하 “결제”)하고 솔라미는 고객회원의 지급 승인에 따라 파트너에게 지급하는 서비스를 의미하며, 제13조에 의하여 솔라미 회원간 서비스 계약서를 체결한 후 제공 받을 수 있는 서비스 입니다. \n     <br>   솔라미는 기본적으로 서비스에 대한 신뢰를 위해 모든 거래에 대해 그 대가(이하 “계약 대금”)의 전부 또는 일부를 미리 지급 받아 회원의 거래의 결과에 대한 상호 확인 시점까지 계약 대금을 예치하는 것을 원칙으로 하고 있습니다. \n     <br>   이러한 대금보호시스템을 통해 상호 거래에 대한 신뢰를 향상하고 대금 분쟁을 미연에 방지하고자 하는 바 파트너는 업무 착수와 함께(또는 그에 근접하여) 수수하는 이른바 착수금(계약금, 선금 등 그 명칭을 불문함)을 지급받을 수 없습니다.\n     <br>   \n     <br>   제27조 (대금의 상태 공개)\n     <br>   솔라미는 회원간 서비스 계약을 체결한 회원은 대금의 결제, 예치, 지급 등의 상태를 솔라미와 에스크로 계좌를 통해서 확인할 수 있습니다. 솔라미는 대금의 상태가 변하는 경우 최대 7일 이내에 그 변경된 상태를 적용해야 합니다.\n     <br>   \n     <br>   제28조 (결제 내용의 확인)\n     <br>   솔라미는 회원의 요청이 있는 경우 회원의 결제 내역을 확인할 수 있도록 하며, 회원의 요청이 있는 경우에는 요청을 받은 날로부터 15일 이내에 결제 내역을 이메일 등으로 고지합니다. 회원은 다음의 이메일주소 및 전화번호로 결제 내역 확인을 요청할 수 있습니다.\n     <br>   • 이메일 : help@solarmy.co.kr\n     <br>   • 전화번호: (070) 7664-2221\n     <br>   \n     <br>   제29조 (이자 수익 및 수수료)\n     <br>   • 회원은 대금보호시스템을 이용함에 있어 예치된 대금에 대해 이자 또는 별도의 수입을 받지 않는 것에 동의합니다. 솔라미는 예치된 대금에 대한 이자 또는 별도의 수입을 생성할 수 있습니다.\n     <br>   • 솔라미는 대금보호시스템을 통한 예치 계좌의 입출금에 대해 수수료가 발생할 경우(해외 송금, 환전 등)에는 이에 대한 비용을 별도로 회원에게 청구할 수 있습니다.\n     <br>   • 본 조는 제14조 유료 서비스의 이용 금액(이용요금 등 그 명칭을 불문함.)에 준용합니다.\n     <br>   \n     <br>   제30조 (계약 대금의 지급)\n     <br>   솔라미는 예치된 계약 대금에 대해 솔라미 회원간 서비스 계약에 따라 대금을 지급하거나 환불합니다. 대금의 지급 및 환불 등 대금 관련 업무는 평일 오전10시~오후 6시내에 이루어지는 것을 원칙으로 합니다. 본 조는 제14조 유료 서비스의 이용 금액(이용요금 등 그 명칭을 불문함.)에 준용합니다.\n     <br>   \n     <br>   제3장 안심중재솔루션\n     <br>   안심중재솔루션은 회원 및 솔라미가 제13조에 의한 솔라미 회원간 서비스 계약을 체결한 후 분쟁이 발생할 경우, 이를 원만하고 신속하게 해결할 수 있도록 솔라미가 제공하는 분쟁해결 시스템입니다.\n     <br>   \n     <br>   제 31조 (안심중재솔루션)\n     <br>   • 솔라미 안심중재솔루션은 구체적으로 다음과 같은 3단계 과정으로 이루어지게 됩니다.\n     <br>   1단계: 양자 협의\n     <br>   양자협의는 태양광 설치 또는 유지보수 진행 도중 문제 상황이 발생했을 때 고객회원과 파트너 간의 적극적인 의사소통을 통해 합의점을 찾는 단계입니다.\n     <br>   \n     <br>   2단계: 솔라미 지원 미팅\n     <br>   솔라미 지원 미팅은 양자협의 단계에서 합의점을 찾지 못했을 경우, 솔라미 매니저의 중립적인 도움을 받는 단계입니다.\n     <br>   \n     <br>   3단계: 기관중재\n     <br>   앞의 두 단계로도 합의점을 찾지 못한 경우, 대한상사중재원(중재법에 따라 설립된 상설 법정 기관)의 중재판정에 의해 분쟁을 해결합니다. \n     <br>   솔라미는 중재 신청에 필요한 서류를 검토해드리고, 중재 신청 금액 1억 원 미만 사건에 대해서는 신청 비용 전액을 지원해 드립니다.\n     <br>   고객회원과 파트너가 부적절하게 솔라미의 분쟁 해결 절차를 악용하거나 과도하게 요구하는 경우 솔라미는 이를 거부할 수 있고, 회원과의 서비스 이용계약 및/또는 솔라미 회원간 서비스 계약을 해제 또는 해지할 수 있으며, 솔라미에 손해가 발생하는 경우 손해배상을 청구할 수 있습니다.\n     <br>   솔라미는 안심중재솔루션을 신청한 각 회원에 대해 솔라미 플랫폼 내에서 다른 회원들이 인지 가능한 적당한 방법으로 분쟁 발생 사실에 관한 표기를 할 수 있습니다.\n     <br>   \n     <br>   부칙\n     <br>   • 본 약관은 2019년 4월 25일부터 시행됩니다.\n     <br>   • 2019년 4월 20일부터 시행되던 종전의 약관은 본 약관으로 대체됩니다.\n   \n    </div>\n  <div *ngIf="type==\'개인정보 처리 방침\'" class="wrap mt30">\n    <br>개인정보 처리방침 <br>\n솔라미는 고객회원과 파트너스의 개인정보를 소중히 다루고 있습니다.<br><br>\n개인정보 처리방침<br>\n솔라미는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리 방침을 두고 있습니다. 솔라미는 개인정보 처리방침을 개정하는 경우 솔라미플랫폼, 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\n<br>\n제 1조 (기본 원칙)<br>\n솔라미(이하 “솔라미”)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법, 개인정보보호법 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보 처리방침을 정하여 회원 권익 보호에 최선을 다하고 있습니다.\n<br>\n제 2조 (최초 회원가입 시 수집하는 개인정보)<br>\n솔라미는 회원가입 및 관리, 원활한 고충처리, 각종 서비스의 제공을 위해 최초 회원가입 당시 회원으로부터 다음의 개인정보를 수집하고 있습니다.\n• 필수항목: 이메일 주소, 아이디, 비밀번호, 이용 목적<br>\n제 3조 (서비스 이용 시 수집하는 개인정보)<br>\n• 솔라미는 원활하고 신뢰할 수 있는 서비스의 제공을 위해 회원가입 후 분석의뢰의 등록, 지원 절차에 앞서 회원으로부터 다음 각 호의 개인정보를 수집하고 있습니다.\n• (1)고객회원의 분석의뢰 및 비교견적진행 등록 시 필수 항목: 이메일주소, 성명, 주소, 핸드폰 번호, 월평균전기요금 등의 정보\n• (2)파트너의 비교견적 지원 시 필수 항목: 이메일, 회사명, 주소, 담당자성함, 핸드폰번호, 회사전호번호,전기면허증, 사업자등록번호,은행계좌, 세금계산서 이메일주소, 세금계산서 담당자성함 등의 정보\n솔라미는 원활하고 신뢰할 수 있는 서비스의 제공을 위해 계약 체결에 앞서 회원으로부터 다음의 개인정보를 수집하고 있습니다.\n• 사업자등록증, 주민등록증, 여권, 기타 신분증 등 신원을 확인할 수 있는 서류에 기재된 주민등록번호(단, 주민등록번호의 경우 관련 법령에서 회원의 주민등록번호 수집·이용을 허용하는 경우에 한하여 수집합니다), 사업자등록번호 등의 정보\n솔라미는 서비스 이용과정에서 추가로 생성되는 다음 각 호의 회원의 정보들을 수집할 수 있습니다.\n• (1)본적으로 수집되는 정보: IP주소, 쿠키, 기기식별번호(MAC주소 등), 서비스 이용 기록, 방문 기록, 접속 로그, 불량 이용 기록 등 정보\n• (2)서비스 이용 시 수집되는 정보: 휴대전화 전화번호, 신용카드 정보, 은행계좌 정보, 결제 기록 등 정보<br>\n제 4조 (민감한 개인정보의 수집 금지 등)<br>\n솔라미는 회원의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종, 사상, 신조, 정치적 성향, 범죄기록, 의료정보 등)는 수집하지 않으며, 회원이 선택 항목의 정보를 입력하지 않은 경우에도 솔라미가 제공하는 서비스 이용에 제한은 없습니다.\n<br>제 5조 (개인정보 수집 방법)<br>\n솔라미는 다음 각 호의 방법으로 개인정보를 수집합니다.\n• (1)솔라미가 제공하는 플랫폼, 서면 양식, 전화/팩스 등 서비스 가입이나 사용 중 회원의 자발적 제공을 통한 수집\n• (2)생성 정보 수집 툴을 통한 수집<br>\n제 6조 (개인정보 수집 및 이용 목적)<br>\n솔라미는 다음 각 호의 목적으로 회원의 개인정보를 수집 및 이용합니다. 수집한 개인정보는 다음의 목적 이외의 용도로 사용되지 않으며 이용 목적이 변경될 시에는 별도의 사전동의를 구합니다.\n• (1)플랫폼 회원가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인 확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등의 목적\n• (2)민원사무의 처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등의 목적\n• (3)서비스의 제공: 서비스 제공, 본인 인증, 연령 인증, 채권 추심 등의 목적\n• (4)마케팅 및 광고에의 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.\n<br>제 7조 (개인정보 제3자 제공의 기본 원칙)<br>\n솔라미는 회원들의 개인정보를 제6조에 고지한 범위 내에서 사용하며, 회원의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 회원의 개인정보를 제3자에 제공하거나 외부에 공개하지 않습니다. 다만, 다음 각 호의 경우는 예외로 합니다.\n• (1)회원들이 사전에 공개에 동의한 경우\n• (2)법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우\n• (3)솔라미가 제공하는 서비스를 통해 거래가 성사되었을 때에는 쌍방 당사자간의 계약과 관련한 정보를 필요한 범위 내에서 쌍방당사자에게 제공합니다.\n<br>제 8조 (예외적 개인정보 제3자 제공)<br>\n솔라미는 현재 개인정보를 제3자에게 제공하거나 외부에 공개하고 있지 않습니다.\n<br>제 9조 (개인정보 보유 및 이용기간의 기본 원칙)<br>\n원칙적으로 회원의 개인정보는 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기됩니다.\n<br>제 10조 (솔라미 내부 방침에 의한 개인정보의 보유)<br>\n제10조에도 불구하고, 솔라미는 거래 관련 분쟁 방지를 위하여 솔라미 내부 방침에 따라 회원 가입 및 관리 관련 정보를 다음 각 호의 기간 동안 보존합니다.\n• (1)원칙: 회원 탈퇴 시까지\n• (2)회원에 대하여 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우: 해당 수사·조사 종료 시까지\n• (3)솔라미와 회원 사이에 채권·채무관계가 잔존하는 경우: 해당 채권·채무관계 정산 완료 시까지\n• (4)회원에서 탈퇴한 후 회원 재가입, 임의 해지 등을 반복적으로 행하여 정당하지 않은 경제상의 이익을 취하거나 이 과정에서 명의를 무단으로 사용하는 편법과 불법행위를 하는 회원을 차단 하고자 회원 탈퇴 후 1개월 동안 회원의 성명,주민등록번호(또는 CI), DI, 아이디(ID), 비밀번호(Password), 이메일(E-mail)정보를 보관 하며, 로그기록, 접속 아이피(IP)정보는 12개월간 보관합니다.\n<br>제 11조 (관련 법령에 의한 개인정보의 보유)<br>\n솔라미는 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 다음 각 호에 따라 회원의 해당 개인정보를 보관하며, 그 목적의 범위 내에서만 이를 이용합니다. 단, 솔라미 이용계약(이용약관)에 의해 이용계약이 존속 중인 회원(탈퇴하지 아니한 회원)의 경우 보관기간은 보존의무기간 이상 보관할 수 있으며, 해당 기간이 경과된 기록에 대해서는 회원의 삭제 요청이 있는 경우 파기합니다.\n• (1)계약 또는 청약철회 등에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 5년간 보존\n• (2)대금결제 및 재화 등의 공급에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 5년간 보존\n• (3)소비자의 불만 또는 분쟁 처리에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 3년간 보존\n• (4)표시·광고에 관한 기록: 전자상거래 등에서의 소비자보호에 관한 법률에 따라 6개월간 보존\n• (5)본인확인에 관한 기록: 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 6개월간 보존\n• (6)전기통신일시, 개시·종료시간, 가입자 번호, 사용 도수, 발신 기지국 위치추적자료에 관한 기록: 통신비밀보호법에 따라 1년간 보존\n• (7)컴퓨터통신, 인터넷 로그기록자료, 접속지 추적 자료: 통신비밀보호법에 따라 3개월간 보존\n• (8)신용정보의 수집/처리 및 이용 등에 관한 기록: 3년\n<br>제 12조 (개인정보의 파기 절차 및 방법)<br>\n• 솔라미는 원칙적으로 개인정보 이용 목적이 달성된 경우에는 파기 사유가 발생한 개인정보를 선정하고, 솔라미의 개인정보 보호책임자의 승인을 받아 지체 없이 해당 개인정보를 파기합니다.\n• 파기의 절차, 기한 및 방법은 다음과 같습니다.\n• (1)파기 절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.\n• (2)파기 기한: 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 이용 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.\n• (3)파기 방법: 종이에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하며, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 사용하여 삭제합니다.\n<br>제 13조 (개인정보의 수집, 이용, 제공에 대한 동의 철회)<br>\n회원은 회원 가입 등을 통해 개인정보의 수집, 이용, 제공에 대하여 동의한 내용을 언제든지 철회할 수 있습니다.\n<br>제 14조 (회원의 권리와 행사방법)<br>\n• 회원은 솔라미에 대해 언제든지 다음과 각 호와 같은 권리를 행사할 수 있습니다.\n• (1)개인정보 열람 요구\n• (2)오류 등이 있을 경우 정정 요구\n• (3)삭제 요구\n• (4)처리 정지 요구\n제1항에 따른 권리 행사는 솔라미에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 솔라미는 본인 확인을 위한 요청인의 신분증 사본 등의 증표를 제시 받아 해당 요구가 진정한 본인의 의사인지 여부를 확인할 수 있으며, 본인으로 확인되고 개인정보에 오류가 있거나 보존기간을 경과한 것이 판명되는 등 정정 또는 삭제할 필요가 있다고 인정되는 경우 지체 없이 그에 따른 조치를 취합니다.\n회원이 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 솔라미는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 제1항에 따른 권리 행사는 회원의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하여야 합니다.\n<br>제 15조 (법정대리인의 권리)<br>\n• 법정대리인은 만 14세 미만 아동의 개인정보 수집·이용 또는 제공에 대한 동의를 철회할 수 있으며, 해당 아동이 제공한 개인정보에 대한 열람 또는 오류의 정정을 요구할 수 있습니다.\n• 유선 또는 서면을 통하여 만 14세 미만 아동인 회원의 법정대리인이 열람, 증명을 요구하는 경우, 솔라미는 대리관계를 증명하는 위임장 및 인감증명서, 요청인 및 대리인의 신분증 사본 등의 증표를 제시 받아 해당 요구를 하는 자가 진정한 법정대리인인지 여부를 확인합니다.\n<br>제 16조 (솔라미의 개인정보 열람 및 이용 제한)<br>\n• 회원 또는 법정대리인의 요청에 의해 해지 또는 삭제, 정정된 개인정보는 제9조 내지 제11조에 명시된 바에 따라 처리되고, 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.\n• 회원 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다.\n<br>제 17조 (쿠키의 운용)<br>\n• 솔라미는 회원에게 특화된 맞춤서비스를 제공하기 위해서 회원들의 정보를 수시로 저장하고 찾아내는 \'쿠키(cookie)\' 등을 운용합니다. 쿠키란 웹사이트를 운영하는 데 이용되는 서버가 회원의 브라우저에 보내는 아주 작은 텍스트 파일로서 회원의 컴퓨터 하드디스크에 저장되기도 합니다.\n• 솔라미는 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 회원의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 횟수 파악 등을 통한 타깃 마케팅 및 개인 맞춤 서비스 제공 등의 목적으로 쿠키를 사용합니다.\n• 회원은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 회원은 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.\n• 제3항에 따라 쿠키 설정을 거부하는 방법으로, 회원은 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 인터넷 익스플로러의 경우를 예로 들면, 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴를 통하여 쿠키 설정의 거부가 가능합니다.\n• 회원이 쿠키 설치를 거부하는 경우 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.\n<br>제 18조 (해킹 등에 대비한 대책)<br>\n솔라미는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.\n• 개인정보 취급 직원의 최소화 및 교육: 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.\n• 정기적인 자체 감사 실시: 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.\n• 내부관리계획의 수립 및 시행: 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.\n• 개인정보의 암호화: 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.\n• 해킹 등에 대비한 기술적 대책: 솔라미는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.\n• 개인정보에 대한 접근 제한: 개인정보를 처리하는 데이터베이스시스템에 대한 접근 권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.\n• 접속 기록의 보관 및 위변조 방지: 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.\n• 문서보안을 위한 잠금 장치 사용: 개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.\n• 비인가자에 대한 출입 통제: 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.\n• 기타: 그 외 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.\n<br>제 19조 (취급 직원의 최소화 및 교육)<br>\n솔라미의 개인정보 관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 솔라미는 개인정보 처리방침의 준수를 항상 강조하고 있습니다.\n<br>제 20조 (개인정보보호전담기구의 운영)<br>\n솔라미는 사내 개인정보보호전담기구 등을 통하여 개인정보 처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다. 단, 회원 본인의 부주의나 인터넷상의 문제로 개인 정보가 유출되어 발생한 문제에 대해 솔라미는 일체의 책임을 지지 않습니다.\n<br>제 21조 (개인정보관리 책임자 및 담당자)<br>\n회원은 솔라미의 서비스를 이용하시며 발생하는 모든 개인정보보호에 대한 문의, 불만처리, 피해구제 등 관련 민원을 다음 각 호의 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 솔라미는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.\n• (1)개인정보 보호 책임자<br>\n• 성명: 이정혁<br>\n• 직책: 대표이사<br>\n• 연락처: (070) 7664-2221, leejeonghyuk@solarmy.co.kr<br>\n ※ 개인정보 보호 담당부서로 연결됩니다<br>\n(2)개인정보 보호 담당부서<br>\n• 부서명: 관리팀<br>\n• 담당자: 이정혁<br>\n• 연락처: (070) 7664-2221, leejeonghyuk@solarmy.co.kr<br>\n<br>제 22조 (개인정보 열람 창구)<br>\n회원은 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 솔라미는 회원의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.<br>\n• 부서명: 관리팀<br>\n• 담당자: 이정혁<br>\n• 연락처: (070) 7664-2221, leejeonghyuk@solarmy.co.kr<br>\n<br>제 23조 (개인정보 처리방침 관련 고지 및 통지 방법)<br>\n• 솔라미는 현행 개인정보 처리방침에 대한 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 플랫폼을 통해 변경 이유 및 그 내용을 고지합니다. 다만, 개인정보의 수집 및 활용 등에 있어 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.\n• 솔라미는 회원이 동의한 범위를 넘어 회원의 개인정보를 이용하거나 제3자에게 취급위탁하기 위해 회원의 추가적인 동의를 얻고자 하는 때에는 미리 회원에게 개별적으로 서면, 전자우편, 전화 등으로 해당사항을 고지합니다.\n• 솔라미는 개인정보의 수집, 보관, 처리, 이용, 제공, 관리, 파기 등을 제3자에게 위탁하는 경우에는 개인정보 처리방침 등을 통하여 그 사실을 회원에게 고지합니다.\n• 만 14세 미만 아동의 개인정보를 수집, 이용하거나 제3자에게 제공하기 위하여 법정대리인의 동의를 받고자 하는 경우에는 전화, 팩스, 우편, 아동으로 하여금 통지 내용을 법정대리인에게 제출하게 하는 방법, 법정대리인에게 이메일을 보내 본 개인정보 처리방침을 볼 수 있도록 연결(하이퍼링크)시키는 방법 또는 기타 법정대리인에게 고지 내용이 도달할 수 있는 합리적인 방법을 통하여 법정대리인에게 고지합니다.<br>\n부칙<br>\n본 개인정보 처리방침은 2019년 4월 20일부터 시행됩니다.\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrojung/Downloads/solamytochanged0701/src/pages/term/term.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appmgr_appmgr__["a" /* AppmgrProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], TermPage);
    return TermPage;
}());

//# sourceMappingURL=term.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmgrProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(384);
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

},[274]);
//# sourceMappingURL=main.js.map