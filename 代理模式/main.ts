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
等待网络图片加载完成之前先设置一张loading菊花图，
加载完成后将图片换成该显示的图片 
*/
class ProxImg{
    img = new Image;
    where: HTMLElement
    constructor( where: HTMLElement){
        this.where = where;
    }
    setSrc(src:string){
        let newImg = new myImg(this.where);
        newImg.setSrc('loading.gif');
        this.img.src = src;
        this.img.onload = function(){
            newImg.setSrc(src);
        }
    }
}

/* 
    图片的显示列表
*/
class ImgList{
    constructor(list:string[],place:HTMLElement){
        list.map((item)=>{
            let img_1 = new ProxImg(place);
            img_1.setSrc(item);            
        })
    }
}


let place = document.getElementsByTagName('div')[0];
let list = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1123931301,3549061685&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3687059170,1699182582&fm=27&gp=0.jpg"
];
new ImgList(list,place);


// let place = document.getElementsByTagName('div')[0];
// let img_1 = new ProxImg(place);
// img_1.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg");

/* 
    要遵守的原则是：单一职能原则
*/
