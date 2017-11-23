/* 生成一张图片 */
class myImg{
    imgNode = document.createElement("img");
    constructor(where:HTMLElement){
        this.appendTo(where);
    };
    private appendTo(where:any){
        where.appendChild(this.imgNode);
    }
    setSrc( src:string ){
        this.imgNode.src = src;
    }
}
/* 
封装一个类嗲用前一个类，等待网络图片加载完成之前先设置一张loading菊花图，
加载完成后将图片换成该显示的图片 
*/
class PreloadImg extends myImg{
    img = new Image;
    constructor( where: HTMLElement){
        super(where);
    }
    setSrc(src:string){
        super.setSrc('loading.gif')
        this.img.src = src;
        this.img.onload = ()=>{
            super.setSrc(src);
        }
    }
}

/*循环调用前一个类，插入图片的显示列表*/
class LoadImgList extends PreloadImg{
    constructor(list:string[],place:HTMLElement){
        super(place);
        list.map((item)=>{
            super.setSrc(item);            
        })
    }
}

/*  Test  */
let place = document.getElementsByTagName('div')[0];
let list = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1123931301,3549061685&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3687059170,1699182582&fm=27&gp=0.jpg"
];
new LoadImgList(list,place); //插入显示图片列表


// let place = document.getElementsByTagName('div')[0];
// let img_1 = new ProxImg(place);
// img_1.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg");

/* 
    要遵守的原则是：单一职能原则，将复杂的逻辑封装带不同的类中，每一个类只负责一个功能
*/
