window.onload = function () {
    //alert('Begin');
    var
    // topButton = document.getElementById('top'),
        rightButton = document.getElementById('right'),
    //    bottomButton = document.getElementById('bottom'),
        leftButton = document.getElementById('left'),
        block = document.getElementById('block1'),
        cssValue = '',
        eStyle = ''
        ;



    //topButton.onclick = function() {
    //    move(block,'top');
    //};
    rightButton.onclick = function() {
        moveX(block,'right')
    }
    function moveX(e,direction){
        //var left = parseInt(getStyle(e,direction));
        var left = getStyle(block,'left');

        //e.style.left = (direction == 'left') ? left - 100 + 'px' : left + 100 + 'px';
        e.style.left = left + 100 + 'px';
        console.log(left);
    }

    function moveY(e,direction){


    }





// FUNS
    function getStyle(element, styleName) {
        if (element.currentStyle) { // получение доступа к Computed стилям для IE
            return element.currentStyle[styleName];
        }
        else if (window.getComputedStyle) {
            return window.getComputedStyle(element, null)[styleName];
        }
    }
}