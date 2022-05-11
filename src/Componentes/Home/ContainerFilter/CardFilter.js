import React from "react";
import { FilterContainer, InputFilter, TextoFilter } from "./EstiloFilter";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <FilterContainer>
          <h3>Filtros</h3>
          <TextoFilter>Valor Minimo:</TextoFilter>
          <InputFilter
            type="number"
            onChange={(event) =>
              this.props.onFilterInputChange(event, "filtroMinimo")
            }
            value={this.props.filtroMinimoValue}
          ></InputFilter>

          <TextoFilter>Valor Maximo: </TextoFilter>
          <InputFilter
            type="number"
            onChange={(event) =>
              this.props.onFilterInputChange(event, "filtroMaximo")
            }
            value={this.props.filtroMaximoValue}
          ></InputFilter>

          <TextoFilter>Busca por nome:</TextoFilter>
          <InputFilter
            type="text"
            onChange={(event) =>
              this.props.onFilterInputChange(event, "filtroBuscaPorNome")
            }
            value={this.props.filtroBuscaPorNomeValue}
          ></InputFilter>
        </FilterContainer>
      </div>
    );
  }
}

export default Filter;
