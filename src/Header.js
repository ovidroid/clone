import { Link } from '@material-ui/core';
import React from 'react'
import './Header.css'


function Header(){

    return(
    <nav className="header">
        <img className="header__logo"src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"></img>
        <div className="header__search">
            <input type="text" className="header_searchInput"/>

        </div>
        <div className="header__nav">
        {/*1st Link */}
        <Link to="/" className="header__link">
        <div className="header__option">
            
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign in or Sign Out</span>
        </div>
        </Link>
          {/*2nd Link */}
          <Link to="/" className="header__link">
        <div className="header__option">
            
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
          {/*3rd Link */}
          <Link to="/" className="header__link">
        <div className="header__option">
            
            <span className="header__optionLineOne">You</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
          </div>
          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                   
              </div>
          </Link>

        </nav>
)
}

export default Header;