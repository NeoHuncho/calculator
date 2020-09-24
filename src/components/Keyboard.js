import React,{useContext} from 'react'
import '../components/Styling/Keyboard.css';
import {GlobalContext /*for global state*/} from '../context/GlobalState'
export const Keyboard = () => {
   
    const{inputNumber,symbolHandler,result,clear,backspace}=useContext(GlobalContext);

    return (
        <div id="keyboard">
        <button className="operator" id="clear" onClick={()=>clear()}>C</button>
        <button className="operator" id="backspace" onClick={()=>backspace()}>CE</button>
        <button className="operator" id="%" onClick={()=>symbolHandler('%')}>%</button>
        <button className="operator" id="/" onClick={()=>symbolHandler('/')}>&#247;</button>
        <button className="number" id="7"onClick={()=>inputNumber(7)}>7</button>
        <button className="number" id="8"onClick={()=>inputNumber(8)}>8</button>
        <button className="number" id="9"onClick={()=>inputNumber(9)}>9</button>
        <button className="operator" id="*" onClick={()=>symbolHandler('*')}>&times;</button>
        <button className="number" id="4"onClick={()=>inputNumber(4)}>4</button>
        <button className="number" id="5"onClick={()=>inputNumber(5)}>5</button>
        <button className="number" id="6"onClick={()=>inputNumber(6)}>6</button>
        <button className="operator" id="-"  onClick={()=>symbolHandler('-')}>-</button>
        <button className="number" id="1" onClick={()=>inputNumber(1)}>1</button>
        <button className="number" id="2"onClick={()=>inputNumber(2)}>2</button>
        <button className="number" id="3"onClick={()=>inputNumber(3)}>3</button>
        <button className="operator" id="+"  onClick={()=>symbolHandler('+')}>+</button>
        <button className="empty" id="empty"></button>
        <button className="number" onClick={(e)=>inputNumber(0)} id="0">0</button>
        <button className="empty" id="empty"></button>
        <button className="operator" id="=" onClick={()=>result()}>=</button>
    </div>
    )
}
export default Keyboard;
