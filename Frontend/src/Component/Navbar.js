import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link }from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navbar navbar-expand bg-dark navbar-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">
                    NavBar
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/home">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <Link className="btn btn-primary mx-1" to="/login" >
                    Login
                    </Link>
                    <Link className="btn btn-primary mx-1" to="/signup" >
                    signup
                    </Link>
                </div>
            </div>
        </nav>
    </>

  )
}

export default Navbar
