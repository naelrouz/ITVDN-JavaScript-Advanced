window.onload = function () { "use strict"


    var
        loginform = document.getElementById('loginform'),
        login = document.getElementById('login'),
        password = document.getElementById('password'),
        submit = document.getElementById('submit'),
        errors = []
        ;

    if(submit.addEventListener){
        submit.addEventListener('click', function(e){
            if(login.value != 'admin'){
                e.preventDefault();

                login.style.border = '2px solid red';
                errors.login = false;
            }

            if(password.value != '123'){
                password.style.border = '2px solid red';
                e.preventDefault();
            }

        });
    }


    //function validate() {
    //    if(loginform.target.value.length == 0){
    //        loginform.preventDefault();
    //        alert('Введите запрашиваемые данные');
    //    }
    //
    //}

}