import React from 'react';
import {motion} from "framer-motion";

import "./webSiteEvents.sass"
import {containerStudentsNum, forTitle} from "../../../frame-motion";
import img__block_test from  "../../../assets/background-img/block_test.png"
import {useDispatch} from "react-redux";
import {setEventModal} from "../../../slices/webSiteSlice";



const WebSiteEvents = () => {


    const events = [
        {
          title: "Block Test",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus, dolorem, doloremque ea esse, eum facere ipsam labore laborum maxime nesciunt nobis numquam omnis perspiciatis quis reiciendis reprehenderit sapiente vel!",
          img: img__block_test
        },
        {
            title: "Block Test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus, dolorem, doloremque ea esse, eum facere ipsam labore laborum maxime nesciunt nobis numquam omnis perspiciatis quis reiciendis reprehenderit sapiente vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus, dolorem, doloremque ea esse, eum facere ipsam labore laborum maxime nesciunt nobis numquam omnis perspiciatis quis reiciendis reprehenderit sapiente vel",
            img: img__block_test
        },
        {
            title: "Block Test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus, dolorem, doloremque ea esse, eum facere ipsam labore laborum maxime nesciunt nobis numquam omnis perspiciatis quis reiciendis reprehenderit sapiente vel!",
            img: img__block_test
        }
    ]




    return (
        <motion.section className="events" id="events">
            <motion.div className="title">
                <motion.h1
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                >
                    O’quv markazimizdagi yangiliklar
                </motion.h1>
            </motion.div>

            <motion.div
                className="events__wrapper"
                variants={containerStudentsNum}
                initial="hidden"
                exit="exit"
                whileInView="show"
                onViewportLeave="exit"
                viewport={{ amount: 0.2,once:true}}
            >
                {
                    events.map((item,index) => {
                        return (
                            <EventItem  variants={forTitle} {...item} key={index}/>
                        )
                    })
                }
            </motion.div>
        </motion.section>
    );
};


const EventItem = ({title,desc,img,variants}) => {

    const dispatch = useDispatch()

    const setModal = () => {
        dispatch(setEventModal({
            img,
            title,
            desc
        }))
    }

    const renderDesc = desc.length > 250 ? desc.substring(0,250) + "..." : desc

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            exit="exit"
            whileInView="show"
            onViewportLeave="exit"
            viewport={{ amount: 0.2,once:true}}
            className="events__item"
        >
            <div className="events__item-box_1">
                <img src={img} alt=""/>
                <div className="events__item-overlay_img" />
                <h2 className="events__item-title">{title}</h2>
            </div>
            <div className="events__item-box_2">
                <div className="events__item-desc">
                    {renderDesc}
                </div>
                <div
                    onClick={() => setModal()}
                    className="events__item-btn"
                >Ba'tafsil</div>
            </div>
        </motion.div>
    )
}

export default WebSiteEvents;