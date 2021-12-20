import React from 'react'

export function SimuladorCredito() {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
            <div className="modal" id="staticBackdrop" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Simulador de Credito</h5>
        <input type="number" className="form-control" id="floatingInput" placeholder="¿Cuanto credito necesitas?"/>
        <input type="number" className="form-control" id="floatingInput" placeholder="¿En cuanto tiempo va a pagar?"/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Simular credito"></button>
      </div>
    
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Simular credito</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}


