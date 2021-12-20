import React from "react";

export function SolicitudCredito() {
  return (
    <div className="container">
      <div class="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="¿Cuanto credito necesitas?"
        />
        <label for="floatingInput rounded"></label>
      </div>
      <div className="form-floating">
        <input
          type="Number"
          className="form-control"
          id="floatingPassword"
          placeholder="¿En cuantos meses cancelarias las deuda?"
        />
        <label for="floatingPassword"></label>
        <button type="button" class="btn btn-secondary m-3">
          Simular Credito
        </button>
        <button type="button" class="btn btn-primary">
          Solicitar Credito
        </button>
      </div>
    </div>
  );
}
