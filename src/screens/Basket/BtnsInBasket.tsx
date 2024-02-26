import styles from "./Basket.module.css";
import { Link } from "react-router-dom";
import { findPrice } from "../../functions/findPrice";
import { motion } from "framer-motion";
import useSmoothCounter from "../../hooks/useSmoothCounter";

export function BtnsInBasket({
   buyProduction,
   pizzasInBasket,
   pizzasList,
}: {
   buyProduction: () => void;
   pizzasInBasket: { [key: string]: number };
   pizzasList: IPizzaElement[];
}) {
   // Smooth price animation
   const priceValue = useSmoothCounter(
      0,
      Number(
         findPrice({
            items: pizzasInBasket,
            pizzasPrices: pizzasList,
         })
      ) * 100,
      500
   );

   return (
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
            <span>{(priceValue / 100).toFixed(2) + " $"}</span>
         </button>
      </motion.div>
   );
}
