import {Link} from "react-router-dom";
import "./platformHeader.sass"

import logo from "../../../assets/logo/Logo.png"
import userImage from "../../../assets/user-interface/user_image.png"


const PlatformHeader = ({onActiveMenu,menuActive}) => {
    const activedMenu = menuActive ?  "menu-logo menu-logo_active": "menu-logo"

    return (
        <div className="appHeader">
            <div>
                <div className={activedMenu} onClick={onActiveMenu}>
                    <div className="menu-logo__wrapper">
                        <span className="menu-logo__item" />
                        <span className="menu-logo__item" />
                        <span className="menu-logo__item" />
                    </div>

                </div>
                <div className="logo">
                    <img  src={logo} alt="Logo"/>
                    <span>Gennis</span>
                </div>
            </div>
            <div>
                <div className="user">
                    <div className="user__info programmer">
                        <span>Fatxullyev</span>
                        <span>Ulug'bek</span>
                    </div>
                    <div className="user__img">
                        <Link to="me">
                            <img src={userImage} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlatformHeader