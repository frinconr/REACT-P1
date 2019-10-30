import React from 'react';
import ItemAnuario from './ItemAnuario'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


class Anuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            cantidadItems: this.props.cantidadItems,
            items: []
        };

        this.cargarPagina = this.cargarPagina.bind(this);
    }

    componentDidMount() {
        this.cargarPagina();
    }

    cargarPagina() {
        const itemsAnuario = [];
        let totalItems = this.state.totalItems; 

        for (var i = 0; i < this.state.cantidadItems; i++) {
            
            itemsAnuario.push(
                <Grid key={totalItems} item xs>
                    <ItemAnuario/>
                </Grid>
            )
            totalItems++;
         }

         this.setState({
             items: this.state.items.concat(itemsAnuario),
             totalItems: totalItems
         });
    }

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {this.state.items}
                </Grid>

                <IconButton aria-label="delete" size="medium" onClick={this.cargarPagina}>
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
            </div>
        );
    }
}


export default Anuario;