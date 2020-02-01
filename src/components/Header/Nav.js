import React, { useState } from 'react';
import { Link, Navlink } from 'react-router-dom';

const Nav = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    // Not 100% sure we need top and bottom rules, leaving just in case
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Nav>
                <Link to="/">
                    <Navlink>Home</Navlink>
                </Link>
                <Link to="/about">
                    <Navlink>About</Navlink>
                </Link>
                <Link to="/login">
                    <Navlink>Login</Navlink>
                </Link>
                <Link to="/signup">
                    <Navlink>Signup</Navlink>
                </Link>
            </Nav>
        </>
    )
}

export default Nav