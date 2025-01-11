import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer({ isBasket = false }: { isBasket?: boolean }): JSX.Element {
   const { pathname } = useLocation();

   if (pathname == "/basket") {
      // It will appear in the end of the page. But we don't need it in the basket page
      if (!isBasket) return <></>;
      // It will appear in special component in the basket page ===>
   }

   return (
      <footer className={styles.footer}>
         <Link to={"/"} className={styles.footer__links}>
            Home
         </Link>
         <Link to={"/about"} className={styles.footer__links}>
            About
         </Link>
         <Link to={"/basket"} className={styles.footer__links}>
            Basket
         </Link>
      </footer>
   );
}

export default Footer;
