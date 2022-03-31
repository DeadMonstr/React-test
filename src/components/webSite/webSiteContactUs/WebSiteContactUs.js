import React,{useState} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {forTitle,forContact} from "../../../frame-motion";


import "./webSiteContactUs.sass"
import previus from "../../../assets/icons/icons8_more_than_48px 2.png"
import next from "../../../assets/icons/icons8_more_than_48px 1.png"

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};


const WebSiteContactUs = () => {

    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {

        if (page + newDirection === -1) {
            setPage([contact__items.length - 1, newDirection]);
        }
        else if (page + newDirection > contact__items.length - 1) {
            setPage([0, newDirection]);
        } else {
            setPage([page + newDirection, newDirection]);
        }


    };

    const contact__items = [
        {
            id: 0,
            title: "Xojakent filiali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet assumenda blanditiis commodi eos et expedita explicabo facilis fuga id impedit inventore magnam nobis, nulla, odit quia tenetur totam?",
            linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0651544844627!2d69.93582991556744!3d41.63272308871263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af1764720a4969%3A0x5bffca52f4445fc0!2sGennis%20Campus!5e0!3m2!1sru!2s!4v1646933273104!5m2!1sru!2s"
        },
        {
            id: 1,
            title: "Gazalkent filiali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet assumenda blanditiis commodi eos et expedita explicabo facilis fuga id impedit inventore magnam nobis, nulla, odit quia tenetur totam?",
            linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.6627894403316!2d69.7694282005978!3d41.56219769149106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af1ba601d62bc3%3A0xecd7bb024bc3192b!2sGennis%20Campus!5e0!3m2!1sru!2s!4v1646933203033!5m2!1sru!2s"
        },
        {
            id: 2,
            title: "Chirchiq filiali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet assumenda blanditiis commodi eos et expedita explicabo facilis fuga id impedit inventore magnam nobis, nulla, odit quia tenetur totam?",
            linkMap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5978.5455194984015!2d69.577146!3d41.476686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd439b422aaef13!2zNDHCsDI4JzM2LjEiTiA2OcKwMzQnMzcuNyJF!5e0!3m2!1sru!2s!4v1646932631629!5m2!1sru!2s"
        }
    ]

    const filteredItems = contact__items.filter(item => item.id === page)

    const renderItem = filteredItems.map(({id,title,desc,linkMap}) => {
        return (
            <motion.div
                style={{
                    backgroundImage: "linear-gradient(103.49deg,rgba($color-main-dark, .7),rgba($color-main-light, .7))"
                }}
                key={id}
                custom={direction}
                variants={forContact}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                dragConstraints={{ left: 0,right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    console.log(swipe)
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
                className="contact__item"
            >
                <motion.div
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                    className="contact__item-info"
                >
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <a className="btn btn__white btn__contact"  href="tel:+998949200232">
                        94-920-02-32
                    </a>
                </motion.div>

                <motion.div
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                    className="contact__item-map"
                >
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                   <iframe src={linkMap}  loading="lazy"/>
                </motion.div>
            </motion.div>
        )
    })

    return (
        <section className="contact" id="contactUs">
            <motion.div className="title">
                <motion.h1
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                >
                    Biz bilan bog'lanish
                </motion.h1>
            </motion.div>
            <AnimatePresence initial={false} custom={direction}>
            <div className="contact__wrapper">
                {renderItem}
            </div>
            </AnimatePresence>
            <div className="contact__btn">
                <img
                    src={previus}
                    alt="previus"
                    onClick={() => paginate(-1)}
                />
                <img
                    src={next}
                    alt="next"
                    onClick={() => paginate(1)}
                />
            </div>
        </section>
    );
};

export default WebSiteContactUs;