import React, {useState} from 'react';
import {motion,AnimateSharedLayout,AnimatePresence} from "framer-motion"

import images from "./WebSiteGalleryData";

import "./webSiteGallery.sass"
import {containerStudentsNum, forTitle, itemStudentsNum} from "../../../frame-motion";


const WebSiteGallery = () => {

    const [popup,setPopup] = useState(false)
    const [layoutId,setLayoutId] = useState(null)
    const [img,setImg] = useState(null)

    const poper = (id,img) => {
      if (popup === false) {
          setLayoutId(id)
          setPopup(!popup)
          setImg(img)
      } else {
          setLayoutId(null)
          setImg(null)
          setPopup(!popup)
      }
    }

    return (

            <section className="gallery" id="gallery">
                <motion.div className="title">
                    <motion.h1
                        variants={forTitle}
                        initial="hidden"
                        exit="exit"
                        whileInView="show"
                        onViewportLeave="exit"
                        viewport={{ amount: 0.2, once:true}}
                    >
                        Bizning rasmlarimiz
                    </motion.h1>
                </motion.div>

                    <motion.div
                        variants={containerStudentsNum}
                        initial="hidden"
                        exit="exit"
                        whileInView="show"
                        onViewportLeave="exit"
                        viewport={{ amount: 0.2,once:true}}
                        className="gallery__wrapper"
                    >
                        {
                            images.map(({id,img}) => {
                                return (
                                    <motion.div
                                        variants={itemStudentsNum}
                                        className="gallery__item"
                                        onClick={() => poper(id,img)}
                                    >
                                        <motion.img
                                            src={img}
                                            alt="Gallery photo"
                                            layoutId={`img-${id}`}
                                        />
                                    </motion.div>

                                )
                            })
                        }
                    </motion.div>
                    <AnimatePresence>
                        {popup && <PopupImg poper={poper} loyautId={layoutId}/>}
                    </AnimatePresence>

            </section>

    );
};


const PopupImg = ({loyautId,poper}) => {

    const { img } = images.find(item => item.id === loyautId);



    return (
        <motion.div  className="popup_img" onClick={poper} >
            <motion.img layoutId={`img-${loyautId}`}   src={img} alt=""/>
        </motion.div>
    )
}

export default WebSiteGallery;