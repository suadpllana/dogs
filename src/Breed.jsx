import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
const Breed = ({ dogId, setDogId, setFilteredDog }) => {
  const [breed, setBreed] = useState("");
  const [allDogs, setAllDogs] = useState([]);
  const [storedDogsData, setStoredDogsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    async function getAllDogBreeds() {
      setLoading(true);
      const url = "https://api.thedogapi.com/v1/breeds";
      const response = await fetch(url);
      const data = await response.json();

      setAllDogs(data);
      setStoredDogsData(data);
      setLoading(false);
    }
    getAllDogBreeds();
  }, []);

  function getDogById(id) {
    const filteredDog = allDogs.filter((dog) => dog.id === id);
    setFilteredDog(filteredDog);
    setDogId(id);
    navigate(`/dogs/breed/${id}`);
  }
  function filterBreed(text) {
    const filterDogByName = storedDogsData.filter((dog) =>
      dog.name.toLowerCase().includes(text.toLowerCase())
    );
    setAllDogs(filterDogByName);
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Dog Breeds</h1>

        <br />
        <input
          className="search-input"
          type="text"
          onChange={(e) => filterBreed(e.target.value)}
          placeholder="Search for a dog/breed"
        />
        <button className="search-button">Search</button>
          {!loading ?
            <div className="breedContainer">
            {allDogs.length > 0 &&
              allDogs.map((dog) => (
                <div
                  key={dog.reference_image_id}
                  className="dog-breed"
                  onClick={() => getDogById(dog.id)}
                >
                  {dog.reference_image_id && (
                    <img
                      src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                      alt=""
                    />
                  )}
  
                  <h4>{dog.name}</h4>
                  <p>Bred for {dog.bred_for}</p>
                </div>
              ))}
          </div>
           : <p>Loading...</p>}
      
      </div>
    </div>
  );
};

export default Breed;
