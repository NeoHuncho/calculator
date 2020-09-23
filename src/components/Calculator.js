import React from 'react'
import Keyboard from './Keyboard'
import '../components/Styling/Calculator.css'
export const Calculator = () => {
    return (
        <div id="calculator">
            <div id="result">
                <div id="history">
                    <p id="history-value"></p>
                </div>
                <div id="output">
                    <p id="output-value"></p>
                </div>
            </div>
            <Keyboard />
        </div>

    )
}
export default Calculator;