/* 生成一张图片 */
var myImg = /** @class */ (function () {
    function myImg(where) {
        this.imgNode = document.createElement("img");
        this.appendTo(where);
    }
    ;
    myImg.prototype.appendTo = function (where) {
        where.appendChild(this.imgNode);
    };
    myImg.prototype.setSrc = function (src) {
        this.imgNode.src = src;
    };
    return myImg;
}());
/*
等待网络图片加载完成之前先设置一张loading菊花图，
加载完成后将图片换成该显示的图片
*/
var ProxImg = /** @class */ (function () {
    function ProxImg(where) {
        this.img = new Image;
        this.where = where;
    }
    ProxImg.prototype.setSrc = function (src) {
        var newImg = new myImg(this.where);
        newImg.setSrc('loading.gif');
        this.img.src = src;
        this.img.onload = function () {
            newImg.setSrc(src);
        };
    };
    return ProxImg;
}());
/*
    图片的显示列表
*/
var ImgList = /** @class */ (function () {
    function ImgList(list, place) {
        list.map(function (item) {
            var img_1 = new ProxImg(place);
            img_1.setSrc(item);
        });
    }
    return ImgList;
}());
var place = document.getElementsByTagName('div')[0];
var list = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1123931301,3549061685&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3687059170,1699182582&fm=27&gp=0.jpg"
];
new ImgList(list, place);
// let place = document.getElementsByTagName('div')[0];
// let img_1 = new ProxImg(place);
// img_1.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg");
/*
    要遵守的原则是：单一职能原则
*/
