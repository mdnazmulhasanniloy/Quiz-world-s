import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
        <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid justify-content-between ">
        <a className="navbar-brand d-flex ms-3" href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/3407/3407024.png" alt="" width="36" height="36" className="d-inline-block align-text-top" />
              <h3 className='ms-1 text-center'>Quiz-world’s</h3>
                  </a>

          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse text-md-end text-lg-end"
          id="navbarScroll">
          <ul className="navbar-nav text-sm-center">
          <li className="nav-item"><Link className='nav-link' aria-current="page" to={'/Topics'}>Topics</Link></li>
          <li className="nav-item"><Link className='nav-link' aria-current="page" to={'/Statistics'}>Statistics</Link></li>
          <li className="nav-item"><Link className='nav-link' aria-current="page" to={'/Blog'}>Blog</Link></li>
          </ul>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;