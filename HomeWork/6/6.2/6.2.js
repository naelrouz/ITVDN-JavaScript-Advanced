window.addEventListener("load", init, false);

function init() {

    var textareas = document.getElementsByClassName('textareas');
    //saveButton.addEventListener("click", saveHandler, false);
    //var p = document.getElementById('text1');



    //textareas.style.border = '1px solid red';
    console.log(textareas);


    for (var i = 0; i < textareas.length; i++) {
        textareas[i].onfocus = function(){
            this.style.backgroundColor = "red";
        }
    }


}



document.addEventListener("keypress", function (e) {

    console.log(e);

    if( e.charCode == 115 && e.ctrlKey) {
        alert('Ctrl + S - сохранено');
    }

    if( e.charCode == 97 && e.ctrlKey) {
        alert('Ctrl + A - выделить все');
    }

    if( e.charCode == 83 && e.ctrlKey && e.shiftKey) {
        alert('Ctrl + Shift + S - сохранить как');
    }

});













//function saveHandler(e) {
//    alert('Сохранено');
//    var isSave = true;
//    console.log('isSave: ' + isSave);
//
//}


