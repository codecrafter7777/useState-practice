import { useState } from "react"
import "./counter.css"

function Counter(){

    var [count,setCount] = useState(0)

    function increment(){
        var newcount=count+1
        setCount(newcount)


    }


    function decrement(){

        var newcount=count-1
        setCount(newcount)
        

    }


    return(<div className="container">
        <h1 className="heading">Counter App</h1>
        <h1 className="H1">{count}</h1><div className="Buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>

    </div>)
}

export default Counter