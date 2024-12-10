import { useState } from "react";
import { userCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, increment} = userCounter(10);
    const [show, setshow] = useState(true);

  return (
    <>
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={()=>increment()}>
            +1    
        </button>

        <button
            className="btn btn-primary"
            onClick={() => setshow( !show)}
            >
            show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
