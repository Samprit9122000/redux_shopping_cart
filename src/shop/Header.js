import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from './carticon.png'
import { useSelector } from 'react-redux';


function Header() {

  const cartdata=useSelector((state)=>{
    return state.cart.data;
  })

  return (
    <Navbar bg="primary" data-bs-theme="dark" style={{height:"4.5rem"}}>
      <Container>
        <Navbar.Brand href="#home">Redux Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to={'/cart'} style={{color:"white",fontWeight:"bolder",textDecoration:"none"}}>
            <img src={icon} height={30} width={30} style={{fontWeight:"100px"}}/>
            {cartdata.length}
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
