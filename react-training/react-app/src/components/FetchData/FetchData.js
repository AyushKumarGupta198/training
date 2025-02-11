import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [trigger,setTrigger]=useState(0);

    useEffect(()=>{
        async function fetchJoke() {
            try {
                setLoading(true)
                let response = await fetch("https://api.chucknorris.io/jokes/random");
                let data = await response.json();                                     
                setData(data.value)
                setLoading(false)              
            } catch (error) {
                setLoading(false)
                console.log("Error fetching joke:", error);
            }
        }
        fetchJoke()
        return ()=>{console.log("clean up code(component unmounted)")};
        
    },[trigger])
  return (
    <>
        <h1>today's joke</h1>
        <h2>{loading?"Loading...":data}</h2>
        <button onClick={()=>(setTrigger(prev=>prev+1))}>new joke</button>
    </>
  )
}

export default FetchData