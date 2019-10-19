import React from 'react';


class ItemAnuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persona:{},
        };
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then((response) => {
                return response.json()
            })
            .then((JsonResponse) => {
                var datos = JsonResponse.results[0];
                var name = datos.name;

                this.setState({ persona:{
                    primer_apellido: name.first,
                    nombre_completo: name.title + '. ' + name.first + ' ' + name.last,
                    email: datos.email,
                    foto: datos.picture.large
                
                }});
        });
    }
    render() {
        return (
        <div>
            <img src={this.state.persona.foto} alt="foto-persona"/>
            <p>{this.state.persona.nombre_completo}</p>
            <p>{this.state.persona.email}</p>
        </div>
        );
    }
}

export default ItemAnuario;