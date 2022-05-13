import React from "react";
import { ConjuntoDoCarrinho } from "./CarrinhoStyled";
import Itens from "./Itens";

class Carrinho extends React.Component {
  getTotal = () => {
    let total = 0;
    for (let produto of this.props.carrinho) {
      total += produto.price * produto.quantidade;
    }
    return total;
  };

  render() {
    const itensDoCarrinho = this.props.carrinho.map((item) => {
      return (
        <Itens
          Key={item.id}
          quantidade={item.quantidade}
          nome={item.name}
          onClick={() => this.props.removerItemDoCarrinho(item)}
        />
      );
    });

    return (
      <ConjuntoDoCarrinho>
        <h2>Carrinho</h2>
        <div>{itensDoCarrinho}</div>
        <p>Valor Total: R$ {this.getTotal()},00</p>
      </ConjuntoDoCarrinho>
    );
  }
}

export default Carrinho;
