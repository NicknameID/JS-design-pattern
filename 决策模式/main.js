"use strict";
/* 定义计算的调用方法类 */
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.setBase = function (base) {
        this.base = base;
    };
    Calculate.prototype.setLeve = function (leve) {
        this.way = leve;
    };
    Calculate.prototype.getResult = function () {
        return this.way.calculate(this.base);
    };
    return Calculate;
}());
/* 定义各种计算方式 */
var L1 = /** @class */ (function () {
    function L1() {
    }
    L1.prototype.calculate = function (base) {
        return base * 2;
    };
    return L1;
}());
var L2 = /** @class */ (function () {
    function L2() {
    }
    L2.prototype.calculate = function (base) {
        return base * 3;
    };
    return L2;
}());
var L3 = /** @class */ (function () {
    function L3() {
    }
    L3.prototype.calculate = function (base) {
        return base * 4;
    };
    return L3;
}());
var calculater = new Calculate();
calculater.setBase(1000);
calculater.setLeve(new L1());
console.log(calculater.getResult());
calculater.setBase(2000);
console.log(calculater.getResult());
