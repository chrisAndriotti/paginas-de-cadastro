
let objsProduto = []

function incluir(){

    let produto = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        qtd: document.getElementById('qtd').value
    }

    let getObj = JSON.parse(localStorage.getItem('produtos'))
    
    if(objsProduto.length == 0 && getObj != null){
        produto.id = getObj.length+1
        objsProduto = getObj
    }
    else 
        produto.id = objsProduto.length+1
    
    objsProduto.push(produto)

    let tabela = document.querySelector('.tabela')

    let sCedulaId = document.createElement('td')
    let sCedulaNome = document.createElement('td')
    let sCedulaPreco = document.createElement('td')
    let sCedulaQtd = document.createElement('td')

    let sLinha2 = document.createElement('tr')

    sLinha2.appendChild(sCedulaId)
    sLinha2.appendChild(sCedulaNome)
    sLinha2.appendChild(sCedulaPreco)
    sLinha2.appendChild(sCedulaQtd)

    sCedulaId.append(produto.id)
    sCedulaNome.append(produto.nome)
    sCedulaPreco.append(produto.preco)
    sCedulaQtd.append(produto.qtd)

    tabela.appendChild(sLinha2)

}

function salvar() {
    localStorage.setItem('produtos',JSON.stringify(objsProduto))
    alert('Itens salvos')
}

