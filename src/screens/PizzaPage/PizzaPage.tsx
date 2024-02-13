import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./PizzaPage.module.css";
import CustomButtonForCard from "../../components/PizzaCard/CustomButtonForCard";

function PizzaPage(): JSX.Element {
   const data = useParams();
   const [pizza, setPizza] = useState<IPizzaElement>();
   const [errorWithData, setErrorWithData] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      if (!data || !data.pizzaId) {
         console.log("Problems with data");
         setErrorWithData(true);
         return;
      }

      const url = `https://6599691ea20d3dc41cefb002.mockapi.io/pizzas?id=${data.pizzaId}`;
      setIsLoading(true);

      axios
         .get(url)
         .then((response) => {
            setPizza(response.data[0]);
         })
         .catch((error) => {
            console.log(error);
            setErrorWithData(true);
         })
         .finally(() => setIsLoading(false));
   }, [data]);

   if (isLoading) {
      return <>Loading</>;
   }

   if (errorWithData || !pizza) {
      return <div>Pizza not found</div>;
   }

   return (
      <>
         <div className={style.boxForImg}>
            <div
               className={style.pizzaImg}
               style={{ backgroundImage: `url(${pizza?.pic}` }}
            />
         </div>
         <div className={style.pizzaPage}>
            <div
               className={style.staticpizzaImg}
               style={{ backgroundImage: `url(${pizza?.pic}` }}
            />
            <h2 className={style.pizzaName}>{pizza?.name}</h2>
            <p className={style.pizzaDescription}>{pizza?.description}</p>
            <p className={style.buyContainer}>
               <span className={style.pizzaPirce}>
                  {pizza?.price.toFixed(2)} $
               </span>
               <CustomButtonForCard
                  id={pizza?.id}
                  addingClasses={[style.buyPizzaBtn]}
               />
            </p>
         </div>
      </>
   );
}

export default PizzaPage;
