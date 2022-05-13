import React from 'react'
import {ConjuntoDoCarrinho} from "./CarrinhoStyled"
import Itens from "./Itens"

class Carrinho extends React.Component {
    render() {
        const itensDoCarrinho =
        this.props.carrinho &&
        this.props.carrinho.map((item) => {
         return (
             <Itens
             Key={item.id}
             quantidade={item.quantidade}
             nome={item.nome}
             onClick={() => this.props.removerItemDoCarrinho(item)
            }
            />
         );
        });

        return (
            <ConjuntoDoCarrinho>
                <h2>Carrinho</h2>
                    <div>{itensDoCarrinho}</div>
                    <p>Valor Total: R$ {this.props.valorTotal},00</p>
            </ConjuntoDoCarrinho>
        );
    }
}

export default Carrinho