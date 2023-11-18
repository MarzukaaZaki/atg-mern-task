import React from 'react';
import logo from '../../../src/assets/logo/logo.png'
import { FaCaretDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand ms-3">
                        <img src={logo} />
                    </a>
                    <form className="d-flex mx-lg-auto search-box rounded-pill" role="search" style={{color:'#5C5C5C'}}>

                       <IoMdSearch className='search-icon'/>
                        <input className="form-control me-2 rounded-pill search-input" 
                            type="search"
                            placeholder="Search for your favourite groups in ATG" aria-label="Search"/>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Create Account.<span className="text-primary fw-semibold"> It's free</span><FaCaretDown/></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;