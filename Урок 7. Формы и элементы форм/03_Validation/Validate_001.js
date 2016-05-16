// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
function init() {
    form1.userName.onchange = nameOnChange;
    form1.email.onchange = emailOnChange;
    form1.zip.onchange = zipcodeOnChange;
    form1.onsubmit = onsubmiHandler;
}

// метод проверки значения в элементе по регулярному выражению.
function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid"; // установка CSS класса 
    else elem.className = "valid";
}

// обработчики событий изменения текста в окне.
function nameOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this, pattern);
}

// событие при отправке формы на сервер.
function onsubmiHandler() {

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var e = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (e.type == "text" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    }
}

