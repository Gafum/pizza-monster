import CustomInput from "../../../UI/Input/CustomInput";

import { changeSearch, changeFilter } from "../../../features/SearchSlice";
import { useDispatch } from "react-redux";

import styles from "../Home.module.css";
import SelectElement from "../../../UI/Select/SeceltElement";

function FilterBlock(): JSX.Element {
   const dispatch = useDispatch();

   function changeSearchLocal(str: string): void {
      dispatch(changeSearch(str));
   }
   function changeFilterLocal(str: string): void {
      dispatch(changeFilter(str));
   }

   return (
      <section className={styles.filterBlock}>
         <CustomInput placeholder="Search" callBackFunct={changeSearchLocal} />
         <SelectElement
            optionList={[
               { value: "id", name: "rating" },
               { value: "price", name: "price" },
               { value: "name", name: "alphabet" },
            ]}
            name="Filter by"
            callBackFunct={changeFilterLocal}
         />
      </section>
   );
}

export default FilterBlock;
