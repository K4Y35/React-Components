import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import cartIcon from "../resources/CartIcon.png";
import logo from "../resources/Logo.svg";
import "./NavBar.css";

const NavBar = () => {
  function toggleSearch() {
    var searchInputField = document.getElementById("searchInputField");
    searchInputField.classList.toggle("showField");
    var carticondivid = document.getElementById("cart-icon-div-id");
    carticondivid.classList.toggle("cart-icon-div-hide");
  }
  function openSideNav() {
    var mySidenav = document.getElementById("mySidenav");
    mySidenav.classList.add("sidenav-add-width");
  }
  function closeNav() {
    var mySidenav = document.getElementById("mySidenav");
    mySidenav.classList.remove("sidenav-add-width");
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <div className="menu-div">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/projects">Porjects</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="search-cart-div">
          <div className="searchBox-div">
            <input
              id="searchInputField"
              className="searcInput"
              type="text"
              placeholder="Search"
            />
            <button className="searcBtn" type="submit" onClick={toggleSearch}>
              <SearchIcon />
            </button>
          </div>
          <div id="cart-icon-div-id" className="cart-icon-div">
            <img src={cartIcon} alt="" />
            <h4>Cart (0)</h4>
          </div>
        </div>
        {/* For mobile menu */}
        <div id="mySidenav" class="sidenav">
          <button className="closebtn" onClick={closeNav}>
            <AiOutlineClose />
          </button>
          <div className="mobile-search-box">
            <input
              type="text"
              placeholder="Search"
              className="searcInputmobile"
            />
            <button className="searcBtnMobile" type="submit">
              <SearchIcon />
            </button>
          </div>
          <Link to="/">Home</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/projects">Porjects</Link>
          <Link to="/news">News</Link>
          <div id="mobile-cart-icon-div-id" className="mobile-cart-icon-div-id">
            <img src={cartIcon} alt="" />
            <h4>Cart (0)</h4>
          </div>
        </div>
        {/* For mobile menu */}

        <button
          id="hamburger-btn"
          className="hamburger-btn"
          onClick={openSideNav}
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
