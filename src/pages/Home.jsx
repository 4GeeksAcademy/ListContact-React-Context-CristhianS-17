import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const [showModal, setShowModal] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);

	const slug = "CristhianS-17";

    useEffect(() => {
        fetch(`https://playground.4geeks.com/contact/agendas/CristhianS-17/contacts`)
            .then(response => response.json())
            .then(data => {
                if (data.contacts) {
                    dispatch({ type: "ADD_CONTACT", payload: data.contacts });
                }
            })
            
    }, []);

    const confirmDelete = async () => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/CristhianS-17/contacts/${idToDelete}`, {
            method: "DELETE"
        });
        if (response.ok) {
            dispatch({ type: "DELETE_CONTACT", payload: idToDelete });
            setShowModal(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-3 align-items-center">
                <h1>Mis Contactos</h1>
                
            </div>

            <ul className="list-group">
                {store.contacts && store.contacts.map((contact) => (
                    <li key={contact.id} className="list-group-item p-4">
                        <div className="row w-100">
                            
                            <div className="col-12 col-sm-6 col-md-3 px-0">
                                <img 
                                    src={`https://picsum.photos/seed/${contact.id}/170/170`} 
                                    alt={contact.name} 
                                    className="rounded-circle mx-auto d-block img-fluid" 
                                    style={{ width: "110px", height: "110px", objectFit: "cover" }}
                                />
                            </div>

                           
                            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-start position-relative">
                                <div className="float-end">
                                    <Link to={`/edit/${contact.id}`} className="btn">
                                        <i className="fas fa-pencil-alt text-secondary"></i>
                                    </Link>
                                    <button className="btn" onClick={() => { setIdToDelete(contact.id); setShowModal(true); }}>
                                        <i className="fas fa-trash-alt text-secondary"></i>
                                    </button>
                                </div>
                                <label className="name lead fw-bold d-block mb-2">{contact.name}</label>
                                
                                <div className="mb-1">
                                    <i className="fas fa-map-marker-alt text-muted me-3"></i>
                                    <span className="text-muted">{contact.address || "No address provided"}</span>
                                </div>
                                
                                <div className="mb-1">
                                    <i className="fas fa-phone text-muted me-3"></i>
                                    <span className="text-muted small">{contact.phone || "(555) 555-5555"}</span>
                                </div>
                                
                                <div>
                                    <i className="fas fa-envelope text-muted me-3"></i>
                                    <span className="text-muted small">{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: "1050" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content shadow border-0">
                            <div className="modal-header bg-danger text-white border-0">
                                <h5 className="modal-title">¿Estás seguro?</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body text-center py-4">
                                <p className="mb-0">Si eliminas este contacto, se borrará permanentemente de tu lista.</p>
                            </div>
                            <div className="modal-footer justify-content-center border-0">
                                <button className="btn btn-secondary px-4" onClick={() => setShowModal(false)}>No, volver</button>
                                <button className="btn btn-danger px-4" onClick={confirmDelete}>Sí, eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};