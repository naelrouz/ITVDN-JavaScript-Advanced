
window.addEventListener("load", init, false);

function init() {
  
    var button = document.getElementById('button');
    button.addEventListener('mouseover', runButton, false);
    button.addEventListener('click', function () {
        alert('Поймал');
    }, false);
}

function runButton(e) {
    console.log(e);

    moveX(button, getRandomCoordinates(200, 500));
    moveY(button, getRandomCoordinates(200, 500));

}



function getRandomCoordinates(min, max) {
    return Math.random() * (max - min) + min;
}

function moveX(e, valueX) {
    e.style.left = 'calc( 25% + ' + valueX + 'px )';
}

function moveY(e, valueY) {
    e.style.top = 'calc( 25% + ' + valueY + 'px )';
}