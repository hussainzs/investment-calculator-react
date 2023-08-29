import React from 'react'
import ResultRow from './ResultRow';

function Result({yearlyData}) {

    /**
     * Renders a table of yearly investment data.
     * @returns A table element containing the investment data.
     */
    const resultRows = yearlyData.map((entry) => {
        return (
            <ResultRow entry={entry}  key={entry.year}/>
        )
    });

    const result_rows = resultRows.length > 0 ? resultRows : <tr><td colSpan="5" className='no_result'>No results to display</td></tr>;

  return (
    <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {result_rows}
    </tbody>
  </table>
  )
}

export default Result;