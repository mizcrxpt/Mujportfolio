import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./Css/index.css";

// Zustand
import { useModalsStore } from "./Zustand/ModalsStore";

// Modals
import Banners from "./Modals/Banners";
import EndScreens from "./Modals/EndScreens";
import ThumbNails from "./Modals/ThumbNails";

// Pages
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const { bBanners, bEndScreens, bThumbNails } = useModalsStore();


  if (performance.navigation.type == 1) window.location.href = "/";
  return (
    <>
    <AnimatePresence>
    { bBanners && <Banners />}
    { bEndScreens && <EndScreens />}
    { bThumbNails && <ThumbNails />}
    </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

document.addEventListener("contextmenu", (e) => e.preventDefault());
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);