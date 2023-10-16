import React from 'react';
import Productos from './ProductosSubElement';

// eslint-disable-next-line react/prop-types
const Tienda = ({ productos }) => {
    return ( 
        <div>
            <h1>Tienda</h1>
            <Productos  productos={productos}/>
        </div>
     );
}
 
export default Tienda;