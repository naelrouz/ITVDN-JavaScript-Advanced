window.onload = function () {
    //alert('Begin');
    var rightButton = document.getElementById('right'),
        block = document.getElementById('block1')
        ;
    rightButton.onclick = function() {

        var left = block.style.left;
        //alert( left );
        console.log(document.body.style.color);
        //block.style.left = left + '100' + 'px';
    };


}