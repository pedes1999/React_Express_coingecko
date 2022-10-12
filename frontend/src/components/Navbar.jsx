import React from 'react'
import logo from '../assets/dollarlogo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid text-primary">
                <a className="navbar-brand text-dark" href="/">
                    <img src={logo} alt="" width="40" height="30" className="d-inline-block align-text-mid " />
                    Cryptocurrencies
                </a>
            </div>
        </nav>
    )
}

export default Navbar