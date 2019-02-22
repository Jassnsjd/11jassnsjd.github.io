(function(w){

    function Bird(ctx,img,widthF,heightF,x,y){
        this.ctx = ctx;
        this.img = img;
        this.widthF = widthF;
        this.heightF =heightF;
        this.width = this.img.width/this.widthF;
        this.height = this.img.height/this.heightF;
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.currentF =0;
        this.speedP = 0.2;
        this._bind();
    }
    Bird.prototype = {
        constructor:Bird,
        draw: function () {
            var basedeg = Math.PI / 180 * 10;
            var maxdeg = Math.PI / 180 * 45;
            var rotatedeg = basedeg * this.speed;
            rotatedeg = rotatedeg >= maxdeg? maxdeg : rotatedeg;
            this.ctx.save();
            this.ctx.translate(this.x+this.width/2,this.y+this.height/2);
            this.ctx.rotate(rotatedeg);
            this.ctx.drawImage(this.img,this.width*this.currentF,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
            this.ctx.restore();
        },
        update: function () {
            this.currentF = ++this.currentF>= this.widthF?0:this.currentF;
            this.y +=this.speed;
            this.speed +=this.speedP;
        },
        _bind: function () {
            var that = this;
            this.ctx.canvas.addEventListener("click", function () {
                that.speed =-4;
            });
        }
    }

    var bird = null;

    w.getbird = function (ctx,img,widthF,heightF,x,y) {

        if(!bird){
            bird = new Bird(ctx,img,widthF,heightF,x,y);
        }
        return bird;
    }
})(window)
