import React, { useEffect, useState } from 'react'
import axios from "axios"

function Jokes() {
    const [joke,setjoke]=useState([])
    const [index,setindex]=useState(0);
    useEffect(()=>{
           axios.get("/api/jokes")
           .then((response)=>{
            setjoke(response.data);
           })
           .catch((error)=>{
            console.log(error)
           })
    },[])
    const nextjokes=()=>{
         setindex((pre)=>{
            if(pre<joke.length-1){
                return pre+1;
            }
            else{
                return pre;
            }
         })
    };
    const prejoke=()=>{
            setindex((pre)=>{
                if(pre>0){
                    return pre-1;
                }
                else{
                    return pre
                }
            })
    }
    if(joke.length==0){
        return null
    }
  return (
    <>
    <h1>Click here for some giggles!</h1>
    {

        (
            <div>
          <h5>{joke[index].id}</h5>
          <h4>{joke[index].setup}</h4>
          <h3>{joke[index].punchline}</h3>
            </div>
        )
    }

    <button  style={{ marginRight: "10px" }} onClick={nextjokes}>
                Next Joke 
    </button>
   
    <button onClick={prejoke}>
                previous Joke
    </button>

    </>
  )
}

export default Jokes