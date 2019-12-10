import React, {Component } from 'react';

import { Navbar } from 'react-bootstrap';


class NavMain extends Component {

    render() { 
        return ( 
         
<>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/dashboard">
      <img
        alt=""
        src='https://img.icons8.com/cute-clipart/64/000000/book.png'
        width="40"
        height="35"
        className="d-inline-block align-top"
      />{' '}
      PORTFOLIO
    </Navbar.Brand>
  </Navbar>
</>
           
         );
    }
}
 
export default NavMain;
