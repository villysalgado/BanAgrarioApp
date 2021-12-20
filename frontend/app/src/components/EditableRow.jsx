import React from 'react'

const EditableRow = (editUserData, handleEditFormChange, handleCancelClick) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="Nombre"
                    required="required"
                    placeholder="Ingrese nombre..."
                    value={editUserData.Nombre}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="Tipo"
                    required="required"
                    placeholder="Ingresa tipo usuario..."
                    value={editUserData.Tipo}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="Id"
                    required="required"
                    placeholder="Ingrese id..."
                    value={editUserData.Id}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    name="Correo"
                    required="required"
                    placeholder="Ingrese Correo..."
                    value={editUserData.Correo}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit" className="btn btn-success">Guardar</button>
                <button type="button" className="btn btn-danger" onClick={handleCancelClick}>Cancelar</button>
            </td>
        </tr>
    )
}

export default EditableRow;
