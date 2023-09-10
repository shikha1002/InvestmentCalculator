import { useState } from "react";
import classes from './investment-calculator-form.module.css';

const initialValue = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0
}

function InvestmentCalculatorForm(props) {

    const [userInput, setUserInput] = useState(initialValue);

    const submitHandler = (event) => {
        event.preventDefault();
        props.showDetails(userInput)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((preValue) => {
            return {
                ...preValue,
                [input]: +value,
            }
        });
    }

    const resetHandler = () => {
        setUserInput([]);
        props.showDetails([]);
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={(event) => inputChangeHandler('expected-return', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => inputChangeHandler('duration', event.target.value)} />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>

    )
}

export default InvestmentCalculatorForm;