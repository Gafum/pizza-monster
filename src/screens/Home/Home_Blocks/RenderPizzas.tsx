import { useEffect, useState } from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import styles from "../Home.module.css";

import Card from "../../../components/PizzaCard/Card";
import SceletonLoader from "../../../components/SkeletonLoader/SkeletonLoaderCard";
import { changeSearch, filterSelector } from "../../../features/SearchSlice";

function RenderPizzas(): JSX.Element {
   const [pizzasList, setPizzasList] = useState<IPizzaElement[] | null>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const dispatch = useDispatch();

   const { searchValue, filterValue } = useSelector(filterSelector);

   // Filtering after server
   function filteringData(element: IPizzaElement): boolean {
      if (!Boolean(searchValue.length)) return true;
      function checkData(str: string): boolean {
         return str.toLowerCase().includes(searchValue.toLowerCase());
      }
      let res: boolean =
         checkData(element.name) || checkData(element.description);
      return res;
   }

   // Clean Search
   useEffect(() => {
      return () => {
         dispatch(changeSearch(""));
      };
   }, []);

   // Load Data From server
   useEffect(() => {
      scrollTo(0, 0);
      setIsLoading(true);
      let url = "https://6599691ea20d3dc41cefb002.mockapi.io/pizzas";

      if (searchValue.length > 0) {
         url += `?search=${searchValue}`;
      } else {
         url += `?sortBy=${filterValue}`;
      }

      axios
         .get(url)
         .then((response) => {
            setPizzasList(response.data);
         })
         .catch((error) => {
            console.log(error);
            setPizzasList([]);
         })
         .finally(() => setIsLoading(false));
   }, [searchValue, filterValue, changeSearch]);

   // Loading Data
   if (isLoading) {
      return (
         <section className={styles.pizzaList}>
            {[...Array(9)].map((_, i) => (
               <SceletonLoader key={i} />
            ))}
         </section>
      );
   }

   // Server Problem
   if (!Boolean(pizzasList)) {
      return (
         <div className={styles.error}>
            <span>Problem with server(</span>
         </div>
      );
   }

   // Search return empty list
   if (searchValue.length > 0 && !Boolean(pizzasList?.length)) {
      return (
         <div className={styles.error}>
            <span>We can't find that pizza</span>
         </div>
      );
   }

   return (
      <section className={styles.pizzaList}>
         {pizzasList?.filter(filteringData).map((pizza) => (
            <Card {...pizza} key={pizza.id} />
         ))}
      </section>
   );
}

export default RenderPizzas;
