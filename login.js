function entrar () {
    let usuario = document.querySelector('#usuario')
    let usuarioLabel = document.querySelector('#usuariolabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhalabel')

    let erro = document.querySelector ('erro')

    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item)=>{
        if(usuario.value == item.userCadastrado && senha.value == item.senhaCadastrado){
            userValid = {
                nome: item.nomeCadastrado,
                user: item.userCadastrado,
                email: item.emailCadastrado,
                senha: item.senhaCadastrado,
            }
        }

    })
    console.log(userValid);

    if(usuario.value == userValid.user && senha.value == userValid.senha) {
        alert ('Olá, ' + userValid.nome + '.')
        window.location.href = 'inicio.html';
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        alert ('Revise seus dados.');
        usuarioLabel.setAttribute('style', 'color:red');
        senhaLabel.setAttribute('style', 'color:red');
        usuario.setAttribute('style', 'border-color:red');
        senha.setAttribute('style', 'border-color:red');
        error.setAttribute ('style', 'display: block');
        error.innerHTML = 'Usuário ou senha incorretos';
        usuario.focus();
    }
    
}
