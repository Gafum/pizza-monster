import {
   matchPath,
   Route,
   RouteProps,
   Routes,
   useLocation,
} from "react-router-dom";
import Home from "./screens/Home/Home";
import { ReactElement, useEffect } from "react";
import About from "./screens/About/About";
import Basket from "./screens/Basket/Basket";
import PizzaPage from "./screens/PizzaPage/PizzaPage";
import { AnimatePresence } from "framer-motion";

interface specialRouteData {
   titleName: string;
   path: string;
}

type routeData = RouteProps & specialRouteData;

const routes: routeData[] = [
   {
      path: "/",
      element: <Home />,
      titleName: "Pizza Monster",
   },
   {
      path: "/about",
      element: <About />,
      titleName: "About Pizza Monster",
   },
   {
      path: "/basket",
      element: <Basket />,
      titleName: "Basket in Pizza Monster",
   },
   {
      path: "/pizza",
      element: <>The Path is not right. Give us the right ID (((</>,
      titleName: "Pizza is not found",
   },
   {
      path: "/pizza/:pizzaId",
      element: <PizzaPage />,
      titleName: "Pizza Page",
   },
];

function MainRoutesProvider(): ReactElement {
   const location = useLocation();

   useEffect(() => {
      let newTitle = routes.find(({ path }) =>
         matchPath(path, location.pathname)
      )?.titleName;

      if (!newTitle) {
         newTitle = "Page in Pizza Monster";
      }

      document.title = newTitle;
   }, [location]);

   return (
      <AnimatePresence mode="wait" initial={false}>
         <Routes location={location} key={location.pathname}>
            {routes.map((routeData) => {
               return <Route key={routeData.path} {...routeData} />;
            })}

            <Route path="*" element={<>Not Found</>} />
         </Routes>
      </AnimatePresence>
   );
}

export default MainRoutesProvider;
