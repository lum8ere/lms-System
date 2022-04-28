import React from "react";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
          <Form className="d-flex flex-column">
              <p className="mt-2">Email</p>
              <Form.Control 
                className="mt-0"
                placeholder="Введите ваш email" />
                <p className="mt-2">Password</p>
                <Form.Control 
                className="mt-0"
                placeholder="Введите ваш пароль" />
                <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                  {isLogin ? 
                  <div>
                    <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                  </div>
                  :
                  <div>
                    <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                  </div>
                  }
                  <Button>
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                  </Button>
                </Row>
          </Form>
        </Card>
    </Container>
  );
};

export default Auth;
