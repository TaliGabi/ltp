class Produto {
  constructor(nome, dataCadastro, descricao, preco) {
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }

  mostrar_produtos() {
    try {
      return this.exibir_produtos();
    } catch (error) {
      console.log(error);
    }
  }

  exibir_produtos() {
    if (
      this.nome !== "" &&
      this.descricao !== "" &&
      this.preco !== "" &&
      this.dataCadastro !== ""
    ) {
      return `<div class="lista-produtos">
        <h1>${this.nome}</h1>
        <p>${this.dataCadastro}</p>
        <h2>${this.descricao}</h2>
        <h2>${this.preco}</h2>
      </div>`;
    } else {
      throw new MeuError("Campo não preenchido.");
    }
  }
}

class ProdutoDestaque extends Produto {
  constructor(nome, dataCadastro, descricao, preco, imgDestaque) {
    super(nome, dataCadastro, descricao, preco);
    this.imgDestaque = imgDestaque;
  }

  mostrar_produtos_destaque() {
    try {
      return this.exibir_produtos_destaque();
    } catch (error) {
      console.log(error);
    }
  }

  exibir_produtos_destaque() {
    if (
      this.nome !== "" &&
      this.descricao !== "" &&
      this.preco !== "" &&
      this.dataCadastro !== "" &&
      this.imgDestaque !== ""
    ) {
      return `<div class="produto-destaque">
        <h1>${this.nome}</h1>
        <img src="${this.imgDestaque}" alt="Imagem de Destaque"></img>
        <p>${this.dataCadastro}</p>
        <h2>${this.descricao}</h2>
        <h2>${this.preco}</h2>
      </div>`;
    }
  }
}

const produtoUm = new ProdutoDestaque("Album Face","03-05","Album Kpop","150,00","https://m.media-amazon.com/images/I/61D1ux+pMDL._UF1000,1000_QL80_.jpg");
const produtoDois = new Produto("Album Face","03-05","Album Kpop","150,00");

let produtosDest = document.getElementById("produto-destaque");
let produtos = document.getElementById("lista-produtos");

produtosDest.insertAdjacentHTML('afterbegin',produtoUm.exibir_produtos_destaque());
produtos.insertAdjacentHTML('afterbegin', produtoDois.exibir_produtos());