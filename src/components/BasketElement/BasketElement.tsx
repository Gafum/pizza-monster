import styles from "./BasketElement.module.css";
import { useDispatch } from "react-redux";
import { removeElementFromBasket } from "../../features/BasketSlice";
import BtnsMenuInBasket from "./BasketElementComponents/AddDeletePizzaInBasket";
import { motion } from "framer-motion";

interface IBasketElement
   extends Omit<IPizzaElement, "name" & "id" & "pic" & "price"> {
   pizzasInBasket: { [key: string]: number };
}

function BasketElement({
   name,
   id,
   pic,
   pizzasInBasket,
   price,
}: IBasketElement): JSX.Element {
   let dispatch = useDispatch();

   function removeFromCart() {
      dispatch(removeElementFromBasket(id));
   }

   return (
      <motion.div layout className={styles.basketElement}>
         <div className={styles.firstRow}>
            <div
               style={{ backgroundImage: `url(${pic})` }}
               className={styles.pizzaPhotoInBasket}
            />
            <span className={styles.nameOfPizza}>{name}</span>
            <BtnsMenuInBasket
               id={id}
               pizzasInBasket={pizzasInBasket}
               price={price}
            />
         </div>

         <BtnsMenuInBasket
            id={id}
            pizzasInBasket={pizzasInBasket}
            price={price}
         />
         <button onClick={removeFromCart} className={styles.removeBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path>
            </svg>
         </button>
      </motion.div>
   );
}

export default BasketElement;
