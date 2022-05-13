import React from "react";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import { ConjuntoDeComponentes } from "./estiloDoApp";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Filter from "./Componentes/Home/ContainerFilter/CardFilter";
import Carrinho from "./Componentes/Home/Carrinho/Carrinho";
import "./index.css";

class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
    carrinho: [],
    valorTotal: 0,
  };

  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo;
      } else {
        return produto;
      }
    });

    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo;
      } else {
        return produto;
      }
    });

    const pacoteFiltrado = pacotesFiltradosMaximo.filter((produto) => {
      return produto.name
        .toLocaleLowerCase()
        .includes(this.state.filtroBuscaPorNome.toLocaleLowerCase());
    });

    return pacoteFiltrado;
  };

  ordenarProdutos = (event) => {
    this.setState({
      ordenacao: event.target.value,
    });
  };

  onFilterInputChange = (event, filterName) => {
    this.setState({
      [filterName]: event.target.value,
    });
  };

  adicionarProdutoNoCarrinho = (newProduct) => {
    const existentProduct = this.state.carrinho.find((product) => {
      return product.id === newProduct.id;
    });

    if (existentProduct) {
      existentProduct.quantidade = existentProduct.quantidade + 1;
    } else {
      newProduct.quantidade = 1;

      this.state.carrinho.push(newProduct);
    }

    this.forceUpdate();
  };

  removerItemDoCarrinho = (clickedProduct) => {
    const productInArray = this.state.carrinho.find((product) => {
      return product.id === clickedProduct.id;
    });

    if (productInArray.quantidade > 1) {
      productInArray.quantidade = productInArray.quantidade - 1;
    } else {
      const carrinhoAtualizado = this.state.carrinho.filter((itemCarrinho) => {
        return productInArray.id !== itemCarrinho.id;
      });

      this.setState({ carrinho: carrinhoAtualizado });
    }

    this.forceUpdate();
  };

  render() {
    const produtosFiltrados = this.filtrarProdutos();

    return (
      <ConjuntoDeComponentes>
        <Carrinho
          carrinho={this.state.carrinho}
          valorTotal={this.state.valorTotal}
          removerItemDoCarrinho={this.removerItemDoCarrinho}
        />
        <Filter
          filtroMinimoValue={this.state.filtroMinimo}
          filtroMaximoValue={this.state.filtroMaximo}
          filtroBuscaPorNomeValue={this.state.filtroBuscaPorNome}
          onFilterInputChange={this.onFilterInputChange}
        ></Filter>
        <Produtos
          quantidade={produtosFiltrados.length}
          onChangeCabecalho={this.ordenarProdutos}
          ordenacao={this.state.ordenacao}
          produtos={produtosFiltrados}
          onClick={this.adicionarProdutoNoCarrinho}
        />
      </ConjuntoDeComponentes>
    );
  }
}

export default App;
