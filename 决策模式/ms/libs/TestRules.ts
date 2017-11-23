/* 定义检查表单的规则 */
namespace RuleList{
    export const Rules: any = {
        "isNotEmpty": function (value: any, errMsg: string) {
            console.log(11);
            if (value === '') return errMsg;
        },
        "minLength": function (value: any, minLength: number, errMsg: string) {
            console.log(22);
            if (value.length < minLength) return errMsg;
        },
        "isMobile": function (value: any, errMsg: string) {
            console.log(33);
            if (!/^1[3|5|8][0-9]{9}$/.test(value)) return errMsg;
        }
    }
}