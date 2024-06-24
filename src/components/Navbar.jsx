import React from "react";
import Modal from "./Modal";

const Navbar = () =>{
    return(
        <>
        <nav className="navbar updatedNav">
            <div className="container-fluid">
                <a className="navbar-brand">Patanyumba</a>
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