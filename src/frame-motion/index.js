export const containerStudentsNum = {

    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

export const itemStudentsNum = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        },
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const forTexts = {
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        },
    },
    exit: {
        opacity: 0,
        x: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
}

export const forButton = {
    hidden: { scale: 0},
    show: {
        scale: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        },
    }
}

export const forNav = {
    hidden: { opacity: 0, y: -200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        },
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
}

export const containerAdvantages = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

export const itemAdvantageEven = {
    hidden: { opacity: 0, x: 200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const itemAdvantageOdd = {
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const forTitle = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const forContact = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,

    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

export const forErrorMessage = {
    hidden: {
        opacity: 0,
        y:  -100,
        x: "-50%"
    },
    show: {
        opacity: 1,
        y: 0,
        x: "-50%",
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};


export const forRemoveItem = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};