import React from "react";
import "../style/Contact.scss";

const Contact = () => {
    return (
        <div className="section">
            <h2 className="title">Contact</h2>
            <p className="sub-title">Fan? Drop a note!</p>
            <div className="contact">
                <div className="contact-info">
                    <i class="fa-solid fa-location-dot"></i>Chicago, US<br />
                    <i class="fa-solid fa-phone"></i>Phone: +00 151515<br />
                    <i class="fa-solid fa-envelope"></i>Email: mail@mail.com<br />
                </div>
                <form className="contact-form">
                    <div className="row">
                        <div className="col-5"><input type="text" placeholder="Name"></input></div>
                        <div className="col-5"><input type="email" placeholder="Email"></input></div>
                    </div>
                    <input type="text" placeholder="Message"></input>
                    <button className="send-btn">send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
