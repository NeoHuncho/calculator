import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    history: null,
    input: [],
    number: null,
    symbol:''
}

//Create Context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function symbolHandler(symbol) {
        dispatch({
            type: 'SYMBOL_HANDLER',
            payload: symbol
        });
    }
    function inputNumber(number) {
        dispatch({
            type: 'INPUT_NUMBER',
            payload: number
        });
    }
    function result() {
        dispatch({
            type: 'RESULT',
        });
    }
    function clear() {
        dispatch({
            type: 'CLEAR',
        });
    }
    function backspace() {
        dispatch({
            type: 'BACKSPACE',
        });
    }


 


    return (<GlobalContext.Provider value={{
        number: state.number,
        history: state.history,
        inputNumber,
        symbolHandler,
        result,
        clear,
        backspace
       
    }}>
        {children}
    </GlobalContext.Provider>)
}