(function (w) {
    function GD(ctx,imgDown,imgUp,space,landHeight,speed){
        this.ctx = ctx;
        this.landHeight = landHeight;
        this.imgDown = imgDown;
        this.imgUp = imgUp;
        this.space = space;
        this.speed = speed;
        this.width = this.imgDown.width;
        this.height = this.imgDown.height;
        this.x =600+this.width*3*(GD.len-1);
        this.minHeight = 100;
        this.y = 0;
        GD.len++;
        this._init();
    }
    GD.len =0;
    GD.prototype = {
        constructor:GD,
        _init: function () {
            var maxHeight = this.ctx.canvas.height - this.landHeight - this.space-50;
            var randomHeight = Math.random()*maxHeight + 50;
            randomHeight = randomHeight<this.minHeight?this.minHeight:randomHeight;
            this.downY = randomHeight - this.height;
            this.upY = randomHeight +this.space;
        },
        draw: function () {
            this.ctx.drawImage(this.imgDown,this.x,this.downY);
            this.ctx.drawImage(this.imgUp,this.x,this.upY);
            this._drawPath();
        },
        _drawPath: function () {
            this.ctx.rect(this.x,this.downY,this.width,this.height);
            this.ctx.rect(this.x,this.upY,this.width,this.height);
            this.ctx.stroke();
        },
        update: function () {
            this.x -=this.speed;
            if(this.x<=-this.width){
                this._init();
                this.x +=this.width*3*GD.len;
            }
        }
    }

    w.getGD = function (ctx,imgDown,imgUp,space,landHeigh,speed) {
        return new GD(ctx,imgDown,imgUp,space,landHeigh,speed);
    }

})(window)
