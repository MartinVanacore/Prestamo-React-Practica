import React, {Fragment, useState} from 'react';
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario.js';
import Mensaje from './componentes/Mensaje.js';
import Resultado from './componentes/Resultado.js';
import Spinner from './componentes/Spinner.js';




function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [totalPagar, guardarTotal] = useState(0);
  const [carga, guardarCarga] = useState(false);

  let componente;
  if (carga) {
    componente = <Spinner/>
  } else if (totalPagar === 0 ) {
    componente = <Mensaje/>
  } else {
    componente = <Resultado
                    cantidad={cantidad}
                    plazo={plazo}
                    totalPagar={totalPagar}
    
                  />
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className="container">

        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          totalPagar={totalPagar}
          guardarTotal={guardarTotal}
          guardarCarga={guardarCarga}
        />
        <div className="mensajes">
          {componente}
        </div>
        

      </div>

    </Fragment>
   
  );
}


export default App;
