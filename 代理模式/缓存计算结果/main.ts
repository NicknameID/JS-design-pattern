/**
 * 用到了 单例模式 和 代理模式：用代理模式实现单例模式实现计算的缓存
 */
class Mult{
    protected getResult(...args){
        console.log('开始计算');
        return args.reduce((x,y)=>{
            return x*y;
        });
    }
}

class CacheMult extends Mult{
    cache:object = {};
    constructor(){
        super();
    }
    getResult(...args){
        let sorted_args = args.sort((n1,n2)=>n1-n2);
        let key = sorted_args.join(",")
        if ( key in this.cache ){  //如果结果已经计算过了，就返回缓存过的结果
            return this.cache[key];
        }else{
            let result = super.getResult(...args);  //调用父类得到计算结果
            this.cache[ key ] = result; //缓存结果到缓存中
            return result;
        }
    }
}

let mult = new CacheMult();
let r1 = mult.getResult(1,2,3,4);
let r2 = mult.getResult(3,4,1,2);
let r3 = mult.getResult(1,2,3);
console.log(r1);
console.log(r2);
console.log(r3);
/* 返回 */
// 开始计算
// 开始计算
// 24
// 24
// 6


