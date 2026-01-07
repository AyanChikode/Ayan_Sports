import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <a className="navbar-brand">
                            <img style={{ width: "50px" }} src="/Logo.png" alt="" className="ms-5 mt-5 mb-5"/>
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <Link to={"/bat"} className="nav-item text-decoration-none">
                                <a className="nav-link mt-5 me-1 mb-5">BAT</a>
                    </Link>
                    
                    <Link to={"/ball"} className="nav-item text-decoration-none">
                                <a class="nav-link mt-5 me-1 mb-5">BALL</a>
                    </Link>
                    <Link to={"/glove"} className="nav-item text-decoration-none">
                                <a class="nav-link mt-5 me-1 mb-5">GLOVE</a>
                    </Link>
                    <Link to={"/helmet"} className="nav-item text-decoration-none">
                                <a class="nav-link mt-5 me-1 mb-5">HELMET</a>
                    </Link>
                    <Link to={"/about"} className="nav-item text-decoration-none">
                                <a className="nav-link mt-5 me-1 mb-5">About</a>
                    </Link>
                    <Link to={"/contact"} className="nav-item text-decoration-none">
                                <a className="nav-link mt-5 me-1 mb-5">Contact</a>
                    </Link>
                     <Link to={"/login"} className="nav-item text-decoration-none">
                                <a className="nav-link mt-5 me-1 mb-5">Login</a>
                    </Link>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Header;