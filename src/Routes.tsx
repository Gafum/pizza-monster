import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import { ReactElement } from "react";
import About from "./screens/About/About";
import Basket from "./screens/Basket/Basket";
import PizzaPage from "./screens/PizzaPage/PizzaPage";
import { AnimatePresence } from "framer-motion";

function MainRoutesProvider(): ReactElement {
   const location = useLocation();
   return (
      <AnimatePresence mode="wait" initial={false}>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/pizza/:pizzaId" element={<PizzaPage />} />

            <Route path="*" element={<>Not Found</>} />
         </Routes>
      </AnimatePresence>
   );
}

export default MainRoutesProvider;
