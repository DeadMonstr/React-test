import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import PlatformHeader from "../../components/platform/platformHeader/platformHeader";
import PlatformMenuBar from "../../components/platform/platformMenuBar/platformMenuBar";


const Platform = () => {
    const [menuActive,setMenuActive] = useState(false)

    const onActiveMenu = () => {
        setMenuActive(!menuActive)
    }

    const checkerClickOnMenu = (e) => {
        console.log(e.target.classList)
        if (e.target.classList.contains('overlay')) {
            setMenuActive(false)
        }
    }

    const {request} = useHttp()

    useEffect(()=> {
        request("http://127.0.0.1:5000/profile" )
            .then(res => console.log(res))
    },[])




    return (
        <>
            <PlatformHeader onActiveMenu={onActiveMenu} menuActive={menuActive}/>
            <div className="wrapper" onClick={checkerClickOnMenu}>
                <PlatformMenuBar onActiveMenu={menuActive}/>
                <Outlet/>
            </div>

        </>
    )

}




export default Platform;