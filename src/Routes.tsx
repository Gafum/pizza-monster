import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import { ReactElement } from "react";
import About from "./screens/About/About";
import Basket from "./screens/Basket/Basket";
import PizzaPage from "./screens/PizzaPage/PizzaPage";

function MainRoutesProvider(): ReactElement {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/basket" element={<Basket />} />
         <Route path="/pizza/:pizzaId" element={<PizzaPage />} />

         <Route path="*" element={<>Not Found</>} />
      </Routes>
   );
}

export default MainRoutesProvider;
