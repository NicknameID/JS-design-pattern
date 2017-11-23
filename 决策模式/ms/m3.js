/* 定义检查表单的规则 */
var RuleList;
(function (RuleList) {
    RuleList.Rules = {
        "isNotEmpty": function (value, errMsg) {
            console.log(11);
            if (value === '')
                return errMsg;
        },
        "minLength": function (value, minLength, errMsg) {
            console.log(22);
            if (value.length < minLength)
                return errMsg;
        },
        "isMobile": function (value, errMsg) {
            console.log(33);
            if (!/^1[3|5|8][0-9]{9}$/.test(value))
                return errMsg;
        }
    };
})(RuleList || (RuleList = {}));
///<reference path="./TestRules.ts" />
/* 定义检查表单的方法类：add()：添加检查的规则; start()：开始检查 */
var Validator = /** @class */ (function () {
    function Validator() {
        this.cache = [];
    }
    Validator.prototype.add = function (dom, rule, errMsg) {
        var arr = rule.split(':');
        this.cache.push(function () {
            var whichRule = arr.shift();
            arr.unshift(dom.value);
            arr.push(errMsg);
            return RuleList.Rules[whichRule].apply(dom, arr);
        });
    };
    ;
    Validator.prototype.start = function () {
        for (var i = 0, func = void 0; i < this.cache.length; i++) {
            func = this.cache[i];
            var msg = func();
            if (msg)
                return msg; //如果有返回值说明验证没有通过
        }
    };
    return Validator;
}());
/* 引入外部依赖包 */
///<reference path="./libs/Validator.ts" />
/* 策略模式的表单校验 */
var regForm = document.querySelector('form');
var usr = document.querySelector('input[type=text]:first-of-type');
var pwd = document.querySelector('input[type=password]');
var phone = document.querySelector('#ph');
/* 检查表单的函数 ->1.1 */
var ValidataFunc = function () {
    var validator = new Validator();
    validator.add(usr, 'isNotEmpty', '用户名为空');
    validator.add(pwd, 'isNotEmpty', '密码为空');
    validator.add(pwd, 'minLength:6', '密码小于6位');
    validator.add(phone, 'isMobile', '号码不是手机号码');
    var msg = validator.start();
    return msg;
};
/* 检查表单的函数 ->1. */
if (regForm) {
    regForm.onsubmit = function () {
        var errMsg = ValidataFunc();
        if (errMsg) {
            alert(errMsg);
            return false;
        }
    };
}
