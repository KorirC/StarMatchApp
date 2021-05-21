import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
    padding: 10px;
    font-size: 1.2em;
    margin-left: 10px;
  }
  span {
    display: inline-block;
    position: relative;
    top: -1px;
    left: 0px;
    font-weight: bold;
    line-height: 18px;
    text-align: center;
    background: lightcoral;
    border-radius: 100%;
    width: 20px;
    height: 20px;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
const NavigationBar = () => {
  return (
    <Styles>
      <Navbar backgroundcolor="red" variant="dark">
        <Navbar.Brand href="#home">StarMatch</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </Styles>
  );
};
export default NavigationBar;
