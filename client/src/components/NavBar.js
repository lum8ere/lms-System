import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import '../css/style.css'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar expand="sm" bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className="toHomePage">Тестовая система</NavLink>
                {user.isAuth ? 
                    <Nav className="ml-auto">
                        <Button variant="outline-light">ADMIN</Button>
                        <Button variant="outline-light" className="ml-2">AUTH</Button>
                    </Nav>
                :
                    <Nav className="ml-auto">
                    <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>AUTH</Button>
                    </Nav>
                }
            </Container>
      </Navbar>
    )
});

export default NavBar;