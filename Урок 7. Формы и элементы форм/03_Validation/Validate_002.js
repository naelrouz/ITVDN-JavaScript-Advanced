// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);

// установка обработчиков для форм и элементов форм.
function init() {
    for (var i = 0; i < document.forms.length; i++) {
        var form = document.forms[i];

        var formValidation = false;

        for (var j = 0; j < form.elements.length; j++) {
            var e = form.elements[j];

            // пропускаем все что не поле ввода.
            if (e.type != "text") {
                continue;
            }

            // проверка имеются ли атрибуты требующие проверки.
            var pattern = e.getAttribute("data-val");

            if (pattern) {
                e.onchange = validateInput; // обработчик на изменение.
                formValidation = true; // форма требует проверку.
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm; // установка обработчика для формы на submit
        }
    }
}

// обработчик на изменение содержимого полей ввода.
function validateInput() {
    var pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    var res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    }
    else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

// обработчик на submit формы.
function validateForm() {

    var invalid = false;

    for (var i = 0; i < this.elements.length; ++i) {
        var e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "error") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}