import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles/Header.css";
import logo from "../logo2.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  InputGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="header" bg="amazon__header">
      <Navbar.Brand href="#home" className="header__left">
        <MenuIcon className="header__left__icon" />

        <Link to="/">
          <img src={logo} alt="Amazon Logo" style={{ width: "120px" }} />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="header__toggle"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto header__search">
          <InputGroup className="mb-3">
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="All"
              id="input-group-dropdown-1"
              className="header__search__dropdown"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl
              aria-label="search"
              className="header__search__input"
            />
            <InputGroup.Append>
              <InputGroup.Text className="header__search__icongroup">
                <SearchIcon className="header__search__icon" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Nav>
        <div className="header__rightContainer">
          <div>
            <small>Hello, Sign in</small>
            <p>Account & Lists</p>
          </div>
          <div>
            <small>Returns</small>
            <p>&Orders</p>
          </div>
          <IconButton>
            <ShoppingCartOutlinedIcon className="header__rightContainer__icon" />
          </IconButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
