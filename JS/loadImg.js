
function loadImg(imgUrl,fn){
    var tempImg,
        loaded= 0,
        ImgLength = 0,
        imgObj = {};
    for(var k in imgUrl){
        ImgLength++;
        tempImg = new Image();
        tempImg.onload = function () {
            loaded++;
            if(loaded>=ImgLength){
                fn(imgObj);
            }
        };
        tempImg.src = imgUrl[k];
        imgObj[k] = tempImg;
    }
}