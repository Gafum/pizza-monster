import styles from "./SkeletonLoader.module.css";

interface SkeletonLoaderprops extends Partial<HTMLDivElement> {}

function SceletonLoader({ className }: SkeletonLoaderprops): JSX.Element {
   return (
      <div className={styles.skeletonCard + " " + className}>
         <div className={styles.skeletonPhoto} />
         <div className={styles.textConteiner}>
            <div className={styles.skeletonText__title}></div>
            <div className={styles.skeletonText__description}></div>
            <div
               className={[
                  styles.skeletonText__title,
                  styles.skeletonText__price,
               ].join(" ")}
            />
         </div>
      </div>
   );
}

export default SceletonLoader;
