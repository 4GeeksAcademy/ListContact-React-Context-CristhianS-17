import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: "40px", height: "40px"}}>
                        <i className="fas fa-users"></i>
                    </div>
                    <span className="fw-bold fs-4 tracking-tight">CristhianS<span className="text-primary"> Contacts</span></span>
                </Link>
                
                <div className="d-flex gap-2">
                    <Link to="/" className="btn btn-outline-secondary d-none d-md-inline-block">
                        View List
                    </Link>
                    <Link to="/add-contact" className="btn btn-primary px-4 shadow-sm">
                        <i className="fas fa-user-plus me-2"></i>New Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};