import React from 'react';
import ItemAnuario from './ItemAnuario'
import Grid from '@material-ui/core/Grid';

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
                <Grid key={i} item xs justify="center">
                    <ItemAnuario/>
                </Grid>
            )
         }

        return (
            <Grid container spacing={2}>
                {/* <Grid item xs> */}
                    {/* <Grid container justify="center" spacing="2"> */}
                        {itemsAnuario}
                    {/* </Grid> */}
                {/* </Grid> */}
            </Grid>
        );
    }
}

export default Anuario;