import React from "react";
import "./styles/style.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { BiCart, BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>

        <div className="search">
          <div className="searchBar">
            <div className="icon">
              <BiSearchAlt2 />
            </div>

            <input
              type="text"
              placeholder="Search products, brands and categories"
            />
          </div>
          <button>SEARCH</button>
        </div>

        <div className="nav">
          <div className="navOption">
            <MdPersonOutline />
            <p>Login</p>
            <BiChevronDown />
          </div>

          <div className="navOption">
            <a href="#">
              <AiOutlineQuestionCircle /> Help <BiChevronDown />
            </a>
          </div>

          <div className="navOption">
            <a href="#">
              <BiCart />
              <sup className="baskestCount">0</sup> Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
