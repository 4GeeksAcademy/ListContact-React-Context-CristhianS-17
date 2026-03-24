export const Footer = () => (
    <footer className="footer mt-5 py-5 bg-dark text-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 text-center text-md-start">
                    <small className="text-secondary">El mañana es insierto, el momento de comenzar es ahora.</small>
                </div>
                <div className="col-md-4 text-center my-3 my-md-0">
                    <i className="fab fa-react fa-2x mx-2 text-info"></i>
                    <i className="fab fa-bootstrap fa-2x mx-2 text-primary"></i>
                    <i className="fas fa-database fa-2x mx-2 text-warning"></i>
                </div>
                <div className="col-md-4 text-center text-md-end">
                    <p className="mb-0 small">Es tu momento de formarte como desarrollador con 4Geeks</p>
                    <a href="https://4geeks.com" className="btn btn-sm btn-outline-light mt-2">
                        4Geeks Academy
                    </a>
                </div>
            </div>
            <hr className="bg-secondary mt-4" />
            <div className="text-center">
                <small className="text-secondary">&copy; 2026 - Todos los derechos reservados.</small>
            </div>
        </div>
    </footer>
);