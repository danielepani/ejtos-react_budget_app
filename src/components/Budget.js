import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const budget = parseInt(event.target.value || 0, 10);
        if (budget < 0 || budget > 20000) {
            alert('Budget must be between 0 and 20000')
            return
        }
        setNewBudget(budget);
    }

    const handleSetBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <button onClick={handleSetBudget}>Save</button>
        </div>
    );
};
export default Budget;
