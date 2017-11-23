class Singleton{
    name:string;
    constructor(name:string){
        this.name = name;
        this.init();
    }
    private init() {
        console.log("已创建");
    }
}

class ProxySingleton{
    protected static instance:any = null;
    constructor(public name:string){
        if( !ProxySingleton.instance ){
            ProxySingleton.instance = new Singleton(this.name);
        }
        return ProxySingleton.instance;
    }
}


// test
let a = new ProxySingleton("张三");
let b = new ProxySingleton("李四");
console.log(a===b);


let arr1:number[] = [1,2,3,,3,3,3,,4,4,4,2];
let arr2 = new Set([...arr1]);
console.log(arr2);

