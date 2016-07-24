
window.addEventListener("load", init, false);

const init = () => {

funt('dsf');

}

const funt = (a) => {
    console.log(a);
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