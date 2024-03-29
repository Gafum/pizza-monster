import { ReactElement } from "react";

import CustomButtonForCard from "./CustomButtonForCard";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({
   id,
   name,
   pic,
   description,
   price,
}: IPizzaElement): ReactElement {
   return (
      <div className={styles.card}>
         <Link to={`/pizza/${id}`} className={styles.canHover}>
            <div
               style={{ backgroundImage: `url(${pic})` }}
               className={styles.pizzaPhoto}
            />
         </Link>
         <div className={styles.textConteiner}>
            <h3
               className={[styles.card__text, styles.card__text_title].join(
                  " "
               )}
            >
               {name}
            </h3>
            <p className={styles.card__text} style={{ flex: "1" }}>
               {description}
            </p>

            <div className={styles.card__buyBlock}>
               <p
                  className={[
                     styles.card__text,
                     styles.card__buyBlock__text_price,
                  ].join(" ")}
               >
                  {price.toFixed(2) + " $"}
               </p>
               <CustomButtonForCard id={id} />
            </div>
         </div>
      </div>
   );
}

export default Card;
