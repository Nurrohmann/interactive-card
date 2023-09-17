import { useState } from "react";
import { Input } from "../utils/Input";
import { Card } from "../utils/Card";

export const InputWrapper = () => {
   const [displayName, setDisplayName] = useState("");
   const [displayMonth, setDisplayMonth] = useState(0);
   const [displayYear, setDisplayYear] = useState(0);
   const [displayNumber, setDisplayNumber] = useState(0);

   const handleInputName = (name: string) => {
      setDisplayName(name);
   };

   const handleInputMonth = (month: number) => {
      setDisplayMonth(month);
   };
   const handleInputYear = (year: number) => {
      setDisplayYear(year);
   };
   const handleInputNumber = (number: number) => {
      setDisplayNumber(number);
   };

   return (
      <div className='App'>
         <h1>Interactive Card Form</h1>
         <Card
            name={displayName}
            number={displayNumber}
            month={displayMonth}
            year={displayYear}
         />
         <Input
            userName={handleInputName}
            userNumber={handleInputNumber}
            monthExp={handleInputMonth}
            yearExp={handleInputYear}
         />
      </div>
   );
};
