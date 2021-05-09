import React from 'react'
import {motion} from 'framer-motion';
import '../stylesheets/loader.css'

export default function Loader() {
    const variants = {
        animate: {
            x: [-20, 20],
            y: [0, -30],
            transition: {
                x: {
                    yoyo: Infinity,
                    duration: 0.5
                },
                y: {
                    yoyo: Infinity,
                    duration: 0.25
                }
            }
        }
    }
    return (
        <motion.div
            className="loader"
            variants={variants}
            animate="animate"
        >

        </motion.div>
    )
}
