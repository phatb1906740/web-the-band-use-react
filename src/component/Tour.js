import React from "react";
import "../style/Tour.scss"
import newyorkImg from '../assets/img/Places/newyork.jpg';
import parisImg from '../assets/img/Places/paris.jpg';
import sanfranImg from '../assets/img/Places/sanfran.jpg';

const Tour = () => {
    return (
        <div style={{ backgroundColor: "#000", color: "#fff" }}>
            <div className="tour section">
                <h2 className="title">tour dates</h2>
                <p className="sub-title">Remember to book your tickets!</p>
                <ul className="tour-container">
                    <li className="tour-item">September <span className="sold-out">Sold out</span></li>
                    <li className="tour-item">October <span className="sold-out">Sold out</span></li>
                    <li className="tour-item">November <span className="quantity">3</span></li>
                </ul>
                <div className="place-container">
                    <div className="place-item">
                        <img src={newyorkImg} alt="" />
                        <div className="content-container">
                            <p className="content-title">New York</p>
                            <p className="content-date">Fri 27 Nov 2016</p>
                            <p className="content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="ticket-btn">Buy Tickets</button>
                        </div>
                    </div>
                    <div className="place-item">
                        <img src={parisImg} alt="" />
                        <div className="content-container">
                            <p className="content-title">Paris</p>
                            <p className="content-date">Sat 28 Nov 2016</p>
                            <p className="content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="ticket-btn">Buy Tickets</button>
                        </div>
                    </div>
                    <div className="place-item">
                        <img src={sanfranImg} alt="" />
                        <div className="content-container">
                            <p className="content-title">San Francisco</p>
                            <p className="content-date">Sun 29 Nov 2016</p>
                            <p className="content">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="ticket-btn">Buy Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour
