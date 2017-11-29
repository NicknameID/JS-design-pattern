class Button {
    btn: HTMLButtonElement;
    TypeCache:Function[];
    currentType;
    curIndex:number = 0;
    constructor(TypeCache: Function[]) {
        this.TypeCache = TypeCache;
        this.currentType = new (this.nextType())(this);
        this.init();
    }
    private init() {
        this.btn = document.createElement('button');
        this.btn.innerHTML = "开关";
        this.btn.onclick = () => {
            this.btnPressed();
        }
    }
    private nextType(){
        let r;
        if( this.isDone() ){
            this.curIndex = 0;
            r = this.TypeCache[this.curIndex];
        }else{
            r = this.TypeCache[this.curIndex];
            this.curIndex = this.curIndex + 1;
        }
        return r;
    }
    private isDone():boolean{
        if( this.curIndex > this.TypeCache.length-1){
            return true;  //没有循环完成
        }else{
            return false;   //循环完成
        }
    }
    appendTo(place: HTMLElement) {
        place.appendChild(this.btn);
    }
    setType(newType) {
        this.currentType = new newType(this);
    }
    btnPressed() {
        this.currentType.btnWasPressed();
        this.currentType = new (this.nextType())(this);
    }
}

interface ButtonState_interface{
    btnWasPressed:Function;
}
class OffState implements ButtonState_interface{
    constructor(public btn){
    }
    btnWasPressed(){
        alert("关灯了");
        // this.btn.setType(StrongState);
    }
}
class StrongState implements ButtonState_interface{
    constructor(public btn){
    }
    btnWasPressed(){
        alert("强光模式");
        // this.btn.setType(WeakState);
    }
}
class WeakState implements ButtonState_interface{
    constructor( public btn ){}
    btnWasPressed(){
        alert("弱光模式");
        // this.btn.setType(OffState);
    }
}


let place = document.querySelector('div');
let LightBtn = new Button([OffState]);
LightBtn.appendTo( place );
