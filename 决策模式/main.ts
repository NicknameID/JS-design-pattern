 /* 调用方法类接口 */
 interface CalculateInterface{
    setBase(base:number);
    setLeve(leve:Object);
    getResult();
 }
 
 /* 定义计算的调用方法类 */
 class Calculate implements CalculateInterface{
    private base: number;
    private way: any;
    setBase(base: number) {
        this.base = base;
    }
    setLeve(leve:Object) {
        this.way = leve;
    }
    getResult(){
        return this.way.calculate(this.base);
    }
}

/* 定义各种计算方式 */
class L1{
    calculate(base:number){
        return base*2;
    }
}
class L2{
    calculate(base:number){
        return base*3;
    }
}
class L3 {
    calculate(base: number) {
        return base * 4;
    }
}

let calculater = new Calculate();

calculater.setBase(1000);
calculater.setLeve( new L1() );
console.log(calculater.getResult());
calculater.setBase(2000);
console.log(calculater.getResult());
