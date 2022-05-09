import React from "react";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import { ConjuntoDeComponentes } from "./estiloDoApp";
import { pacoteDeProdutos } from "./pacoteDeProdutos";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 100000,
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
  };
  
  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo;
      }else{
        return produto
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
      return produto.name.includes(this.state.filtroBuscaPorNome);
    });

    return pacoteFiltrado;
  };

  ordenarProdutos = (event) => {
    this.setState({
      ordenacao: event.target.value,
    });
  };

 
  render() {
    const produtosFiltrados = this.filtrarProdutos();

    return (
      <ConjuntoDeComponentes>
        
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
