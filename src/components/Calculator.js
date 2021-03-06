import React, { useContext } from 'react';
import { GlobalContext /*for global state*/ } from '../context/GlobalState'
import Keyboard from './Keyboard';
import '../components/Styling/Calculator.css'
export const Calculator = () => {
    const { number, history } = useContext(GlobalContext);

    return (
        <div id="calculator">
            <div id="result">
                <div id="history">
                    <p id="history-value">{history}</p>
                </div>
                <div id="output">
                    <p id="output-value">{number}</p>
                </div>
            </div>
            <Keyboard />
        </div>

    )
}
export default Calculator;