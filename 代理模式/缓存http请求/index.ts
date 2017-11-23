class Send{
    protected send(content: string[]){
        content.map((item)=>{
            console.log('发送成功: '+item);
        })
    }
}

class saveToSend extends Send{
    cache:string[] = [];
    timer:any = null;
    constructor(){
        super();
    }
    add(content:string){
        this.cache.push(content);
        if( this.timer ) return false;
        else this.timer = setTimeout(() => {
            this.send();
            clearTimeout( this.timer );
            this.timer = null;
            this._init_();
        }, 2000);
    }
    protected send(){
        super.send(this.cache);
    }
    private _init_(){
        this.cache.length = 0;
    }
}

// class Sync extends saveToSend{
//     constructor(){
//         super();
//     }
//     start(){
//         let timer = setTimeout(() => {
            
//         }, 2000);
//     }
// }