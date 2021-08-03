import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <p className="navbar-brand">DaFeX</p>
                        <li>
                            <Link to="/" className="nav-link">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/manajemen-buku" className="nav-link">
                                Manajemen Buku
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;