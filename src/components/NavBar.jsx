import { NavLink } from "react-router-dom";
import logo from "../assets/logo4.png"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 py-0">
            <div className="container-fluid px-1" id="nav">

                <a className="navbar-brand py-0" href="#">
                    <img src={logo} alt="Bootstrap" width="70" height="65" />
                </a>

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
                        <li className="nav-item col-5">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item col-5">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/about" end>About</NavLink>
                        </li>
                        <li className="nav-item col-5">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/view" end>View</NavLink>
                        </li>
                        <li className="nav-item col-5">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/details" end>Details</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;