import styles from "./Home.module.css";

import RenderPizzas from "./Home_Blocks/RenderPizzas";
import FilterBlock from "./Home_Blocks/FilterBlock";
import { motion } from "framer-motion";

function Home(): JSX.Element {
   return (
      <motion.div
         className={styles.homePage}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2 }}
         exit={{ opacity: 0 }}
      >
         <FilterBlock />
         <RenderPizzas />
      </motion.div>
   );
}

export default Home;
