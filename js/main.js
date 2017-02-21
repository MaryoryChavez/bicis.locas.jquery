// version 1.5
//var firstname = document.getElementById("name");
//var firstname = $("#name");
//var lastname = document.getElementById("lastname");
//var email = document.getElementById("input-email");
//var pass = document.getElementById("input-password");

function showMessage(_input, _message) {
    return $(_input).parent().append($('<span>'+_message+'</span>'));
}

function validateEmpty(_allinputs) {
    //console.log(_allinputs);
    if (_allinputs.val() == "" && $(_allinputs).nextSibling == null) {
        return showMessage(_allinputs, "Este campo es obligatorio");
    }
    if (_allinputs.val() != "" && _allinputs.nextSibling != null) {
        _allinputs.parentNode.removeChild(_allinputs.nextSibling);
    }
}

function validateNames(_names) {
    var num = (/[0-9._*!@#$%^&();/|<>"',+-]/).test(_names.val()) //no caracteres especiales;
    var up = (/[A-Z]{1}/).test(_names.val()); //primera mayuscula
    if (_names.val() != "") {
        if (num == true || up == false) {
            return showMessage(_names, "Nombre invalido");
        }
    }
}

function validateMail(_mail) {
    var expression = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i; //estructura e-mail.
    if (_mail.val() != "") {
        if (!expression.test(_mail.val())) {
            return showMessage(_mail, "Correo invalido");
        }
    }
}

function validatePass(_pass) {
    if (_pass.val() != "") {
        if ((_pass.val()).length < 6 || _pass.val() == 123456 || _pass.val() == 098754) {
            return showMessage(_pass, "Contraseña invalida");
        }
    }
}

function validateForm(evt) {
    //$("#firstname").validateEmpty(); $('#lastname').validateEmpty(); $('#email').validateEmpty(); $('#pass').validateEmpty();
    console.log($('#name'));
    validateEmpty($('#name')); validateEmpty($('#lastname')); validateEmpty($('#input-email')); validateEmpty($('#input-password'));
    validateNames($('#name')); validateNames($('#lastname'));
    validateMail($('#input-email'));
    validatePass($('#input-password'));
    //console.log(firstname);
    //console.log($("#name")[0]);
    evt.preventDefault();
}