import React from 'react';

const Resultado = ({cantidad, plazo, totalPagar}) => (

    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {(cantidad).toFixed(2)}</p>
        <p>En el plazo de: {plazo} Meses</p>
        <p>Su pago mensual es de: $ {(totalPagar/plazo).toFixed(2)}</p>
        <p>Total a pagar: $ {(totalPagar).toFixed(2)}</p>



    </div>
);
 
export default Resultado;