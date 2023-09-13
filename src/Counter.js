import { useState } from "react";

function Counter(){

 let [state, setState] = useState(100)

    // function increaseCounter(){
    
    //     console.log(counter)
    // }
    // function decreaseCounter(){
       
    //     console.log(counter)
    // }
    return(
        <div>
            <h1>
                {state}
            </h1>
            this is counter component

            {/* <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button> */}
        </div>
    )
}

export default Counter;