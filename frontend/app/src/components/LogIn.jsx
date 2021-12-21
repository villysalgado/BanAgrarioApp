import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    state = {
        identificacion : 0,
        password : '',
    }

    onLogin = async (event) => {
        event.preventDefault();
        const id= await event.target.identificacion.value
        const pass= await event.target.password.value
        this.setState ({
            identificacion : id,
            password : pass
        })
        const res = await axios.post('http://localhost:4000/api/users/login', this.state)
        console.log(res)

    }

    render() {
    return (
        <div className="container mt-5"> 
            <form action="" method="get" onSubmit={this.onLogin}>
                <label>Identificacion</label>
                <input 
                type="number"
                name="identificacion"
                required="required"
                placeholder="Identificacion"
                />
                <label>Contraseña</label>
                <input 
                type="password"
                name="password"
                required="required"
                placeholder="Contraseña"
                />
                <button type="submit" className="btn btn-primary">ingresar</button>                
            </form>
        </div>
    )
}
}

