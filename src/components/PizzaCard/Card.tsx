import { ReactElement } from "react";

import CustomButtonForCard from "./CustomButtonForCard";

import { Link } from "react-router-dom";
import { createPictureURL } from "../../functions/createPictureURL";
import SceletonLoader from "../SkeletonLoader/SkeletonLoaderCard";

import styles from "./Card.module.css";
import skeletonStyles from "../SkeletonLoader/SkeletonLoader.module.css";

function Card({ id, name, description, price }: IPizzaElement): ReactElement {
   return (
      <div className={styles.cardConteiner}>
         <SceletonLoader className={styles.skeletonCard} />
         <div className={styles.card}>
            <Link to={`/pizza/${id}`} className={styles.canHover}>
               <div
                  className={
                     styles.pizzaBackPhoto +
                     " " +
                     styles.additionClass +
                     " " +
                     skeletonStyles.skeletonPhoto
                  }
               />
               <div
                  style={{
                     backgroundImage: `url("${createPictureURL(id)}")`,
                  }}
                  className={styles.pizzaPhoto}
               />
            </Link>
            <div className={styles.textConteiner} style={{ zIndex: 2 }}>
               <h3
                  className={[styles.card__text, styles.card__text_title].join(
                     " "
                  )}
               >
                  {name}
               </h3>
               <p
                  className={[styles.card__text, styles.max_line_3].join(" ")}
                  style={{ flex: "1" }}
               >
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
      </div>
   );
}

export default Card;
