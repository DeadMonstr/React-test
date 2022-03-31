import React, {useEffect, useState} from 'react';



import WebSiteHome from "../../components/webSite/webSiteHome/WebSiteHome";
import WebSiteAdvantages from "../../components/webSite/webSiteAdvantages/WebSiteAdvantages";
import WebSiteComments from "../../components/webSite/webSiteComments/WebSiteComments";
import WebSiteEvents from "../../components/webSite/webSiteEvents/WebSiteEvents";
import WebSiteModalEvent from "../../components/webSite/webSiteModal/webSiteModalEvent/WebSiteModalEvent";
import WebSiteGallery from "../../components/webSite/webSiteGallery/WebSiteGallery";
import WebSiteContactUs from "../../components/webSite/webSiteContactUs/WebSiteContactUs";
import WebSiteFooter from "../../components/webSite/webSiteFooter/WebSiteFooter";

import WebSiteLoader from "../../components/loader/webSiteLoader/WebSiteLoader";

import {AnimatePresence, AnimateSharedLayout} from "framer-motion";


const Website = () => {
    const [loading,setLoading] = useState(true)



    useEffect(()=> {
        const timer = setTimeout(()=>{
            setLoading(false)
        },5000)

        return ()=> clearTimeout(timer)
    })







    return (
        <>
            {
                loading ? (
                    <AnimatePresence>
                        <WebSiteLoader/>
                    </AnimatePresence>
                ) : (
                    <AnimateSharedLayout type="crossfade">
                        <WebSiteHome/>
                        <WebSiteAdvantages/>
                        <WebSiteComments/>
                        <WebSiteEvents/>
                        <WebSiteGallery/>
                        <WebSiteContactUs/>
                        <WebSiteModalEvent/>
                        <WebSiteFooter/>
                    </AnimateSharedLayout>
                )
            }



        </>
    );
};

export default Website;