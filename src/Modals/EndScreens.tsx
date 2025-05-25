import React from "react";
import { motion } from "framer-motion";
import { useModalsStore } from "../Zustand/ModalsStore";
import "../Css/Modals/EndScreen.css";

// Icons
import { IoMdArrowRoundBack } from "react-icons/io";

// EndScreens
import End1 from "../assets/EndScreens/End1.jpg";
import End2 from "../assets/EndScreens/End2.jpg";

const EndScreens: React.FC = () => {
const { setbEndScreens } = useModalsStore();

const EndScreens = [
    End1,
    End2,
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
           <h1 className="Modal">ENDSCREENS</h1>
           <div className="Banners">
            {EndScreens.map((endscreen) => (
                <div className="EndScreen">
                    <img src={endscreen} alt="EndScreen" />
                </div>
            ))}
           </div>
           <div className="Back" onClick={() => setbEndScreens(false)}><IoMdArrowRoundBack className="Icon"/> Back </div>
        </motion.div>
    );
};

export default EndScreens;