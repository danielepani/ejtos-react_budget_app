import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const currencies = [
        {name: 'Dollar', symbol: '$'},
        {name: 'Euro', symbol: '€'},
        {name: 'GBP', symbol: '£'},
        {name: 'Rupee', symbol: '₹'}
    ]

    const handleBudgetChange = (event) => {
        const budget = parseInt(event.target.value || 0, 10);

        setNewBudget(budget);
    }

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    const handleSetBudget = () => {
        const totalExpenses = expenses.reduce((total, item) => {
            if (isNaN(total)) total = total.cost;
            return (total += item.cost);
        });

        console.log(totalExpenses)

        if (newBudget < totalExpenses || budget > 20000) {
            alert(`Budget cannot be lower than the expenses (${totalExpenses})`);
            return
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }
    return (
        <div className='alert alert-secondary d-flex justify-content-between'>
            <label>
                <span>Budget: {currency}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
                <button onClick={handleSetBudget}>Save</button>
            </label>
            <select className="form-control d-inline-block w-25" value={currency} onChange={handleCurrencyChange}>
                {currencies.map((currency, index) => {
                    return (<option
                        key={index}
                        value={currency.symbol}
                        >
                        {currency.symbol} {currency.name}
                    </option>)
                })}
            </select>
        </div>
    );
};
export default Budget;
