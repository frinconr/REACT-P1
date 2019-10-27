import React from 'react';
import ItemAnuario from './ItemAnuario'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


class Anuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        for (var i = 0; i < this.state.cantidadItems; i++) {
            itemsAnuario.push(
                <Grid key={this.state.items.length} item xs>
                    <ItemAnuario/>
                </Grid>
            )
         }

         this.setState({
             items: this.state.items.concat(itemsAnuario)
         });
    }

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {this.state.items}
                </Grid>

                <IconButton aria-label="delete" size="large" onClick={this.cargarPagina}>
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
            </div>
        );
    }
}


export default Anuario;