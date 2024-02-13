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
            alignContent: "center",
         }}
      >
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
