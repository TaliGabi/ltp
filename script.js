class Produto{
  constructor(nome,dataCadastro,descricao,preco){
    nome = this.nome,
    dataCadastro = this.dataCadastro,
    descricao = this.descricao,
    preco = this.preco
  }

  mostrar_produtos(){
    return `<div>${this.nome}</div>
    <div>${this.dataCadastro}</div>
    <div>${this.descricao}</div>
    <div>${this.preco}</div>`
}
}
//
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
const produtoDois = new Produto ("Album Face", "03-05","Album Kpop","150,00")
//git init//

//let produtosDest = document.getElementById("produto-destaque")
let produtos = document.getElementById("lista-produtos")

//produtosDest.insertAdjacentHTML('afterbegin', 'mostrar_produtos_destaque');
produtos.insertAdjacentHTML('afterbegin', 'mostrar_produtos');
