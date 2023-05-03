// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
  constructor(nome,dataCadastro,descricao,preco){
    nome = this.nome,
    dataCadastro = this.dataCadastro,
    descricao = this.descricao,
    preco = this.preco
  }

  mostrar_produtos(){
    return this.nome + this.dataCadastro + this.descricao + this.preco
}
}

class ProdutoDestaque extends Produto{
    constructor(){
        super(nome,dataCadastro,descricao,preco,imgDestaque)
    }
    mostrar_produtos_destaque(){
    return this.nome + this.dataCadastro + this.descricao + this.preco + this.imgDestaque
}
}

//git init//
