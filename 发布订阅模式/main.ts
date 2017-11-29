/* 全局事件对象 */
/* 缺点是管理注册者与触发者的关系不太直观 */
class EventPool{
    clientList:object = {};
    constructor(){}
    register(eventName:string,callback:Function,scope=this.clientList){
        let kinds:string[] = eventName.split(" ");
        kinds.map((itemEvent)=>{
            if( itemEvent!==""){
                if (!(itemEvent in scope)) {
                    scope[itemEvent] = [];
                }
                scope[itemEvent].push(callback);
            }
        });
    }
    dispatch(eventName: string, callbackParms: any[]=[], scope=this.clientList){
        let events: string[] = eventName.split(" ").filter((item) => item !== "" ? true : false);
        let callbacks:Function[]=[];
        events.map((item)=>{
            if(!(item in scope)){
                throw new Error(`${item}:该事件名在已注册的事件列表中不存在`);
            }else{
                callbacks = callbacks.concat(scope[ item ]);
            }
        });
        callbacks.map((itemFunc)=>{
            itemFunc.call(this, ...callbackParms);
        });

    }
    removeEvent(eventName:string, callback:Function, scope=this.clientList){
        let cbs:Function[] = scope[eventName];
        if(!(eventName in scope)){
            throw new Error(`${eventName}-->这个事件名在事件列表中不存在`);
        }else{
            if(!cbs || cbs.length === 0) return false; //没有订阅过，或者没有传入过回调函数
            else{
                cbs.forEach((itemFunc,index)=>{
                    if( itemFunc === callback ){
                        scope[ eventName ].splice(index,1);
                    }
                });
            }
        }
    }
    /* 目前只实现了一层的命名空间 */
    namespace(namespace:string){
        let list = this.clientList;
        if( !(namespace in list) ){
            list[namespace] = {};
        }
        if ( !(list[namespace] instanceof Array) ){
            return {
                register: (eventName: string, callback: Function, scope = this.clientList[namespace]) => {
                    this.register(eventName, callback, scope);
                },
                dispatch: (eventName: string, callbackParms: any[]=[], scope = this.clientList[namespace])=>{
                    this.dispatch(eventName,callbackParms,scope);
                },
                removeEvent: (eventName: string, callback: Function, scope = this.clientList[namespace])=>{
                    this.removeEvent(eventName,callback,scope);
                }
            }
        }
    }
}


/* Test */
let ep = new EventPool();
let f = (...args) => {
    console.log("知道了");
    console.log(args);
}
ep.register("吃饭",f);

ep.dispatch("吃饭",['参数1',1,[1,2,3]]);

ep.removeEvent("吃饭",f);

console.log(ep.clientList);

ep.dispatch("吃饭", ['参数1', 1, [1, 2, 3]]);


