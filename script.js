divListaProdutoDestaque.insertAdjacentHTML('afterbegin', 'mostrar_produtos_destaque');
var divListaProdutoDestaque = document.getElementById('produto-destaque');
divListaProduto.insertAdjacentHTML('afterbegin', 'mostrar_produtos');
var divListaProduto = document.getElementById('lista-produtos');

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

const produto = new ProdutoDestaque ("Album Face", "03-05","Album Kpop","150,00","www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-08-600x568.png")

//git init//
