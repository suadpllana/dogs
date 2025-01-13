import React from 'react'

import {useNavigate} from "react-router-dom"
const GetBreedById = ({filteredDog}) => {
     const navigate = useNavigate()
  return (
    <div className="filteredDog">
    
     {filteredDog[0] && 
     <>
     {filteredDog[0].reference_image_id && <img src={`https://cdn2.thedogapi.com/images/${filteredDog[0].reference_image_id}.jpg`}alt="" />}
     
     <div className="dog-info">
     <h1>{filteredDog[0].name} , <p>From: {filteredDog[0].origin}</p></h1>
     <p><strong>Bred for:</strong> {filteredDog[0].bred_for}</p>
     <p><strong>Temperament:</strong> {filteredDog[0].temperament}</p>
     <p><strong>Breed Group:</strong> {filteredDog[0].breed_group}</p>
     <p><strong>Life_span:</strong> {filteredDog[0].life_span}</p>
     <p><strong>Height:</strong> {filteredDog[0].height?.metric} cm</p>
     <p><strong>Weight:</strong> {filteredDog[0].weight?.metric} kgs</p>
     <button className="back-button" onClick={() => navigate("/dogs/breed")}>Back</button>
     </div>
   

     </>
     
     }
      

    </div>
  )
}

export default GetBreedById
