import React, { useState, Fragment } from 'react';
import { nanoid } from "nanoid";
import ReadOnlyRowUser from './ReadOnlyRowUser';
import data from "./users.json";
import EditableRow from './EditableRow';
import './TablaGestionUsuario.css'

export function TablaGestionUsuario() {
    const [UserData, SetUsers] = useState(data);
    const [addUserData, setAddUserData] = useState({
        Nombre: "",
        Tipo: "",
        Id: "",
        Correo: "",
    });

    const [editUserData, setEditUserData] = useState({
        Nombre: "",
        Tipo: "",
        Id: "",
        Correo: "",
    });

    const [editUserCodigo, setEditUserCodigo] = useState(null);

    const handleAddUserData = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newUserData = { ...addUserData }
        newUserData[fieldName] = fieldValue;

        setAddUserData(newUserData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newUserData = { ...editUserData };
        newUserData[fieldName] = fieldValue;

        setEditUserData(newUserData);
    }

    const handleAddUserSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            Codigo: nanoid(),
            Nombre: addUserData.Nombre,
            Tipo: addUserData.Tipo,
            Id: addUserData.Id,
            Correo: addUserData.Correo,
        };

        const newUsers = [...UserData, newUser];
        SetUsers(newUsers);

    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedUser = {
            Codigo: editUserCodigo,
            Nombre: editUserData.Nombre,
            Tipo: editUserData.Tipo,
            Id: editUserData.Id,
            Correo: editUserData.Correo,
        };

        const newUsers = [...UserData];

        const index = UserData.findIndex((user) => user.Codigo === editUserCodigo);

        newUsers[index] = editedUser;

        SetUsers(newUsers);
        setEditUserCodigo(null);
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditUserCodigo(user.Codigo);

        const formValues = {
            Codigo: user.Codigo,
            Nombre: user.Nombre,
            Tipo: user.Tipo,
            Id: user.Id,
            Correo: user.Correo,
        }

        setEditUserData(formValues);
    }

    const handleCancelClick = () => {
        setEditUserCodigo(null);
    };

    const handleDeleteClick = (userCodigo) => {
        const newUsers = [...UserData];

        const index = UserData.findIndex((user) => user.Codigo === userCodigo);

        newUsers.splice(index, 1);

        SetUsers(newUsers);
    };


    return (
        <div className="main">
            <div>
                <h4>ADD NEW USER</h4>
            <div className="top-form">    
                <form onSubmit={handleAddUserSubmit} >
                    <div>
                    <input
                        type="text"
                        name="Nombre"
                        required="required"
                        placeholder="Ingrese nombre..."
                        onChange={handleAddUserData}
                    />
                    <input
                        type="text"
                        name="Tipo"
                        required="required"
                        placeholder="Ingresa tipo usuario..."
                        onChange={handleAddUserData}
                    />
                    </div>
                    <div>
                    <input
                        type="text"
                        name="Id"
                        required="required"
                        placeholder="Ingrese id..."
                        onChange={handleAddUserData}
                    />
                    <input
                        type="email"
                        name="Correo"
                        required="required"
                        placeholder="Ingrese Correo..."
                        onChange={handleAddUserData}
                    />
                    </div>
                    <button type="submit" className="btn btn-form btn-warning">ADD</button>
                </form>
            </div>
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Id</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserData.map((user) => (
                                <Fragment>
                                    {editUserCodigo == user.Codigo ? (
                                        <EditableRow
                                            editUserData={editUserData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                    ) : (
                                        <ReadOnlyRowUser
                                            user={user}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}


