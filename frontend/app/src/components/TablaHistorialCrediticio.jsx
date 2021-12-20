import React, { useState } from 'react';
import './TablaHistorialCrediticio.css';
import data from './mock-historialData.json';


const TablaHistorialCrediticio = () => {

    const [historial, setHistorial] = useState(data);

    return (
        <div className="app-container tabla-historial-credit">
            <table>
                <thead>
                    <tr>
                        <th>No Credito</th>
                        <th>Valor Credito</th>
                        <th>Fecha Inicio</th>
                        <th>Valor Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((dato)=>(
                    <tr>
                        <td>{dato.no}</td>
                        <td>{dato.valorCredito}</td>
                        <td>{dato.valorCredito}</td>
                        <td>{dato.pendiente}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaHistorialCrediticio
