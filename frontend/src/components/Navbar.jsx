import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-dark text-white">
        <div className="container">
            <nav className="navbar px-0 navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="pl-md-0 p-3 text-decoration-none text-light">
                            <h3 className="bold"><span className="color_danger">LAKSHYA</span><span className="color_white">CTF</span></h3>
                        </Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="p-3 text-decoration-none text-white bold">Home</Link>
                        <Link to="/about" className="p-3 text-decoration-none text-light bold">About</Link>
                        <Link to="/hackerboard" className="p-3 text-decoration-none text-light bold">Hackerboard</Link>
                        <Link to="/instructions" className="p-3 text-decoration-none text-light bold">Instructions</Link>
                        <Link to="/quests" className="p-3 text-decoration-none text-light bold">Quests</Link>
                        <Link to="/login" className="p-3 text-decoration-none text-light bold">Login</Link>
                        <Link to="/register" className="p-3 text-decoration-none text-light bold">Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;