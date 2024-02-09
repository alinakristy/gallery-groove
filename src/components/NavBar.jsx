import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
            <div className="container-fluid" id="nav">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/about" end>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/view" end>View</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;