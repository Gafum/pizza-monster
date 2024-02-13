import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import { cleanBasket, pizzasSelector } from "../../features/BasketSlice";
import BasketElement from "../../components/BasketElement/BasketElement";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { findPrice } from "../../functions/findPrice";

function Basket(): JSX.Element {
   const [pizzasList, setPizzasList] = useState<IPizzaElement[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   /* Redux data */
   const pizzasInBasket = useSelector(pizzasSelector);
   const dispatch = useDispatch();
   const navigator = useNavigate();

   useEffect(() => {
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
         <div className={styles.basket} style={{ justifyContent: "center" }}>
            <span>Basket is empty</span>
            <Link to="/" className={styles.basket__btn}>
               Buy something
            </Link>
         </div>
      );
   }

   if (isLoading) {
      return <span>Loading...</span>;
   }

   return (
      <div className={styles.basket}>
         {Object.keys(pizzasInBasket).map((id: string) => (
            <FindRightData key={id} id={id} />
         ))}
         <div className={styles.basket__buyMenu}>
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
         </div>
      </div>
   );
}

export default Basket;
