import { useState } from "react";

function Counter(){

 let [state, setState] = useState(100)
 let i=state;
console.log('hyyyy conter component ran',i, useState(state), state)
    function increaseCounter(){
    
        setState(state => state + 1)
    }
    function decreaseCounter(){
       
       setState(state => state -1)
    }
    return(
        <div>
            <h1>
                {state}
            </h1>
            this is counter component

            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}

export default Counter;