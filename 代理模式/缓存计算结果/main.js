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
/**
 * 用到了 单例模式 和 代理模式：用代理模式实现单例模式实现计算的缓存
 */
var Mult = /** @class */ (function () {
    function Mult() {
    }
    Mult.prototype.getResult = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('开始计算');
        return args.reduce(function (x, y) {
            return x * y;
        });
    };
    return Mult;
}());
var CacheMult = /** @class */ (function (_super) {
    __extends(CacheMult, _super);
    function CacheMult() {
        var _this = _super.call(this) || this;
        _this.cache = {};
        return _this;
    }
    CacheMult.prototype.getResult = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var sorted_args = args.sort(function (n1, n2) { return n1 - n2; });
        var key = sorted_args.join(",");
        if (key in this.cache) {
            return this.cache[key];
        }
        else {
            var result = _super.prototype.getResult.apply(this, args); //调用父类得到计算结果
            this.cache[key] = result; //缓存结果到缓存中
            return result;
        }
    };
    return CacheMult;
}(Mult));
var mult = new CacheMult();
var r1 = mult.getResult(1, 2, 3, 4);
var r2 = mult.getResult(3, 4, 1, 2);
var r3 = mult.getResult(1, 2, 3);
console.log(r1);
console.log(r2);
console.log(r3);
/* 返回 */
// 开始计算
// 开始计算
// 24
// 24
// 6
