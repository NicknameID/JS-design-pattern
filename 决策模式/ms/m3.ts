/* 引入外部依赖包 */
///<reference path="./libs/Validator.ts" />

/* 策略模式的表单校验 */
let regForm = document.querySelector('form');
let usr:any = document.querySelector('input[type=text]:first-of-type');
let pwd:any = document.querySelector('input[type=password]');
let phone:any = document.querySelector('#ph');

/* 检查表单的函数 ->1.1 */
let ValidataFunc = function(){
    let validator = new Validator();
    validator.add(usr, 'isNotEmpty','用户名为空');
    validator.add(pwd, 'isNotEmpty', '密码为空');
    validator.add(pwd, 'minLength:6', '密码小于6位');
    validator.add(phone,'isMobile','号码不是手机号码');
    let msg = validator.start();
    return msg;
}
/* 检查表单的函数 ->1. */
if( regForm ){
    regForm.onsubmit = function(){
        let errMsg = ValidataFunc();
        if( errMsg ){
            alert(errMsg);
            return false;
        }
    }
}

