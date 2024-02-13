import styles0 from "./SkeletonLoader.module.css";
import styles1 from "../PizzaCard/Card.module.css";

const styles = { ...styles0, ...styles1 };

function SceletonLoader(): JSX.Element {
   return (
      <div className={styles.card}>
         <div className={styles.skeletonPhoto} />
         <div className={styles.textConteiner}>
            <div className={styles.skeletonText__title}></div>
            <div className={styles.skeletonText__description}></div>
            <div
               className={[
                  styles.skeletonText__title,
                  styles.skeletonText__price,
               ].join(" ")}
            ></div>
         </div>
      </div>
   );
}

export default SceletonLoader;
