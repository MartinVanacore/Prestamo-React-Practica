import React, {Fragment, useState} from 'react';
import { calcularTotal } from '../helpers.js';

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCarga} = props;
    const [error, guardarError] = useState(false)
    const calcularPrestamo = e => {
        e.preventDefault()
        //validacion
        if (cantidad === 0 || plazo === '') {
            guardarError(true)
            return;
        }
        guardarError(false);

        guardarCarga(true);

        setTimeout(() => {
            const totalPagar = calcularTotal(cantidad, plazo);
            
            guardarTotal(totalPagar);
            guardarCarga(false);
        }, 3000);
        
    }
    
    return (  
        <Fragment>
        <form onSubmit={calcularPrestamo}>
            
            <div className="row">
                <div>
                    <label>Cantidad de Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange={e => {guardarCantidad( parseInt(e.target.value))}}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select
                        className="u-full-width"
                        onChange={e => {guardarPlazo( parseInt(e.target.value))}}

                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                </div>
            </div>
        </form>
        { (error) ? <p className="error">Todos los campos son Obligatorios</p> : null }
        
        </Fragment>
    );
}
 
export default Formulario;