var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
封装一个类嗲用前一个类，等待网络图片加载完成之前先设置一张loading菊花图，
加载完成后将图片换成该显示的图片
*/
var PreloadImg = /** @class */ (function (_super) {
    __extends(PreloadImg, _super);
    function PreloadImg(where) {
        var _this = _super.call(this, where) || this;
        _this.img = new Image;
        return _this;
    }
    PreloadImg.prototype.setSrc = function (src) {
        var _this = this;
        _super.prototype.setSrc.call(this, 'loading.gif');
        this.img.src = src;
        this.img.onload = function () {
            _super.prototype.setSrc.call(_this, src);
        };
    };
    return PreloadImg;
}(myImg));
/*循环调用前一个类，插入图片的显示列表*/
var LoadImgList = /** @class */ (function (_super) {
    __extends(LoadImgList, _super);
    function LoadImgList(list, place) {
        var _this = _super.call(this, place) || this;
        list.map(function (item) {
            _super.prototype.setSrc.call(_this, item);
        });
        return _this;
    }
    return LoadImgList;
}(PreloadImg));
/*  Test  */
var place = document.getElementsByTagName('div')[0];
var list = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1123931301,3549061685&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3687059170,1699182582&fm=27&gp=0.jpg"
];
new LoadImgList(list, place); //插入显示图片列表
// let place = document.getElementsByTagName('div')[0];
// let img_1 = new ProxImg(place);
// img_1.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512024296&di=dcd04a90b12cd3f135beb4cae88d85dc&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.louisch.com%2Fwp-content%2Fuploads%2F2012%2F01%2FIMG_9005.jpg");
/*
    要遵守的原则是：单一职能原则，将复杂的逻辑封装带不同的类中，每一个类只负责一个功能
*/
