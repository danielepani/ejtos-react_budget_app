import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CustomSelect from "./CustomSelect";

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

    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
    }

    const handleSetBudget = () => {
        const totalExpenses = expenses.reduce((total, item) => {
            if (isNaN(total)) total = total.cost;
            return (total += item.cost);
        });

        console.log(totalExpenses)

        if (newBudget < totalExpenses) {
            alert(`Budget cannot be lower than the expenses (${totalExpenses})`);
            return
        }

        if (newBudget > 20000) {
            alert(`Budget cannot exceed ${currency} 20000`);
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
            <CustomSelect value={currency} onChange={handleCurrencyChange} options={currencies} />
        </div>
    );
};
export default Budget;
