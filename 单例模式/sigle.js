var Singleton = /** @class */ (function () {
    function Singleton(name) {
        this.name = name;
        this.init();
    }
    Singleton.prototype.init = function () {
        console.log("已创建");
    };
    return Singleton;
}());
var ProxySingleton = /** @class */ (function () {
    function ProxySingleton(name) {
        this.name = name;
        if (!ProxySingleton.instance) {
            ProxySingleton.instance = new Singleton(this.name);
        }
        return ProxySingleton.instance;
    }
    ProxySingleton.instance = null;
    return ProxySingleton;
}());
// test
var a = new ProxySingleton("张三");
var b = new ProxySingleton("李四");
console.log(a === b);
var arr1 = [1, 2, 3, , 3, 3, 3, , 4, 4, 4, 2];
var arr2 = new Set(arr1.slice());
console.log(arr2);
