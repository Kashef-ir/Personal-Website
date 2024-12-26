import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/style.css'
import './Header.css';

function Header() {
  return (
    <>
      <header className='header-area'>
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo">
              <h1 className='logo-text'>K</h1>
            </a>

            <nav className="navbar">
              <ul className="menu">
                <li className="active"><a href="index.html">خانه</a></li>
                <li><a href="about.html">درباره من</a></li>
                <li><a href="works.html">کارهای من</a></li>
                <li><a href="contact.html">تماس با من</a></li>
              </ul>
              <a href="contact.html" className="theme-btn">بیا حرف بزنیم</a>
            </nav>

            <a href="contact.html" className="theme-btn">بیا حرف بزنیم</a>

            <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;