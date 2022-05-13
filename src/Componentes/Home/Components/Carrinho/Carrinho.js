import React from "react";

class Carrinho extends React.Component {
  getTotal = () => {
    let total = 0;
    for (let produto of this.props.carrinho) {
    total += produto.preco * produto.quantidade;
}
    return total;
  };

  render() {
    return (
      <div>
        <h1>Carrinho</h1>
        {this.props.carrinho.map((produto) => {
          return (
            <div className="produtos-card" key={produto.id}>
              <div>{produto.nome}</div>
              <div>{produto.preco}</div>

              <div className="btn-main">
                <button
                  className="btn"
                  onClick={() => this.props.removeProduto(produto.id)}
                >
                  -
                </button>

                <div>{produto.quantidade} x </div>

                <button
                  className="btn"
                  onClick={() => this.props.addProduto(produto.id)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div>Total: R$ {this.getTotal()},00</div>
      </div>
    );
  }
}

export default Carrinho;
