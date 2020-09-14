let arrayObj = []

function cadastrar(){
    let usuario = document.getElementById('insertUsuario').value
    let senha = document.getElementById('insertSenha').value

    let user = {
        usuario: usuario,
        senha: senha
    }
    
    arrayObj.push(user)
    
    localStorage.setItem('Logins', JSON.stringify(arrayObj))
    alert('Cadastrado com sucesso :)'+'\nUsuário:'+user.usuario+'\nSenha: '+user.senha)
    console.log(arrayObj)

    window.location.href = "index.html";
}

function logar() {
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value

    let arrayObjArmazenado = JSON.parse(localStorage.getItem('Logins'))

    let verificado = false
    for(let i=0; i<arrayObjArmazenado.length; i++){
        if(usuario == arrayObjArmazenado[i].usuario && senha == arrayObjArmazenado[i].senha){
            verificado = true
            i=arrayObjArmazenado.length
        }
    }
    if(verificado){
        alert('Usuário encontrado!')
        window.location.href = "home.html";
    }
    else
        alert('Usuário NÃO encontrado!')
}

