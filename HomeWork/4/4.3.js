window.onload = function () {
    "use strict"
    //alert('Begin');
    var
        topButton = document.getElementById('top'),
        rightButton = document.getElementById('right'),
        bottomButton = document.getElementById('bottom'),
        leftButton = document.getElementById('left')

        ;

    setInterval(function () {
        moveX(topButton, getRandomArbitary(0, 500));
        moveY(topButton, getRandomArbitary(0, 500));
    }, 700)

    setInterval(function () {
        moveX(rightButton, getRandomArbitary(0, 500));
        moveY(rightButton, getRandomArbitary(0, 500));
    }, 600)

    setInterval(function () {
        moveX(bottomButton, getRandomArbitary(0, 500));
        moveY(bottomButton, getRandomArbitary(0, 500));
    }, 750)

    setInterval(function () {
        moveX(leftButton, getRandomArbitary(0, 500));
        moveY(leftButton, getRandomArbitary(0, 500));

        console.log(leftButton);
    }, 800)

    //leftButton.style.left = 'calc(20%*2)';


    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;

    }


    function moveX(e, valueX) {
        e.style.left = 'calc( 25% + ' + valueX + 'px )';
    }

    function moveY(e, valueY) {
        e.style.top = 'calc( 25% + ' + valueY + 'px )';
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