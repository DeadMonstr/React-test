import React from 'react';

import "./webSiteFooter.sass"
import Logo from "../../../assets/logo/Gennis logo.png"

const WebSiteFooter = () => {
    return (
        <footer className="footer">

                <div className="footer__item">
                    <img src={Logo} alt="Logo" className="footer__item-logo"/>

                        <div className="footer__item-links">
                            <a href="">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="">
                                <i className="fab fa-youtube" />
                            </a>
                            <a href="">
                                <i className="fab fa-telegram" />
                            </a>
                        </div>

                </div>


        </footer>
    );
};

export default WebSiteFooter;