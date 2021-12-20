import React from 'react'

const ReadOnlyRow = ({user}) => {
    return (
        <tr>
        <td scope="row">{user.Codigo}</td>
        <td>{user.Nombre}</td>
        <td>{user.Tipo}</td>
        <td>{user.Id}</td>
        <td>{user.Correo}</td>
    </tr>
    )
}

export default ReadOnlyRow
