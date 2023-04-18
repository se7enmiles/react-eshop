import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

function Header(){
    return (
        <div className="header">
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"></StorefrontIcon>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <div className="nav__item">
                    <ShoppingBasketIcon className="nav__itemLineOne nav__itemBasket" fontSize="large"></ShoppingBasketIcon>
                    <span className="nav__itemLineTwo nav__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header