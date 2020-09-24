import React,{useContext,useState} from 'react'
import '../components/Styling/Keyboard.css';
import {GlobalContext /*for global state*/} from '../context/GlobalState'
export const Keyboard = () => {
   
    const{displayNumber}=useContext(GlobalContext);

    return (
        <div id="keyboard">
        <button class="operator" id="clear">C</button>
        <button class="operator" id="backspace">CE</button>
        <button class="operator" id="%">%</button>
        <button class="operator" id="/">&#247;</button>
        <button class="number" id="7"onClick={(e)=>displayNumber(7)}>7</button>
        <button class="number" id="8"onClick={(e)=>displayNumber(8)}>8</button>
        <button class="number" id="9"onClick={(e)=>displayNumber(9)}>9</button>
        <button class="operator" id="*">&times;</button>
        <button class="number" id="4"onClick={(e)=>displayNumber(4)}>4</button>
        <button class="number" id="5"onClick={(e)=>displayNumber(5)}>5</button>
        <button class="number" id="6"onClick={(e)=>displayNumber(6)}>6</button>
        <button class="operator" id="-">-</button>
        <button class="number" id="1" onClick={(e)=>displayNumber(1)}>1</button>
        <button class="number" id="2"onClick={(e)=>displayNumber(2)}>2</button>
        <button class="number" id="3"onClick={(e)=>displayNumber(3)}>3</button>
        <button class="operator" id="+">+</button>
        <button class="empty" id="empty"></button>
        <button class="number" onClick={(e)=>displayNumber(0)} id="0">0</button>
        <button class="empty" id="empty"></button>
        <button class="operator" id="=">=</button>
    </div>
    )
}
export default Keyboard;
