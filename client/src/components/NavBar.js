import React, { useContext } from 'react';
import { Context } from '../index';
import '../css/style.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to={SHOP_ROUTE} className="toHomePage">Тестовая система</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;