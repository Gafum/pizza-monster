import { ReactElement } from "react";

interface selectProps {
   name?: string;
   optionList: Array<{ value: string; name: string }>;
   callBackFunct: (str: string) => void;
}

function SelectElement({
   name,
   optionList,
   callBackFunct,
}: selectProps): ReactElement {
   function changeFilter(e: React.ChangeEvent<HTMLSelectElement>) {
      callBackFunct(e.target.value);
   }

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer"
         }}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="15"
            height="15"
            style={{ position: "relative", top: "1px" }}
         >
            <path d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"></path>
         </svg>
         <select name={name} onChange={changeFilter}>
            {optionList.map((element) => (
               <option value={element.value.toLowerCase()} key={element.value}>
                  {name + " "}
                  {element.name}
               </option>
            ))}
         </select>
      </div>
   );
}

export default SelectElement;
