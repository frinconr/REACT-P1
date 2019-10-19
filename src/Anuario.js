import React from 'react';
import ItemAnuario from './ItemAnuario'

class Anuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidadItems: this.props.cantidadItems,
        };
    }
    render() {
        const itemsAnuario = [];

        for (var i = 0; i < this.state.cantidadItems; i++) {
            itemsAnuario.push(
                <ItemAnuario/>
            )
         }

        return (
        <div>
            {itemsAnuario}
        </div>
        );
    }
}

export default Anuario;