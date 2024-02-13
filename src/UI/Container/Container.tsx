import { ReactElement } from "react";

import styles from "./Container.module.css";

function Container({ children }: { children: ReactElement }): ReactElement {
   return <div className={styles.mainContainer}>{children}</div>;
}

export default Container;
