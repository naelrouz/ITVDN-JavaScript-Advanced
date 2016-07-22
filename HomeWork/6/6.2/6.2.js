window.addEventListener("load", init, false);

function init() {

    var textareas = document.getElementsByClassName('textareas');
    //saveButton.addEventListener("click", saveHandler, false);
    //var p = document.getElementById('text1');



    //textareas.style.border = '1px solid red';
    console.log(textareas);


    for (var i = 0; i < textareas.length; i++) {
        textareas[i].onclick = function(){
            this.style.backgroundColor = "red";
        }
    }


}



document.addEventListener("keydown", function (e) {

    console.log(e);

    if( e.keyCode == 82 && e.ctrlKey) {
        //console.log('dasfas');
        //alert('crtl + r');
    }

});













//function saveHandler(e) {
//    alert('Сохранено');
//    var isSave = true;
//    console.log('isSave: ' + isSave);
//
//}


