import React from 'react'
import {useState , useEffect} from "react"
import defaultDogImage from "./assets/image.png"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Adoption = () => {
const [adoptionList , setAdoptionList] = useState([])
const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    async  function adopt(){
      setLoading(true)
      const url = `https://api-staging.adoptapet.com/search/pet_search?key=${import.meta.env.VITE_API_KEY}&output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0`
      const response = await fetch(url);
      const data = await response.json();
     setAdoptionList(data.pets.slice(0,15))
      setLoading(false)
    }
    adopt()
  } , [])
  return (
    <div>
      <h1>{loading ? "Loading..." : "Adoption List" }</h1>
      {loading ? <AiOutlineLoading3Quarters className="loading-icon"/> : 
       <div className="adoptionListContainer">
      {adoptionList.map((dog,index) => (
        <div key={index}>
          <img className="adoption-dog-image"  src={ dog.large_results_photo_url || defaultDogImage} />
       
          <p>Name: {dog.pet_name}</p>
          <p>Age : {dog.age.slice(0,1).toUpperCase() + dog.age.slice(1,dog.age.length).toLowerCase()}</p>
          <p>Breed: {dog.primary_breed}</p>
          <p>Gender: {dog.sex === "m" ? "Male" : "Female"}</p>
          <p>Address: {dog.addr_city}</p>
          <p>Weight: {dog.size}</p>
        </div>
      ))}
      </div>
      }
     
    </div>
  )
}

export default Adoption
