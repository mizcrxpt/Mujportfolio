import React from "react";
import "../Css/Components/Pfps.css";

// Pfps
import Pfp1 from "../assets/Pfps/No backgrnd.png";
import Pfp2 from "../assets/Pfps/PFP-modified.png";
import Pfp3 from "../assets/Pfps/august pfp.png";
import Pfp4 from "../assets/Pfps/balfers.png";
import Pfp5 from "../assets/Pfps/cs2pfp-modified.png";
import Pfp6 from "../assets/Pfps/gamblingpfp-modified.png";
import Pfp7 from "../assets/Pfps/shtick_cs-modified.png";

const Pfps: React.FC = () => {

const Pfps = [
    Pfp1,
    Pfp2,
    Pfp3,
    Pfp4,
    Pfp5,
    Pfp6,
    Pfp7,
]

    return (
        <div className="Pfps">      
            {Pfps.map((pfp, index) => (
                <img 
                className="Pfp"
                src={pfp}
                alt="Pfp" 
                key={index} 
                />
            ))}
        </div>
    );
};

export default Pfps;