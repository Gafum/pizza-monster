import { useDispatch } from "react-redux";
import {
   popElementInBasket,
   pushElementInBasket,
} from "../../../features/BasketSlice";

import styles from "../BasketElement.module.css";

interface IAddDeletePizzaProps {
   id: string;
   pizzasInBasket: { [key: string]: number };
   price: number;
}

function BtnsMenuInBasket({
   id,
   pizzasInBasket,
   price,
}: IAddDeletePizzaProps): JSX.Element {
   const numberOfPizza = pizzasInBasket[id];
   const dispatch = useDispatch();

   function addPizza() {
      dispatch(pushElementInBasket(id));
   }
   function deletePizza() {
      dispatch(popElementInBasket(id));
   }

   return (
      <div className={styles.btnsMenu}>
         <div className={styles.addDeletePizza}>
            <button onClick={deletePizza} className={`${styles.plusBtn} `}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 32 32"
                  viewBox="0 0 32 32"
               >
                  <path d="M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12S22.6,28,16,28z M16,6.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5    s9.5-4.3,9.5-9.5S21.2,6.5,16,6.5z" />
                  <path d="M21.8,17.3H10.2c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3h11.6c0.7,0,1.3,0.6,1.3,1.3C23.1,16.7,22.5,17.3,21.8,17.3    z" />
               </svg>
            </button>
            <span className={styles.numberOfELemenet}>{numberOfPizza}</span>
            <button onClick={addPizza} className={styles.plusBtn}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 32 32"
                  viewBox="0 0 32 32"
               >
                  <path d="M16,4C9.4,4,4,9.4,4,16s5.4,12,12,12s12-5.4,12-12S22.6,4,16,4z M16,25.5c-5.2,0-9.5-4.3-9.5-9.5s4.3-9.5,9.5-9.5   s9.5,4.3,9.5,9.5S21.2,25.5,16,25.5z" />
                  <path d="M21.8,14.7h-4.5v-4.5c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v4.5h-4.5c-0.7,0-1.3,0.6-1.3,1.3   c0,0.7,0.6,1.3,1.3,1.3h4.5v4.5c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3v-4.5h4.5c0.7,0,1.3-0.6,1.3-1.3   C23.1,15.3,22.5,14.7,21.8,14.7z" />
               </svg>
            </button>
         </div>
         <span
            className={styles.myPrice}
            title={`${numberOfPizza} * ${price}$`}
         >
            {(numberOfPizza * price).toFixed(2)} $
         </span>
      </div>
   );
}

export default BtnsMenuInBasket;
