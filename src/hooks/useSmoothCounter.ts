import { useState, useEffect, useRef } from "react";

const useSmoothCounter = (
   initialValue: number,
   finalValue: number,
   duration: number
): number => {
   const [startValue, setStartValue] = useState<number>(initialValue);
   const [currentValue, setCurrentValue] = useState<number>(initialValue);
   const startTimeRef = useRef<number | null>(null);

   useEffect(() => {
      const startAnimation = () => {
         startTimeRef.current = performance.now();
         requestAnimationFrame(updateValue);
      };

      const updateValue = (currentTime: number) => {
         if (!startTimeRef.current) return;
         const elapsedTime = currentTime - startTimeRef.current;
         const progress = Math.min(1, elapsedTime / duration);
         const nextValue = startValue + progress * (finalValue - startValue);
         setCurrentValue(nextValue);

         if (progress < 1) {
            requestAnimationFrame(updateValue);
         } else {
            setStartValue(finalValue);
         }
      };

      startAnimation();

      return () => {
         // Cleanup
      };
   }, [initialValue, finalValue, duration]);

   return Math.round(currentValue);
};

export default useSmoothCounter;
