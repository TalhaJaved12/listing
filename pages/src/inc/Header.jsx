import React from 'react'
import Image from 'next/image'
import LOGO from '/public/imgs/LOGO.png'

function Header() {
  return (
    <>
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        <Image 
                            src={LOGO} 
                            alt="Logo"
                            width={216}
                    />
                    </a> 
                    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">For Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Write a Review</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a href="#" className="btn-nav-login">Login</a>
                            <a href="#" className="btn-nav">Sign Up</a>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header