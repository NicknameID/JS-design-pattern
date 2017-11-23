/* 策略模式的js版本 */

const MoneyLeve = {
    'A':function(base){
        return base*2;
    },
    'B':function(base){
        return base*3;
    },
    'S':function(base){
        return base*4;
    },
}

function Caculate(leve,base){
    return MoneyLeve[leve](base);
};

/* Test */
console.log( Caculate('S',10000) ); //40000
