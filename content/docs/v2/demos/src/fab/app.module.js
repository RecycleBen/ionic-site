import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../';
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.array = [];
    }
    ApiDemoPage.prototype.add = function () {
        this.array.push(1);
    };
    ApiDemoPage.prototype.clickMainFAB = function () {
        console.log('Clicked open social menu');
    };
    ApiDemoPage.prototype.openSocial = function (network, fab) {
        console.log('Share in ' + network);
        fab.close();
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    /** @nocollapse */
    ApiDemoPage.ctorParameters = [];
    return ApiDemoPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
                },] },
    ];
    /** @nocollapse */
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ApiDemoApp,
                        ApiDemoPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ApiDemoPage
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map