///<reference path="./TestRules.ts" />
/* 定义检查表单的方法类：add()：添加检查的规则; start()：开始检查 */
class Validator {
    cache: object[] = [];
    add(dom: any, rule: string, errMsg: string) {
        let arr: any = rule.split(':');
        this.cache.push(function () {
            let whichRule: string = arr.shift();
            arr.unshift(dom.value);
            arr.push(errMsg);
            return RuleList.Rules[whichRule].apply(dom, arr);
        });
    };
    start() {
        for (let i: number = 0, func: any; i < this.cache.length; i++) {
            func = this.cache[i];
            let msg = func();
            if (msg) return msg;  //如果有返回值说明验证没有通过
        }
    }
}