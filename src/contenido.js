import React, { Component}  from 'react';
import Table from './Table';
class Contenido extends Component {
    render(){
        return(
            <div className="container">
                <h1>Ultimas Facturas</h1>
                <Facturas/>
                <Boletas/>
            </div>
        )
    }
}

export default Contenido;