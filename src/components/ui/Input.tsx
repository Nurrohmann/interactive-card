import { useState } from 'react';

interface InputProps {
  userName: (name: string) => void;
  monthExp: (month: number) => void;
  yearExp: (year: number) => void;
  userNumber: (number: number) => void;
  cvcUser: (number: number) => void;
}

export const Input = ({
  userName,
  monthExp,
  yearExp,
  userNumber,
  cvcUser,
}: InputProps) => {
  const [inputName, setInputName] = useState('');
  const [inputMonth, setInputMonth] = useState(0);
  const [inputYear, setInputYear] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  const [cvcCode, setCvcCode] = useState(0);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputName(name);
    userName(name);
  };
  const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const month = event.target.value;
    setInputMonth(parseFloat(month));
    monthExp(parseFloat(month));
  };
  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setInputYear(parseFloat(year));
    yearExp(parseFloat(year));
  };
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    setInputNumber(parseFloat(number));
    userNumber(parseFloat(number));
  };

  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = event.target.value;
    setCvcCode(parseFloat(cvc));
    cvcUser(parseFloat(cvc));
  };

  return (
    <div>
      <input
        type='text'
        placeholder='e.g Jane Appleseed'
        value={inputName}
        onChange={handleName}
      />
      <input
        type='text'
        placeholder='MM'
        value={inputMonth > 0 ? inputMonth : ''}
        onChange={handleMonth}
      />
      <input
        type='text'
        placeholder='YY'
        value={inputYear > 0 ? inputYear : ''}
        onChange={handleYear}
      />
      <input
        type='text'
        placeholder='e.g 1234 5678 9123 0000'
        value={inputNumber > 0 ? inputNumber : ''}
        onChange={handleNumber}
      />
      <input
        type='text'
        placeholder='e.g. 123'
        value={cvcCode > 0 ? cvcCode : ''}
        onChange={handleCvc}
      />
    </div>
  );
};
