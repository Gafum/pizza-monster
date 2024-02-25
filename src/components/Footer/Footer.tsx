import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer({ isBasket = false }: { isBasket?: boolean }): JSX.Element {
   const { pathname } = useLocation();

   /* Create right text */
   const data: { about: string; basket: string } = {
      about: "About",
      basket: "Basket",
   };
   if (pathname == "/about") {
      data.about = "Home";
   } else {
      if (pathname == "/basket") {
         if (!isBasket) return <></>;
         data.basket = "Home";
      }
   }

   function createLink(params: string): string {
      return "/" + (params == "Home" ? "" : params.toLowerCase());
   }

   return (
      <footer className={styles.footer}>
         <Link to={createLink(data.about)} className={styles.footer__links}>
            {data.about}
         </Link>
         <Link to={createLink(data.basket)} className={styles.footer__links}>
            {data.basket}
         </Link>
      </footer>
   );
}

export default Footer;
