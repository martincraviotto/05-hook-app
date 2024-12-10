import { useMemo, useState } from "react";
import { userCounter } from "../hooks"


const heavyStuff = (iterationNumber=100) =>{
  for(let i=0; i < iterationNumber; i++){
    console.log('Ahí vamos');
  }

  return `${iterationNumber} iteraciones realizdas`;

}


export const MemoHook = () => {

    const {counter, increment} = userCounter(1500);
    const [show, setshow] = useState(true);


    const memorizedValue =  useMemo(()=>heavyStuff(counter),[counter]);

  return (
    <>
        <h1> MemoHook  - Counter: <small> {counter} </small> </h1>
        <hr />

        <h4>{ memorizedValue}</h4>

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
