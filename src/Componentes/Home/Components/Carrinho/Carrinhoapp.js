import React from 'react'

class Carrinhoapp extends React.Component {
    state = {
      carrinho: []
    };
  
    addProduto = (prodId) => {
      const produtoNoCarrinho = this.state.carrinho.find(
        (produto) => prodId === produto.id
      );
      if (produtoNoCarrinho) {
        const novosProdutosCarrinho = this.state.carrinho.map((produto) => {
          if (prodId === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1
            };
          }
          return produto;
        });
        this.setState({ carrinho: novosProdutosCarrinho });
      } else {
        const addProdutoNoCarrinho = produtos.find(
          (produto) => prodId === produto.id
        );
        const novosProdutosCarrinho = [
          ...this.state.carrinho,
          { ...addProdutoNoCarrinho, quantidade: 1 }
        ];
        this.setState({ carrinho: novosProdutosCarrinho });
      }
    };
  
    removeProduto = (prodId) => {
      const updateCart = this.state.carrinho
        .map((produto) => {
          if (produto.id === prodId) {
            return {
              ...produto,
              quantidade: produto.quantidade - 1
            };
          }
          return produto;
        })
        .filter((produto) => produto.quantidade > 0);
      this.setState({ carrinho: updateCart });
    };
  
    render() {
      return (
        <div>
          <Produtos produtos={produtos} addProduto={this.addProduto} />
          <Carrinho
            carrinho={this.state.carrinho}
            removeProduto={this.removeProduto}
            addProduto={this.addProduto}
          />
        </div>
      );
    }
  }
export default Carrinhoapp