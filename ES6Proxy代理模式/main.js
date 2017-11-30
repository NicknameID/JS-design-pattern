function _Mult() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("开始计算");
    return args.reduce(function (n1, n2) {
        return n1 * n2;
    });
}
var _CacheMult = (function () {
    var cache = {};
    return new Proxy(_Mult, {
        apply: function (target, ctx, args) {
            var sorted_args = args.sort(function (n1, n2) { return n1 - n2; });
            var key = sorted_args.join(",");
            if (key in cache) {
                return cache[key];
            }
            else {
                // let result = super.getResult(...args);  //调用父类得到计算结果
                // cache[key] = result; //缓存结果到缓存中
                // return result;
                var res = Reflect.apply(target, ctx, args);
                cache[key] = res; //缓存结果到缓存中
                return res;
            }
        }
    });
})();
console.log(_CacheMult(1, 2, 3));
console.log(_CacheMult(1, 2, 3));
console.log(_CacheMult(3, 1, 2));
