import { IBasketSliceState } from "../features/BasketSlice";

interface IpriceProps extends IBasketSliceState {
   pizzasPrices: IPizzaElement[];
}

export const findPrice = ({ items, pizzasPrices }: IpriceProps): string => {
   let result = Object.keys(items)
      .reduce((prev: number, cur: string) => {
         const myPrice = pizzasPrices.find(({ id }) => id == cur)?.price;
         if (!myPrice) return 0;
         return prev + items[cur] * myPrice;
      }, 0)
      .toFixed(2);
   return result;
};
