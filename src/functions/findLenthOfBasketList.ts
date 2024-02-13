import { IBasketSliceState } from "../features/BasketSlice";

export const findLenthOfBasketList = ({ items }: IBasketSliceState): number => {
   return Object.keys(items).reduce((prev: number, cur: string) => {
      return prev + items[cur];
   }, 0);
};
