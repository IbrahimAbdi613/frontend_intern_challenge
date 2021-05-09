import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import '../stylesheets/Modal.css'
let Modal = () => {
    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visable: {
            y: "1vh",
            opacity: 1,
            transtion: {delay: 0.5}
        }
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className="Modal"
                variants={modal}
                initial="hidden"
                animate="visable"
            >
                <p> <span role="img" aria-label="Celebration">🎉</span>
                    Congratulations you have selected 5 nominees
                     <span role="img" aria-label="Celebration">🎉</span>
                </p >
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal