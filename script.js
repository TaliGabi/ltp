class Produtos{
  constructor(nome,dataCadastro,descricao,preco){
    this.nome = nome
    this.dataCadastro = dataCadastro
    this.descricao = descricao
    this.preco = preco 
  }

  mostrar_produtos(){
    return `<div>${this.nome}</div>
    <div>${this.dataCadastro}</div>
    <div>${this.descricao}</div>
    <div>${this.preco}</div>`
}
}
//
class ProdutoDestaque extends Produtos{
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
const produtoDois = new Produtos("Album Face", "03-05","Album Kpop","150,00")
//git init//

//let produtosDest = document.getElementById("produto-destaque")
let produto = document.getElementById("lista-produtos")

//produtosDest.insertAdjacentHTML('afterbegin', 'mostrar_produtos_destaque');
produto.insertAdjacentHTML('afterbegin', produtoDois.mostrar_produtos());
