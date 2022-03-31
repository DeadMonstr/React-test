import React from 'react';

import "./errorMessage.sass"

import {motion} from "framer-motion";
import {forErrorMessage} from "../../../frame-motion";

const ErrorMessage = ({children,activeError}) => {

    return (
        activeError ? (
            <motion.div
                variants={forErrorMessage}
                initial="hidden"
                animate="show"
                exit="exit"
                className="error-message"
            >
                {children}
            </motion.div>
        ) : (
            ""
        )
    )
};

export default ErrorMessage;