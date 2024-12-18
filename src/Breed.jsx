import React from 'react'
import {useState , useEffect } from "react";
const Breed = () => {
  const [breed , setBreed ] = useState("")

  const [allDogs , setAllDogs] = useState([])


  async function fetchDogImage(dogName){
    try{
      const url = `https://dog.ceo/api/breed/${dogName.trim().toLowerCase()}/images/random`
      const response = await fetch(url);
      const data = await response.json();
      if(data.code === 404){
        setBreed("")
    
        return;
  
      }
      setBreed(data.message)
  
    }
    catch(err){
      console.error(err);
    }
 
  }
 

  useEffect(() => {
    async function getAllDogs(){
      const url = `https://dog.ceo/api/breeds/list/all`
      const response = await fetch(url);
      const data = await response.json();
        const array = Array(data.message)
        const properties = array.flatMap(Object.keys);
        setAllDogs(properties)
    }
    getAllDogs()
  } , [])
 

  return (
    <div className="container">
    
      <div className="content">
      <h1>Dog Breeds</h1>
      <h2>Get an image of your favorite dog breed</h2>
      <select className="search-button" onChange={(e) => fetchDogImage(e.target.value)}>
          <option value="breed">Breeds</option>
       
      {allDogs.map(dog => (
        <option key={dog} value={dog}>{dog.slice(0,1).toUpperCase() + dog.slice(1,dog.length).toLowerCase()}</option>
      ))}
       </select>
     <br />

      {breed && <img className="dogImage" src={breed} />  }

      </div>
      
    </div>
  )
}

export default Breed
