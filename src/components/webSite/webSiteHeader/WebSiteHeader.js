import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import "./webSiteHeader.sass"


import home from "../../../assets/icons/home.png"
import advantages from "../../../assets/icons/advantag.png"
import comment from "../../../assets/icons/comments.png"
import events from "../../../assets/icons/events.png"
import gallery from "../../../assets/icons/gallery.png"
import contact from "../../../assets/icons/contact.png"
import login from "../../../assets/icons/login.png"






const WebSiteHeader = ({variants}) => {

    const menu = [
        {
            title: "Bosh sahifa",
            img: home,
            link: "#home"
        },
        {
            title: "Afzalliklar",
            img: advantages,
            link: "#advantages"
        },
        {
            title: "Izohlar",
            img: comment,
            link: "#comments"
        },
        {
            title: "Yangiliklar",
            img: events,
            link: "#events"
        },
        {
            title: "Galereya",
            img: gallery,
            link: "#gallery"
        },
        {
            title: "Bog'lanish",
            img: contact,
            link: "#contactUs"
        },
        {
            title: "Kirish",
            img: login,
            link: "login"
        }
    ]

    const [openMenu,setOpenMenu] = useState(false)


    const navClazz = openMenu ? "nav nav-active" : "nav"




    return (
        <>
            <motion.nav
                initial="hidden"
                exit="exit"
                animate="show"
                variants={variants}
                className={navClazz}
            >
                <ul className="nav-menu">
                    {
                        // eslint-disable-next-line array-callback-return
                        menu.map((item,index) => {
                            return (
                                <MenuItem key={index} {...item} />
                            )
                        })
                    }
                </ul>
            </motion.nav>
            <div className="hamburger">
                <div className="hamburger__box" onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? (
                            <i className="fas fa-times" />

                        ) : (
                            <i className="fas fa-bars" />
                        )
                    }
                </div>
            </div>
        </>
    );
};


const MenuItem = ({title,img,link}) => {
    return (
        <li className="nav-menu__item">
            {link === "login" ? (
                <Link className="nav-menu__link" to={link}>
                    <img src={img} alt="icon"/>
                    <span>{title}</span>
                </Link>
            ): (
                <a className="nav-menu__link" href={link}>
                    <img src={img} alt="icon"/>
                    <span>{title}</span>
                </a>
            )}

        </li>
    )
}

export default WebSiteHeader;