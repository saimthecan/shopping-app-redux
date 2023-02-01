import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/saimthecan">
                GitHub
              </NavLink>
            </NavItem>
          <CartSummary />
         
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;