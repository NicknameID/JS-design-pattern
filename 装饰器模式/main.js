var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function D(target, name, des) {
    var oldDes = des.value;
    des.value = function () {
        console.log("调用: " + name + "方法");
        return oldDes.apply(null, arguments);
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Lucy";
    }
    Person.prototype.say = function () {
        console.log("my name is " + this.name);
    };
    __decorate([
        D
    ], Person.prototype, "say", null);
    return Person;
}());
var p = new Person();
p.say();
