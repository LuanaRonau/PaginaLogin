const password = document.getElementById('input-senha');
const icon = document.getElementById('icone');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btn = document.getElementById('btn');


function verOcultar(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
}


// VALIDACAO DE INPUTS

function setError(index) {
    campos[index].style.border = '1px solid #ED3A5A';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validarEmail(){
    if(emailRegex.test(campos[0].value)){
        removeError(0);
        return true
    } else {
        setError(0);
        return false
    }
}

function validarSenha(){
    if(campos[1].value===''){
        setError(1);
        return false
    } else {
        removeError(1);
        return true
    }
}

function submit(){
    if (validarEmail() && validarSenha()){
        alert(`Sucesso!\nE-mail: ${campos[0].value}\nSenha: ${campos[1].value}`)
    };
}
