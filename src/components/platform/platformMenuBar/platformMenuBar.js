import React from "react"
import {Link, NavLink} from "react-router-dom"
import './platformMenuBar.sass'


const PlatformMenuBar = ({onActiveMenu}) => {
    const menuItems = [
        {
            id : 1,
            to : "hi",
            children : [
                {
                    childId : 1,
                    to : "xojakent"
                },
                {
                    childId : 1,
                    to : "gazalkent"
                },
                {
                    childId : 1,
                    to : "chirchiq"
                }
            ]
        },
        {
            id : 1,
            to : "hi",
            children : [
                {
                    childId : 1,
                    to : "xojakent"
                },
                {
                    childId : 1,
                    to : "gazalkent"
                },
                {
                    childId : 1,
                    to : "chirchiq"
                }
            ]
        },
        {
            id : 1,
            to : "hi",
            children : [
                {
                    childId : 1,
                    to : "xojakent"
                },
                {
                    childId : 1,
                    to : "gazalkent"
                },
                {
                    childId : 1,
                    to : "chirchiq"
                }
            ]
        },
        {
            id : 1,
            to : "hi",
            children : [
                {
                    childId : 1,
                    to : "xojakent"
                },
                {
                    childId : 1,
                    to : "gazalkent"
                },
                {
                    childId : 1,
                    to : "chirchiq"
                }
            ]
        },
        {
            id : 1,
            to : "hi",
            children : [
                {
                    childId : 1,
                    to : "xojakent"
                },
                {
                    childId : 1,
                    to : "gazalkent"
                },
                {
                    childId : 1,
                    to : "chirchiq"
                }
            ]
        },
        {
            id : 2,
            to : "content"
        },
        {
            id : 3,
            to : "Home",
        }
    ]


    const onDropMenu = (e) => {
        const item = e.currentTarget.parentElement
        const subItem = item.querySelector('.sub-item')
        const arrow = item.querySelector('.arrow')
        if (subItem) {
            e.preventDefault()
            subItem.classList.toggle('active')
            arrow.classList.toggle('arrow_active')
        } else {
            const parent = item.parentElement
            const subItems = parent.querySelectorAll('.sub-item')
            subItems.forEach(child => {
                child.classList.remove("active")
            })
            const arrows = parent.querySelectorAll('.arrow')
            arrows.forEach(child => {
                child.classList.remove("arrow_active")
            })
        }
    }

    const renderMultipleMenu = (data,activeElem) => {
        return (
            data.map( item => {
                if (item.children) {
                    return (
                        MultipleLink(item,activeElem,onDropMenu)
                    )
                }
                else {
                    return (
                        SimpleLink(item,activeElem,onDropMenu)
                    )
                }
            })
        )
    }

    const mobileMenu = onActiveMenu ? "menu-bar menu-bar-active" : "menu-bar"
    const menuActive = onActiveMenu ? "menu-bar__menu menu-bar__menu-active" : "menu-bar__menu "
    const descActive = onActiveMenu ? "desc desc_active" : "desc"
    const overlayActive = onActiveMenu ? "overlay overlay-active" : "overlay"


    return (
        <>
            <nav className={mobileMenu}>
                <ul className={menuActive}>
                    {renderMultipleMenu(menuItems,descActive)}
                </ul>
                <Link to="/" className="menu-bar__log-out">
                    <i className="fas fa-sign-out-alt" />
                </Link>
            </nav>
            <div className={overlayActive} />
        </>
    )
}



function MultipleLink(item,activeElem,onDropMenu)  {
    return (
        <li className="menu-bar__menu-item multiple">
            <NavLink
                onClick={onDropMenu}
                to={item.to}
                className={
                    ({ isActive }) =>
                        "menu-bar__menu-link" + (isActive ? " menu-bar__menu-link_active" : "")
                    }
            >
                <i className="fas fa-users icon-link" />
                <span className={activeElem}>Отсутствует по причине</span>
                <i className="fas fa-chevron-right arrow "/>
            </NavLink>
            <div className="sub-item">
                {
                    item.children.map((itemChild) => {
                        return (
                            <NavLink
                                className={
                                    ({ isActive }) =>
                                        "sub-item_link" + (isActive ? " sub-item_link_active" : "")
                                }
                                to={`${item.to}/${itemChild.to}`}
                            >
                                <i className="fas fa-users sub-item_icon-link"/>
                                <span className={activeElem}>Xojikent</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        </li>
    )
}

function SimpleLink(item,activeElem,onDropMenu) {
    return (
        <li className="menu-bar__menu-item">
            <NavLink
                onClick={onDropMenu}
                to={item.to}
                className={({ isActive }) => "menu-bar__menu-link" + (isActive ? " menu-bar__menu-link_active" : "")}
            >
                <i className="fas fa-users icon-link"/>
                <span className={activeElem}>Hello</span>
            </NavLink>
        </li>
    )
}


export default PlatformMenuBar