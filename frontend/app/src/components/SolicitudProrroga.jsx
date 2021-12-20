import React from 'react'


export function SolicitudProrroga() {
    return (
        <div className="container">
          <div class="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="Numero de Convenio"/>
  <label for="floatingInput rounded"></label>
</div>
<div className="form-floating">
  <input type="text" className="form-control" id="floatingPassword" placeholder="Razon de prorroga"/>
  <label for="floatingPassword"></label>

  <div> 
          <div class="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="¿Cuantas coutas desea aplazar"/>
  <label for="floatingInput rounded"></label>
</div>  


  <button type="button" class="btn btn-primary">Enviar Solicitud</button>
</div>
          
           
        </div>
        </div>
    )
}
