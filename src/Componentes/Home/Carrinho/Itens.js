import React from "react";
import {ConjuntoDeItens} from "./ItensStyled"

class itens extends React.Component {
    render() {
        return (
            <ConjuntoDeItens>
                <p>{this.props.quantidade}x</p>
                <p>{this.props.nome}</p>
                <button onClick={this.props.Onclick}>Remover</button>
            </ConjuntoDeItens>
        );
    }
}

export default itens;