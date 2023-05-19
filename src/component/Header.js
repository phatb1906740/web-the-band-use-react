import React from "react";
import "../style/Header.scss"

function Header() {
    return (
        <div className="header">
            <div className="navigation">
                <a href="#" className="nav-item">HOME</a>
                <a href="#" className="nav-item">BAND</a>
                <a href="#" className="nav-item">TOUR</a>
                <div className="nav-item">
                    MORE <i class="fa-solid fa-caret-down"></i>
                    <div className="sub-nav">
                        <a href="#" className="sub-nav-item">Merchandise</a>
                        <a href="#" className="sub-nav-item">Extras</a>
                        <a href="#" className="sub-nav-item">Media</a>
                    </div>
                </div>
            </div>
            <div className="search-container"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></div>
        </div>
    )
}

export default Header;
