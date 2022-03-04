//mostra senha login e cadastro

let olhoSenha = document.querySelector ('.fa-eye')

olhoSenha.addEventListener ('click', ()=> {
    let inputSenha = document.querySelector ('#senha')

    if (inputSenha.getAttribute('type')=='password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


//mostra senha da confirmação de senha no cadastro
let olhoConfirmaSenha = document.querySelector ('#confirmaSenha')

olhoConfirmaSenha.addEventListener ('click', ()=> {
    let inputSenha = document.querySelector ('#confirmarsenha')

    if (inputSenha.getAttribute('type')=='password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


//variaveis das labels
let nome = document.querySelector ('#nome')
let labelNome = document.querySelector ('#labelnome')
let validNome = false;

let usuario = document.querySelector ('#usuario')
let labelUsuario = document.querySelector ('#labelusuario')
let validUsuario = false;

let email = document.querySelector ('#email')
let labelEmail = document.querySelector ('#labelemail')
let validEmail = false;

let senha = document.querySelector ('#senha')
let labelSenha = document.querySelector ('#labelsenha')
let validSenha = false;

let confirmaSenha = document.querySelector ('#confirmarsenha')
let labelConfirmaSenha = document.querySelector ('#labelconfirmarsenha')
let validConfirmaSenha = false;

let erro = document.querySelector ('#erro');
let sucesso = document.querySelector ('#sucesso');


nome.addEventListener('keyup', ()=> {
    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Mínimo de 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', ()=> {
    if (usuario.value.length <= 6) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário *Mínimo de 6 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
})

email.addEventListener('keyup', ()=> {
    if (email.value.length <=10) {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Mínimo de 10 caracteres';
        email.setAttribute('style', 'border-color: red');
        validEmail = false;
    } else {
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: green');
        validEmail = true;
    }
})

senha.addEventListener('keyup', ()=> {
    if (senha.value.length <= 6) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Mínimo de 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

confirmaSenha.addEventListener('keyup', ()=> {
    if (senha.value != confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color: red');
        labelConfirmaSenha.innerHTML = '*As senhas não conferem';
        confirmaSenha.setAttribute('style', 'border-color: red');
        validConfirmaSenha = false;
    } else {
        labelConfirmaSenha.setAttribute('style', 'color: green');
        labelConfirmaSenha.innerHTML = 'Confrime sua senha';
        confirmaSenha.setAttribute('style', 'border-color: green');
        validConfirmaSenha = true;
    }
})


function cadastrar () {
    if(validNome && validUsuario && validEmail && validSenha && validConfirmaSenha) {
        
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCadastrado: nome.value,
                userCadastrado: usuario.value,
                emailCadastrado: email.value,
                senhaCadastrado: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        sucesso.setAttribute ('style', 'display: block');
        sucesso.innerHTML ='Cadastro realizado com sucesso';
        erro.setAttribute ('style', 'display: none');
//        setTimeout(()=>{
//            window.location.href = 'index.html';
//        }, 3000)
    } else {
        erro.setAttribute ('style', 'display: block');
        erro.innerHTML ='Revise seus dados.'
        sucesso.setAttribute ('style', 'display: none');
    }
}