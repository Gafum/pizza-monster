import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./PizzaPage.module.css";
import CustomButtonForCard from "../../components/PizzaCard/CustomButtonForCard";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { createPictureURL } from "../../functions/createPictureURL";

function PizzaPage(): JSX.Element {
   const data = useParams();
   const [pizza, setPizza] = useState<IPizzaElement>();
   const [errorWithData, setErrorWithData] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   //Get Data about pizza
   useEffect(() => {
      if (!data || !data.pizzaId) {
         console.log("Problems with data");
         setErrorWithData(true);
         return;
      }

      const url = `https://6599691ea20d3dc41cefb002.mockapi.io/pizzas?id=${data.pizzaId}`;
      setIsLoading(true);

      axios
         .get(url)
         .then((response) => {
            setPizza(response.data[0]);
         })
         .catch((error) => {
            console.log(error);
            setErrorWithData(true);
         })
         .finally(() => setIsLoading(false));
   }, [data]);

   // Loading Data
   if (isLoading) {
      return (
         <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
         >
            Loading...
         </m.div>
      );
   }

   // Pizza not found
   if (errorWithData || !pizza) {
      return <div>Pizza not found</div>;
   }

   function isWide() {
      if (window.innerWidth > 720) {
         return true;
      } else {
         return false;
      }
   }

   return (
      <LazyMotion features={domAnimation}>
         <div className={style.boxForImg}>
            <m.div
               className={style.pizzaImg}
               style={{
                  backgroundImage: `url("${createPictureURL(pizza?.id)}")`,
               }}
               initial={{
                  opacity: 0.5,
                  right: isWide() ? -50 : 0,
                  top: isWide() ? 0 : -50,
                  zIndex: 0,
               }}
               animate={{ opacity: 1, right: 0, top: 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
            />
         </div>
         <m.div
            className={style.pizzaPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
         >
            <div
               className={style.staticpizzaImg}
               style={{
                  backgroundImage: `url("${createPictureURL(pizza?.id)}")`,
               }}
            />
            <h2 className={style.pizzaName}>{pizza?.name}</h2>
            <p className={style.pizzaDescription}>{pizza?.description}</p>
            <div className={style.buyContainer}>
               <span className={style.pizzaPirce}>
                  {pizza?.price.toFixed(2)} $
               </span>
               <CustomButtonForCard
                  id={pizza?.id}
                  addingClasses={[style.buyPizzaBtn]}
               />
            </div>
         </m.div>
      </LazyMotion>
   );
}

export default PizzaPage;
