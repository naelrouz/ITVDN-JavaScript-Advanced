window.onload = function () {
    //alert('Begin');
    var
        topButton = document.getElementById('top'),
        rightButton = document.getElementById('right'),
        bottomButton = document.getElementById('bottom'),
        leftButton = document.getElementById('left'),
        block = document.getElementById('block1'),
        block2 = document.getElementById('block2'),
        cssValue,
        eStyle
        ;


    //Key Event

    document.addEventListener("keydown", function (event) {

        console.log(event);

        switch (event.keyCode) {
            case 37:
                moveX(block, 'left');
                break;
            case 38:
                moveY(block, 'top');
                break;
            case 39:
                moveX(block, 'right');
                break;
            case 40:
                moveY(block, 'bottom');
                break;
            default:
        }


    });


    rightButton.onclick = function () {
        moveX(block, 'right');
    }

    leftButton.onclick = function () {
        moveX(block, 'left');
    }

    topButton.onclick = function () {
        moveY(block, 'top');
    }

    bottomButton.onclick = function () {
        moveY(block, 'bottom');
    }

    function moveX(e, direction) {
        var left = parseInt(getStyle(e, 'left'));
        left = parseInt((direction == 'left') ? left - 100 : left + 100);
        e.style.left = left > 0 ? left + 'px' : 0 + 'px';
    }

    function moveY(e, direction) {
        var top = parseInt(getStyle(e, 'top'));
        top = (direction == 'top') ? top - 100 : top + 100;
        e.style.top = top > 0 ? top + 'px' : 0 + 'px';
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