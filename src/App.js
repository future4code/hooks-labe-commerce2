import React from "react";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import { ConjuntoDeComponentes } from "./estiloDoApp";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Filter from "./Componentes/Home/ContainerFilter/CardFilter";
import "./index.css";

class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
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

  render() {
    const produtosFiltrados = this.filtrarProdutos();

    return (
      <ConjuntoDeComponentes>
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
