import styles from "./Home.module.css";

import RenderPizzas from "./Home_Blocks/RenderPizzas";
import FilterBlock from "./Home_Blocks/FilterBlock";
import { LazyMotion, domAnimation, m } from "framer-motion";

function Home(): JSX.Element {
   return (
      <LazyMotion features={domAnimation} strict>
         <m.div
            className={styles.homePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
         >
            <FilterBlock />
            <RenderPizzas />
         </m.div>
      </LazyMotion>
   );
}

export default Home;
