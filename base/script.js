class Produto{
    constructor(nome,dataCadastro,descricao,preco){
        this.nome = nome
        this.dataCadastro = dataCadastro
        this.descricao = descricao
        this.preco = preco
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
          this.nome = this.nome
          this.dataCadastro = dataCadastro
          this.descricao = descricao
          this.preco = preco
          this.imgDestaque = imgDestaque

    }
      mostrar_produtos_destaque(){
        try {
            return this.exibir_produtos_destaque();  
          } catch (error) {
            console.log(error) 
          }
}

      exibir_produtos_destaque(){
        if((this.nome != "") && (this.descricao != "") && (this.preco != "") && (this.dataCadastro != "") && (this.imgDestaque != "")){
        return `<div>
        <h1>${this.nome}</h1>
        <img src="${this.imgDestaque}"></img>
        <p>${this.dataCadastro}</p>
        <h2>${this.descricao}</h2>
        <h2>${this.preco}</h2></div>`
      }
    }
  }   
  
  const produtoUm = new ProdutoDestaque ("Album Face", "03-05","Album Kpop","150,00","www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-08-600x568.png")
  const produtoDois = new Produto("Album Face", "03-05","Album Kpop","150,00");
  let produtosDest = document.getElementById("produto-destaque")
  let produtos = document.getElementById("lista-produtos");
  
  produtosDest.insertAdjacentHTML('afterbegin', produtoUm.exibir_produtos_destaque());
  produtos.insertAdjacentHTML('afterbegin', produtoDois.exibir_produtos());
   //git init//

