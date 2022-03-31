import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";


import WebSiteHeader from "../webSiteHeader/WebSiteHeader";

import "./webSiteHome.sass"
import Logo from "../../../assets/logo/Gennis logo.png"
import {containerStudentsNum,forTexts,forNav,itemStudentsNum} from "../../../frame-motion";


const WebSiteHome = () => {

    const stydyingNumList = [
        {
          title: "O'quvchilar",
          number: "1000"
        },
        {
            title: "Abiturentlar",
            number: "200"
        },
        {
            title: "Talabalar",
            number: "300"
        }
    ]

    return (
        <motion.section className="home" id="home">
            <WebSiteHeader variants={forNav}/>
            <motion.div
                variants={containerStudentsNum}
                className="home__wrapper home__wrapper-text"
                initial="hidden"
                exit="exit"
                whileInView="show"
                viewport={{ amount: 0.2,once:true}}
            >
                <motion.img
                    className="home__logo"
                    src={Logo} alt="Logo"
                    variants={forTexts}

                />
                <motion.p
                    variants={forTexts}
                    className="home__desc"
                >
                    Salom, sizni muvaffaqiyatlilar qatorida ko'rib turganimizdan xursandmiz."Gennis"ning veb-sahifasiga xush kelibsiz!
                    Sahifamizga yangi qo'shilgan bo'lsangiz kelajak uchun odim qadamlarni biz bilan  boshlaganingiz,tanlovda adashmaganingizni
                    yaqin fursatlar ichida bilib olasiz.
                </motion.p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                    to="/login"
                    className="btn btn__white btn__animated"

                >
                    Kirish
                </Link>
            </motion.div>
            <motion.div
                variants={containerStudentsNum}
                initial="hidden"
                exit="exit"
                whileInView="show"
                onViewportLeave="exit"
                viewport={{ amount: 0.2,once:true}}
                className="home__wrapper home__wrapper-num"
            >
                {
                    stydyingNumList.map(({title,number},index) => {
                        return (
                            <StudyingNum
                                key={index}
                                variants={itemStudentsNum}
                                title={title} number={number}
                            />
                        )
                    })
                }
            </motion.div>
        </motion.section>
    );
};


const StudyingNum = ({title,number,variants}) => {
    return (
        <motion.div variants={variants}  className="home__box" >
            <h1 className="home__box-title">{title}</h1>
            <span className="home__box-number">
                {number}+
            </span>
        </motion.div>
    )
}

export default WebSiteHome;