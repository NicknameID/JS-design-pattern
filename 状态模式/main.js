var Button = /** @class */ (function () {
    function Button(TypeCache) {
        this.curIndex = 0;
        this.TypeCache = TypeCache;
        this.currentType = new (this.nextType())(this);
        this.init();
    }
    Button.prototype.init = function () {
        var _this = this;
        this.btn = document.createElement('button');
        this.btn.innerHTML = "开关";
        this.btn.onclick = function () {
            _this.btnPressed();
        };
    };
    Button.prototype.nextType = function () {
        var r;
        if (this.isDone()) {
            this.curIndex = 0;
            r = this.TypeCache[this.curIndex];
        }
        else {
            r = this.TypeCache[this.curIndex];
            this.curIndex = this.curIndex + 1;
        }
        return r;
    };
    Button.prototype.isDone = function () {
        if (this.curIndex > this.TypeCache.length - 1) {
            return true; //没有循环完成
        }
        else {
            return false; //循环完成
        }
    };
    Button.prototype.appendTo = function (place) {
        place.appendChild(this.btn);
    };
    Button.prototype.setType = function (newType) {
        this.currentType = new newType(this);
    };
    Button.prototype.btnPressed = function () {
        this.currentType.btnWasPressed();
        this.currentType = new (this.nextType())(this);
    };
    return Button;
}());
var OffState = /** @class */ (function () {
    function OffState(btn) {
        this.btn = btn;
    }
    OffState.prototype.btnWasPressed = function () {
        alert("关灯了");
        // this.btn.setType(StrongState);
    };
    return OffState;
}());
var StrongState = /** @class */ (function () {
    function StrongState(btn) {
        this.btn = btn;
    }
    StrongState.prototype.btnWasPressed = function () {
        alert("强光模式");
        // this.btn.setType(WeakState);
    };
    return StrongState;
}());
var WeakState = /** @class */ (function () {
    function WeakState(btn) {
        this.btn = btn;
    }
    WeakState.prototype.btnWasPressed = function () {
        alert("弱光模式");
        // this.btn.setType(OffState);
    };
    return WeakState;
}());
var place = document.querySelector('div');
var LightBtn = new Button([OffState]);
LightBtn.appendTo(place);
