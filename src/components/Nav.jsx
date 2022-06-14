import React from 'react';

import { Container,NavItem, NavDropdown, MenuItem,Navbar } from 'react-bootstrap';

const Nav = () => {
  return (
    <div>
        
<Navbar>
  <Container>
    <Navbar.Brand href="/">Logo</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
          <ul className='links'>
            <li>   <a href="/food">Food</a></li>
            <li>   <a href="/cake">Confectionary</a></li>
            <li>   <a href="/drinks">Drinks</a></li>
          </ul>
        
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    </div>
  )
}

export default Nav