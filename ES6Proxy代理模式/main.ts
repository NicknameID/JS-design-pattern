declare let Proxy:any,Reflect:any;

function _Mult(...args:number[]){
    console.log("开始计算");
    return args.reduce((n1,n2)=>{
        return n1*n2;
    });
}

let _CacheMult = (function(){
    let cache:Object = {};
    return new Proxy(_Mult, {
        apply(target,ctx,args) {
            let sorted_args = args.sort((n1, n2) => n1 - n2);
            let key:string = sorted_args.join(",")
            if (key in cache) {  //如果结果已经计算过了，就返回缓存过的结果
                return cache[key];
            } else {
                // let result = super.getResult(...args);  //调用父类得到计算结果
                // cache[key] = result; //缓存结果到缓存中
                // return result;
                let res = Reflect.apply(target,ctx,args);
                cache[key] = res; //缓存结果到缓存中
                return res;
            }
        }
    });
})();

console.log(_CacheMult(1,2,3));
console.log(_CacheMult(1,2,3));
console.log(_CacheMult(3,1,2));

