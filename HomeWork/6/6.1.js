
window.addEventListener("load", init, false);

function init() {
    var isSave = false;
    var saveButton = document.getElementById('save-button');
    saveButton.addEventListener("click", saveHandler, false);


}

function saveHandler(e) {
    alert('Сохранено');
    var isSave = true;
    console.log('isSave: ' + isSave);

}

window.onbeforeunload = function () {
    if(!isSave){
        return "Данные не были сохранены";
    }

}

