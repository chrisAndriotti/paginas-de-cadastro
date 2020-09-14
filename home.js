
let objsProduto = new Array()
		function cadastrarObjProduto(){
			
			let produto = {
				id: 0,
				nome: document.getElementById('idObjNomeProduto').value,
				preco: document.getElementById('idObjPreco').value,
				qtd: document.getElementById('idObjQtd').value
			}
			
			
			let objsProduto = JSON.parse(localStorage.getItem('objsProduto'))
			if(objsProduto == null){
				objsProduto = new Array()
			}
			else{
				produto.id = objsProduto.length
			}				
			
	
            objsProduto.push(produto)
        }
var menu_edicao
produtos  = ""
for(i=0;i<produto;i++)
    {
     produtos = produtos+("\n ID = " + i + " ||  Modelo = " +modeloProduto[i])
    }
    id = parseInt(prompt("\nPRODUTOS "+produtos+"\n Qual o ID do produto que deseja procurar?"))
    menu_edicao = parseInt(prompt("\n O que deseja alterar"+
                                "\n1 Nome Produto: " + nome[id]+
                                "\n2 Preço: "+ preco[id]+ 
                                "\n3 Quantidade em estoque: "+qtd[id]
    ))  
            
 
    switch(menu_edicao)
    {
        case 1: nome[id] = prompt("Digite o novo nome do Produto:") 
        break
        case 2: preco[id] = prompt("Digite o novo Preço:")    
        break
        case 3: qtd[id] = prompt("Digite o Numero de produtos:")
        
        default:alert("Opção Invalida")    
    }