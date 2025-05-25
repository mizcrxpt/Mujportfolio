import React from "react";
import { motion } from "framer-motion";
import { useModalsStore } from "../Zustand/ModalsStore";
import "../Css/Modals/ThumbNails.css";

// Icons
import { IoMdArrowRoundBack } from "react-icons/io";

// ThumbNails
import Thumb1 from "../assets/ThumbNails/1.webp";
import Thumb2 from "../assets/ThumbNails/2.webp";
import Thumb3 from "../assets/ThumbNails/3.webp";
import Thumb4 from "../assets/ThumbNails/4.webp";

const ThumbNails: React.FC = () => {
const { setbThumbNails } = useModalsStore();

const ThumbNails = [
    Thumb1,
    Thumb2,
    Thumb3,
    Thumb4,
]

    return (
        <motion.div
        className="BannersDiv"
        initial={{ scale: 1.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.8, opacity: 0 }}
        transition={{
          duration: 0.3
        }}
        >
           <h1 className="Modal">THUMBNAILS</h1>
           <div className="Banners">
            {ThumbNails.map((ThumbNail) => (
                <div className="ThumbNail">
                    <img src={ThumbNail} alt="ThumbNail" />
                </div>
            ))}
           </div>
           <div className="Back" onClick={() => setbThumbNails(false)}><IoMdArrowRoundBack className="Icon"/> Back </div>
        </motion.div>
    );
};

export default ThumbNails;