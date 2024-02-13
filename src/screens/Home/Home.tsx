import styles from "./Home.module.css";

import RenderPizzas from "./Home_Blocks/RenderPizzas";
import FilterBlock from "./Home_Blocks/FilterBlock";

function Home(): JSX.Element {
   return (
      <div className={styles.homePage}>
         <FilterBlock />
         <RenderPizzas />
      </div>
   );
}

export default Home;
