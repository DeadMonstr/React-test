import React, {useState,useRef,useEffect} from 'react';
import {motion} from "framer-motion";

import "./webSiteComments.sass"
import user_image from "../../../assets/user-interface/user_image.png"

import {itemStudentsNum, containerStudentsNum, forTitle} from "../../../frame-motion";


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};


const WebSiteComments = () => {

    const [position, setPosition] = useState(0);


    const onChangePosition = (newPosition) => {
        if (position + newPosition === -1) {
            setPosition( 0)
        }
        else if (position + newPosition > comments.length - 1) {
            setPosition(comments.length - 1)
        } else {
            setPosition(position + newPosition)
        }
    }


    const comments = [
        {
            name: "Ulug'bek",
            surname: "Fatxullayev",
            img: user_image,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at autem, blanditiis debitis dignissimos dolores est exercitationem explicabo laboriosam maiores, molestiae nobis pariatur quae quam quidem quos reiciendis sapiente velit.",
            like: 18
        },
        {
            name: "Ulug'bek",
            surname: "Fatxullayev",
            img: user_image,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at autem, blanditiis debitis dignissimos dolores est exercitationem explicabo laboriosam maiores, molestiae nobis pariatur quae quam quidem quos reiciendis sapiente velit.",
            like: 18
        },
        {
            name: "Ulug'bek",
            surname: "Fatxullayev",
            img: user_image,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at autem, blanditiis debitis dignissimos dolores est exercitationem explicabo laboriosam maiores, molestiae nobis pariatur quae quam quidem quos reiciendis sapiente velit.",
            like: 18
        },
        {
            name: "Ulug'bek",
            surname: "Fatxullayev",
            img: user_image,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at autem, blanditiis debitis dignissimos dolores est exercitationem explicabo laboriosam maiores, molestiae nobis pariatur quae quam quidem quos reiciendis sapiente velit.",
            like: 18
        },
        {
            name: "Ulug'bek",
            surname: "Fatxullayev",
            img: user_image,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at autem, blanditiis debitis dignissimos dolores est exercitationem explicabo laboriosam maiores, molestiae nobis pariatur quae quam quidem quos reiciendis sapiente velit.",
            like: 18
        }
    ]

    return (
        <motion.section className="comments" id="comments">
            <motion.div className="title">
                <motion.h1
                    variants={forTitle}
                    initial="hidden"
                    exit="exit"
                    whileInView="show"
                    onViewportLeave="exit"
                    viewport={{ amount: 0.2, once:true}}
                >
                    Biz haqimizdagi fikrlar
                </motion.h1>
            </motion.div>
            <motion.div
                className="comments__carousel"
            >
                <motion.div
                    // variants={containerStudentsNum}
                    // initial="hidden"
                    // exit="exit"
                    // whileInView="show"
                    // onViewportLeave="exit"
                    // viewport={{ amount: 0.2,once:true}}
                    drag="x"
                    dragElastic={1}
                    dragConstraints={{left: 0, right: 0}}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        console.log(swipe)
                        if (swipe < -swipeConfidenceThreshold) {
                            onChangePosition(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            onChangePosition(-1);
                        }
                    }}
                    className="comments__inner-carousel"
                >
                    {
                        comments.map((item,index) => {
                            return (
                                <CommentItem  {...item} index={index} position={position} key={index} variants={itemStudentsNum} />
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </motion.section>
    );
};


const CommentItem = ({name,surname,img,desc,like,position,index}) => {
    return (
        <motion.div
            className="comments__item"
            initial={{
                scale: 0,
                rotation: -180
            }}
            animate={{
                scale: index === position ? 1 : 0.8,
                rotate: 0,
                left: `${((index - position) * 45 - 23)}vw`
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}

        >
            <div className="comments__item-info">
                <img src={img} alt=""/>
                <h2>
                    <span>{name}</span>
                    <span>{surname}</span>
                </h2>
            </div>
            <div className="comments__item-desc">{desc}</div>
            <div className="comments__item-like">
                <i onClick={() => console.log("Hello")} className="fas fa-heart" />
                <span>{like}</span>
            </div>
        </motion.div>
    )
}

export default WebSiteComments;