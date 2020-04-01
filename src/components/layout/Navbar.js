import React from 'react'
import { Link } from 'react-router-dom';
import SignoutLinks from './SignoutLinks';
import SignedInLinks from './SigninLinks';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper light-blue accent-4">
                <div className="container">
                 <Link to="/" className="brand-logo">Plansy</Link>
                 <SignedInLinks />
                 <SignoutLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;