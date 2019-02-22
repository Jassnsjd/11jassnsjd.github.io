(function (w) {
    function backgrond(ctx,imgObj){
        this.ctx = ctx;
        this.imgObj = imgObj;
        this.listenners = [];
        this.fns = [];
        this._initFns();
    }

    backgrond.prototype = {
        constrcutor:backgrond,
        _initFns: function () {
            this.fns.push(getsky(this.ctx,this.imgObj.sky,3));
            this.fns.push(getsky(this.ctx,this.imgObj.sky,3));
            for(var i=0;i<6;i++){
                this.fns.push(getGD(this.ctx,this.imgObj.pipeDown,this.imgObj.pipeUp,150,this.imgObj.land.height,3));
            }

            for(var i=0;i<4;i++){
                this.fns.push(getland(this.ctx,this.imgObj.land,3));
            }
            this.fns.push( getbird( this.ctx, this.imgObj.bird, 3, 1, 10, 10 ) );
        },

        addListenner: function (lis) {
            this.listenners.push(lis);
        },

        Over: function () {
            this.listenners.forEach(function (lis) {
                lis();
            });
        },

        draw: function () {
            var bird = getbird();
            var birdCoreX = bird.x + bird.width / 2;
            var birdCoreY = bird.y + bird.height / 2;
            if ( this.ctx.isPointInPath( birdCoreX, birdCoreY )
                || birdCoreY < 0
                || birdCoreY > (this.ctx.canvas.height - this.imgObj.land.height) ){
                this.Over();
            }else{
                this.ctx.beginPath();
                this.fns.forEach( function( lis ) {
                    lis.draw();
                    lis.update();
                } );
            }
        }

    };

    w.gameStart = function (ctx,imgObj) {
        return new backgrond(ctx,imgObj);
    }
})(window)