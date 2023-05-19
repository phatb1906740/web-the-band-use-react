import React from "react";
import "../style/Band.scss"
import memberImg from '../assets/img/Band/bandmember.jpg';

const Band = () => {
    return (
        <div className="band section">
            <h2 className="title">the band</h2>
            <p className="sub-title">We love music</p>
            <p className="content">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="member-container">
                <div className="member-item">
                    <p className="member-title">Name</p>
                    <img className="member-img" src={memberImg} alt="" />
                </div>
                <div className="member-item">
                    <p className="member-title">Name</p>
                    <img className="member-img" src={memberImg} alt="" />
                </div>
                <div className="member-item">
                    <p className="member-title">Name</p>
                    <img className="member-img" src={memberImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Band
