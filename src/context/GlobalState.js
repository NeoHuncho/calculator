import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    history:null,
    display:[]
}

//Create Context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function displayNumber(number){
        dispatch({
            type: 'DISPLAY_NUMBER',
            payload: number
        });
    }

    function historyNumber(numbers){
        dispatch({
            type: 'HISTORY_NUMBER',
            payload: numbers
        });
    }


return (<GlobalContext.Provider value={{
    display: state.display,
    history:state.history,
    displayNumber,
    historyNumber
}}>
    {children}
</GlobalContext.Provider>)}