import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <nav className="navbar updatedNav">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Patanyumba</Link>
                <Link to="/houses" className="nav-link houses-link">Houses</Link>
                <Modal/>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav>
        </>
    )
}

export default Navbar