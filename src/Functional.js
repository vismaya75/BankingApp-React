
import React, {useState,useEffect} from 'react';

function Functional(){
    const [count,setCount]=useState(0);
    const names=["1","2"]
    useEffect(()=>{ //componentDidMount

    })
    useEffect(()=>{ //componentDidupdate

    },[count])  //for component update

    useEffect(()=>{ //componentwillunmount 
        return()=>{  //function is return from useEffect unmount aavumbol call aavum

        }
    })
    const increment =()=>{
        setCount(count+1);
    }
    return <h1>
        {
            count===0? <p>Your count is zero</p>:<p>Yout count id greater than zero</p>
        }
        {
            names.map(n=><h2 key={n}>{n}</h2>)
        }
    
        
         <button onClick={increment}>Increment</button> 
    </h1>

}
export default Functional;