import React from 'react'

function Form(props) {

    const changeHandler = (e, identifier) => {
        const value = parseInt(e.target.value);
        props.changeHandler (`${identifier}`, isNaN(value) ? "" : value)
    };

    // if the user clicks on an input field, and the value is 0, clear the field
    const focusHandler = (e) => {
        if (e.target.value === "0") {
            e.target.value = "";
        }
    };

    // disables the "Calculate" button if current savings, interestRate or duration is 0
    const invalidInput = props.currentSavings === 0 || props.currentSavings === "" || 
                            props.duration === 0 || props.duration === "" || 
                            props.interestRate === 0 || props.interestRate === "";

  return (
        <form className="form" onSubmit={(e) => {
            // Prevent the default form submission action. This is important!
            e.preventDefault();
            props.investmentCalculator(); 
        }}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings"
                    value={props.currentSavings}
                    onChange={e => {changeHandler(e, "current-savings")}}
                    onFocus={e => {focusHandler(e)}}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
                    <input type="number" id="yearly-contribution" 
                    value={props.yearlyContribution}
                    onChange={e => {changeHandler(e, "yearly-contribution")}}
                    onFocus={e => {focusHandler(e)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="interest-rate">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="interest-rate"
                    value={props.interestRate}
                    onChange={e => {changeHandler(e, "interest-rate")}}
                    onFocus={e => {focusHandler(e)}}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" 
                    value={props.duration}
                    onChange={e => {changeHandler(e, "duration")}}
                    onFocus={e => {focusHandler(e)}}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={props.resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button" disabled = {invalidInput}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form