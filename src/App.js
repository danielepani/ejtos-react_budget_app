import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            // Budget component
                            <div className="row mt-3">
                                <div className='col-12'>
                                    <Budget/>
                                </div>
                            </div>
                        }

                        {
                            /* Add Remaining component here*/
                            //Remaining component
                            <div className="row mt-3">
                                <div className='col-md-6'>
                                    <Remaining/>
                                </div>
                                <div className='col-md-6'>
                                    <ExpenseTotal/>
                                </div>
                            </div>
                        }

                        {
                            /* Add ExpenseList component here */
                            <div className="row mt-3">
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>
                        }

                        {
                            /* Add AllocationForm component here under */
                            <div className="row mt-3">
                                <div className='col-sm'>
                                    <AllocationForm />
                                </div>
                            </div>
                        }

                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
