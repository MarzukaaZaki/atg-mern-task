import React, { useState } from 'react';
import logo from '../../../src/assets/logo/logo.png'
import { IoMdSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.css'
import AuthModal from '../AuthModal/AuthModal';
const Header = () => {
    const [open, setOpen] = useState(false);
    const handleDropdownToggle = () => {

        setOpen(!open);
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <div className='d-block d-md-none nav-dropdown'>
                    <button onClick={handleDropdownToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <RxHamburgerMenu />
                    </button>
                    <div className={open? 'nav-dropdown-menu show': 'nav-dropdown-menu'}>
                        <ul>
                            <li className='ms-3 my-3'><img src={logo} height='15' /></li>
                            <li>
                                <form className="d-flex mx-lg-auto rounded-pill" role="search" style={{ color: '#5C5C5C' }}>

                        
                                    <input className="form-control me-2 rounded-pill search-input"
                                        type="search"
                                        placeholder="Search for your favourite groups in ATG" aria-label="Search" />
                                </form>
                            </li>
                            <li><AuthModal/></li>
                        </ul>
                    </div>
                </div> */}
                <div className='dropdown-container'>
                    <button onClick={handleDropdownToggle} className="dropdown-button border-0 bg-light-subtle"><RxHamburgerMenu /></button>
                    <div className={open ? 'nav-dropdown-menu show' : 'dropdown-menu'}>
                        <ul>
                            <li className='ms-3 my-3'><img src={logo} height='15' /></li>
                            <li>
                                <form className="d-flex mx-lg-auto rounded-pill" role="search" style={{ color: '#5C5C5C' }}>


                                    <input className="form-control me-2 rounded-pill search-input"
                                        type="search"
                                        placeholder="Search for your favourite groups in ATG" aria-label="Search" />
                                </form>
                            </li>
                            <li><AuthModal /></li>
                        </ul>

                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand ms-3">
                        <img src={logo} height='15' />
                    </a>
                    <form className="d-flex mx-lg-auto search-box rounded-pill" role="search" style={{ color: '#5C5C5C' }}>

                        <IoMdSearch className='d-none d-md-block search-icon' />
                        <input className="form-control me-2 rounded-pill search-input"
                            type="search"
                            placeholder="Search for your favourite groups in ATG" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <AuthModal />
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;