import { useDispatch, useSelector } from "react-redux";
import {
   pizzasSelector,
   pushElementInBasket,
} from "../../features/BasketSlice";
import styles from "./Card.module.css";

function CustomButtonForCard({
   id,
   addingClasses = [],
}: {
   id: string;
   addingClasses?: string[];
}): JSX.Element {
   const numberOfPizza = useSelector(pizzasSelector)[id];
   const dispatch = useDispatch();

   function buyPizza() {
      dispatch(pushElementInBasket(id));
   }

   return (
      <div
         style={{ width: "100%" }}
         className={addingClasses.length > 0 ? "" : styles.canHover}
      >
         <button
            onClick={buyPizza}
            className={[
               styles.card__button,
               numberOfPizza > 0 ? styles.card__button_add : "",
               ...addingClasses,
            ].join(" ")}
         >
            {numberOfPizza > 0 ? (
               <>
                  Add <span>{numberOfPizza}</span>
               </>
            ) : (
               "Buy"
            )}
         </button>
      </div>
   );
}

export default CustomButtonForCard;
