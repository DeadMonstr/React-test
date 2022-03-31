import React from 'react';
import {motion} from "framer-motion";

import "./webSiteAdvantages.sass"
import {containerAdvantages,itemAdvantageEven,itemAdvantageOdd,forTitle} from "../../../frame-motion";
import icon_1 from "../../../assets/icons/icon 2.png"
import icon_2 from "../../../assets/icons/icon 5.png"
import icon_3 from "../../../assets/icons/icon 4.png"
import icon_4 from "../../../assets/icons/icon 6.png"
import icon_5 from "../../../assets/icons/icon 7.png"

const WebSiteAdvantages = () => {

    const advantages = [
        {
            title: "Gennisning yangi, sinalgan o'qitish usuli bo'yicha ta'lim.",
            img: icon_1,
            specialClass: ""
        },
        {
            title: "Block test va Mock larni muntazam òtkazilishi, eng asosiysi tekin.",
            img: icon_2,
            specialClass: ""
        },
        {
            title: "O'qituvchilarning o'quvchilar bilan darsdan tashqari qo'shimcha mashg'ulotlari (treninglar, nutq klublari, kino klublari).",
            img: icon_3,
            specialClass: ""
        },
        {
            title: "Noyob ish muhiti va kasbiy rivojlanish imkoniyati.",
            img: icon_4,
            specialClass: ""
        },
        {
            title: "Talabalarni ijtimoiy va ma'naviy qo'llab-quvvatlash.",
            img: icon_5,
            specialClass: "width-15"
        },
    ]




    return (
        <motion.section className="advantages" id="advantages">
            <motion.div className="title">
                <motion.h1
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                >
                    Bizning afzalliklarimiz
                </motion.h1>
            </motion.div>

            <motion.div
                variants={containerAdvantages}
                initial="hidden"
                exit="exit"
                whileInView="show"
                onViewportLeave="exit"
                viewport={{ amount: 0.2,once:true}}
                className="advantages__wrapper"
            >
                {
                    advantages.map( (item, index) => {
                        if ((index+1) % 2 === 0) {
                            return (
                                <AdvantagesItem variants={itemAdvantageEven} {...item} key={index}/>
                            )
                        } else {
                            return (
                                <AdvantagesItem variants={itemAdvantageOdd} {...item} key={index}/>
                            )
                        }
                    })
                }
            </motion.div>

        </motion.section>
    );
};



const AdvantagesItem = (props) =>{

    const {variants,title,img,specialClass} = props


    return (
        <motion.div
            className="advantages__item"
            variants={variants}
            initial="hidden"
            exit="exit"
            whileInView="show"
            onViewportLeave="exit"
            viewport={{ amount: 0.2,once:true}}
        >
            <h3>
                {title}
            </h3>
            <img src={img} className={specialClass} alt="advantagesIcon"/>
        </motion.div>
    )
}

export default WebSiteAdvantages;