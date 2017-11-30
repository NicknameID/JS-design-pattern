function D(target,name,des){
    let oldDes = des.value;
    des.value = function(){
        console.log("调用: "+name+"方法");
        return oldDes.apply(null,arguments);
    }
}

class Person {
    name: string = "Lucy"
    constructor() { }
    @D
    say() {
        console.log("my name is " + this.name);
    }
}

let p = new Person();
p.say();



