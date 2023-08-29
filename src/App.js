import Header from './Header';
import Form from './Form';
import Result from './Result';
import React, { useState } from 'react';

function App() {
  
  // define states 
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [completeData, setCompleteData] = useState([]);

  const yearlyData = []; // per-year results will be stored here

  // this shared handler function is called when the user changes any of the input fields
  const setStates = (identifier, value) => {
    if (identifier === "current-savings") {
      setCurrentSavings(value);
    }
    else if (identifier === "yearly-contribution") {
      if (value === "") value = 0; // if the user deletes the input, set the value to 0
      setYearlyContribution(value);
    }
    else if (identifier === "interest-rate") {
      setInterestRate(value);
    }
    else if (identifier === "duration") {
      setDuration(value);
    }
  };

  // reset handler
  const resetHandler = () => {
    setCurrentSavings(0);
    setYearlyContribution(0);
    setInterestRate(0);
    setDuration(0);
    setCompleteData([]);
  };

    /**
   * Calculates the investment results for each year based on the user inputs.
   * Called when the user clicks the "Calculate" button.
   * @returns {void}
   */
  const investmentCalculator = () => {
    let totalSavings = currentSavings; // total savings at the end of each year
    let interestGained = 0; // interest gained by the end of each year
    let totalInterest = 0; // total interest gained (total sum of yearly interest)
    let investedCapital = currentSavings; // total invested capital (sum of yearly contributions)

    // loop through each year and calculate the results for that year
    for (let year = 1; year <= duration; year++) {
      interestGained = (totalSavings + yearlyContribution) * (interestRate / 100);
      interestGained = parseFloat(interestGained.toFixed(2)); // limit to two decimal points
      totalSavings +=  yearlyContribution + interestGained; //comes after interestGained 
      totalInterest += interestGained;
      investedCapital += yearlyContribution;

      // push the results for the current year to the yearlyData array
      yearlyData.push({
      year, totalSavings, interestGained, totalInterest, investedCapital
      });
    }

    // update the completeData state with the yearlyData array
    setCompleteData(yearlyData);
  };

  return (
    <div>
      <Header />

      {/* This is a controlled component. States are passed to synchronize the values with states */}
      <Form changeHandler = {setStates}
      investmentCalculator = {investmentCalculator}
      resetHandler = {resetHandler} 
      currentSavings = {currentSavings} 
      yearlyContribution = {yearlyContribution} 
      interestRate = {interestRate}
      duration = {duration} 
      setYearlyContribution = {setYearlyContribution}/>

      <Result yearlyData = {completeData} />

    </div>
  );
}

export default App;
