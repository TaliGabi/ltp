class Produto{
  constructor(nome,dataCadastro,descricao,preco){
    nome = this.nome
    dataCadastro = this.dataCadastro
    descricao = this.descricao
    preco = this.preco
}

  mostrar_produtos(){
    try {
      return this.exibir_produtos();  
    } catch (error) {
      console.log(error) 
  }
}

exibir_produtos(){
  if((this.nome != "") && (this.descricao != "") && (this.preco != "") && (this.dataDCadrastro != "")){
    return `<div>
    <h1>${this.nome}</h1>
    <p>${this.dataCadastro}</p>
    <h2>${this.descricao}</h2>
    <h2>${this.preco}</h2></div>`
  }else{
      throw new MeuError("Campo não preenchido.")
  }
 }
}

class ProdutoDestaque extends Produto{
    constructor(){
        super(nome,dataCadastro,descricao,preco,imgDestaque)
    }
    mostrar_produtos_destaque(){
    return `<div>${this.nome}</div>
        <div>${this.dataCadastro}</div>
        <div>${this.descricao}</div>
        <div>${this.preco}</div>
        <div>${this.imgDestaque}</div>`
  }
}   

//const produto = new ProdutoDestaque ("Album Face", "03-05","Album Kpop","150,00","www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-08-600x568.png")
const produtoDois = new Produto("Album Face", "03-05","Album Kpop","150,00");
//git init//

//let produtosDest = document.getElementById("produto-destaque")
let produtos = document.getElementById("lista-produtos");

//produtosDest.insertAdjacentHTML('afterbegin', 'mostrar_produtos_destaque');
produtos.insertAdjacentHTML('afterbegin', produtoDois.exibir_produtos());
