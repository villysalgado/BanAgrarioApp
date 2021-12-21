import React from 'react'

function Register() {
    return (
        <div className="mt-5">

        <form onSubmit="" className="form-group">
        <div className="container">
        <div className="form-group">
            <input className="form-control" 
            
            type="text"
            required="required"
            name="name"
            placeholder="Nombre Completo"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="text"
            required="required"
            name="tipoDoc"
            placeholder="Tipo Documento"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="number"
            required="required"
            name="Id"
            placeholder="Documento de Identidad"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="text"
            required="required"
            name="fechaNac"
            placeholder="Fecha de Nacimiento"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="text"
            required="required"
            name="name"
            placeholder="Nombre"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="number"
            required="required"
            name="ingresos"
            placeholder="Ingresos Mensuales Promedio"
            />
        </div>

        <div className="form-group">
            <input className="form-control"
            type="number"
            required="required"
            name="egresos"
            placeholder="Egresos Mensuales Promedio"
            />
        </div>
        
            <button className= "btn btn-primary" type="submit">registrarse</button>
        </div>
        </form>
        
    </div>
    )
}

export default Register