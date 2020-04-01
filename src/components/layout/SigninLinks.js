import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to="/create">New Plan</NavLink>
            </li>
            <li>
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn-floating btn pink lighten-1">NN</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;