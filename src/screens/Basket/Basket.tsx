import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import { cleanBasket, pizzasSelector } from "../../features/BasketSlice";
import BasketElement from "../../components/BasketElement/BasketElement";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { findPrice } from "../../functions/findPrice";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

function Basket(): JSX.Element {
   const [pizzasList, setPizzasList] = useState<IPizzaElement[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   /* Redux data */
   const pizzasInBasket = useSelector(pizzasSelector);
   const dispatch = useDispatch();
   const navigator = useNavigate();

   useEffect(() => {
      scrollTo(0, 0);
      setIsLoading(true);
      let url = "https://6599691ea20d3dc41cefb002.mockapi.io/pizzas";

      axios
         .get(url)
         .then((response) => {
            setPizzasList(response.data);
         })
         .catch((error) => {
            console.log(error);
            setPizzasList([]);
         })
         .finally(() => setIsLoading(false));
   }, []);

   function FindRightData({ id }: { id: string }): JSX.Element {
      let data = pizzasList.find((el) => el.id === id) as IPizzaElement;
      if (!Boolean(data)) {
         return <></>;
      }
      return <BasketElement {...data} pizzasInBasket={pizzasInBasket} />;
   }

   function buyProduction() {
      alert("Wait a call!!!");
      navigator("/");
      dispatch(cleanBasket());
   }

   if (!Boolean(Object.keys(pizzasInBasket).length)) {
      return (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.basket}
            style={{
               justifyContent: "center",
               alignContent: "flex-start",
               paddingTop: "20vh",
            }}
         >
            <span>Basket is empty</span>
            <Link to="/" className={styles.basket__btn}>
               Buy something
            </Link>
            <motion.div
               layout
               style={{
                  position: "absolute",
                  zIndex: "2",
                  bottom: 0,
                  width: "100%",
                  maxWidth: "100vw",
                  left: 0,
               }}
            >
               <Footer isBasket={true} />
            </motion.div>
         </motion.div>
      );
   }

   if (isLoading) {
      return <div style={{ height: "100vh" }}>Loading...</div>;
   }

   return (
      <motion.div
         className={styles.basket}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
      >
         <AnimatePresence>
            <motion.div
               layout
               style={{
                  position: "absolute",
                  zIndex: "2",
                  bottom: 0,
                  width: "100%",
                  maxWidth: "100vw",
                  left: 0,
               }}
            >
               <Footer isBasket={true} />
            </motion.div>
            {Object.keys(pizzasInBasket).map((id: string) => (
               <FindRightData key={id} id={id} />
            ))}

            <motion.div
               style={{ paddingBottom: "270px" }}
               className={styles.basket__buyMenu}
               layout
            >
               <Link
                  to="/"
                  className={`${styles.basket__btn} ${styles.basket__btn_clean}`}
               >
                  Add more
               </Link>
               <button className={styles.basket__btn} onClick={buyProduction}>
                  Buy
                  <span>
                     {findPrice({
                        items: pizzasInBasket,
                        pizzasPrices: pizzasList,
                     }) + " $"}
                  </span>
               </button>
            </motion.div>
         </AnimatePresence>
      </motion.div>
   );
}

export default Basket;
