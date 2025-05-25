import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Css/Pages/Home.css";

// Zustand
import { useModalsStore } from "../Zustand/ModalsStore";

// EndScreens
import End1 from "../assets/EndScreens/End1.jpg";
import End2 from "../assets/EndScreens/End2.jpg";

// ThumbNails
import Thumb1 from "../assets/ThumbNails/1.webp";
import Thumb2 from "../assets/ThumbNails/2.webp";
import Thumb3 from "../assets/ThumbNails/3.webp";
import Thumb4 from "../assets/ThumbNails/4.webp";

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

// Components
import Fire from "../Components/Fire";
import Pfps from "../Components/Pfps";

const Home: React.FC = () => {
  const { setbBanners, setbEndScreens, setbThumbNails } = useModalsStore();

  const posts = [
  {
    background: [End1, End2],
    tag: "EndScreens",
    Modal: setbEndScreens,
  },
  {
    background: [Thumb1, Thumb2, Thumb3, Thumb4],
    tag: "ThumbNails",
    Modal: setbThumbNails,
  },
  {
    background: [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10, Banner11],
    tag: "Banners",
    Modal: setbBanners,
  },
];

 const [backgroundIndex, setBackgroundIndex] = useState<number[]>(
    posts.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) =>
        prevIndex.map((index, i) => {
          const images = posts[i].background;
          if (images.length === 0) return index;
          return (index + 1) % images.length;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Fire />
      <h1 className="Muj">MUJ GFX</h1>
      <Pfps />
      <div className="Posts">
        {posts.map((post, index) => (
          <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="PostHover"
          key={index}>
            <div className="Post">
              <AnimatePresence mode="wait">
                <motion.img
                  key={post.background[backgroundIndex[index]]}
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  exit={{ y: -300 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                   }}
                  onClick={() => post.Modal(true)}
                  src={post.background[backgroundIndex[index]]}
                  draggable={false}
                  alt="PostImg"
                />
              </AnimatePresence>
              { post.tag.length >= 1 &&
              <>
              <div className="Tag">
                {post.tag}
              </div>
              </>
              }
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// Sex :D