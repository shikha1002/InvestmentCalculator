import { useState } from 'react';
import InvestmentCalculatorForm from './form/investment-calculator-form';
import Header from './header/header';
import FinalResultList from './table/finalResult';

function App() {
  const [finalResult, setFinalResult] = useState([]);
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
  
    const yearlyData = [];

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData
  };

  const showDetailHandler = (data) => {
    setUserInput(data);
    setFinalResult(calculateHandler(data));

  }

  return (
    <div>
      <Header />

      <InvestmentCalculatorForm showDetails={showDetailHandler} />

      <FinalResultList finalResult={finalResult} initialContribution={userInput ? userInput['current-savings']: ''}/>
    </div>
  );
}

export default App;
