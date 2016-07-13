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
                e.preventDefault();

                password.style.border = '2px solid red';
                errors.password = false;

            }

            messagesBord(errors);

        });
    }

    function messagesBord(){
       var messages = '';

        if(errors.login == false){
            messages += '<p>Логин не верен</p>';
        }

        if(errors.password == false){
            messages += '<p>Пароль не верен</p>';
        }

        if(messages != ''){
           var messagesDiv =  document.getElementById('messages');

            messagesDiv.innerHTML = messages;
            messagesDiv.style.display = 'block';
            messagesDiv.style.opacity = '1';
        }
        document.getElementById('messages').innerHTML = messages;

        console.log('login: ' + errors.login);
        console.log('login: ' + errors.password);

        console.log(' ~ ' + messages);

        //messages.forEach(function(){
        //    if(messages[i]){
        //
        //    }
        //})
    }


    //function validate() {
    //    if(loginform.target.value.length == 0){
    //        loginform.preventDefault();
    //        alert('Введите запрашиваемые данные');
    //    }
    //
    //}

}