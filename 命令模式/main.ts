interface Command_interface{
    reciver;
    execute();
}

function setCommand(btn:HTMLButtonElement,command){
    btn.onclick = function(){
        command.execute();
    }
}

let MenuBar = {
    refresh:function(){
        console.log('刷新菜单栏');
    }
}


class RefreshCommand implements Command_interface{
    constructor( public reciver ) {}
    execute(){
        this.reciver.refresh();
    }
}

let btn_refresh:HTMLButtonElement;

setCommand(btn_refresh, new RefreshCommand(MenuBar));


