import React from 'react'

function ResultRow({entry, rowKey}) {
    /**
     * @param {Object[]} yearlyData - An array of objects containing yearly investment data.
     * @param {number} yearlyData[].year - The year of the investment.
     * @param {number} yearlyData[].totalSavings - The total savings for the year.
     * @param {number} yearlyData[].interestYear - The interest earned for the year.
     * @param {number} yearlyData[].totalInterest - The total interest earned up to the current year.
     * @param {number} yearlyData[].investedCapital - The total amount of capital invested up to the current year.
     */
  return (
    <tr key={rowKey}>
        <td>{entry.year}</td>
        <td>{(entry.totalSavings).toFixed(2)}</td>
        <td>{(entry.interestGained).toFixed(2)}</td>
        <td>{(entry.totalInterest).toFixed(2)}</td>
        <td>{(entry.investedCapital).toFixed(2)}</td>
    </tr>
  )
}

export default ResultRow