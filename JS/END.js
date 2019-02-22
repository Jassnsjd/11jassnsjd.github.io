(function (w) {
    function END(ctx){
        this.ctx = ctx;
    }

    END.prototype.draw = function () {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba( 100, 100, 100, 0.8 )';
        this.ctx.fillRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
        this.ctx.fillStyle = "orange";
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = '900 40px Î¢ÈíÑÅºÚ';
        this.ctx.fillText("END",ctx.canvas.width/2,ctx.canvas.height/2);
        this.ctx.restore();
    }

    w.ENDing = function (ctx) {
        return new END(ctx);
    }
})(window);