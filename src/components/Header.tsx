import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-magenta">
        <div className="container-fluid">
            <div className="ms-2">
                <a className="navbar-brand" href='#'>FakeShop</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-2" id='navbarSupportedContent'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header