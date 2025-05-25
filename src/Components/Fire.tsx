import React, { useEffect, useState } from "react";
import "../Css/Components/Fire.css";

type Fire = {
  id: number;
  left: number;
};

const FireAh = (id: number): Fire => ({
  id,
  left: Math.random() * 95,
});

const Fire: React.FC = () => {
  const [Fire, setFire] = useState<Fire[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFire((prev) => [...prev, FireAh(Date.now() + Math.random())]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id: number) => {
    setFire((prev) => prev.filter((Fire) => Fire.id !== id));
  };

  return (
    <div className="FloatingDiv">
      {Fire.map((Fire) => (
        <div
          key={Fire.id}
          className="Fire"
          onAnimationEnd={() => handleAnimationEnd(Fire.id)}
          style={{
            left: `${Fire.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Fire;