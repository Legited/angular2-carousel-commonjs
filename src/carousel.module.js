"use strict";
/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var carousel_component_1 = require("./carousel.component");
var platform_browser_1 = require("@angular/platform-browser");
var Hammer = require("hammerjs");
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pan': { direction: Hammer.DIRECTION_ALL } // override default settings
        };
        return _this;
    }
    return MyHammerConfig;
}(platform_browser_1.HammerGestureConfig));
exports.MyHammerConfig = MyHammerConfig;
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        carousel_component_1.CarouselComponent
                    ],
                    providers: [
                        {
                            provide: platform_browser_1.HAMMER_GESTURE_CONFIG,
                            useClass: MyHammerConfig
                        }
                    ],
                    exports: [carousel_component_1.CarouselComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=carousel.module.js.map