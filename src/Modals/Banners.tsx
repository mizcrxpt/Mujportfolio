import React from "react";
import { motion } from "framer-motion";
import { useModalsStore } from "../Zustand/ModalsStore";
import "../Css/Modals/Banners.css";

// Icons
import { IoMdArrowRoundBack } from "react-icons/io";

// Banners
import Banner1 from "../assets/Banners/Banner1.png";
import Banner2 from "../assets/Banners/Banner2.png";
import Banner3 from "../assets/Banners/Banner3.png";
import Banner4 from "../assets/Banners/Banner4.png";
import Banner5 from "../assets/Banners/Banner5.png";
import Banner6 from "../assets/Banners/Banner6.png";
import Banner7 from "../assets/Banners/Banner7.png";
import Banner8 from "../assets/Banners/Banner8.png";
import Banner9 from "../assets/Banners/Banner9.png";
import Banner10 from "../assets/Banners/Banner10.png";
import Banner11 from "../assets/Banners/Banner11.webp";

const Banners: React.FC = () => {
const { setbBanners } = useModalsStore();

const Banners = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    Banner6,
    Banner7,
    Banner8,
    Banner9,
    Banner10,
    Banner11,
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
           <h1 className="Modal">BANNERS</h1>
           <div className="Banners">
            {Banners.map((banner) => (
                <div className="Banner">
                    <img src={banner} alt="banner" />
                </div>
            ))}
           </div>
           <div className="Back" onClick={() => setbBanners(false)}><IoMdArrowRoundBack className="Icon"/> Back </div>
        </motion.div>
    );
};

export default Banners;