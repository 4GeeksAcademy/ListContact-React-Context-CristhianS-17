import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();
    const navigate = useNavigate();
    const slug = "CristhianS-17";

    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });


    useEffect(() => {
        if (id && store.contacts.length > 0) {
            const found = store.contacts.find(c => c.id === parseInt(id));
            if (found) setContact(found);
        }
    }, [id, store.contacts]);

    const saveContact = async (e) => {
        e.preventDefault();
        const url = id
            ? `https://playground.4geeks.com/contact/agendas/CristhianS-17/contacts/${id}`
            : 'https://playground.4geeks.com/contact/agendas/CristhianS-17/contacts';

        const method = id ? "PUT" : "POST";

        const response = await fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        });

        if (response.ok) navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h2 className="text-center mb-4">{id ? "Editar Contacto" : "Añadir Nuevo Contacto"}</h2>
                <form onSubmit={saveContact}>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Nombre Completo</label>
                        <input
                            className="form-control"
                            placeholder="Escribe el nombre"
                            value={contact.name}
                            onChange={e => setContact({ ...contact, name: e.target.value })}
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="ejemplo@correo.com"
                            value={contact.email}
                            onChange={e => setContact({ ...contact, email: e.target.value })}
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label fw-bold">Teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe el teléfono"
                            value={contact.phone}
                            onChange={e => setContact({ ...contact, phone: e.target.value })}
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label fw-bold">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe la dirección"
                            value={contact.address}
                            onChange={e => setContact({ ...contact, address: e.target.value })}
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-100 fs-5 mt-2">
                        {id ? "Actualizar Contacto" : "Guardar Contacto"}
                    </button>

                    <Link to="/" className="d-block text-center mt-3 text-decoration-none">
                        o volver a la lista de contactos
                    </Link>
                </form>
            </div>
        </div>
    )
};
