import React from 'react'

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{user.Nombre}</td>
            <td>{user.Tipo}</td>
            <td>{user.Id}</td>
            <td>{user.Correo}</td>
            <td>
                <button className="btn btn-primary" type="button" onClick={(event) => handleEditClick(event, user)}>Editar
                </button>
                <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(user.Codigo)}>Eliminar</button>
            </td>

        </tr>
    )
}

export default ReadOnlyRow;
