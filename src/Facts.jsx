import React from 'react'
import {useState} from "react"
const Facts = () => {
  const [fact , setFact] = useState("")


  async function generateFact(){
  

    const response = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await response.json()
    setFact(data.data[0].attributes.body);
    console.log(data)
 
  }
  
  return (
    <div className="factContainer">
 <div className="fact">
        <h1>Dog Facts🐕</h1>
        <p>{fact}</p>
        <button onClick={generateFact}>Next Fact</button>
    </div>
    </div>
   
  )
}

export default Facts

