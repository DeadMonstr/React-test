import React, {useEffect, useState,c} from 'react';
import {motion} from "framer-motion";

import "./webSiteModalEvent.sass"

import {useDispatch, useSelector} from "react-redux";
import {setOpenModal} from "../../../../slices/webSiteSlice";
import {forTitle} from "../../../../frame-motion";



const WebSiteModalEvent = () => {

    const [activeModal,setActiveModal] = useState(false)
    const [modalInfo,setModalInfo] = useState({
        img: null,
        title: null,
        desc: ""
    })
    const dispatch = useDispatch()
    const {modalEvent,openModal,modalType} = useSelector(state => state.webSite)

    useEffect(() => {
        if (openModal === true) {
            if (modalType === "event") {
                const {img,title,desc} = modalEvent
                setModalInfo({
                    img,
                    title,
                    desc
                })
                setActiveModal(openModal)
            }
        }

    },[modalEvent, modalType, openModal])

    const checkerClick = (e) => {
        if (e.target.classList.contains("overlay-modal")) {
            setActiveModal(false)
            dispatch(setOpenModal())
        }

    }

    return activeModal ? (
        <motion.div className="overlay-modal" onClick={checkerClick}>
            <motion.div
                initial="hidden"
                exit="exit"
                whileInView="show"
                onViewportLeave="exit"
                viewport={{ amount: 0.2}}
                variants={forTitle}
                className="modal"
            >
                <img src={modalInfo.img} alt="Event"/>
                <h2>{modalInfo.title}</h2>
                <p>{modalInfo.desc}</p>
            </motion.div>
        </motion.div>
    ): (<></>);
};

export default WebSiteModalEvent;