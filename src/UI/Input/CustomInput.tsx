import React, { ReactElement, useCallback, useRef, useState } from "react";
import styles from "./CustomInput.module.css";
import { debounce } from "../../functions/debounce";

interface InputProps {
   placeholder: string;
   callBackFunct: (str: string) => void;
}

function CustomInput({ placeholder, callBackFunct }: InputProps): ReactElement {
   const [text, setText] = useState<string>("");
   const input = useRef<HTMLInputElement>(null);

   const updateSearch = useCallback(
      debounce((str: string) => {
         if (str == "") {
            callBackFunct("");
         }
         if (str.trim().replace(/ /g, "") == "") {
            return;
         }
         callBackFunct(str.trim());
      }, 200),
      []
   );

   function changeText(e: React.ChangeEvent<HTMLInputElement>) {
      setText(e.target.value);
      updateSearch(e.target.value);
   }

   function cleanInput(): void {
      setText("");
      callBackFunct("");
      input.current?.focus();
   }

   return (
      <div className={styles.inputes}>
         <input
            ref={input}
            className={`${styles.theInput} ${text.length > 0 && styles.valid}`}
            type="text"
            value={text}
            id={placeholder.toLocaleLowerCase() + "id"}
            onChange={changeText}
         />
         <label
            className={styles.theInput__label}
            htmlFor={placeholder.toLocaleLowerCase() + "id"}
         >
            {placeholder}
         </label>
         {text.length > 0 && (
            <button onClick={cleanInput} className={styles.closeBtn}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
               >
                  <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path>
               </svg>
            </button>
         )}
      </div>
   );
}

export default CustomInput;
